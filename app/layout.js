import Wrepper from "@/components/Wrepper";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html   lang="en">
      <body  suppressHydrationWarning >
        <Wrepper>{children}</Wrepper>
      </body>
    </html>
  );
}


