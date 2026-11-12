type Props = { heading: string; subheading: string; eyebrow?: string };

export default function Heading({ heading, subheading, eyebrow }: Props) {
  return (
    <div className="container section-heading">
      {eyebrow && <span className="section-kicker">{eyebrow}</span>}
      <h2 className="main-heading">{heading}</h2>
      {subheading && <p>{subheading}</p>}
    </div>
  );
}
