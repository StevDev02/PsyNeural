import ProfilePicture from "./Author";
import CoverImage from "./CoverImage";
import DateFormatter from "./DateFormatter";
import { PostTitle } from "@/components/md/PostTitle";
import { type Author } from "@/interfaces/author";
import NavbarBlog from "./NavbarBlog";
type Props = {
  title: string;
  coverImage: string;
  date: string;
  author: Author;
};

export function PostHeader({ title, coverImage, date, author }: Props) {
  return (
    <>
      <NavbarBlog title="Blog" />
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <ProfilePicture name={author.name} picture={author.picture} />
      </div>
      <div className="mb-8 md:mb-16 sm:mx-0">
        <CoverImage title={title} src={coverImage} />
      </div>
      <div className="max-w-2xl mx-auto">
        <div className="block md:hidden mb-6">
          <ProfilePicture name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
          <DateFormatter dateString={date} />
        </div>
      </div>
    </>
  );
}
