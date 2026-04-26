import Image from "next/image";
import { ReactNode } from "react";
import SectionHeading from "@/app/section-heading";
import { formatYen } from "@/lib/format";

type ServiceItem = {
  idx: "01" | "02" | "03" | "04";
  en: string;
  jp: string;
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition?: string;
  lead: ReactNode;
  aux?: ReactNode;
  subhead?: string;
  items?: { name: string; qty: string; price: number }[];
  auxBody?: ReactNode;
  cta?: { label: string; href: string };
};

const INSTAGRAM_URL = "https://www.instagram.com/le_panier_benaton/";
const LINE_URL = "https://lin.ee/h2BUTwy";
const BENATON_URL = "https://benaton.net/";
const WINECODE_URL = "https://winecode.app/panier";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="underline text-blue-500 dark:text-[#9eb4d8]"
    >
      {children}
    </a>
  );
}

const SERVICES: ServiceItem[] = [
  {
    idx: "01",
    en: "Delicatessen",
    jp: "デリカテッセン（惣菜販売）",
    imageSrc: "/images/colum-delica.jpg",
    imageAlt: "デリカテッセンの料理",
    imageObjectPosition: "object-bottom",
    lead: (
      <>
        「<ExternalLink href={BENATON_URL}>ル ベナトン</ExternalLink>
        」から生まれたデリカテッセン。シェフが手掛けるフレンチ惣菜を、テイクアウトでお届けします。日によって並ぶメニューが変わります。
      </>
    ),
    subhead: "販売しているお惣菜の一例",
    items: [
      { name: "ラザニア", qty: "1切れ", price: 950 },
      { name: "砂肝のコンフィ", qty: "100g", price: 500 },
      { name: "ローストビーフ", qty: "1g", price: 10 },
    ],
  },
  {
    idx: "02",
    en: "Dine-in & Drinks",
    jp: "店内でのお食事・お酒",
    imageSrc: "/images/colum-restaurant.jpeg",
    imageAlt: "店内のカウンター席",
    lead: "カウンター席では、日替わりや週替わりのお食事メニュー、モーニングなどをご用意しています。",
    aux: (
      <>
        日替わり・週替わりメニューの内容やモーニング営業の最新情報は、
        <ExternalLink href={LINE_URL}>公式LINE</ExternalLink>
        または
        <ExternalLink href={INSTAGRAM_URL}>Instagram</ExternalLink>
        でお知らせしております。
      </>
    ),
    subhead: "ドリンクリスト",
    auxBody: "ワインのほか、日本酒やノンアルコールドリンクもご用意しております。",
    cta: { label: "ワイン・ドリンクリストを見る", href: WINECODE_URL },
  },
  {
    idx: "03",
    en: "Seasonal Vegetables",
    jp: "野菜販売",
    imageSrc: "/images/colum-vegetables.jpg",
    imageAlt: "野菜販売の様子",
    lead: "週末の早朝に、シェフが加東市や三田市の道の駅まで足を運び、自分の目で選んだ旬の野菜を店先のワゴンで販売しています。",
    aux: "減農薬栽培を大切にする「よつばファーム」さんのお野菜も毎週届きます。季節によってはシェフ自家栽培のキウイや柚子、大根がお目見えすることも。",
  },
  {
    idx: "04",
    en: "Events & Venue",
    jp: "イベント会場としてのご利用",
    imageSrc: "/images/colum-event.jpg",
    imageAlt: "イベントの写真",
    lead: "プロジェクター完備の店内は、イベントスペースとしてもご利用いただけます。ご予約・ご相談は公式LINEまたはInstagram DMから受け付けております。",
    aux: (
      <>
        お店主催のイベントも不定期で開催しております。
        <ExternalLink href={INSTAGRAM_URL}>最新情報はInstagramをご覧ください</ExternalLink>。
      </>
    ),
  },
];

function MonoLabel({ children }: { children: ReactNode }) {
  return (
    <div className="font-mono text-xs tracking-[3px] uppercase text-[#6b6b6b] dark:text-[#8a8a8a]">
      {children}
    </div>
  );
}

function IndexNumeral({ children }: { children: ReactNode }) {
  return (
    <div className="font-serif italic font-light text-5xl md:text-6xl leading-none tracking-tight text-[#6b6b6b] dark:text-[#8a8a8a]">
      {children}
    </div>
  );
}

function ArrowLink({ label, href }: { label: string; href: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2.5 pb-1 font-mono text-xs tracking-[2px] uppercase text-[#1a2240] dark:text-[#e8e4d9] border-b border-[#1a2240] dark:border-[#e8e4d9]"
    >
      {label}
      <span aria-hidden="true" className="text-sm">
        →
      </span>
    </a>
  );
}

function PriceList({
  subhead,
  items,
}: {
  subhead: string;
  items: NonNullable<ServiceItem["items"]>;
}) {
  return (
    <div className="mt-5 md:mt-6 pt-4 md:pt-5 border-t border-black/[0.14] dark:border-white/[0.14]">
      <MonoLabel>{subhead}</MonoLabel>
      <ul className="list-none p-0 mt-3">
        {items.map((it) => (
          <li
            key={it.name}
            className="flex items-baseline gap-2 py-2.5 text-sm border-b border-black/[0.08] dark:border-white/[0.07]"
          >
            <span className="flex-1 text-[#111] dark:text-[#f1efe9]">{it.name}</span>
            <span className="font-mono text-xs text-[#6b6b6b] dark:text-[#8a8a8a]">({it.qty})</span>
            <span className="font-mono text-sm text-right min-w-[60px] text-[#111] dark:text-[#f1efe9]">
              {formatYen(it.price)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function CtaBlock({
  subhead,
  body,
  cta,
}: {
  subhead: string;
  body: ReactNode;
  cta: { label: string; href: string };
}) {
  return (
    <div className="mt-5 md:mt-6 pt-4 md:pt-5 border-t border-black/[0.14] dark:border-white/[0.14]">
      <MonoLabel>{subhead}</MonoLabel>
      <div className="text-sm leading-loose text-[#111] dark:text-[#f1efe9] mt-2.5 mb-4">
        {body}
      </div>
      <ArrowLink label={cta.label} href={cta.href} />
    </div>
  );
}

function ServiceRow({ s, index }: { s: ServiceItem; index: number }) {
  const flip = index % 2 === 1;
  return (
    <div
      className={`grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-20 md:items-center md:py-[72px] ${
        index > 0 ? "md:border-t md:border-black/[0.14] md:dark:border-white/[0.14]" : ""
      }`}
    >
      <div className={flip ? "md:order-2" : "md:order-1"}>
        <div className="aspect-[4/3] overflow-hidden">
          <Image
            src={s.imageSrc}
            alt={s.imageAlt}
            width={800}
            height={600}
            sizes="(max-width: 768px) 100vw, 540px"
            priority={index === 0}
            className={`w-full h-full object-cover ${s.imageObjectPosition ?? "object-center"}`}
          />
        </div>
      </div>
      <div className={flip ? "md:order-1" : "md:order-2"}>
        <div className="flex items-baseline gap-3.5 mb-3 md:mb-4">
          <IndexNumeral>{s.idx}</IndexNumeral>
          <MonoLabel>{s.en}</MonoLabel>
        </div>
        <h3 className="font-serif text-xl md:text-2xl leading-[1.4] tracking-[0.3px] font-normal text-[#1a2240] dark:text-[#e8e4d9] mb-3.5 md:mb-5">
          {s.jp}
        </h3>
        <div className="text-sm md:text-base leading-loose text-[#111] dark:text-[#f1efe9] mb-3 md:mb-4">
          {s.lead}
        </div>
        {s.aux && (
          <div className="text-sm leading-loose text-[#6b6b6b] dark:text-[#8a8a8a] mb-3 md:mb-4">
            {s.aux}
          </div>
        )}
        {s.items && s.subhead && <PriceList subhead={s.subhead} items={s.items} />}
        {s.cta && s.subhead && s.auxBody && (
          <CtaBlock subhead={s.subhead} body={s.auxBody} cta={s.cta} />
        )}
      </div>
    </div>
  );
}

export default function ServicesSection() {
  return (
    <section className="border-y border-black/[0.08] dark:border-white/[0.07] bg-[#fbf9f5] dark:bg-[#141821] px-6 pt-14 pb-16 md:px-10 md:pt-[120px] md:pb-32">
      <div className="max-w-[1080px] mx-auto">
        <SectionHeading en="Services" jp="le panier のサービス" />
        <div className="flex flex-col gap-14 md:gap-0">
          {SERVICES.map((s, i) => (
            <ServiceRow key={s.idx} s={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
