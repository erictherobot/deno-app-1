/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Header() {
  return (
    <header>
      <p>I am a header</p>
      <hr class={tw`my-2`} />
    </header>
  );
}
