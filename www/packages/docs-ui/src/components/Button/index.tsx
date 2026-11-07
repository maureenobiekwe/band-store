import clsx from "clsx"
import React from "react"

export type ButtonVariants =
  | "primary"
  | "secondary"
  | "transparent"
  | "transparent-clear"

export type ButtonType = "default" | "icon"

export type ButtonProps = {
  isSelected?: boolean
  disabled?: boolean
  variant?: ButtonVariants
  className?: string
  buttonType?: ButtonType
  buttonRef?: React.LegacyRef<HTMLButtonElement>
  type?: "button" | "submit" | "reset"
} & React.HTMLAttributes<HTMLButtonElement>

export const Button = ({
  className,
  children,
  variant = "primary",
  buttonType = "default",
  buttonRef,
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: [
      "px-docs_0.5 py-docs_0.25 rounded-docs_sm cursor-pointer",
      "bg-band-store-button-inverted",
      "hover:bg-band-store-button-inverted-hover hover:no-underline",
      "active:bg-band-store-button-inverted-pressed",
      "focus:bg-band-store-button-inverted",
      "shadow-button-inverted focus:shadow-button-inverted-focused transition-shadow",
      "dark:shadow-button-inverted-dark dark:focus:shadow-button-inverted-focused-dark",
      "disabled:bg-band-store-bg-disabled disabled:shadow-button-neutral dark:disabled:shadow-button-neutral-dark",
      "disabled:cursor-not-allowed",
      "text-compact-small-plus text-band-store-contrast-fg-primary",
      "[&_a]:text-band-store-contrast-fg-primary",
      "disabled:text-band-store-fg-disabled",
      "[&_a]:disabled:text-band-store-fg-disabled",
      "select-none",
    ],
    secondary: [
      "px-docs_0.5 py-docs_0.25 rounded-docs_sm cursor-pointer",
      "bg-band-store-button-neutral",
      "hover:bg-band-store-button-neutral-hover hover:no-underline",
      "active:bg-band-store-button-neutral-pressed",
      "focus:bg-band-store-button-neutral",
      "disabled:bg-band-store-bg-disabled disabled:shadow-button-neutral dark:disabled:shadow-button-neutral-dark",
      "disabled:cursor-not-allowed disabled:text-band-store-fg-disabled",
      "text-compact-small-plus text-band-store-fg-base",
      "[&_a]:text-band-store-fg-base",
      "shadow-button-neutral focus:shadow-button-neutral-focused active:shadow-button-neutral transition-shadow",
      "dark:shadow-button-neutral dark:focus:shadow-button-neutral-focused dark:active:shadow-button-neutral",
      "select-none",
    ],
    transparent: [
      "px-docs_0.5 py-docs_0.25 rounded-docs_sm cursor-pointer",
      "bg-transparent shadow-none border-0 outline-none",
      "text-compact-small-plus text-band-store-fg-base",
      "hover:bg-band-store-button-transparent-hover",
      "active:bg-band-store-button-transparent-pressed",
      "focus:bg-band-store-bg-base focus:shadow-button-neutral-focused dark:focus:shadow-button-neutral-focused-dark",
      "disabled:bg-transparent disabled:shadow-button-neutral dark:disabled:shadow-button-neutral-dark",
      "disabled:cursor-not-allowed disabled:text-band-store-fg-disabled",
    ],
    transparentClear: [
      "px-docs_0.5 py-docs_0.25 rounded-docs_sm cursor-pointer",
      "bg-transparent shadow-none border-0 outline-none",
      "text-compact-small-plus text-band-store-fg-muted",
      "hover:bg-band-store-button-transparent-hover",
      "active:bg-band-store-button-transparent-pressed",
      "focus:bg-band-store-bg-base focus:shadow-button-neutral-focused dark:focus:shadow-button-neutral-focused-dark",
      "disabled:bg-transparent disabled:shadow-button-neutral dark:disabled:shadow-button-neutral-dark",
      "disabled:cursor-not-allowed disabled:text-band-store-fg-disabled",
    ],
  }

  return (
    <button
      className={clsx(
        "inline-flex flex-row justify-center items-center gap-[6px] font-base",
        variant === "primary" && variantClasses.primary,
        variant === "secondary" && variantClasses.secondary,
        variant === "transparent" && variantClasses.transparent,
        variant === "transparent-clear" && variantClasses.transparentClear,
        buttonType === "icon" && "!px-docs_0.25",
        className
      )}
      ref={buttonRef}
      {...props}
    >
      {children}
    </button>
  )
}
