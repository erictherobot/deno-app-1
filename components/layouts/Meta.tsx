/** @jsx h */
import { h } from "preact";
import { Head } from "https://deno.land/x/fresh@1.0.1/runtime.ts";

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
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content="Deno Fresh Web Framework, TypeScript, HTML, CSS, Javascript, Deno"
      />
      <meta name="author" content="Eric David Smith <erictherobot@gmail.com>" />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content="#ffffff" />
      <link
        rel="canonical"
        href={`https://erictherobot-deno-app-1.deno.dev${canonical}`}
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/manifest.json" />
      <script type="module">
        import
        'https://cdn.jsdelivr.net/npm/@pwabuilder/pwaupdate/dist/pwa-update.js';
        const el = document.createElement('pwa-update');
        document.body.appendChild(el);
      </script>
    </Head>
  );
}
