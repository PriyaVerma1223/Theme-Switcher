import { useContext,createContext } from "react";

export const ThemeContext = createContext({
    ThemeMode:"light",
    LightTheme:() => {},
    DarkTheme:() => {},
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() {
    return useContext(ThemeContext)
}