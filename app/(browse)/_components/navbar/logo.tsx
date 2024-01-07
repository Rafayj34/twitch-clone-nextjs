import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Link from "next/link";

const font = Poppins({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex  items-center gap-x-4 hover:opacity-75 transition">
        <div className="bg-white mr-10 lg:mr-0 lg:shrink shrink-0 rounded-full p-1">
          <Image src={"/spooky.svg"} alt="pakflix" height="32" width={32} />
        </div>
        <div className={cn(
          "hidden lg:block"
          ,font.className)}>
          <p className="text-lg font-semibold">Pakflix</p>
          <p className="text-xs text-muted-foreground">Let's Play</p>
        </div>
      </div>
    </Link>
  );
};
