"use client";

import React from "react";

import { RiEyeLine, RiEyeOffLine } from "react-icons/ri";

import { usePrivacy } from "@/components/providers/PrivacyProvider";

import { cn } from "@/lib/utils";

import { useTranslation } from "@/hooks/useTranslation";

interface PrivacyToggleProps {
  className?: string;
}

export function PrivacyToggle({ className }: PrivacyToggleProps) {
  const { isPrivacyModeActive, togglePrivacyMode } = usePrivacy();
  const { t } = useTranslation();

  const title = isPrivacyModeActive
    ? t("navigation.privacy.disable")
    : t("navigation.privacy.enable");

  return (
    <button
      onClick={togglePrivacyMode}
      className={cn(
        "privacy-mode-toggle flex items-center gap-1 rounded-md px-2 py-1.5 text-xs",
        isPrivacyModeActive
          ? "bg-warning/10 text-warning-foreground"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
        className
      )}
      title={title}
    >
      {isPrivacyModeActive ? (
        <RiEyeOffLine className="h-4 w-4" />
      ) : (
        <RiEyeLine className="h-4 w-4" />
      )}
      <span className="hidden sm:inline">
        {isPrivacyModeActive
          ? t("navigation.privacy.labelOn")
          : t("navigation.privacy.labelOff")}
      </span>
    </button>
  );
}
