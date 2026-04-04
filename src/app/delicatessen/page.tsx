import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Header from "@/app/header";
import { weeklyPasta, dailyMenuItems, dailySetPrice, stewSet } from "@/data/lunch";

export const metadata: Metadata = {
  title: "デリカテッセン｜ル パニエ - 西宮・夙川のフレンチ惣菜",
  description:
    "ル パニエのデリカテッセン（惣菜販売）メニュー。ラザニア、砂肝のコンフィ、ローストビーフなど。イートインもご利用いただけます。",
};

const regularMenuItems = [
  { name: "ラザニア", unit: "1切れ", price: "950円", image: "/images/deli_1.jpg" },
  { name: "砂肝のコンフィ", unit: "100g", price: "500円", image: "/images/deli_2.jpg" },
  { name: "ローストビーフ", unit: "1g", price: "10円", image: "/images/deli_3.jpg" },
];

const recommendedMenuItems = [
  { name: "惣菜名", unit: "100g", price: "600円" },
  { name: "惣菜名", unit: "100g", price: "800円" },
  { name: "惣菜名", unit: "100g", price: "700円" },
  { name: "惣菜名", unit: "100g", price: "700円" },
  { name: "惣菜名", unit: "100g", price: "700円" },
  { name: "惣菜名", unit: "100g", price: "700円" },
];

const eatInMenuItems = [
  { name: "惣菜名", unit: "1杯", price: "500円" },
  { name: "惣菜名", unit: "1皿", price: "1,200円" },
  { name: "惣菜名", unit: "1杯", price: "700円〜" },
];

export default function DelicatessenPage() {
  return (
    <>
      <Header />

      <main>
        <div className="py-14 px-4">
          <h1 className="text-2xl font-serif text-center mb-4">デリカテッセン（惣菜販売）</h1>
          <p className="text-center text-gray-500 dark:text-gray-400">
            フレンチレストラン「ル ベナトン」のシェフが手掛けるフレンチ惣菜
          </p>
        </div>

        <section className="bg-stone-100 dark:bg-stone-900 py-14">
          <div className="px-4 max-w-5xl m-auto">
            <h2 className="text-xl font-bold font-serif text-center mb-8">メニュー</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {regularMenuItems.map((item) => (
                <div
                  key={item.name}
                  className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm"
                >
                  <div className="aspect-video relative">
                    <Image src={item.image} alt={item.name} fill className="object-cover" />
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold font-serif">{item.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{item.unit}</p>
                    <p className="text-lg font-bold mt-2">{item.price}</p>
                  </div>
                </div>
              ))}
            </div>
            <ul className="max-w-3xl m-auto space-y-3">
              {recommendedMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-baseline text-gray-800 dark:text-gray-100"
                >
                  <span>
                    {item.name}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      ({item.unit})
                    </span>
                  </span>
                  <span className="font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-8 text-right mt-7">
              ※ 仕入れ状況によっては、メニューが異なる場合があります。
            </p>
          </div>
        </section>

        <section className="py-14 px-4">
          <div className="max-w-3xl m-auto">
            <h2 className="text-xl font-bold font-serif text-center mb-4">イートイン</h2>
            <p className="md:text-center text-gray-800 dark:text-gray-100 leading-[1.7] mb-8">
              店内でもお惣菜お召し上がりいただける他、イートインでしか提供していないメニューもございます。
              <br />
              週替わりのメニューは月曜日に公式LINEやInstagramでお知らせしております。
            </p>

            <h3 className="text-lg font-bold font-serif mb-4">週替わりパスタ</h3>
            <div className="bg-white dark:bg-neutral-800 rounded-lg overflow-hidden shadow-sm mb-8 max-w-sm">
              <div className="aspect-video relative">
                <Image
                  src={weeklyPasta.image}
                  alt={weeklyPasta.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-4">
                <h4 className="font-bold font-serif">{weeklyPasta.name}</h4>
                <p className="text-lg font-bold mt-2">{weeklyPasta.price}</p>
              </div>
            </div>

            <h3 className="text-lg font-bold font-serif mb-4">日替わりセット</h3>
            <ul className="space-y-3 mb-2">
              {dailyMenuItems.map((item) => (
                <li key={item.day} className="flex items-baseline text-gray-800 dark:text-gray-100">
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-8 shrink-0">
                    {item.day}
                  </span>
                  <span>{item.name}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-bold mb-8 text-right">{dailySetPrice}</p>

            <h3 className="text-lg font-bold font-serif mb-4">煮込みセット</h3>
            <p className="text-gray-800 dark:text-gray-100 mb-2">{stewSet.name}</p>
            <p className="text-lg font-bold mb-8 text-right">{stewSet.price}</p>

            <div className="bg-stone-100 dark:bg-stone-800 rounded-lg p-4 mb-10">
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                ＋600円でセットに変更できます。セットには、惣菜3品、パン、ドリンクが含まれます。
                <br />
                追加料金でドリンクの変更や前菜盛り合わせを5種への変更も可能です。
                <br />
                11時〜21時までご提供しております。
              </p>
            </div>

            <h3 className="text-lg font-bold font-serif mb-4">イートインメニュー</h3>
            <ul className="space-y-3 mb-8">
              {eatInMenuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-baseline text-gray-800 dark:text-gray-100"
                >
                  <span>
                    {item.name}
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-1">
                      ({item.unit})
                    </span>
                  </span>
                  <span className="font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-3 mb-8 justify-center">
              <a
                href="https://lin.ee/h2BUTwy"
                target="_blank"
                className="inline-block px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
              >
                公式LINE
              </a>
              <a
                href="https://www.instagram.com/le_panier_benaton/"
                target="_blank"
                className="inline-block px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
              >
                Instagram
              </a>
            </div>

            <h3 className="text-lg font-bold font-serif mb-4">ドリンクリスト</h3>
            <p className="mb-6">
              ワインのほか、日本酒やノンアルコールドリンクもご用意しております。
            </p>
            <a
              href="https://winecode.app/panier"
              target="_blank"
              className="inline-block px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
            >
              ワイン・ドリンクリストを見る
            </a>
          </div>
        </section>

        <div className="py-8 text-center">
          <Link href="/" className="underline text-blue-500">
            トップページに戻る
          </Link>
        </div>
      </main>
    </>
  );
}
