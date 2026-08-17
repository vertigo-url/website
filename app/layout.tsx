import type { Metadata } from "next";
import "./globals.css";
import "./brand.css";
import "./theme.css";

export const metadata: Metadata = {
  title: "Vertigo",
  description: "Studio produk digital untuk membangun SaaS yang dipakai, disukai, dan bertumbuh.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="id"
      className="h-full antialiased"
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>{children}</body>
    </html>
  );
}
