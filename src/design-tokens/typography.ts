export const FontFamily = {
  primary: "Mounthen",
  secondary: "BebasNeue",
};

type FontWeight =
  | "normal"
  | "bold"
  | "100"
  | "200"
  | "300"
  | "400"
  | "500"
  | "600"
  | "700"
  | "800"
  | "900";

export const typography = {
  h1: {
    fontFamily: FontFamily.primary,
    fontSize: "2rem",
    fontWeight: "700",
    lineHeight: 1.2,
  },

  h2: {
    fontFamily: FontFamily.secondary,
    fontSize: "1.75rem",
    fontWeight: "700",
    lineHeight: 1.25,
  },

  body1: {
    fontFamily: FontFamily.secondary,
    fontSize: "1rem",
    fontWeight: "400",
    lineHeight: 1.5,
  },

  caption: {
    fontFamily: FontFamily.secondary,
    fontSize: "0.875rem",
    fontWeight: "400",
    lineHeight: 1.4,
  },
} as const;

export type TypographyToken = keyof typeof typography;
