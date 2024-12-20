import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/logo.svg"
          alt="le panier logo"
          width={180}
          height={38}
          priority
        />
        <ol
          className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li>フレンチシェフの作るお惣菜</li>
          <ul className="list-inside pl-4 list-disc">
            <li>冷製</li>
            <li>温製</li>
            <li>温冷製</li>
            <li>野菜</li>
            <li>煮込</li>
          </ul>
          <li>レストラン</li>
          <ul className="list-inside pl-4 list-disc">
            <li>レストラン・バー利用</li>
          </ul>
          <li>
            イベント会場
            <ul className="list-inside pl-4 list-disc">
              <li>テイスティングイベント</li>
              <li>WebフロントエンドMeetup</li>
            </ul>
          </li>
        </ol>
      </main>
    </div>
  );
}
