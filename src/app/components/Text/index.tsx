import React from "react";

const variantClasses = {
  h1: "font-bold text-2xl md:text-[22px] sm:text-xl",
  h2: "text-base",
  h3: "font-bold sm:text-5xl md:text-5xl text-[140px]",
};

const Text = ({
  children,
  className = "",
  variant,
  as,
  ...restProps
}) => {
  const Component = as || "span";
  return (
    <Component
      className={`${className} ${variant && variantClasses[variant]}`}
      {...restProps}
    >
      {children}
    </Component>
  );
};

export { Text };
