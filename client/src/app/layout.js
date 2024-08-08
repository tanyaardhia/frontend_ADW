"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { QueryClient, QueryClientProvider } from "react-query";

const inter = Inter({ subsets: ["latin"] });
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <div>
            {children}
            <ToastContainer />
          </div>
        </QueryClientProvider>
      </body>
    </html>
  );
}
