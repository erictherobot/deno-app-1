/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { UnknownPageProps } from "$fresh/server.ts";
import { Layout } from "../components/layouts/Layout.tsx";

export default function NotFoundPage({ url }: UnknownPageProps) {
  return (
    <Layout
      title={`404 not found: ${url.pathname}`}
      description={`404 not found: ${url.pathname}`}
      canonical={""}
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`py-4 mx-auto`}>
        <h2 class={tw`text-2xl font-bold`}>ERROR!</h2>
        <p>404 not found: {url.pathname}</p>
      </div>
    </Layout>
  );
}
