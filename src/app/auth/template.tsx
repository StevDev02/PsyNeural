import DotPattern from "@/components/magicui/DotPattern";

export default function TemplateAuth({
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
