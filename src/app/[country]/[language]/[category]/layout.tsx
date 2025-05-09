import { Links } from "@/components/Links";

export default function CategoryLayout({
  children,
  page,
  news,
  finder,
  search,
  contact,
}: Readonly<{
  children: React.ReactNode;
  page: React.ReactNode;
  news: React.ReactNode;
  finder: React.ReactNode;
  search: React.ReactNode;
  contact: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      {page}
      {news}
      {finder}
      {search}
      {contact}
      <br />
      <Links />
      <br />
    </main>
  );
}
