import React from "react"
import { EditDate } from "../EditDate"

type EditButtonProps = {
  filePath: string
  editDate?: string
}

export const EditButton = ({ editDate }: EditButtonProps) => {
  if (!editDate) {
    return null
  }

  return (
    <div className="flex flex-wrap gap-docs_0.5 mt-docs_2 text-band-store-fg-subtle">
      <EditDate date={editDate} />
    </div>
  )
}
