"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  alt: string;
  label: string;
  src: string;
  title?: string;
  className?: string;
};

export function ProjectImage({ alt, label, src, title = "PROJECT", className = "" }: ProjectImageProps) {
  const [isUnavailable, setIsUnavailable] = useState(false);

  return (
    <figure className={`project-image ${className}`}>
      {!isUnavailable ? (
        <>
          <Image src={src} alt={alt} width={900} height={1600} unoptimized onError={() => setIsUnavailable(true)} />
          <figcaption>{label}</figcaption>
        </>
      ) : (
        <div className="image-placeholder" role="img" aria-label={`${label} image placeholder`}>
          <span>{title.toUpperCase()}</span>
          <strong>{label}</strong>
          <em>IMAGE PLACEHOLDER</em>
        </div>
      )}
    </figure>
  );
}
