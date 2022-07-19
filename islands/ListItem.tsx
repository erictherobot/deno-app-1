/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { useState, useEffect } from "preact/hooks";

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
  const randomColor = "#" + ((Math.random() * 0xffffff) << 0).toString(16);
  const [bgColor, setBgColor] = useState(randomColor);

  useEffect(() => {
    setBgColor(randomColor);
  }, []);

  return (
    <a href={`/post/${bgColor.substring(1)}/${id}`}>
      <li class={tw`p-3 bg-[${bgColor}]`}>{title}</li>
    </a>
  );
}
