import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/GlobalStyles";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/styles/theme';

// Configurar QueryClient para evitar refetch innecesario
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutos
      // cacheTime: 10 * 60 * 1000, // 10 minutos
      refetchOnWindowFocus: false, // No refetch al cambiar de tab del navegador
      refetchOnMount: false, // No refetch al montar si hay datos en cache
    },
  },
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <GlobalStyles />
        <Component {...pageProps} />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
