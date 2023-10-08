import { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";

/**
 * React Redux Toolkit
 */
import { store } from "@/store";
import { Provider } from "react-redux";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <Provider store={store}>
      <ThemeProvider defaultTheme="dark" storageKey="hangout-app-theme">
        {children}
      </ThemeProvider>
    </Provider>
  );
};

export default Providers;
