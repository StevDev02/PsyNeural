import Container from "@/components/md/Container";
import { HeroPost } from "@/components/md/HeroPost";
import { MorePosts } from "@/components/md/MorePosts";
import NavbarBlog from "@/components/md/NavbarBlog";
import { getAllPosts } from "@/lib/api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BlogPage",
  description: "".substring(0, 200),
  keywords: [""],
};

export default function Blog() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts.slice(1);

  return (
    <main>
      <Container>
        <NavbarBlog title="Blog" />
        <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        />
        {morePosts.length > 0 && <MorePosts posts={morePosts} />}
      </Container>
    </main>
  );
}
