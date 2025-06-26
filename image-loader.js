export default function imageLoader({ src }) {
  const basePath =
    process.env.NODE_ENV === "production" ? "/toyosupit-fullbandsetlive" : "";
  if (src.startsWith("/")) {
    return `${basePath}${src}`;
  }
  return src;
}
