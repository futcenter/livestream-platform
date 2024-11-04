import { cn } from "@/lib/utils";
import Image from "next/image";

interface LiveBadgeProps {
  className?: string;
  imgBadge?: boolean;
};

export const LiveBadge = ({
  className,
  imgBadge,
}: LiveBadgeProps) => {
  return (
    <div className={cn(
      "bg-rose-500 text-center p-0.5 px-1.5 rounded-md uppercase text-[10px] border border-background font-semibold tracking-wide",
      className,
    )}>
      {
        imgBadge ? <Image src={`/live-white.png`} alt="live" width={28} height={28} /> : 'Live'
      }
    </div>
  );
};
