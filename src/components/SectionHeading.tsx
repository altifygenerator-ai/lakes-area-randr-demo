// src/components/SectionHeading.tsx

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  center?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  center = false,
}: SectionHeadingProps) {
  return (
    <div className={`section-heading ${center ? "center" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
    </div>
  );
}