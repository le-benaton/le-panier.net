export default function InstagramCta() {
  return (
    <section className="border-y border-black/[0.08] dark:border-white/[0.07] bg-[#f3ede3] dark:bg-[#1a1814] text-center px-6 pt-16 pb-[72px] md:px-10 md:pt-[120px] md:pb-32">
      <div className="max-w-[760px] mx-auto">
        <div className="mb-12">
          <div className="w-px h-11 bg-[#6b6b6b] dark:bg-[#8a8a8a] opacity-45 mx-auto mb-[26px]" />
          <div className="font-mono text-[11px] tracking-[4px] uppercase text-[#6b6b6b] dark:text-[#8a8a8a] mb-5">
            Instagram
          </div>
          <h2 className="font-serif text-[20px] sm:text-[26px] md:text-[32px] leading-[1.5] tracking-[0.3px] text-[#1a2240] dark:text-[#e8e4d9]">
            お店の様子やイベント情報は
            <br />
            Instagramでも日々お届けしています
          </h2>
        </div>
        <div className="font-mono text-[13px] tracking-[0.6px] text-[#6b6b6b] dark:text-[#8a8a8a] mt-3">
          @le_panier_benaton
        </div>
        <a
          href="https://www.instagram.com/le_panier_benaton/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2.5 mt-9 px-10 py-[18px] text-sm tracking-[1.6px] rounded-[1px] bg-[#1a2240] text-white dark:bg-[#e8e4d9] dark:text-[#111]"
        >
          <span
            aria-hidden="true"
            className="w-[17px] h-[17px] bg-current"
            style={{
              maskImage: "url(/icons/instagram.svg)",
              maskSize: "contain",
              maskRepeat: "no-repeat",
              maskPosition: "center",
            }}
          />
          Instagramを見る
        </a>
      </div>
    </section>
  );
}
