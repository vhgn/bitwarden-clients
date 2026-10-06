import { Theme, ThemeTypes, isDarkTheme } from "@bitwarden/common/platform/enums";

export function resolveTheme(theme: Theme | string | undefined): Theme {
  if (theme === ThemeTypes.System) {
    return globalThis.matchMedia("(prefers-color-scheme: dark)").matches
      ? ThemeTypes.Dark
      : ThemeTypes.Light;
  }

  return isDarkTheme(theme) ? ThemeTypes.Dark : ThemeTypes.Light;
}
