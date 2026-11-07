import clsx from "clsx"
import { HeadlineTags, ShadedBlock } from "docs-ui"
import Link from "next/link"
import { LinksSectionBloomIcon } from "./Icon"

const HomepageLinksSection = () => {
  const links: {
    tag: string
    links: {
      text: string
      link: string
    }[]
  }[] = [
    {
      tag: "Customize BandStore Application",
      links: [
        {
          link: "/learn/installation",
          text: "Install BandStore",
        },
        {
          link: "",
          text: "Deploy to Cloud",
        },
        {
          link: "",
          text: "Browse integrations",
        },
      ],
    },
    {
      tag: "Admin Development",
      links: [
        {
          link: "/learn/fundamentals/admin/widgets",
          text: "Build a UI widget",
        },
        {
          link: "/learn/fundamentals/admin/ui-routes",
          text: "Add a UI route",
        },
        {
          link: "",
          text: "Browse the UI library",
        },
      ],
    },
    {
      tag: "Storefront Development",
      links: [
        {
          link: "",
          text: "Explore storefront starter",
        },
        {
          link: "",
          text: "Build custom storefront",
        },
        {
          link: "",
          text: "Use agent skills",
        },
      ],
    },
    {
      tag: "BandStore Cloud",
      links: [
        {
          link: "",
          text: "Deploy from GitHub",
        },
        {
          link: "",
          text: "Preview environments",
        },
        {
          link: "",
          text: "BandStore Emails",
        },
      ],
    },
    {
      tag: "Agentic Development",
      links: [
        {
          link: "",
          text: "Agentic Deployments",
        },
        {
          link: "",
          text: "Agent Skills",
        },
        {
          link: "",
          text: "Docs MCP",
        },
      ],
    },
  ]

  return (
    <div className="w-full flex gap-0 flex-col md:flex-row flex-wrap border-b border-band-store-border-base">
      {links.map((section, index) => (
        <div
          key={index}
          className={clsx(
            "p-2 flex justify-between flex-col w-full md:w-1/3 gap-2 md:min-h-[320px]",
            "border-b border-band-store-border-base md:border-b-0",
            index !== 2 && "md:border-r",
            index > 2 && "md:border-t"
          )}
        >
          <HeadlineTags tags={[section.tag]} className="!justify-start" />
          <div className="flex flex-col gap-0.75">
            {section.links.map((link, linkIndex) => (
              <div className="flex gap-0.75" key={linkIndex}>
                <ShadedBlock className="!w-2 min-h-2" />
                {link.link ? (
                  <Link
                    href={link.link}
                    className="flex-1 text-band-store-fg-base text-h2 hover:underline hover:text-band-store-fg-interactive"
                  >
                    {link.text}
                  </Link>
                ) : (
                  <span className="flex-1 text-band-store-fg-subtle text-h2">
                    {link.text}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
      <div
        className={clsx(
          "p-2 flex justify-center items-center w-full md:w-1/3 gap-2 md:min-h-[320px]",
          "border-band-store-border-base md:border-t bg-band-store-bg-component"
        )}
      >
        <LinksSectionBloomIcon />
      </div>
    </div>
  )
}

export default HomepageLinksSection
