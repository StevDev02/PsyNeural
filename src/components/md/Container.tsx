import DotPattern from "../magicui/DotPattern";

type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <section className="container mx-auto px-6">
      <DotPattern />
      {children}
    </section>
  );
};

export default Container;
