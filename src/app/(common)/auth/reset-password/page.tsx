import { t } from "@/lib/i18n";

import { PasswordResetForm } from "@/components/auth/PasswordResetForm";

export const metadata = {
  title: t("auth.resetPassword.metaTitle"),
  description: t("auth.resetPassword.metaDescription"),
};

export default function ResetPasswordPage() {
  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <PasswordResetForm />
    </div>
  );
}
