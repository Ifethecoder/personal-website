type SectionHeadingProps = {
  id: string;
  number: string;
  label: string;
  title: string;
};

export function SectionHeading({ id, number, label, title }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      <p className="eyebrow mb-4"><span aria-hidden="true">{number} / </span>{label}</p>
      <h2 id={id} className="section-title">{title}</h2>
    </header>
  );
}
