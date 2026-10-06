/**
 * @deprecated prefer the `ThemeTypes` constants and `Theme` type over unsafe enum types
 **/
// FIXME: update to use a const object instead of a typescript enum
// eslint-disable-next-line @bitwarden/platform/no-enums
export enum ThemeType {
  System = "system",
  Light = "light",
  Dark = "dark",
  Black = "black",
}

export const ThemeTypes = {
  System: "system",
  Light: "light",
  Dark: "dark",
  Black: "black",
} as const;

export type Theme = (typeof ThemeTypes)[keyof typeof ThemeTypes];

/**
 * Returns true if the given theme renders with a dark color scheme.
 * The black theme is a pure-black variant of the dark theme.
 */
export function isDarkTheme(theme: Theme | string | undefined | null): boolean {
  return theme === ThemeTypes.Dark || theme === ThemeTypes.Black;
}
