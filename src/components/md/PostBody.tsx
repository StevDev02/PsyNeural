import { notFound } from "next/navigation";

type Props = {
  content: string;
};

export function PostBody({ content }: Props) {
  return (
    <div className="max-w-2xl mb-10 mx-auto md:text-lg font-medium">
      {content ? (
        <div
          className="flex gap-4 flex-col"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        notFound()
      )}
    </div>
  );
}
