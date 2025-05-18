import { cn } from "@/lib/utils";
import { Marquee } from "@/components/magicui/marquee";

const reviews = [
  {
    name: "Connor",
    username: "@connor",
    body: "As always excellent work and great to contact with quick understanding responses.",
    img: "https://avatar.vercel.sh/jack",
  },
  {
    name: "Yusuf",
    username: "@yusuf",
    body: "He created a custom website for my company webintax and I am very happy with the result. He is very professional and has a lot of experience.",
    img: "https://avatar.vercel.sh/jill",
  },
  {
    name: "Janashiksha",
    username: "@janashiksha",
    body: "He created website for my nursing college (janashiksha) and created quickly before the deadline. I'm really impressed with the work.",
    img: "https://avatar.vercel.sh/john",
  },
];

const firstRow = reviews; // Show all reviews in the marquee

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-[400px] p-5 px-10 cursor-pointer overflow-hidden rounded-xl border",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex  items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt="" src={img} />
        <div className="flex flex-col">
          <figcaption className="text-base sm:text-lg font-medium dark:text-white">
            {name}
          </figcaption>
          <p className="text-base sm:text-lg font-medium dark:text-white/40">{username}</p>
        </div>
      </div>
      <blockquote className="mt-2 text-base sm:text-lg text-left">{body}</blockquote>
    </figure>
  );
};

export function Testimonial() {
  return (
    <div className="relative flex h-full sm:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-lg   ">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3"></div>
    </div>
  );
}
