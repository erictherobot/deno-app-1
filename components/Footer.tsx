/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

export function Footer() {
  return (
    <footer>
      <hr class={tw`my-2`} />
      <p>I am a footer</p>
    </footer>
  );
}
