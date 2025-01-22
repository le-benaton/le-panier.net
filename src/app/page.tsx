import Image from "next/image";
import Logo from '@/app/logo';

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
                <Logo
                  className="w-40 h-auto fill-black dark:fill-gray-50"
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

      <div className="p-5 pt-8 pb-12">
        <h2 className="text-center text-2xl font-serif mt-8">
          美味しい食とお酒を日常に。<br/>
          西宮市夙川に、2025年3月中旬オープン。
        </h2>
        <h3 className="text-center m-6 text-gray-500 dark:text-gray-400">
          <a href="https://benaton.net/" target="_blank" className="underline">「ル ベナトン」</a>の高谷慶が手掛ける、“日常の美味しい”
        </h3>
        <div className="flex flex-col max-w-3xl m-auto">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">店舗名</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm ">le panier （ル パニエ）</td>
                  </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">住所</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">兵庫県西宮市千歳町6番16号（<a
                      href="https://maps.app.goo.gl/v9Zc3TdAsB8ttLACA" target="_blank" className="underline">Google
                      Map</a>）
                    </td>
                  </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">営業時間</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      11:00～22:00 / 水曜日定休日（予定）
                    </td>
                  </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">オープン</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">2025年3月中旬（予定）</td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="md:flex justify-between pt-8 pb-8 max-w-7xl m-auto">
        <div
          className="md:w-1/3 flex flex-col bg-white dark:bg-gray-950 border shadow-sm dark:border-gray-700 rounded-xl m-3 overflow-hidden">
          <Image
            className="w-auto max-w-none h-44 object-cover"
            src="/images/colum-delica.jpeg"
            alt="le panier perspective_1"
            width={1523}
            height={634}
            priority
          />
          <div className="p-4 md:p-5 text-gray-800 dark:text-gray-100">
            <h3 className="text-lg font-bold">
              デリカテッセン
            </h3>
            <p className="mt-1">
              毎日の食卓に、ちょっとした楽しさと喜びをお届けするため、旬の食材をふんだんに使った料理を日替わり週替りでご用意いたします。
            </p>
            <p className="mt-3">
              お忙しい日々の中でも、心温まる味わいでほっと一息つけるような、そんな持ち帰りお惣菜をご提供します。
            </p>
          </div>
        </div>
        <div
          className="md:w-1/3 flex flex-col bg-white dark:bg-gray-950 border shadow-sm dark:border-gray-700 rounded-xl m-3 overflow-hidden">
          <Image
            className="w-auto max-w-none h-44 object-cover"
            src="/images/colum-restaurant.jpeg"
            alt="le panier perspective_1"
            width={1523}
            height={634}
            priority
          />
          <div className="p-4 md:p-5 text-gray-800 dark:text-gray-100">
            <h3 className="text-lg font-bold">
              レストラン、バー
            </h3>
            <p className="mt-1">
              お惣菜は店内でもお楽しみいただけるほか、お店でしか味わえない特別なメニューもご用意しています。
            </p>
            <p className="mt-3">
              最大10席のカウンターバーで、おすすめのカフェやワインと共に、お料理をお楽しみいただけます。
            </p>
          </div>
        </div>
        <div
          className="md:w-1/3 flex flex-col bg-white dark:bg-gray-950 border shadow-sm dark:border-gray-700 rounded-xl m-3 overflow-hidden">
          <Image
            className="w-auto max-w-none h-44 object-cover"
            src="/images/colum-event.jpg"
            alt="le panier perspective_1"
            width={1523}
            height={634}
            priority
          />
          <div className="p-4 md:p-5 text-gray-800 dark:text-gray-100">
            <h3 className="text-lg font-bold">
              イベント
            </h3>
            <p className="mt-1">
              季節のイベントやコラボイベントを開催予定。ワインの飲み比べや、音楽を聞かせて熟成させた日本酒、また生産者を招いてのテイスティングイベントに興味はありませんか？
            </p>
            <p className="mt-3">
              少人数だからこそできる体験を、ぜひお楽しみください。
            </p>
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
