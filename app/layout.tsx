import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { AuthProvider } from "@/contexts/AuthContext";
import { ToastContainer } from "@/components/ui/toast";
import { ConditionalLayout } from "@/components/ConditionalLayout";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "DeviceStore - Camera An Ninh, Máy Vi Tính, Linh Kiện",
    template: "%s | DeviceStore",
  },
  description: "Chuyên cung cấp camera an ninh, máy vi tính, linh kiện máy tính, thiết bị mạng chất lượng cao với dịch vụ chuyên nghiệp.",
  keywords: ["camera an ninh", "máy vi tính", "linh kiện máy tính", "thiết bị mạng", "laptop", "PC"],
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://devicestore.vn",
    siteName: "DeviceStore",
    title: "DeviceStore - Camera An Ninh, Máy Vi Tính, Linh Kiện",
    description: "Chuyên cung cấp camera an ninh, máy vi tính, linh kiện máy tính, thiết bị mạng chất lượng cao.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${inter.variable} font-sans antialiased`}>
        <AuthProvider>
          <CartProvider>
            <ConditionalLayout>{children}</ConditionalLayout>
            <ToastContainer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
