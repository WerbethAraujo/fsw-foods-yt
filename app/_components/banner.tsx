import Image, { ImageProps } from "next/image";

const Banner = (props: ImageProps) => {
  return (
    <Image
      height={0}
      width={0}
      sizes="100vh"
      quality={100}
      {...props}
      className="h-auto w-full object-contain"
    />
  );
};

export default Banner;
