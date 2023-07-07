import Header from "./Header";
import "./globals.css";
import { Providers } from "./redux/provider";
import AuthProvider from "./authProvider";
import icon from "./favicon.ico";

export const metadata = {
  title: "ThaCoder",
  description: "Your editor everywhere. learm anywhere",
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
