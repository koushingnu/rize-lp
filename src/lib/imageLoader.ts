export default function imageLoader({ src }: { src: string }) {
  if (src.startsWith("http")) {
    return src;
  }

  // srcが既にスラッシュで始まっている場合は、それを除去
  const path = src.startsWith("/") ? src.slice(1) : src;

  return path;
}
