/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import ListItem from "../islands/ListItem.tsx";
import { Layout } from "../components/layouts/Layout.tsx";

interface Posts {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const handler: Handlers<Posts[] | null> = {
  async GET(_, ctx) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const post: Posts[] = await res.json();
    return ctx.render(post);
  },
};

export default function Page({ data }: PageProps<Posts[] | null>) {
  if (!data) {
    return <h1>Posts not found</h1>;
  }

  return (
    <Layout
      title="Posts"
      description="All the posts from an external API"
      canonical="/posts"
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`p-0 mx-auto`}>
        <ul class={tw`list-none`}>
          {data.map((item) => (
            <ListItem key={item.id} item={item} />
          ))}
        </ul>
      </div>
    </Layout>
  );
}
