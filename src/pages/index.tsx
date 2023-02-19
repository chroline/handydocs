import { Accordion } from "@chakra-ui/react";
import { GetStaticProps } from "next";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import { NextSeo } from "next-seo";

import { Content } from "~/components/Content";
import { Footer } from "~/components/Footer";
import { Hero } from "~/components/Hero";
import { Navbar } from "~/components/Navbar";
import { Section } from "~/components/Section";
import { useConfig } from "~/util/ConfigProvider";
import getContent from "~/util/get-content";

interface _Props {
  content: Record<string, MDXRemoteSerializeResult>;
}

export const getStaticProps: GetStaticProps = async ({}) => {
  const content = await getContent();

  return {
    props: {
      content,
    } as _Props,
  };
};

export default function Home({ content }: _Props) {
  const { seo, toc } = useConfig();

  return (
    <>
      <NextSeo {...seo} />
      <Navbar />
      <Hero />
      <Accordion allowMultiple defaultIndex={[0]}>
        {toc &&
          Object.entries(toc).map(([id, title]) => (
            <Section key={id} title={title}>
              <Content>{content[id]}</Content>
            </Section>
          ))}
      </Accordion>
      <Footer />
    </>
  );
}
