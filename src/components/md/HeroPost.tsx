import ProfilePicture from "@/components/md/Author";
import CoverImage from "@/components/md/CoverImage";
import { type Author } from "@/interfaces/author";
import Link from "next/link";
import DateFormatter from "./DateFormatter";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
};

export function HeroPost({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) {
  return (
    <section>
      <h2 className="my-8 text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
        Most Recent Post
      </h2>
      <div className="mb-8 md:mb-16">
        <CoverImage title={title} src={coverImage} slug={slug} />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-4xl lg:text-5xl leading-tight font-medium">
            <Link
              href={`/docs/blog/posts/${slug}`}
              aria-label={title}
              title={title}
              role="link"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="mb-4 md:mb-0 text-lg">
            <DateFormatter dateString={date} />
          </div>
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4 line-clamp-3 font-medium">
            {excerpt}
          </p>
          <ProfilePicture name={author.name} picture={author.picture} />
        </div>
      </div>
    </section>
  );
}
