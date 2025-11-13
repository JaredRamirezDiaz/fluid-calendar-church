"use client";

import { RiEyeOffLine } from "react-icons/ri";

import { usePrivacy } from "@/components/providers/PrivacyProvider";

import { Command } from "@/lib/commands/types";

import { useTranslation } from "@/hooks/useTranslation";

export function usePrivacyCommands(): Command[] {
  const { isPrivacyModeActive, togglePrivacyMode } = usePrivacy();
  const { t } = useTranslation();

  return [
    {
      id: "toggle-privacy-mode",
      title: isPrivacyModeActive
        ? t("commands.toggle-privacy-mode.disable")
        : t("commands.toggle-privacy-mode.enable"),
      section: "privacy",
      keywords: ["privacy", "blur", "screenshot", "hide", "sensitive"],
      icon: RiEyeOffLine,
      perform: async () => {
        togglePrivacyMode();
      },
    },
  ];
}
