import { AppShell } from "@/components/app-shell";
import Link from "next/link";

const categories = [
  { slug: "general", name: "閒聊" },
  { slug: "tech", name: "技術" },
  { slug: "announcements", name: "公告" }
];

export default function CategoriesPage() {
  return (
    <AppShell>
      <h1 className="text-2xl font-semibold mb-4">看板</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {categories.map(c => (
          <Link key={c.slug} href={`/categories/${c.slug}`} className="rounded-lg border p-6 hover:bg-accent">
            {c.name}
          </Link>
        ))}
      </div>
    </AppShell>
  );
}

