/** @jsx h */
import { h } from "preact";
import { PageProps } from "$fresh/server.ts";

export default function Goodbye(props: PageProps) {
  return <div>Goodbye {props.params.name2}</div>;
}
