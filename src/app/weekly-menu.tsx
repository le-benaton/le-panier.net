import SectionHeading from "@/app/section-heading";
import { formatYen } from "@/lib/format";

type MenuItem = {
  name: string;
  price: { sell: string };
  tastingNote: string | null;
  tastingTags: { label: string }[];
  year: number | null;
  threadId: number;
};

async function fetchMenu(): Promise<readonly MenuItem[]> {
  const url = process.env.MENU_API_URL;
  if (!url) {
    throw new Error("MENU_API_URL が未設定です。.env.local に設定してください。");
  }
  const res = await fetch(url, { signal: AbortSignal.timeout(15000) });
  if (!res.ok) {
    throw new Error(`メニュー API の取得に失敗しました: ${res.status} ${res.statusText}`);
  }
  return res.json();
}

const hasLabel = (item: MenuItem, label: string) => item.tastingTags.some((t) => t.label === label);

function PriceTag({ price }: { price: string }) {
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

function NamedDish({ name, price }: { name: string; price: string }) {
  return (
    <div className="flex items-baseline gap-3 pt-2.5 md:pt-3.5 flex-wrap">
      <div className="flex-1 min-w-0 text-base md:text-lg tracking-[0.2px] leading-[1.5]">
        {name}
      </div>
      <PriceTag price={price} />
    </div>
  );
}

export default async function WeeklyMenu() {
  const items = await fetchMenu();
  const weeklyPasta = items.find((i) => hasLabel(i, "週替わり"));
  const stewSet = items.find((i) => hasLabel(i, "煮込みセット"));
  const dailyItems = items
    .filter((i) => hasLabel(i, "日替わり"))
    .sort((a, b) => (a.year ?? Infinity) - (b.year ?? Infinity));
  const dailyPrice = dailyItems[0]?.price.sell;

  return (
    <section className="border-y border-black/[0.08] dark:border-white/[0.07] bg-[#f3ede3] dark:bg-[#1a1814] text-[#111] dark:text-[#f1efe9] px-6 pt-14 pb-16 md:px-10 md:pt-[104px] md:pb-28">
      <div className="max-w-[920px] mx-auto">
        <SectionHeading en="Weekly & Daily Menu" jp="週替わり・日替わりメニュー" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-[72px] mt-3 md:mt-8 items-start">
          <div className="flex flex-col gap-9 md:gap-14">
            {weeklyPasta && (
              <div>
                <SubTitle en="Pasta of the Week" jp="週替わりパスタ" />
                <NamedDish name={weeklyPasta.name} price={weeklyPasta.price.sell} />
              </div>
            )}
            {stewSet && (
              <div>
                <SubTitle en="Stew Set" jp="煮込みセット" />
                <NamedDish name={stewSet.name} price={stewSet.price.sell} />
              </div>
            )}
          </div>

          {dailyItems.length > 0 && (
            <div>
              <div className="flex items-end justify-between gap-3 mb-[14px] md:mb-5">
                <SubTitle en="Daily Specials" jp="日替わりメニュー" />
                {dailyPrice && (
                  <div className="pb-1">
                    <PriceTag price={dailyPrice} />
                  </div>
                )}
              </div>

              <ul className="grid grid-cols-[auto_1fr] list-none p-0 m-0 border-t border-black/[0.14] dark:border-white/[0.14]">
                {dailyItems.map((entry) => (
                  <li key={entry.threadId} className="contents">
                    <div className="flex items-center justify-center px-3 md:px-4 py-3 md:py-3.5 border-r border-b border-black/[0.14] dark:border-white/[0.14] font-serif text-sm md:text-base whitespace-nowrap">
                      {entry.tastingNote}
                    </div>
                    <div className="flex items-center pl-[14px] md:pl-5 py-3 md:py-3.5 border-b border-black/[0.14] dark:border-white/[0.14] text-sm leading-[1.6]">
                      {entry.name}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <p className="mt-7 md:mt-11 text-xs text-[#6b6b6b] dark:text-[#8a8a8a] text-center">
          メニューは仕入れにより変更の場合があります
        </p>
      </div>
    </section>
  );
}
