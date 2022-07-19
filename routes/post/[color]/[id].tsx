/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { tw } from "@twind";
import { Layout } from "../../../components/layouts/Layout.tsx";

interface PostProps {
  id: number;
  title: string;
  body: string;
  userId: number;
}

export const handler: Handlers<PostProps | null> = {
  async GET(_, ctx) {
    const { id } = ctx.params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    if (res.status === 404) {
      return ctx.render(null);
    }
    const post: PostProps = await res.json();
    return ctx.render(post);
  },
};

export default function Page(props: PageProps<PostProps>) {
  const { id, title, body } = props.data;

  const bgColor = props.params.color;

  if (!props.data) {
    return <h1>Post not found</h1>;
  }

  return (
    <Layout
      title={title}
      description={body}
      canonical={`/post/${id}`}
      hasFooter={true}
      hasHeader={true}
    >
      <div class={tw`p-0 mx-auto`}>
        <div class={tw`my-4`}>
          <a href="/posts">&larr; Back to posts</a>
          <h2 class={tw`text-2xl font-bold`}>{title}</h2>
          <div class={tw`py-1 ${"bg-[#" + bgColor + "]"}`} />
          <p>{body}</p>
        </div>
      </div>
    </Layout>
  );
}
