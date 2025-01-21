import Image from "next/image";

export default function Home() {
  return (
    <>
      <header
        className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="#"
               aria-label="Brand">
              <span className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                <Image
                  className="w-40 h-auto"
                  src="/logo.svg"
                  alt="le panier logo"
                  width={180}
                  height={38}
                  priority
                />
              </span>
            </a>
          </div>
        </nav>
      </header>
      <div className="flex overflow-scroll bg-black/[.15]">
        <Image
          className="w-auto max-w-none h-72"
          src="/images/perspective_1.png"
          alt="le panier perspective_1"
          width={1523}
          height={634}
          priority
        />
        <Image
          className="w-auto max-w-none h-72"
          src="/images/perspective_2.png"
          alt="le panier perspective_2"
          width={1362}
          height={608}
          priority
        />
        <Image
          className="w-auto max-w-none h-72"
          src="/images/perspective_3.png"
          alt="le panier perspective_3"
          width={1642}
          height={592}
          priority
        />
      </div>

      <div className="p-5">
        <h2 className="text-center text-2xl font-serif m-8">
          美味しい食とお酒を日常に。<br/>
          西宮市夙川に、2025年3月中旬オープン。
        </h2>
        <div className="flex flex-col max-w-3xl m-auto">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                  <tr>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">店舗名</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">le panier （ル　パニエ）</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">住所</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">兵庫県西宮市千歳町6番16号</td>
                  </tr>

                  <tr>
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800">オープン予定日</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800">2025年3月中旬</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex overflow-scroll bg-black/[.15]">
        <Image
          className="w-auto max-w-none h-72"
          src="/images/drawing_2.svg"
          alt="le panier drawing_1"
          width={1523}
          height={634}
          priority
        />
        <Image
          className="w-auto max-w-none h-72 m-2"
          src="/images/drawing_1.svg"
          alt="le panier drawing_1"
          width={1362}
          height={608}
          priority
        />
        <Image
          className="w-auto max-w-none h-72 m-2"
          src="/images/drawing_3.svg"
          alt="le panier drawing_1"
          width={1642}
          height={592}
          priority
        />
      </div>
    </>
  );
}
