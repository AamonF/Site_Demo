interface SchemaOrgProps {
  schemas: Record<string, unknown>[];
}

export default function SchemaOrg({ schemas }: SchemaOrgProps) {
  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
