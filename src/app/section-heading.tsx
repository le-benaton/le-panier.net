type SectionHeadingProps = {
  en: string;
  jp: React.ReactNode;
};

export default function SectionHeading({ en, jp }: SectionHeadingProps) {
  return (
    <div className="text-center mb-7 md:mb-12">
      <div className="w-px h-7 md:h-11 bg-[#6b6b6b] dark:bg-[#8a8a8a] opacity-45 mx-auto mb-[18px] md:mb-[26px]" />
      <div className="font-mono text-xs tracking-[4px] uppercase text-[#6b6b6b] dark:text-[#8a8a8a] mb-[14px] md:mb-5">
        {en}
      </div>
      <h2 className="font-serif text-2xl md:text-3xl leading-[1.5] tracking-[0.3px] text-[#1a2240] dark:text-[#e8e4d9] font-normal">
        {jp}
      </h2>
    </div>
  );
}
