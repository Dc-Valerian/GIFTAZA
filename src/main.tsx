import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import persistStore from "redux-persist/es/persistStore";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/es/integration/react";
import { Store } from "./GlobalStore/Store";

const queryClient = new QueryClient();

const persitstore = persistStore(Store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
        <PersistGate persistor={persitstore}>
          <App />
          <ReactQueryDevtools />
        </PersistGate>
      </Provider>
    </QueryClientProvider>
  </React.StrictMode>
);
