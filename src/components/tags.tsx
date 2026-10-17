type TagsProps = {
  items: readonly string[];
  label: string;
};

// Informational labels, not controls: keep them out of the keyboard tab order.
export function Tags({ items, label }: TagsProps) {
  return (
    <ul className="tag-list" aria-label={label}>
      {items.map((item) => <li className="tag" key={item}>{item}</li>)}
    </ul>
  );
}
