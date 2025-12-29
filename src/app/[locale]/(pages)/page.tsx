"use client";

import { useTranslations } from "next-intl";

import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/components/ui/language-switcher";
import { ThemeToggle } from "@/components/ui/theme-toggle";

export default function Index() {
  const indexPageText = useTranslations("Index");

  return (
    <main className="relative space-y-6 p-6">
      {/* Header with controls */}
      <div className="flex items-center justify-between">
        <p className="text-lg font-medium">{indexPageText("welcome")}</p>
        <div className="flex items-center gap-3">
          <ThemeToggle />
          <LanguageSwitcher />
        </div>
      </div>

      {/* Example buttons */}
      <div className="flex gap-3">
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
      </div>
    </main>
  );
}
