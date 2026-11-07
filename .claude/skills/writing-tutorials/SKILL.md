---
name: writing-tutorials
description: Creates Band Store documentation tutorials in two phases: first builds the tutorial feature in an example project (with planning, coding, and tests), then writes the MDX documentation. Use when creating a new how-to tutorial or integration guide for the Band Store docs. Handles both feature implementation and documentation writing, but only one phase at a time.
---

# Writing Band Store Tutorials

Guides an agent through creating a complete Band Store tutorial: building the feature in an example project, then writing the documentation.

## Two-Phase Approach

**Phase 1 — Build:** Gather requirements → plan with user → implement feature → add tests → confirm with user
**Phase 2 — Write:** Create step diagram → write per-step MD files → combine into final MDX → update sidebar → clean up

> **CRITICAL:** Never do both phases in one session. Complete Phase 1, get user confirmation, then reload this skill for Phase 2.

## Load Reference Files When Needed

> **Load at least one reference file before proceeding.**

| Task | Load |
|------|------|
| Starting Phase 1 (building) | `reference/building-phase.md` |
| Starting Phase 2 (writing) | `reference/writing-phase.md` + `reference/tutorial-conventions.md` + `reference/concept-definitions.md` |
| MDX patterns and components | `reference/tutorial-conventions.md` |
| Concept definitions (module, workflow, etc.) | `reference/concept-definitions.md` |

## Quick Reference

### File Locations

| Type | Content Path | Sidebar File |
|------|-------------|--------------|
| How-to tutorial | `www/apps/resources/app/how-to-tutorials/tutorials/{name}/page.mdx` | `www/apps/resources/sidebars/how-to-tutorials.mjs` |
| Integration guide | `www/apps/resources/app/integrations/guides/{name}/page.mdx` | `www/apps/resources/sidebars/integrations.mjs` |

### Development Skills to Load During Build

- Backend features → `band-store-dev:building-with-band-store`
- Admin UI → `band-store-dev:building-admin-dashboard-customizations`
- Storefront → `band-store-dev:building-storefronts`
- Third-party services → `context7` MCP or skills
- Band Store API questions → `mcp__band-store__ask_band-store_question`

## Common Mistakes

- [ ] Jumping straight to writing documentation without building the feature first
- [ ] Writing both phases in one session without user confirmation between them
- [ ] Writing Step 1 (Band Store installation) from scratch — use the pre-written template in `tutorial-conventions.md`
- [ ] Forgetting to update the sidebar after writing the tutorial MDX
- [ ] Leaving `_step-*.md` temp files after combining into final MDX
- [ ] Making tutorial code overly complex — tutorials are educational, keep it simple
