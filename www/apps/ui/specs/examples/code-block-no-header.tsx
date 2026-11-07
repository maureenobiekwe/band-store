import { CodeBlock } from "@band-store/ui"

const snippets = [
  {
    label: "BandStore JS SDK",
    language: "jsx",
    code: `console.log("Hello, World!")`,
  },
]

export default function CodeBlockNoHeader() {
  return (
    <div className="w-full">
      <CodeBlock snippets={snippets}>
        <CodeBlock.Body />
      </CodeBlock>
    </div>
  )
}
