import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";

import { getAuthOptions } from "@/lib/auth/auth-options";
import { t } from "@/lib/i18n";

import { SignInForm } from "@/components/auth/SignInForm";

export const metadata = {
  title: t("auth.signIn.metaTitle"),
  description: t("auth.signIn.metaDescription"),
};

export default async function SignInPage() {
  // Check if user is already signed in
  const authOptions = await getAuthOptions();
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/calendar");
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold">{t("auth.signIn.title")}</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {t("auth.signIn.subtitle")}
          </p>
        </div>
        <SignInForm />
      </div>
    </div>
  );
}
