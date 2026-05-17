"use client";

import { useState } from "react";
import Image from "next/image";
import SectionHeading from "@/app/section-heading";

type ImageGalleryProps = {
  images: string[];
};

export default function ImageGallery({ images }: ImageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  if (images.length === 0) return null;

  return (
    <section className="border-y border-black/[0.08] dark:border-white/[0.07] bg-white dark:bg-[#0d0f14] px-4 pt-14 pb-16 md:pt-[104px] md:pb-28">
      <div className="max-w-5xl mx-auto">
        <SectionHeading en="Gallery" jp="ギャラリー" />

        <div className="relative w-full aspect-4/3 rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
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
      </div>
    </section>
  );
}
