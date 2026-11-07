import { Button } from "@band-store/ui"

export default function ButtonAsLink() {
  return (
    <Button asChild>
      <a href="" target="_blank" rel="noopener noreferrer">
        Open BandStore Website
      </a>
    </Button>
  )
}
