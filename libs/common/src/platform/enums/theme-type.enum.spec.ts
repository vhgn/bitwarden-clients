import { isDarkTheme, ThemeTypes } from "./theme-type.enum";

describe("isDarkTheme", () => {
  it.each([
    [ThemeTypes.Dark, true],
    [ThemeTypes.Black, true],
    [ThemeTypes.Light, false],
    [ThemeTypes.System, false],
    [undefined, false],
    [null, false],
  ])("returns the expected value for %s", (theme, expected) => {
    expect(isDarkTheme(theme)).toBe(expected);
  });
});
