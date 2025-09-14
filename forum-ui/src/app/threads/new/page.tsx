"use client";

import { AppShell } from "@/components/app-shell";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewThreadPage() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <AppShell>
      <Card>
        <CardHeader>
          <CardTitle>發表新文章</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input value={title} onChange={e => setTitle(e.target.value)} placeholder="標題" />
          <textarea className="min-h-[240px] w-full rounded-md border border-input bg-background p-3 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" placeholder="內容" value={content} onChange={e => setContent(e.target.value)} />
          <div className="flex justify-end">
            <Button disabled={!title.trim()}>發佈</Button>
          </div>
        </CardContent>
      </Card>
    </AppShell>
  );
}

