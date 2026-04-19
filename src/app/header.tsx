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
      <nav className="max-w-340 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
        <div className="flex items-center justify-between">
          {isTopPage ? <h1>{logoLink}</h1> : logoLink}
        </div>
      </nav>
    </header>
  );
}
