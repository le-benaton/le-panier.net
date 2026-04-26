import fs from "fs";
import path from "path";
import Image from "next/image";
import Header from "@/app/header";
import SelectDialog from "@/app/select-dialog";
import ImageGallery from "@/app/image-gallery";
import InstagramCta from "@/app/instagram-cta";
import IntroSection from "@/app/intro-section";
import ServicesSection from "@/app/services-section";
import WeeklyMenu from "@/app/weekly-menu";

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

        <ServicesSection />

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
                    className="underline text-blue-500 dark:text-[#9eb4d8]"
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
                    className="underline text-blue-500 dark:text-[#9eb4d8]"
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
                    className="text-blue-500 underline dark:text-[#9eb4d8]"
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
                    className="text-blue-500 underline dark:text-[#9eb4d8]"
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
