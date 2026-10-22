import BlurFade from "@/components/magicui/blur-fade";
import { buttonVariants } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import { ExternalLinkIcon } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Resume",
  description: `Resume of ${DATA.name}`,
};

const BLUR_FADE_DELAY = 0.04;

function getDrivePreviewUrl(url: string) {
  if (!url || url.includes("YOUR_FILE_ID")) {
    return null;
  }

  const match =
    url.match(/\/d\/([a-zA-Z0-9_-]+)/) ?? url.match(/[?&]id=([a-zA-Z0-9_-]+)/);

  if (!match) {
    return url;
  }

  return `https://drive.google.com/file/d/${match[1]}/preview`;
}

export default function ResumePage() {
  const previewUrl = getDrivePreviewUrl(DATA.resumeUrl);

  return (
    <section className="flex flex-col gap-y-6">
      <BlurFade delay={BLUR_FADE_DELAY}>
        <div className="flex items-center justify-between gap-4">
          <h1 className="font-medium text-2xl tracking-tighter">Resume</h1>
          {previewUrl && (
            <Link
              href={DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "sm" }))}
            >
              Open in Drive
              <ExternalLinkIcon className="ml-2 size-3" />
            </Link>
          )}
        </div>
      </BlurFade>
      <BlurFade delay={BLUR_FADE_DELAY * 2}>
        {previewUrl ? (
          <iframe
            src={previewUrl}
            title={`${DATA.name} Resume`}
            className="h-[75vh] w-full rounded-xl border bg-muted"
            allow="autoplay"
          />
        ) : (
          <div className="flex h-[50vh] flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-center">
            <p className="text-sm font-medium">Resume link not set</p>
            <p className="max-w-sm text-xs text-muted-foreground">
              Add your Google Drive share link to{" "}
              <code className="rounded bg-muted px-1 py-0.5">resumeUrl</code>{" "}
              in{" "}
              <code className="rounded bg-muted px-1 py-0.5">
                src/data/resume.tsx
              </code>
            </p>
          </div>
        )}
      </BlurFade>
    </section>
  );
}
