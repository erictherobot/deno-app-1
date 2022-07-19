/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";
import { Layout } from "../components/layouts/Layout.tsx";

export default function Home() {
  return (
    <Layout
      title="Welcome"
      description="Welcome"
      canonical="/"
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`p-0 mx-auto`}>
        <img
          src="/logo.svg"
          height="100px"
          alt="the fresh logo: a sliced lemon dripping with juice"
        />
        <p class={tw`my-6`}>
          Welcome to `fresh`. Try update this message in the ./routes/index.tsx
          file, and refresh.
        </p>
        <Counter start={300} />
      </div>
    </Layout>
  );
}
