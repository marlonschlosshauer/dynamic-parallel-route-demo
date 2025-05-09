export interface SlugPageProps {
  params: Promise<{
    country: string;
    language: string;
    category: string;
    slug: string[];
  }>;
}

export default async function SlugPage() {
  return <h2 className="text-black-600">Contentful</h2>;
}
