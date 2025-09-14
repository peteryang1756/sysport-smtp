import { AppShell } from "@/components/app-shell";
import { ThreadList } from "@/components/thread-list";

export default function HomePage() {
  return (
    <AppShell>
      <div className="space-y-6">
        <h1 className="text-2xl font-semibold tracking-tight">熱門討論</h1>
        <ThreadList />
      </div>
    </AppShell>
  );
}

