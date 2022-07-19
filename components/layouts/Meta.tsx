/** @jsx h */
import { h } from "preact";

export function Meta({
  title,
  description,
  canonical,
}: {
  title: string;
  description: string;
  canonical: string;
}) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Deno Fresh Web Framework, TypeScript, HTML, CSS, Javascript, Deno"
      />
      <meta name="author" content="Eric David Smith <erictherobot@gmail.com>" />
      <link
        rel="canonical"
        href={`https://erictherobot-deno-app-1.deno.dev${canonical}`}
      />
    </head>
  );
}
