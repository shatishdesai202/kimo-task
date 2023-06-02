import Image from "next/image";
import React from "react";

const Img = ({
  className,
  src = "/defaultNoData.png",
  alt = "testImg",
  ...restProps
}) => {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={"500"}
      height={"500"}
      {...restProps}
      loading={"lazy"}
    />
  );
};
export { Img };
