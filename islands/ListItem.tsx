/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";

interface ListItemProps {
  data: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
}

export default function ListItem(props: ListItemProps) {
  return (
    <div class={tw`flex gap-2 w-full`}>
      <a href={`/post/${props.data.id}`}>{props.data.title}</a>
    </div>
  );
}
