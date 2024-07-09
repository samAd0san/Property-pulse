import Navbar from "@/components/Navbar";
import "@/assets/styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Property Pulse | Best Rental site",
  description: "Find your dream rental property",
  keywords: "rental, find rentals, find properties",
};

const MainLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Navbar /> {/* Added the navbar component */}
        <main>{children}</main>
        <Footer /> {/* Added the footer component */}
      </body>
    </html>
  );
};

export default MainLayout;
