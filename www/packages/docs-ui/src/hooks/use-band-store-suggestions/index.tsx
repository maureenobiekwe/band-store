import { CardProps } from "../../components/Card"
import { bandStoreSuggestions } from "./suggestions"

const PUNCTIONATION = /[.,?;!]/g

type UseSuggestionsProps = {
  keywords: string | string[]
}

export const useBandStoreSuggestions = ({ keywords }: UseSuggestionsProps) => {
  if (!keywords.length) {
    return null
  }

  const keywordsArray = Array.isArray(keywords)
    ? keywords.map(formatWord)
    : keywords.split(" ").map(formatWord)

  let matchedSuggestion: CardProps | null = null

  keywordsArray.some((word) => {
    if (bandStoreSuggestions.has(word)) {
      matchedSuggestion = bandStoreSuggestions.get(word) || null
    }

    return matchedSuggestion !== null
  })

  return matchedSuggestion as CardProps | null
}

const formatWord = (word: string) => {
  return word.toLowerCase().trim().replace(PUNCTIONATION, "")
}
