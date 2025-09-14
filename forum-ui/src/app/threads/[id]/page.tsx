import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function ThreadDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <AppShell>
      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle>討論串 #{id}</CardTitle>
          </CardHeader>
          <CardContent className="prose dark:prose-invert max-w-none">
            <p>這裡是文章內容。使用 shadcn/ui 重新設計的版面。</p>
          </CardContent>
        </Card>
      </div>
    </AppShell>
  );
}

