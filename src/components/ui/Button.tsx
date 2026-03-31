"use client";

import { forwardRef } from "react";
import type { MouseEventHandler } from "react";
import Link from "next/link";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-accent-600 hover:bg-accent-700 active:bg-accent-800 text-white shadow-md hover:shadow-lg",
  secondary:
    "bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md",
  ghost:
    "bg-transparent hover:bg-slate-100 text-slate-700 hover:text-slate-900",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-base font-semibold",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      className = "",
      children,
      onClick,
      type = "button",
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-xl font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-600 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer";

    const classes = `${base} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

    if (href) {
      if (external) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={classes}
            onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href}
          className={classes}
          onClick={onClick as MouseEventHandler<HTMLAnchorElement> | undefined}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} type={type} className={classes} onClick={onClick} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
