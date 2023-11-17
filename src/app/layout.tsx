import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

import AuthProvider from "./context/AuthProvider";
// for the client to access the user data from the session from next-auth
// we need to create an AuthProvider component that wraps the entire app
// AuthProvider is a react context provider that provides the session data
// AuthProvider uses SessionProvider from next-auth/react to wrap the app

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "NextAuth Template",
  description: "A template for NextAuth.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <main className="flex justify-center items-start p-6 min-h-screen">
            {children}
          </main>
        </AuthProvider>
      </body>
    </html>
  );
}
