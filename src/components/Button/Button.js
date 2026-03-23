import React from "react";

const variantClasses = {
  primary:
    "bg-heritage-red text-white border-heritage-red shadow-sm hover:bg-heritage-red-dark hover:border-heritage-red-dark hover:shadow-[0_4px_20px_rgba(167,21,21,0.3)] hover:-translate-y-0.5",
  secondary:
    "bg-transparent text-heritage-gold border-heritage-gold hover:bg-heritage-gold hover:text-white hover:shadow-[0_4px_20px_rgba(201,162,39,0.3)] hover:-translate-y-0.5",
  ghost:
    "bg-transparent text-academic-black border-transparent hover:bg-academic-black/5",
  gradient:
    "bg-gradient-to-br from-heritage-red to-heritage-gold text-white border-transparent shadow-md hover:shadow-[0_6px_25px_rgba(167,21,21,0.35),0_4px_15px_rgba(201,162,39,0.25)] hover:-translate-y-0.5",
};

const sizeClasses = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-3.5 text-[1.05rem]",
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  className = "",
  icon,
  fullWidth = false,
  type = "button",
}) {
  const classes = [
    "inline-flex items-center justify-center gap-2 font-body font-semibold border-2 rounded-lg cursor-pointer transition-all duration-250 ease-out whitespace-nowrap relative overflow-hidden active:scale-[0.97]",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={classes}>
        {variant === "gradient" && (
          <>
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white opacity-40 blur-[1px]" />
            <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white opacity-90 shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white opacity-40 blur-[1px]" />
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white opacity-90 shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
          </>
        )}
        {icon && (
          <span className="inline-flex items-center text-[1.15em] relative z-10">
            {icon}
          </span>
        )}
        <span className="relative z-10">{children}</span>
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {variant === "gradient" && (
        <>
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white opacity-40 blur-[1px]" />
          <span className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white opacity-90 shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-[2px] bg-white opacity-40 blur-[1px]" />
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[1px] bg-white opacity-90 shadow-[0_0_8px_3px_rgba(255,255,255,0.8)]" />
        </>
      )}
      {icon && (
        <span className="inline-flex items-center text-[1.15em] relative z-10">
          {icon}
        </span>
      )}
      <span className="relative z-10">{children}</span>
    </button>
  );
}