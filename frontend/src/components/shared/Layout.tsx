"use client";

import { ReactNode } from "react";
import Header from "./Header";
import Footer from "../recipe/Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
