import Link from "next/link";
import { MessageSquare, ThumbsUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const mockThreads = Array.from({ length: 8 }).map((_, i) => ({
  id: i + 1,
  title: `這是第 ${i + 1} 則討論串標題`,
  author: "使用者",
  replies: Math.floor(Math.random() * 80),
  likes: Math.floor(Math.random() * 300),
  category: ["閒聊", "技術", "公告"][i % 3],
  href: `/threads/${i + 1}`
}));

export function ThreadList() {
  return (
    <div className="grid gap-4">
      {mockThreads.map((t) => (
        <Card key={t.id} className="hover:border-primary/40 transition-colors">
          <CardHeader className="p-4">
            <CardTitle className="text-base">
              <Link href={t.href} className="hover:underline">{t.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent className="p-4 pt-0 text-sm text-muted-foreground flex items-center gap-4">
            <span>{t.category}</span>
            <span>by {t.author}</span>
            <span className="ml-auto flex items-center gap-1"><MessageSquare className="h-4 w-4" /> {t.replies}</span>
            <span className="flex items-center gap-1"><ThumbsUp className="h-4 w-4" /> {t.likes}</span>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

