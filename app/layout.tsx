import Header from "@/components/Header";
import Footer from "@/components/Footer";

// FONTS
import "@fontsource/work-sans/400.css";
import "@fontsource/work-sans/500.css";
import "@fontsource/work-sans/700.css";
import "@fontsource/unna/400.css";
import "@fontsource/unna/700.css";

// CSS Styles
import "@/styles/clear.css";
import "@/styles/sm-clean.css";
import "@/styles/comman.css";
import "@/styles/globals.css";
import "@/styles/our-styles.css";

// Types
import type { Metadata } from "next";

// --------------

// Metadata of the website (used to inprove SEO of the website)
export const metadata: Metadata = {
  title: "Pekko - Minimal Black Nextjs Template",
  description: "Template by CocoBasic",
  keywords: ["HTML", "CSS", "Javascript", "Typescript", "React", "nextjs"],
  authors: [
    {
      name: "Cocobasic",
      url: "https://www.cocobasic.com/",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="page-background">
        <div className="site-wrapper">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
