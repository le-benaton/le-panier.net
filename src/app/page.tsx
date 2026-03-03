import fs from "fs";
import path from "path";
import Image from "next/image";
import Logo from '@/app/logo';
import FeatureSection from '@/app/feature-section';
import SelectDialog from '@/app/select-dialog';
import ImageGallery from '@/app/image-gallery';

const galleryDir = path.join(process.cwd(), "public/images/gallery");
const galleryImages = fs.existsSync(galleryDir)
  ? fs.readdirSync(galleryDir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort()
      .map((file) => `/images/gallery/${file}`)
  : [];

export default function Home() {
  return (
    <>
      <SelectDialog />
      <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white text-sm py-3 dark:bg-neutral-800">
        <nav className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between">
          <div className="flex items-center justify-between">
            <a className="flex-none text-xl font-semibold dark:text-white focus:outline-none focus:opacity-80" href="#"
               aria-label="Brand">
              <h1 className="inline-flex items-center gap-x-2 text-xl font-semibold dark:text-white">
                <Logo
                  className="w-40 h-auto fill-black dark:fill-gray-50"
                />
                <span className="sr-only">le panier（ル パニエ）</span>
              </h1>
            </a>
          </div>
        </nav>
      </header>
      <div className="relative w-full aspect-video max-h-[800px] overflow-hidden bg-black/[.15]">
        <Image
          className="object-cover"
          src="/images/mv.jpg"
          alt="le panier の外観写真"
          fill
          sizes="100vw"
          priority
        />
      </div>

      <div className="p-5 pt-8 pb-12">
        <h2 className="text-center text-2xl font-serif mt-8">
          美味しい食とお酒を日常に。
          <br />
          西宮市夙川に、2025年3月21日(金)オープン。
        </h2>
        <p className="text-center m-6 text-gray-500 dark:text-gray-400">
          <a href="https://benaton.net/" target="_blank" className="underline">「ル ベナトン」</a>の高谷慶が手掛ける、
          “日常の美味しい”
        </p>
        <div className="flex flex-col max-w-3xl m-auto">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="border rounded-lg shadow">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr className=" text-gray-800 dark:text-gray-200">
                      <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">店舗名</th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm ">
                        le panier （ル パニエ）
                      </td>
                    </tr>

                    <tr className=" text-gray-800 dark:text-gray-200">
                      <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">住所</th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        兵庫県西宮市千歳町6番16号（
                        <a
                          href="https://maps.app.goo.gl/qibejWXogWvvwiks8"
                          target="_blank"
                          className="underline text-blue-500"
                        >
                          Google Map
                        </a>
                        ）
                      </td>
                    </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">営業時間</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      11時〜21時<br/>
                      金・土のみ11時〜24時
                    </td>
                  </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">定休日</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      水曜日
                    </td>
                  </tr>

                    <tr className=" text-gray-800 dark:text-gray-200">
                      <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">Instagram</th>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href="https://www.instagram.com/le_panier_benaton/"
                          target="_blank"
                          className=" text-blue-500"
                        >
                          @le_panier_benaton
                        </a>
                      </td>
                    </tr>

                  <tr className=" text-gray-800 dark:text-gray-200">
                    <th className="px-6 py-4 whitespace-nowrap text-sm font-medium">予約・お問合せ</th>
                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                      <a href="https://lin.ee/h2BUTwy" target="_blank" className="text-blue-500 underline">LINE公式アカウント</a> または <a href="https://www.hotpepper.jp/strJ004469357/yoyaku/?vos=othpporgzzzzx00000001" target="_blank" className=" text-blue-500 underline">ホットペッパー</a>
                    </td>
                  </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-stone-100 dark:bg-stone-900 py-14">
        <section className="px-4 max-w-7xl m-auto">
          <h2 className="text-2xl font-serif text-center mb-8">le panier のサービス</h2>
          <div className="space-y-12">
            <FeatureSection imageSrc="/images/colum-delica.jpg" imageAlt="デリカテッセンの料理" title="デリカテッセン（惣菜販売）" imageObjectPosition="object-bottom">
              <p className="mt-1">
                フレンチレストラン「<a href="https://benaton.net/" target="_blank" className="underline text-blue-500">ル ベナトン</a>」から生まれたデリカテッセン。<br />
                シェフが手掛けるフレンチ惣菜を、テイクアウトでお届けします。日替わり・週替わりメニューもご用意しています。
              </p>
              <h4 className="text-lg font-bold font-serif mt-4 mb-1">販売しているお惣菜の一例</h4>
              <ul className="list-disc ml-5">
                <li>定番で常にある商品 / ○○円</li>
                <li>定番で常にある商品（100g） / ○○円</li>
                <li>定番で常にある商品 / ○○円</li>
              </ul>
            </FeatureSection>
            <FeatureSection imageSrc="/images/colum-event.jpg" imageAlt="イベントの写真" title="イベント会場としてのご利用" imageObjectPosition="object-center">
              <p className="mt-1">
                プロジェクター完備の店内は、イベントスペースとしてもご利用いただけます。<br />
                ご予約・ご相談は公式LINEまたはInstagram DMから受け付けております。</p>
              <p className="mt-3">
                お店主催のイベントも不定期で開催しております。<a href="https://www.instagram.com/le_panier_benaton/" target="_blank" className="text-blue-500 underline">最新情報はInstagramをご覧ください</a>。
              </p>
            </FeatureSection>
            <FeatureSection imageSrc="/images/colum-vegetables.jpg" imageAlt="野菜販売の様子" title="野菜販売" imageObjectPosition="object-center">
              <p className="mt-1">
                週末は店先のワゴンで野菜の販売を行っています。<br />
                農薬・化学肥料に頼らない、旬の野菜や果物を取り揃えています。
              </p>
            </FeatureSection>
          </div>
        </section>
      </div>

      <ImageGallery images={galleryImages} />

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
