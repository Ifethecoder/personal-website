// Preserve the original uppercase camera filenames; Next's image loader supports
// them, while its built-in TypeScript declarations cover lowercase extensions.
declare module "*.JPG" {
  const image: import("next/image").StaticImageData;
  export default image;
}
