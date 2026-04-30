export default function IntroSection() {
  return (
    <section className="bg-white dark:bg-[#0d0f14] px-6 pt-20 pb-22 md:px-12 md:pt-40 md:pb-44">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-[1.2fr_1fr] md:gap-24 items-start">
          <h2 className="font-serif font-light italic text-[clamp(2.5rem,12vw,4.5rem)] md:text-[clamp(3rem,6.5vw,5rem)] leading-tight tracking-tight text-[#1a2240] dark:text-[#e8e4d9]">
            美味しい食と
            <br />
            お酒を、
            <br />
            日常に。
          </h2>

          <div className="md:pt-4">
            <div className="font-serif text-lg md:text-xl tracking-wide text-[#1a2240] dark:text-[#e8e4d9] mb-4 md:mb-6">
              ミシュランガイド兵庫版にも掲載されたフレンチレストラン、
              <a
                href="https://benaton.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline text-blue-500 dark:text-[#9eb4d8]"
              >
                「ル ベナトン」
              </a>
              の味を、ご自宅の食卓にも。
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
