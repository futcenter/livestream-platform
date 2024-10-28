import Link from "next/link";
import Image from "next/image";
import { Exo, Exo_2, Poppins } from "next/font/google";

import { cn } from "@/lib/utils";

const font = Exo({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href="/">
      <div className="flex items-center gap-x-4 hover:opacity-75 transition">
        <div className=" rounded-full p-1 mr-12 shrink-0 lg:mr-0 lg:shrink">
          <Image
            src="/logo-white.png"
            alt="Futcenter"
            height="72"
            width="72"
          />
        </div>
        <div className={cn(
          "hidden lg:block",
          font.className
        )}>
          <p className="text-lg font-semibold">
            Futcenter
          </p>
          <p className="text-xs text-muted-foreground">
            Let&apos;s play
          </p>
        </div>
      </div>
    </Link>
  );
};
