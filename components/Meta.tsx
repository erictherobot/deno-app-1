/** @jsx h */
import { h } from "preact";

export const Meta = ({
  title,
  description,
}: {
  title: string;
  description: string;
}) => (
  <head>
    <title>{title}</title>
    <meta name="description" content={description} />
  </head>
);
