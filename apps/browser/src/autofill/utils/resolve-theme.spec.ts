import { ThemeTypes } from "@bitwarden/common/platform/enums";

import { resolveTheme } from "./resolve-theme";

describe("resolveTheme", () => {
  it.each([
    [ThemeTypes.Light, ThemeTypes.Light],
    [ThemeTypes.Dark, ThemeTypes.Dark],
    [ThemeTypes.Black, ThemeTypes.Dark],
    [undefined, ThemeTypes.Light],
  ])("resolves %s to %s", (theme, expected) => {
    expect(resolveTheme(theme)).toBe(expected);
  });

  it.each([
    [true, ThemeTypes.Dark],
    [false, ThemeTypes.Light],
  ])("resolves the system theme when prefers dark is %s", (matches, expected) => {
    globalThis.matchMedia = jest.fn(() => ({ matches }) as MediaQueryList);

    expect(resolveTheme(ThemeTypes.System)).toBe(expected);
  });
});
