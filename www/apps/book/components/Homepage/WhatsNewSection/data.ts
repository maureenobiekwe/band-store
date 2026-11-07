export const MAX_WHATS_NEW_ITEMS = 4

export type WhatsNewItem = {
  title: string
  tag: string
} & (
  | {
      comingSoon: true
      earlyAccess?: never
      date?: never
      link?: never
    }
  | {
      earlyAccess: true
      comingSoon?: never
      date?: never
      link: string
    }
  | {
      comingSoon?: false
      earlyAccess?: false
      /**
       * ISO date (`YYYY-MM-DD`) the feature shipped. Used for sorting and display.
       */
      date: string
      link: string
    }
)

export const whatsNewItems: WhatsNewItem[] = [
  {
    title: "RBAC & SSO",
    tag: "Enterprise",
    date: "2026-11-04",
    link: "",
  },
  {
    title: "BandStore MCP",
    tag: "BandStore Cloud",
    date: "2026-10-20",
    link: "",
  },
  {
    title: "BandStore Security",
    date: "2026-11-04",
    link: "",
    tag: "BandStore Cloud",
  },
  {
    title: "BandStore Search",
    tag: "BandStore Cloud",
    date: "2026-09-22",
    link: "",
  },
  {
    title: "Exported Admin Components",
    date: "2026-09-11",
    link: "",
    tag: "BandStore OS",
  },
  {
    title: "Log Drains",
    date: "2026-08-21",
    link: "",
    tag: "BandStore Cloud",
  },
  {
    title: "AI Assistant in Dashboard",
    date: "2026-08-19",
    link: "",
    tag: "BandStore Cloud",
  },
]
