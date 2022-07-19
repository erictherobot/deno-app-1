/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Meta } from "./Meta.tsx";

interface LayoutProps {
  children: ComponentChildren;
  title: string;
  description: string;
  canonical: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
}

export function Layout({
  children,
  title,
  description,
  canonical,
  hasHeader,
  hasFooter,
}: LayoutProps) {
  return (
    <div class={tw`p-4 mx-auto max-w-7xl`}>
      <Meta title={title} description={description} canonical={canonical} />
      {hasHeader && <Header />}
      <main>{children}</main>
      {hasFooter && <Footer />}
    </div>
  );
}
