import type { AppProps } from "next/app";
import {  ThemeProvider } from "@mui/material/styles";
import theme from "../styles/theme";
import { CssBaseline } from "@mui/material";
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
