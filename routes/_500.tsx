/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { ErrorPageProps } from "$fresh/server.ts";
import { Layout } from "../components/layouts/Layout.tsx";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <Layout
      title={`Error: ${(error as Error).message}`}
      description={`Error: ${(error as Error).message}`}
      canonical={""}
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`py-4 mx-auto`}>
        <h2 class={tw`text-2xl font-bold`}>ERROR!</h2>
        <p>500 internal error: {(error as Error).message}</p>
      </div>
    </Layout>
  );
}
