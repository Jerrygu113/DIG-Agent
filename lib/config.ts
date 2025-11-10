import type { StartScreenPrompt, ThemeOption } from "@openai/chatkit-react";
import type { ColorScheme } from "@/hooks/useColorScheme";

export const WORKFLOW_ID =
  process.env.NEXT_PUBLIC_CHATKIT_WORKFLOW_ID?.trim() ?? "";

export const CREATE_SESSION_ENDPOINT = "/api/create-session";

/**
 * ✅ 只保留一个 starter prompt
 */
export const STARTER_PROMPTS: StartScreenPrompt[] = [
  {
    label: "Help me draft an investor communication email.",
    prompt: "Help me draft an investor communication email.",
    icon: "mail",
  },
];

/**
 * 输入框 placeholder
 */
export const PLACEHOLDER_INPUT = "Type your message...";

/**
 * 欢迎语
 */
export const GREETING = "Capital Market Communications Agent";

/**

 */
export const getThemeConfig = (theme: ColorScheme): ThemeOption => ({
  color: {
    // Use Deer Isle green as the primary accent and increase intensity
    accent: {
      primary: "#4F9632",
      level: 2,
    },
    // Force the surface (including composer/input area) to a light background
    // so the input bar appears white even when the app is in dark mode.
  surface: { background: "#ffffff", foreground: "#ffffff" },
    grayscale: {
      hue: 120,
      tint: 6,
      shade: theme === "dark" ? -1 : -4,
    },
  },

  typography: {
    baseSize: 16,
    fontFamily: "Inter, Arial, sans-serif",
  },

  radius: "pill",
  density: "normal",
});
