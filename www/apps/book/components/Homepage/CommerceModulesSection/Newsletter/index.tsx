import clsx from "clsx"
import HomepageCodeIcon from "./Code"
import HomepageNewsletterForm from "../../NewsletterForm"

const HomepageNewsletter = () => {
  return (
    <div
      className={clsx(
        "p-2 w-full sm:w-1/2 lg:w-1/3",
        "flex flex-col gap-1",
        "bg-band-store-bg-component"
      )}
    >
      <div className="flex flex-col">
        <span className="text-medium-plus text-band-store-fg-base">
          Updates delivered monthly
        </span>
        <span className="text-medium text-band-store-fg-subtle">
          Get the latest product news and behind the scenes updates. Unsubscribe
          at any time.
        </span>
      </div>
      <HomepageCodeIcon />
      <HomepageNewsletterForm />
    </div>
  )
}

export default HomepageNewsletter
