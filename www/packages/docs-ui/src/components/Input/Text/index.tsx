import React from "react"
import clsx from "clsx"

export type InputTextProps = {
  className?: string
  addGroupStyling?: boolean
  passedRef?: React.Ref<HTMLInputElement>
} & React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>

export const InputText = ({
  addGroupStyling = false,
  className,
  passedRef,
  ...props
}: InputTextProps) => {
  return (
    <input
      {...props}
      className={clsx(
        "bg-band-store-bg-field-component shadow-border-base dark:shadow-border-base-dark",
        "rounded-docs_sm px-docs_0.5",
        "hover:bg-band-store-bg-field-component-hover",
        addGroupStyling && "group-hover:bg-band-store-bg-field-component-hover",
        "focus:border-band-store-border-interactive",
        "active:border-band-store-border-interactive",
        "disabled:bg-band-store-bg-disabled",
        "disabled:border-band-store-border-base",
        "placeholder:text-band-store-fg-muted",
        "disabled:placeholder:text-band-store-fg-disabled",
        "text-compact-small font-base",
        className
      )}
      ref={passedRef}
    />
  )
}
