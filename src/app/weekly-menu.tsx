const DAILY_MENU = [
  { weekday: "月", item: "豚肉のグリエ スパイスヨーグルトソース" },
  { weekday: "火", item: "チキン南蛮" },
  { weekday: "木", item: "サーディンタルティーヌ" },
  { weekday: "金", item: "チキンのガストンジェラール" },
  { weekday: "土", item: "ズッキーニのファルシ" },
  { weekday: "日", item: "アクアパッツァ" },
];

const formatYen = (n: number) => `¥${n.toLocaleString("ja-JP")}`;

function PriceTag({ price }: { price: number }) {
  return (
    <span className="font-mono text-xs md:text-sm tracking-[0.5px] text-[#6b6b6b] dark:text-[#8a8a8a] whitespace-nowrap">
      {formatYen(price)}
      <span className="opacity-60 text-xs ml-1">(税込)</span>
    </span>
  );
}

function SubTitle({ en, jp }: { en: string; jp: string }) {
  return (
    <div className="mb-[14px] md:mb-5">
      <div className="font-mono text-xs tracking-[3px] uppercase text-[#6b6b6b] dark:text-[#8a8a8a] mb-2">
        {en}
      </div>
      <div className="font-serif text-lg md:text-2xl tracking-[0.5px] text-[#1a2240] dark:text-[#e8e4d9] font-normal">
        {jp}
      </div>
    </div>
  );
}

function NamedDish({ name, price }: { name: string; price: number }) {
  return (
    <div className="flex items-baseline gap-3 pt-2.5 md:pt-3.5 flex-wrap">
      <div className="flex-1 min-w-0 text-base md:text-lg tracking-[0.2px] leading-[1.5]">
        {name}
      </div>
      <PriceTag price={price} />
    </div>
  );
}

export default function WeeklyMenu() {
  return (
    <section className="border-y border-black/[0.08] dark:border-white/[0.07] bg-[#fbf9f5] dark:bg-[#141821] text-[#111] dark:text-[#f1efe9] px-6 pt-14 pb-16 md:px-10 md:pt-[104px] md:pb-28">
      <div className="max-w-[920px] mx-auto">
        <div className="text-center mb-7 md:mb-12">
          <div className="w-px h-7 md:h-11 bg-[#6b6b6b] dark:bg-[#8a8a8a] opacity-45 mx-auto mb-[18px] md:mb-[26px]" />
          <div className="font-mono text-xs tracking-[4px] uppercase text-[#6b6b6b] dark:text-[#8a8a8a] mb-[14px] md:mb-5">
            Weekly &amp; Daily Menu
          </div>
          <h2 className="font-serif text-2xl md:text-3xl leading-[1.5] tracking-[0.3px] text-[#1a2240] dark:text-[#e8e4d9] font-normal">
            週替わり・日替わりメニュー
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] mt-3 md:mt-8 items-start">
          <div className="flex flex-col gap-9 md:gap-14">
            <div>
              <SubTitle en="Pasta of the Week" jp="週替わりパスタ" />
              <NamedDish name="ボンゴレロッソ" price={1800} />
            </div>
            <div>
              <SubTitle en="Stew Set" jp="煮込みセット" />
              <NamedDish name="牛ちまきのブランケット" price={2350} />
            </div>
          </div>

          <div>
            <div className="flex items-end justify-between gap-3 mb-[14px] md:mb-5">
              <SubTitle en="Daily Specials" jp="日替わりメニュー" />
              <div className="pb-1">
                <PriceTag price={1800} />
              </div>
            </div>

            <ul className="grid grid-cols-[auto_1fr] list-none p-0 m-0 border-t border-black/[0.14] dark:border-white/[0.14]">
              {DAILY_MENU.map((entry) => (
                <li key={entry.weekday} className="contents">
                  <div className="flex items-center justify-center px-3 md:px-4 py-3 md:py-3.5 border-r border-b border-black/[0.14] dark:border-white/[0.14] font-serif text-sm md:text-base whitespace-nowrap">
                    {entry.weekday}
                  </div>
                  <div className="flex items-center pl-[14px] md:pl-5 py-3 md:py-3.5 border-b border-black/[0.14] dark:border-white/[0.14] text-sm leading-[1.6]">
                    {entry.item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-7 md:mt-11 text-xs text-[#6b6b6b] dark:text-[#8a8a8a] text-center">
          メニューは仕入れにより変更の場合があります
        </p>
      </div>
    </section>
  );
}
