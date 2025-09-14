import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotificationsPage() {
  return (
    <AppShell>
      <Card>
        <CardHeader>
          <CardTitle>通知</CardTitle>
        </CardHeader>
        <CardContent>
          即將推出…
        </CardContent>
      </Card>
    </AppShell>
  );
}

