import Header from "./Header";
import "./globals.css";
import { Providers } from "./redux/provider";
import AuthProvider from "./authProvider";

export const metadata = {
  title: "Next.js 13 app",
  description: "Nextjs 13 with the app directory / tailwind.css / typescript",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Providers>
        <AuthProvider>
          <body className="h-screen bg-black">
            <Header />
            {children}
          </body>
        </AuthProvider>
      </Providers>
    </html>
  );
}
