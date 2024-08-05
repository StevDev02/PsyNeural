import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const image = (
    <Image
      src={src}
      title={title}
      aria-label={title}
      role="img"
      alt={`Cover Image | ${title}`}
      className={cn("shadow-sm w-full rounded-lg", {
        "hover:shadow-lg transition-shadow duration-200": slug,
      })}
      width={1200}
      height={630}
    />
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link
          href={`/docs/blog/posts/${slug}`}
          aria-label={title}
          title={title}
          role="link"
        >
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
