
export const Device = {
  MobileSmall: 320,
  Mobile: 375,
  MobileLarge: 480,

  TabletSmall: 568,
  Tablet: 768,
  TabletLarge: 1024,

  DesktopSmall: 1280,
  Desktop: 1366,
  DesktopLarge: 1600,
  ActualDesktop: 1920,
  DesktopXL: 2560,
} as const;

export const media = {
  mobile: `@media (max-width: ${Device.TabletSmall - 1}px)`,

  tablet: `@media (min-width: ${Device.TabletSmall}px) and (max-width: ${Device.DesktopSmall - 1}px)`,

  desktop: `@media (min-width: ${Device.DesktopSmall}px)`,
};