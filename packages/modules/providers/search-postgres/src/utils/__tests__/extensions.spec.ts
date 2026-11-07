import { textSearchConfigName, wordSimilarityCall } from "../extensions"

describe("search extensions helpers", () => {
  it("builds the bandStore text search config name", () => {
    expect(textSearchConfigName("english")).toBe("band-store_search_english")
  })

  it("builds word_similarity()", () => {
    expect(wordSimilarityCall("?", `"search_text"`)).toBe(
      `word_similarity(?, "search_text")`
    )
  })
})
