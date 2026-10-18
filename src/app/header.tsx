import { RESERVATION_URL } from "@/lib/links";
import Link from "next/link";
import Logo from "@/app/logo";

interface HeaderProps {
  isTopPage?: boolean;
}

export default function Header({ isTopPage = false }: HeaderProps) {
  const logoLink = (
    <Link
      className="inline-flex items-center gap-x-2 flex-none text-xl font-semibold dark:text-white focus:outline-hidden focus:opacity-80"
      href="/"
      aria-label={isTopPage ? "Brand" : "トップページに戻る"}
    >
      <Logo className="w-40 h-auto fill-black dark:fill-gray-50" />
      <span className="sr-only">le panier（ル パニエ）</span>
    </Link>
  );

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
      <nav className="max-w-340 w-full mx-auto px-4 flex items-center justify-between gap-3">
        <div className="flex items-center justify-between">
          {isTopPage ? <h1>{logoLink}</h1> : logoLink}
        </div>
        <a
          href={RESERVATION_URL}
          className="inline-flex min-h-11 shrink-0 items-center justify-center rounded-sm bg-[#1a2240] px-4 py-2 text-sm font-medium text-white hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1a2240] dark:bg-[#e8e4d9] dark:text-[#1a2240] dark:focus-visible:outline-[#e8e4d9]"
        >
          ネット予約
        </a>
      </nav>
    </header>
  );
}
