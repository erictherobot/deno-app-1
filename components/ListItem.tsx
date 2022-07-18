/** @jsx h */
import { h } from "preact";

interface Posts {
  item: {
    id: number;
    title: string;
    body: string;
    userId: number;
  };
}

export default function ListItem({ item }: Posts) {
  const { id, title } = item;
  return (
    <li>
      <a href={`/post/${id}`}>{title}</a>
    </li>
  );
}
