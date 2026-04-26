import fs from "fs";
import path from "path";
import Image from "next/image";
import Header from "@/app/header";
import FeatureSection from "@/app/feature-section";
import SelectDialog from "@/app/select-dialog";
import ImageGallery from "@/app/image-gallery";
import InstagramCta from "@/app/instagram-cta";
import IntroSection from "@/app/intro-section";
import WeeklyMenu from "@/app/weekly-menu";
import SectionHeading from "@/app/section-heading";

const galleryDir = path.join(process.cwd(), "public/images/gallery");
const galleryImages = fs.existsSync(galleryDir)
  ? fs
      .readdirSync(galleryDir)
      .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
      .sort()
      .map((file) => `/images/gallery/${file}`)
  : [];

export default function Home() {
  return (
    <>
      <SelectDialog />
      <Header isTopPage />
      <main>
        <div className="relative w-full aspect-video max-h-[800px] overflow-hidden bg-black/15">
          <Image
            className="object-cover"
            src="/images/mv.jpg"
            alt="le panier の外観写真"
            fill
            sizes="100vw"
            priority
          />
        </div>

        <IntroSection />

        <div className="bg-stone-100 dark:bg-stone-900 pt-14 pb-16 md:pt-[104px] md:pb-28">
          <section className="px-4 max-w-7xl m-auto">
            <SectionHeading en="Our Services" jp="le panier のサービス" />
            <div className="space-y-16 md:space-y-24">
              <FeatureSection
                imageSrc="/images/colum-delica.jpg"
                imageAlt="デリカテッセンの料理"
                title="デリカテッセン（惣菜販売）"
                imageObjectPosition="object-bottom"
              >
                <p className="mt-1">
                  フレンチレストラン「
                  <a
                    href="https://benaton.net/"
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    ル ベナトン
                  </a>
                  」から生まれたデリカテッセン。
                  <br />
                  シェフが手掛けるフレンチ惣菜を、テイクアウトでお届けします。日によって並ぶメニューが変わります。
                </p>
                <h4 className="text-lg font-bold font-serif mt-4 mb-1">販売しているお惣菜の一例</h4>
                <ul className="list-disc ml-5">
                  <li>ラザニア(1切れ) / 950円</li>
                  <li>砂肝のコンフィ(100g) / 500円</li>
                  <li>ローストビーフ(1g) / 10円</li>
                </ul>
              </FeatureSection>
              <FeatureSection
                imageSrc="/images/colum-restaurant.jpeg"
                imageAlt="店内のカウンター席"
                title="店内でのお食事・お酒"
                imageObjectPosition="object-center"
              >
                <p className="mt-1">
                  カウンター席では、日替わりや週替わりのお食事メニュー、モーニングなどをご用意しています。
                </p>
                <p className="mt-4">
                  日替わり・週替わりメニューの内容やモーニング営業の最新情報は、
                  <a
                    href="https://lin.ee/h2BUTwy"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    公式LINE
                  </a>
                  または
                  <a
                    href="https://www.instagram.com/le_panier_benaton/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    Instagram
                  </a>
                  でお知らせしております。
                </p>
                <h4 className="text-lg font-bold font-serif mt-6 mb-1">ドリンクリスト</h4>
                <p>ワインのほか、日本酒やノンアルコールドリンクもご用意しております。</p>
                <div className="mt-4">
                  <a
                    href="https://winecode.app/panier"
                    target="_blank"
                    className="inline-block px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
                  >
                    ワイン・ドリンクリストを見る
                  </a>
                </div>
              </FeatureSection>
              <FeatureSection
                imageSrc="/images/colum-vegetables.jpg"
                imageAlt="野菜販売の様子"
                title="野菜販売"
                imageObjectPosition="object-center"
              >
                <p className="mt-1">
                  週末の早朝に、シェフが加東市や三田市の道の駅まで足を運び、自分の目で選んだ旬の野菜を店先のワゴンで販売しています。
                  <br />
                  減農薬栽培を大切にする「よつばファーム」さんのお野菜も毎週届きます。季節によってはシェフ自家栽培のキウイや柚子、大根がお目見えすることも。
                </p>
              </FeatureSection>
              <FeatureSection
                imageSrc="/images/colum-event.jpg"
                imageAlt="イベントの写真"
                title="イベント会場としてのご利用"
                imageObjectPosition="object-center"
              >
                <p className="mt-1">
                  プロジェクター完備の店内は、イベントスペースとしてもご利用いただけます。
                  <br />
                  ご予約・ご相談は公式LINEまたはInstagram DMから受け付けております。
                </p>
                <p className="mt-3">
                  お店主催のイベントも不定期で開催しております。
                  <a
                    href="https://www.instagram.com/le_panier_benaton/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    最新情報はInstagramをご覧ください
                  </a>
                  。
                </p>
              </FeatureSection>
            </div>
          </section>
        </div>

        <WeeklyMenu />

        <ImageGallery images={galleryImages} />

        <InstagramCta />

        <div className="grid md:grid-cols-2">
          <div className="h-72 md:h-auto md:min-h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3278.5688371055335!2d135.3279881127118!3d34.74126097279224!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f3a2c059a473%3A0x9e92f9a9e8539a22!2zbGUgcGFuaWVyICjjg6sg44OR44OL44KoKSDlpJnlt53lupc!5e0!3m2!1sja!2sjp!4v1772196418618!5m2!1sja!2sjp"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="p-5 md:p-12 text-gray-800 dark:text-gray-200">
            <dl className="space-y-4">
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">店舗名</dt>
                <dd className="mt-1">le panier （ル パニエ）</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">住所</dt>
                <dd className="mt-1">
                  兵庫県西宮市千歳町6番16号（
                  <a
                    href="https://maps.app.goo.gl/qibejWXogWvvwiks8"
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    Google Map
                  </a>
                  ）
                  <br />
                  JRさくら夙川駅・阪急夙川駅から徒歩5分
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">営業時間</dt>
                <dd className="mt-1">
                  11時〜21時
                  <br />
                  金・土のみ11時〜24時
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">定休日</dt>
                <dd className="mt-1">水曜日</dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">駐車場</dt>
                <dd className="mt-1">
                  駐車場はございませんが、近くにコインパーキングがございます（
                  <a
                    href="https://times-info.net/P28-hyogo/C204/park-detail-BUK0025568/"
                    target="_blank"
                    className="underline text-blue-500"
                  >
                    タイムズ西宮千歳町
                  </a>
                  ）
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">Instagram</dt>
                <dd className="mt-1">
                  <a
                    href="https://www.instagram.com/le_panier_benaton/"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    @le_panier_benaton
                  </a>
                </dd>
              </div>
              <div>
                <dt className="text-sm font-medium text-gray-500 dark:text-gray-400">
                  予約・お問合せ
                </dt>
                <dd className="mt-1">
                  <a
                    href="https://lin.ee/h2BUTwy"
                    target="_blank"
                    className="text-blue-500 underline"
                  >
                    LINE公式アカウント
                  </a>{" "}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </main>
    </>
  );
}
