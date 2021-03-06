import React from "react";
import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { CartContextProvider } from "./context";

import App from "./App";
import { GlobalStyles } from "./styles";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
        <GlobalStyles />
        <QueryClientProvider client={queryClient}>
            <CartContextProvider>
                <App />
            </CartContextProvider>
        </QueryClientProvider>
    </React.StrictMode>,
);
