import { Avatar, AvatarImage } from "../ui/avatar";

type Props = {
  name: string;
  picture: string;
};

const Author = ({ name, picture }: Props) => {
  return (
    <div className="flex justify-start gap-2 items-center">
      <Avatar>
        <AvatarImage src={picture} className="size-10" alt={name}></AvatarImage>
      </Avatar>
      <p className="md:text-2xl font-bold">{name}</p>
    </div>
  );
};

export default Author;
