import { InferGetStaticPropsType } from "next";

export default function CatchAll({ updatedAt }: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
        Page generated at {updatedAt}
    </div>
  );
}

export async function getStaticPaths() {
  const popularPages = [
    // The pages /foo/bar and /en-US/foo/bar will be pre-generated at build time
    { params: { slug: ["foo", "bar"] } },
    { params: { slug: ["en-US", "foo", "bar"] } },
  ];
  return {
    paths: popularPages,
    fallback: true,
  };
}

export async function getStaticProps() {
  const updatedAt = new Date().toISOString();
  return {
    revalidate: 60,
    props: {
      updatedAt,
    },
  };
}