import Image from "next/image";
import { ReactNode } from "react";

type FeatureSectionProps = {
  imageSrc: string;
  imageAlt: string;
  imageObjectPosition: string;
  title: string;
  children: ReactNode;
};

export default function FeatureSection({ imageSrc, imageAlt, imageObjectPosition, title, children }: FeatureSectionProps) {
  return (
    <div className="grid md:grid-cols-2 gap-6">
      <Image
        className={`w-full object-cover rounded-lg aspect-video ${imageObjectPosition}`}
        src={imageSrc}
        alt={imageAlt}
        width={1523}
        height={634}
        priority
      />
      <div className="text-gray-800 dark:text-gray-100 leading-[1.7] px-2">
        <h3 className="text-xl font-bold font-serif mb-2">
          {title}
        </h3>
        {children}
      </div>
    </div>
  );
}
