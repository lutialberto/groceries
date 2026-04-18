/**
 * Learn more about light and dark modes:
 * https://docs.expo.dev/guides/color-schemes/
 */

import { useColorScheme } from "react-native";
import { Colors } from "./Colors";

export type ColorName = keyof typeof Colors.light & keyof typeof Colors.dark;

export function useThemeColor() {
  const theme = useColorScheme() ?? "light";

  return Colors[theme];
}