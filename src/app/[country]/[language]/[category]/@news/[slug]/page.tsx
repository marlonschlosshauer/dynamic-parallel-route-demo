import { getRoutes } from "@/lib/data";

const getSlugByLanguage = (language: string) => {
  switch (language) {
    case "de":
      return "nachrichten";
    default:
      return "news";
  }
};

export function generateStaticParams() {
  return getRoutes().map((route) => ({
    ...route,
    slug: getSlugByLanguage(route.language),
  }));
}

export interface NewsPageProps {
  params: Promise<{
    country: string;
    language: string;
    category: string;
    slug: string;
  }>;
}

export default async function NewsPage({ params }: NewsPageProps) {
  const { language, slug } = await params;

  const target = getSlugByLanguage(language);

  if (!slug || target !== slug) {
    return null;
  }

  return <h2 className="text-yellow-600">News</h2>;
}
