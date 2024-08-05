import DotPattern from "@/components/magicui/DotPattern";

export default function TemplateLegal({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <DotPattern />
      {children}
    </div>
  );
}
