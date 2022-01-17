import rehypePrism from "@mapbox/rehype-prism";
import fs from "fs";
import matter from "gray-matter";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";

const dir = "public/docs/";

export default async function getContent() {
  const files = fs
    .readdirSync(dir)
    .filter(fileName => fs.lstatSync(dir + fileName).isFile())
    .filter(fileName => fileName.split(".").pop() === "mdx");

  const sections: Record<string, MDXRemoteSerializeResult> = {};

  await Promise.all(
    files.map(async fileName => {
      const _content = fs.readFileSync(dir + fileName);
      const sectionName = fileName.split(".")[0];

      const { content, data } = matter(_content);

      sections[sectionName] = await serialize(content, {
        scope: data,
        mdxOptions: {
          rehypePlugins: [rehypePrism],
        },
      });
    })
  );

  return sections;
}
