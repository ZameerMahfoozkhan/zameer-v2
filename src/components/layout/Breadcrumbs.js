import Link from "next/link";

export default function Breadcrumbs({ items }) {
  return (
    <div className="breadcrumbs" aria-label="Breadcrumb">
      <ol itemScope itemType="https://schema.org/BreadcrumbList">
        {items.map((item, i) => (
          <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            {i < items.length - 1 ? (
              <Link href={item.url} itemProp="item">
                <span itemProp="name">{item.name}</span>
              </Link>
            ) : (
              <span className="current" itemProp="name">{item.name}</span>
            )}
            <meta itemProp="position" content={String(i + 1)} />
          </li>
        ))}
      </ol>
    </div>
  );
}
