export const BrandColors = {
  // Escala del color primario basada en #f3a800
  primary: {
    50: "#fff7e0", // Muy claro
    100: "#ffedb3", // Claro
    200: "#ffe082", // Medio claro
    300: "#ffd54f", // Tonalidad intermedia
    400: "#ffc107", // Un poco más saturado
    500: "#f3a800", // Base
    600: "#c28600", // Oscuro
    700: "#8f6500", // Más oscuro
    800: "#5c4300", // Aún más oscuro
    900: "#2b2200", // Muy oscuro
  },
  background: "#342010",
  // Color secundario
  secondary: "#ffffff",
};

export type ColorToken = keyof typeof BrandColors;
