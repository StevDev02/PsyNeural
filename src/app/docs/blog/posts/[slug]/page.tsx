// Next UI Components
import { Metadata } from "next";
import { notFound } from "next/navigation";
// Lib
import { getAllPosts, getPostBySlug } from "@/lib/api";
import markdownToHtml from "@/lib/markdownToHtml";
// UI Components
import Container from "@/components/md/Container";
import { PostHeader } from "@/components/md/PostHeader";
import { PostBody } from "@/components/md/PostBody";

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <article>
          <PostHeader
            title={post.title}
            coverImage={post.coverImage}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }

  const baseURL = "https://psyneural.vercel.app";
  const title = `${post.title}`.substring(0, 60);
  const description = `${post.excerpt}`.substring(0, 200);

  return {
    title,
    description,
    authors: [{ name: `${post.author.name}`, url: `${post.author.picture}` }],
    creator: `${post.author.name}`,
    publisher: `${post.author.name}`,
    category: "Blog",
    alternates: {
      canonical: `${baseURL}/docs/blog/posts/${post.title}`,
      languages: {
        en: "US",
      },
    },
    openGraph: {
      title,
      description,
      images: [
        {
          url: `${post.ogImage.url}`,
          alt: `${post.title}`,
          type: "image/webp",
        },
      ],
    },
    twitter: {
      title,
      description,
      card: "summary_large_image",
      creator: `@${post.author.name}`,
      images: [
        {
          url: `${post.ogImage.url}`,
          alt: `${post.title}`,
          type: "image/webp",
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const posts = getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}
