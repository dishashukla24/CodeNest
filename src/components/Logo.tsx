import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = ({ w, h }: { w?: number; h?: number }) => {
  return (
    <Link href={"/"}>
      <Image
        src={"/logo.png"}
        width={w ?? 150}
        height={h ?? 80}
        alt="One Editor"
      />
    </Link>
  );
};

export default Logo;