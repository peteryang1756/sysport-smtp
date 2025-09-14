import { AppShell } from "@/components/app-shell";
import { ThreadList } from "@/components/thread-list";

export default function ThreadsPage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight">最新文章</h1>
        <ThreadList />
      </div>
    </AppShell>
  );
}

