# Sprint 001 Plan — LOLO's Bake v2

## Document Control

- **Project ID:** `factory-lolobake-v2-001`
- **Project Title:** `LOLO's Bake v2 — Sitio Web Bilingüe + Análisis Estratégico`
- **Project Slug:** `lolobake-v2`
- **Stage:** `READY_FOR_SPRINT`
- **Work Order:** `factory-lolobake-v2-001:ready-for-sprint`
- **Sprint ID:** `sprint-001`
- **Stage Owner:** `leo-orquestador`
- **Expected Preview:** `https://kidu.app/p/lolobake-v2/`
- **Repository:** `SiteOneTech/factory-su-lolobake-v2`
- **Sponsor Proxy:** `Zeus`
- **PMO Owner:** `Ana PMO`

## Stage Intent

Convert the finalized brief, research dossier, and strategic framing into a bounded Sprint 001 execution packet so specialists can work without ambiguity and without bypassing product, architecture, QA, security, or release gates.

This artifact does **not** close Discovery, Product Shaping, Architecture Review, QA, Security Review, or Release. It defines the sprint structure, dependencies, evidence expectations, and handoffs required to begin governed execution.

## Sprint Goal

Deliver the first reviewable increment of **LOLO's Bake v2** as a bilingual, inquiry-first brand website for South Florida custom cake buyers, paired with the strategic analysis deliverable required by the brief.

Sprint 001 should produce:
1. a bilingual marketing site MVP;
2. a functioning inquiry path via WhatsApp + form;
3. localized ES/EN copy foundations;
4. visual gallery and trust-building structure;
5. draftable strategic-report inputs and evidence for downstream QA/release.

## Definition of Ready Assessment

Sprint 001 is ready to assign **provided the upstream specialist artifacts are attached and accepted in Hermes/Core**:

- Discovery has informed market/competitive direction;
- Product shaping has converted the brief into page/flow/content requirements;
- Architecture has defined the implementation shape and deployment approach;
- Repo and preview targets are already known;
- Non-goals are explicit enough to prevent ecommerce/admin drift.

## Sprint Scope

### In Scope
- bilingual ES/EN landing experience;
- brand storytelling and UVP presentation;
- gallery/catalog presentation for cakes;
- inquiry-first conversion flow;
- WhatsApp CTA and inquiry form;
- mobile-first responsive implementation;
- basic SEO for Miami custom cakes in ES/EN;
- strategic analysis packaging inputs for Notion report;
- copy framework foundations for both languages.

### Out of Scope
- ecommerce/cart/checkout;
- order-management backoffice;
- inventory system;
- delivery-service integrations;
- admin panel;
- PWA/native app;
- additional languages beyond ES/EN;
- full brand system or paid-media strategy.

## Sprint Backlog

### Epic 1 — Strategic Content and Positioning Foundation

**Objective:** Turn brief + research into execution-ready messaging and conversion direction for the website and the Notion strategic report.

**Primary Owner:** `mia-producto`  
**Support:** `vera-research`, `iris-ux`

**Scope:**
- finalize positioning lane for South Florida;
- define tone of voice in ES/EN;
- define conversion funnel for inquiry-first journey;
- define key messages by section;
- frame competitive differentiation vs. Tantay, ETCakes, Casagioia.

**Expected Artifacts:**
- PRD / shaping artifact updates;
- bilingual messaging framework;
- CTA hierarchy;
- strategic-report input notes.

**Acceptance Criteria:**
- clear primary audience and buyer journey;
- bilingual copy direction approved for MVP;
- homepage and inquiry CTA logic unambiguous;
- strategic analysis requirements traceable to outputs.

---

### Epic 2 — Bilingual Site MVP

**Objective:** Implement the public-facing bilingual marketing site for LOLO's Bake.

**Primary Owner:** `clara-claude` or `ciro-codex`  
**Support:** `iris-ux`, `bruno-integrador`

**Scope:**
- homepage with storytelling and UVP;
- ES/EN localized content toggle;
- gallery/catalog section;
- inquiry section with WhatsApp and form CTA;
- mobile-first responsive layout;
- footer and preview compliance.

**Expected Artifacts:**
- implementation diff in canonical repo;
- UI components/pages;
- localization/content structure;
- deployment-ready preview slice.

**Acceptance Criteria:**
- localized ES/EN content is manual and intentional;
- no machine-translation placeholder behavior;
- gallery and inquiry paths are visible and usable;
- preview route works at KIDU target.

---

### Epic 3 — Technical SEO and Inquiry Flow

**Objective:** Ensure discoverability and lead capture quality for bilingual Miami cake searches.

**Primary Owner:** `clara-claude` or `ciro-codex`  
**Support:** `mia-producto`, `sofia-secdevops`

**Scope:**
- basic metadata and page semantics;
- keyword-aware headings for ES/EN;
- WhatsApp CTA behavior;
- inquiry form behavior and validations;
- low-risk handling of submitted contact data.

**Expected Artifacts:**
- SEO configuration notes;
- inquiry form implementation;
- validation behavior notes;
- QA checklist inputs.

**Acceptance Criteria:**
- SEO basics present for primary search intent;
- inquiry flow works on mobile and desktop;
- no unnecessary sensitive-data collection;
- failure/empty states are clear.

---

### Epic 4 — Strategic Analysis Deliverable Packaging

**Objective:** Prepare the strategic-analysis output path required by the brief.

**Primary Owner:** `dario-docs` or `mia-producto` for content handoff  
**Support:** `vera-research`, `ana-pmo`

**Scope:**
- structure the Notion-ready strategic report;
- capture positioning lane, tone, CTA funnel, journey map, competitive framing;
- ensure outputs match sponsor expectations.

**Expected Artifacts:**
- report outline / content package;
- evidence links to source research and shaping decisions;
- handoff notes for Zeus/approved writer.

**Acceptance Criteria:**
- all strategic-analysis items from brief are covered;
- output is readable as Notion-ready report content;
- website execution and strategic-report content stay aligned.

## Sprint Stories

### Story S1 — Finalize bilingual messaging and positioning
- **Owner:** `mia-producto`
- **Depends on:** Discovery evidence
- **Outputs:** positioning lane, tone guide, CTA strategy, copy framework
- **Gate:** Product shaping details ready for implementation

### Story S2 — Map repository and implementation surface
- **Owner:** `rafa-cartografo`
- **Depends on:** Architecture input
- **Outputs:** file/path map, route/component inventory, deployment touchpoints
- **Gate:** implementation workers have exact repo touchpoints

### Story S3 — Validate UX journey and bilingual content behavior
- **Owner:** `iris-ux`
- **Depends on:** S1
- **Outputs:** journey map, section order, language-toggle UX, mobile content behavior
- **Gate:** UX criteria ready for build

### Story S4 — Implement bilingual landing and gallery MVP
- **Owner:** `clara-claude` or `ciro-codex`
- **Depends on:** S1, S2, S3
- **Outputs:** landing page, gallery, localized content structure
- **Gate:** code review ready

### Story S5 — Implement inquiry-first conversion flow
- **Owner:** `clara-claude` or `ciro-codex`
- **Depends on:** S1, S3
- **Outputs:** WhatsApp CTA, inquiry form, validation states
- **Gate:** code review ready

### Story S6 — Add SEO and preview-readiness slice
- **Owner:** `clara-claude` or `ciro-codex`
- **Depends on:** S4, S5
- **Outputs:** metadata, semantic structure, preview-ready route
- **Gate:** code review ready

### Story S7 — Integration and diff review
- **Owner:** `bruno-integrador`
- **Depends on:** S4, S5, S6
- **Outputs:** review findings, maintainability notes, readiness assessment
- **Gate:** review findings resolved or accepted

### Story S8 — QA + Browser QA
- **Owners:** `tina-qa`, `belen-browser`
- **Depends on:** S7
- **Outputs:** QA report, Playwright/browser evidence, responsive validation
- **Gate:** required QA checks pass or regate opens

### Story S9 — Low-risk security review
- **Owner:** `sofia-secdevops`
- **Depends on:** S7
- **Outputs:** exposure review, form/data handling review, secret hygiene notes
- **Gate:** no blocking security issues

### Story S10 — Release handoff package
- **Owner:** `rene-release`
- **Depends on:** S8, S9
- **Outputs:** preview verification, handoff notes, release package
- **Gate:** ready for Zeus Acceptance and Release stage

## Priority Order

1. S1 — Finalize bilingual messaging and positioning  
2. S2 — Map repository and implementation surface  
3. S3 — Validate UX journey and bilingual content behavior  
4. S4 — Implement bilingual landing and gallery MVP  
5. S5 — Implement inquiry-first conversion flow  
6. S6 — Add SEO and preview-readiness slice  
7. S7 — Integration and diff review  
8. S8 — QA + Browser QA  
9. S9 — Low-risk security review  
10. S10 — Release handoff package

## Dependency Map

```text
S1 ─┬─> S4 ─┬─> S6 ─> S7 ─┬─> S8 ─┬─> S10
    │       └─> S5 ───────┘       └─> S9 ─┘
S2 ─┘
S3 ─┘
```

## Branch / Worktree / Engine Plan

Recommended execution discipline:

- **One story group, one branch, one worktree, one engine at a time**
- Suggested branches:
  - `feat/lolobake-bilingual-foundation`
  - `feat/lolobake-inquiry-flow`
  - `feat/lolobake-seo-preview`
- Suggested routing:
  - shaping/content clarification: `mia-producto`, `iris-ux`
  - repo mapping: `rafa-cartografo`
  - implementation: `ciro-codex` for bounded slices, `clara-claude` for broader multi-file UI work
  - review: `bruno-integrador`
  - QA/browser: `tina-qa`, `belen-browser`
  - security: `sofia-secdevops`

## Required Evidence Per Story

| Story | Required Evidence |
| --- | --- |
| S1 | positioning lane, tone guide, CTA/copy framework |
| S2 | repo map, page/component touchpoints |
| S3 | UX journey, language-toggle behavior, mobile criteria |
| S4 | landing/gallery diff, localized content proof |
| S5 | WhatsApp + form flow proof, validation states |
| S6 | SEO config proof, preview-readiness notes |
| S7 | code review findings and disposition |
| S8 | QA report + browser/Playwright evidence |
| S9 | security review notes for inquiry/data exposure |
| S10 | preview URL confirmation, release handoff package |

## QA Gates

Mandatory gates for this sprint increment:

- build/lint/typecheck as supported by stack;
- bilingual content verification;
- responsive/mobile checks;
- inquiry CTA and form validation checks;
- basic accessibility and navigation smoke tests;
- Playwright/browser evidence for key user flows;
- preview verification at `https://kidu.app/p/lolobake-v2/`.

## Risks

1. **Content dependency risk:** bilingual copy quality may bottleneck implementation if messaging is not stabilized early.
2. **Asset risk:** professional visual impact depends on available photos/assets and may require careful fallback treatment.
3. **Localization risk:** ES/EN toggle can degrade UX if structure is bolted on late.
4. **Conversion risk:** inquiry flow may be functional but weak if CTA hierarchy is not resolved in shaping.
5. **Strategic-output drift risk:** website build and Notion strategic analysis could diverge without explicit artifact linkage.

## Assumptions

1. Discovery and product-shaping inputs already exist or are sufficient for sprint decomposition.
2. The canonical repo `factory-su-lolobake-v2` exists and is the only implementation target.
3. Preview deployment will use KIDU Preview Lab.
4. Security risk remains low because the site is inquiry-first and not transactional.
5. WhatsApp CTA may be implemented as a direct lead path without complex provider automation in MVP.

## Open Questions

1. What exact photo/visual asset set is approved for launch-quality use?
2. Is the inquiry form expected to send to email, store leads, or only hand off via current site workflow?
3. What exact language-toggle pattern is preferred: full-route locale switch or in-page content switch?
4. Is the Notion strategic report produced as part of the same sprint closeout or as parallel documentation handoff?
5. Are competitor screenshots/examples already archived in Discovery evidence for downstream reuse?

## Stop Conditions / Escalation Conditions

Escalate before implementation if any of the following occurs:

- no approved bilingual copy direction exists;
- visual assets are insufficient for a professional MVP without sponsor acceptance of fallback treatment;
- inquiry handling requires unapproved external service or sensitive data storage;
- preview target constraints conflict with chosen implementation stack;
- strategic-report expectations expand into full branding/campaign work.

## Exact Next Gate Recommendation

**Recommendation:** proceed to **execution planning kickoff with specialist-confirmed inputs**, then hand off implementation slices to the assigned execution worker(s) only after confirming:

1. `mia-producto` has finalized the bilingual messaging and CTA framework;
2. `rafa-cartografo` has mapped the repo touchpoints;
3. `iris-ux` has confirmed the ES/EN toggle and mobile journey behavior.

Once those inputs are attached, Ana PMO can instantiate Sprint 001 tasks and execution can begin without bypassing any specialist gate.
