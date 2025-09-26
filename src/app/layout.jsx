

import "./globals.css";
import { AuthProvider } from "./context/AuthContext";
import Header from "../component/Header";
import Footer from "../component/Footer";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
  <body className="bg-gradient-to-r from-gray-50 to-blue-50 min-h-screen">
        <AuthProvider>
          <Header />
          {children}
          <div className="pt-8">
            <Footer />
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}