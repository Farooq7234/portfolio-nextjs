import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { HeroVideoDialog } from "@/components/ui/hero-video-dialog";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

function parseYouTubeUrl(url: string) {
  try {
    const parsed = new URL(url);
    const host = parsed.hostname.replace(/^www\./, "");
    let id: string | null = null;

    if (host === "youtu.be") {
      id = parsed.pathname.slice(1).split("/")[0] || null;
    } else if (
      host === "youtube.com" ||
      host === "m.youtube.com" ||
      host === "music.youtube.com"
    ) {
      if (parsed.pathname === "/watch") {
        id = parsed.searchParams.get("v");
      } else if (
        parsed.pathname.startsWith("/embed/") ||
        parsed.pathname.startsWith("/shorts/") ||
        parsed.pathname.startsWith("/live/")
      ) {
        id = parsed.pathname.split("/")[2] || null;
      }
    }

    if (!id) return null;

    return {
      id,
      embedUrl: `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1&iv_load_policy=3&playsinline=1`,
      thumbnailUrl: `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    };
  } catch {
    return null;
  }
}

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
}: Props) {
  const youtube = video ? parseYouTubeUrl(video) : null;

  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      {youtube ? (
        <div
          className={cn(
            "relative aspect-video w-full overflow-hidden",
            className
          )}
        >
          <HeroVideoDialog
            videoSrc={youtube.embedUrl}
            thumbnailSrc={image || youtube.thumbnailUrl}
            thumbnailAlt={title}
            animationStyle="from-center"
            className="h-full w-full"
            thumbnailClassName="h-full w-full rounded-none border-0 object-cover object-top shadow-none"
          />
        </div>
      ) : (
        <Link
          href={href || "#"}
          className={cn("block cursor-pointer", className)}
        >
          {video && (
            <div className="relative max-w-full h-full overflow-hidden">
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-full w-full object-cover object-top" // needed because random black line at bottom of video


              />
            </div>
          )}
          {image && (
            <Image
              src={image}
              alt={title}
              width={500}
              height={500}
              className="h-full w-full overflow-hidden object-cover object-top"
            />
          )}
        </Link>
      )}
      <CardHeader className="px-2">
        <div className="space-y-1">
          <CardTitle className="mt-1 text-base">{title}</CardTitle>
          <time className="font-sans text-xs">{dates}</time>
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      <CardContent className="mt-auto flex flex-col px-2">
        {tags && tags.length > 0 && (
          <div className="mt-2 flex flex-wrap gap-1">
            {tags?.map((tag) => (
              <Badge
                className="px-1 py-0 text-[10px]"
                variant="secondary"
                key={tag}
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>
      <CardFooter className="px-2 pb-2 ">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-1">
            {links?.map((link, idx) => (
              <Link href={link?.href} key={idx} target="_blank">
                <Badge key={idx} className="flex gap-2 px-2 py-1 text-[10px]">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}