"use client";

import { useState } from "react";
import Image from "next/image";

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <section className="px-4 max-w-5xl mx-auto py-14">
      <h2 className="text-2xl font-serif text-center mb-8">ギャラリー</h2>

      <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
        {images.map((src, index) => (
          <Image
            key={src}
            src={src}
            alt={`le panier の写真 ${index + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className={`object-cover transition-opacity duration-300 ${
              index === selectedIndex ? "opacity-100" : "opacity-0"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
          />
        ))}
      </div>

      <div
        className="grid grid-cols-4 sm:grid-cols-6 gap-2 mt-4"
        role="tablist"
        aria-label="ギャラリー画像の選択"
      >
        {images.map((src, index) => (
          <button
            key={src}
            onClick={() => setSelectedIndex(index)}
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`le panier の写真 ${index + 1}`}
            className={`relative aspect-square rounded overflow-hidden cursor-pointer
              ring-offset-2 focus-visible:ring-2 focus-visible:ring-blue-500
              ${
                index === selectedIndex ? "ring-2 ring-blue-500" : "opacity-70 hover:opacity-100"
              } transition-opacity`}
          >
            <Image src={src} alt="" fill sizes="120px" className="object-cover" />
          </button>
        ))}
      </div>

      <div className="text-center mt-8">
        <p className="text-gray-500 dark:text-gray-400 mb-4">
          お店の様子やイベント情報は
          <br />
          Instagramでも日々お届けしています
        </p>
        <a
          href="https://www.instagram.com/le_panier_benaton/"
          target="_blank"
          className="inline-block px-6 py-3 bg-stone-800 text-white rounded-lg hover:bg-stone-700 transition-colors dark:bg-stone-200 dark:text-stone-800 dark:hover:bg-stone-300"
        >
          Instagramを見る
        </a>
      </div>
    </section>
  );
}
