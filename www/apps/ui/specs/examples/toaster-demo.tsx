import { Button, Toaster, toast } from "@band-store/ui"

export default function ToasterDemo() {
  return (
    <>
      <Toaster />
      <Button
        onClick={() =>
          toast.info("Info", {
            description: "The quick brown fox jumps over the lazy dog.",
          })
        }
      >
        Show
      </Button>
    </>
  )
}
