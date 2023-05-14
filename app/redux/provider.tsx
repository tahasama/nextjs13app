"use client";

import { store } from "./store";
import { Provider } from "react-redux";

export function Providers({ children }: { children: React.ReactNode }) {
  // Provider to activate redux in app
  return <Provider store={store}>{children}</Provider>;
}
