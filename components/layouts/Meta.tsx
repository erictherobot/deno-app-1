/** @jsx h */
import { h } from "preact";

export const Meta = ({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}) => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <link
      rel="canonical"
      href={`https://erictherobot-deno-app-1.deno.dev${canonical}`}
    />
  </head>
);
