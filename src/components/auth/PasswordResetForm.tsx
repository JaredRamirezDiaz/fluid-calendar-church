"use client";

import { useMemo, useState } from "react";

import { useRouter, useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useTranslation } from "@/hooks/useTranslation";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { logger } from "@/lib/logger";

const LOG_SOURCE = "PasswordResetForm";

const createRequestSchema = (translate: (key: string) => string) =>
  z.object({
    email: z.string().email(translate("validation.email")),
  });

const createResetSchema = (translate: (key: string) => string) =>
  z
    .object({
      password: z
        .string()
        .min(8, translate("validation.password.min"))
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).*$/,
          translate("validation.password.complexity")
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      message: translate("validation.password.match"),
      path: ["confirmPassword"],
    });

type RequestSchema = ReturnType<typeof createRequestSchema>;
type ResetSchema = ReturnType<typeof createResetSchema>;

type RequestFormValues = z.infer<RequestSchema>;
type ResetFormValues = z.infer<ResetSchema>;

export function PasswordResetForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const [isLoading, setIsLoading] = useState(false);
  const { t } = useTranslation();

  const requestSchema = useMemo(() => createRequestSchema(t), [t]);
  const resetSchema = useMemo(() => createResetSchema(t), [t]);

  const {
    register: registerRequest,
    handleSubmit: handleSubmitRequest,
    formState: { errors: requestErrors },
  } = useForm<RequestFormValues>({
    resolver: zodResolver(requestSchema),
  });

  const {
    register: registerReset,
    handleSubmit: handleSubmitReset,
    formState: { errors: resetErrors },
  } = useForm<ResetFormValues>({
    resolver: zodResolver(resetSchema),
  });

  const onRequestSubmit = async (data: RequestFormValues) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || t("auth.resetPassword.toast.requestError.description")
        );
      }

      toast.success(t("auth.resetPassword.toast.requestSuccess.title"), {
        description: t("auth.resetPassword.toast.requestSuccess.description"),
      });
    } catch (error) {
      logger.error(
        "Error requesting password reset",
        { error: error instanceof Error ? error.message : "Unknown error" },
        LOG_SOURCE
      );
      toast.error(t("auth.resetPassword.toast.requestError.title"), {
        description:
          error instanceof Error
            ? error.message
            : t("auth.resetPassword.toast.requestError.description"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  const onResetSubmit = async (data: ResetFormValues) => {
    if (!token) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch("/api/auth/reset-password/reset", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
          password: data.password,
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(
          result.error || t("auth.resetPassword.toast.resetError.description")
        );
      }

      toast.success(t("auth.resetPassword.toast.resetSuccess.title"), {
        description: t("auth.resetPassword.toast.resetSuccess.description"),
      });

      router.push("/auth/signin");
    } catch (error) {
      logger.error(
        "Error resetting password",
        { error: error instanceof Error ? error.message : "Unknown error" },
        LOG_SOURCE
      );
      toast.error(t("auth.resetPassword.toast.resetError.title"), {
        description:
          error instanceof Error
            ? error.message
            : t("auth.resetPassword.toast.resetError.description"),
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          {t("auth.resetPassword.title")}
        </CardTitle>
        <CardDescription>
          {token
            ? t("auth.resetPassword.subtitle.reset")
            : t("auth.resetPassword.subtitle.request")}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {token ? (
          <form
            onSubmit={handleSubmitReset(onResetSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="password">
                {t("auth.resetPassword.fields.password")}
              </Label>
              <Input
                id="password"
                type="password"
                {...registerReset("password")}
                className={resetErrors.password ? "border-red-500" : ""}
                disabled={isLoading}
              />
              {resetErrors.password && (
                <p className="text-sm text-red-500">
                  {resetErrors.password.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirmPassword">
                {t("auth.resetPassword.fields.confirmPassword")}
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                {...registerReset("confirmPassword")}
                className={resetErrors.confirmPassword ? "border-red-500" : ""}
                disabled={isLoading}
              />
              {resetErrors.confirmPassword && (
                <p className="text-sm text-red-500">
                  {resetErrors.confirmPassword.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? t("auth.resetPassword.actions.resetting")
                : t("auth.resetPassword.actions.reset")}
            </Button>
          </form>
        ) : (
          <form
            onSubmit={handleSubmitRequest(onRequestSubmit)}
            className="space-y-4"
          >
            <div className="space-y-2">
              <Label htmlFor="email">
                {t("auth.resetPassword.fields.email")}
              </Label>
              <Input
                id="email"
                type="email"
                placeholder={t("auth.resetPassword.placeholders.email")}
                {...registerRequest("email")}
                className={requestErrors.email ? "border-red-500" : ""}
                disabled={isLoading}
              />
              {requestErrors.email && (
                <p className="text-sm text-red-500">
                  {requestErrors.email.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading
                ? t("auth.resetPassword.actions.sendingLink")
                : t("auth.resetPassword.actions.sendLink")}
            </Button>
          </form>
        )}
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button
          variant="link"
          className="text-sm text-muted-foreground"
          onClick={() => router.push("/auth/signin")}
        >
          {t("common.actions.backToSignIn")}
        </Button>
      </CardFooter>
    </Card>
  );
}
