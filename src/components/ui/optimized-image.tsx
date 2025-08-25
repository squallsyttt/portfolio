import Image, { type ImageProps } from "next/image";

import { cn } from "@/lib/utils";

interface OptimizedImageProps extends Omit<ImageProps, "src"> {
  src: string;
  alt: string;
  quality?: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export function OptimizedImage({
  src,
  alt,
  quality = 75,
  className,
  priority = false,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  ...props
}: OptimizedImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      quality={quality}
      priority={priority}
      sizes={sizes}
      className={cn("object-cover transition-opacity duration-300", className)}
      {...props}
    />
  );
}

// 专门用于博客封面图的组件
interface BlogCoverImageProps {
  src: string;
  alt: string;
  className?: string;
}

export function BlogCoverImage({ src, alt, className }: BlogCoverImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={1200}
      height={630}
      quality={80}
      priority={false}
      sizes="(max-width: 768px) 100vw, 1200px"
      className={cn("rounded-lg", className)}
    />
  );
}

// 专门用于头像的组件
interface AvatarImageProps {
  src: string;
  alt: string;
  size?: number;
  className?: string;
}

export function AvatarImage({
  src,
  alt,
  size = 128,
  className,
}: AvatarImageProps) {
  return (
    <OptimizedImage
      src={src}
      alt={alt}
      width={size}
      height={size}
      quality={90}
      priority={true}
      sizes={`${size}px`}
      className={cn("rounded-full", className)}
    />
  );
}
