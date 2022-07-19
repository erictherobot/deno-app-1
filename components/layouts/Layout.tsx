/** @jsx h */
import { h, ComponentChildren } from "preact";
import { tw } from "@twind";
import { Header } from "./Header.tsx";
import { Footer } from "./Footer.tsx";
import { Meta } from "./Meta.tsx";

interface LayoutProps {
  children: ComponentChildren;
  hasHeader?: boolean;
  hasFooter?: boolean;
  title: string;
  description: string;
}

export function Layout({
  children,
  title,
  description,
  hasHeader,
  hasFooter,
}: LayoutProps) {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <Meta title={title} description={description} />
      {hasHeader && <Header />}
      <main>{children}</main>
      {hasFooter && <Footer />}
    </div>
  );
}
