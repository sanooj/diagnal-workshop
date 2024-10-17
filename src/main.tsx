import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppProvider } from "./application/App.context.tsx";
import App from "./App.tsx";
import "./index.scss";
import Loader from "./components/Loader/Loader.tsx";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 60 * 1000, // 10 minutes in milliseconds
      refetchOnWindowFocus: false, // disable refetching on window focus
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* react query provider */}
    <QueryClientProvider client={queryClient}>
      {/* app context provider */}
      <AppProvider>
        <Suspense fallback={<Loader />}>
          <App />
        </Suspense>
      </AppProvider>
    </QueryClientProvider>
  </StrictMode>,
);
