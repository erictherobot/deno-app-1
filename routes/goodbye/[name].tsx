/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Layout } from "../../components/layouts/Layout.tsx";

export default function Goodbye(props: PageProps) {
  return (
    <Layout
      title={`Goodbye ${props.params.name}`}
      description=""
      hasFooter={true}
      hasHeader={true}
    >
      <div>Goodbye {props.params.name}</div>
    </Layout>
  );
}
