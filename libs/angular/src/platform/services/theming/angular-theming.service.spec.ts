import { BehaviorSubject, of } from "rxjs";

import { Theme, ThemeTypes } from "@bitwarden/common/platform/enums";
import { ThemeStateService } from "@bitwarden/common/platform/theming/theme-state.service";

import { AngularThemingService } from "./angular-theming.service";

describe("AngularThemingService", () => {
  let selectedTheme$: BehaviorSubject<Theme>;
  let service: AngularThemingService;

  beforeEach(() => {
    selectedTheme$ = new BehaviorSubject<Theme>(ThemeTypes.Light);
    const themeStateService = { selectedTheme$ } as unknown as ThemeStateService;
    service = new AngularThemingService(themeStateService, of(ThemeTypes.Light));
    document.documentElement.className = "";
  });

  describe("applyThemeChangesTo", () => {
    it("applies the dark and black classes for the black theme", () => {
      const subscription = service.applyThemeChangesTo(document);

      selectedTheme$.next(ThemeTypes.Black);

      expect(document.documentElement.classList.contains("theme_dark")).toBe(true);
      expect(document.documentElement.classList.contains("theme_black")).toBe(true);
      expect(document.documentElement.classList.contains("theme_light")).toBe(false);
      subscription.unsubscribe();
    });

    it("removes the black class when switching away from the black theme", () => {
      const subscription = service.applyThemeChangesTo(document);

      selectedTheme$.next(ThemeTypes.Black);
      selectedTheme$.next(ThemeTypes.Dark);

      expect(document.documentElement.classList.contains("theme_dark")).toBe(true);
      expect(document.documentElement.classList.contains("theme_black")).toBe(false);

      selectedTheme$.next(ThemeTypes.Light);

      expect(document.documentElement.className).toBe("theme_light");
      subscription.unsubscribe();
    });
  });
});
