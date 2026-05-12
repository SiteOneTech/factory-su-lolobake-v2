# Architecture Brief — LOLO's Bake v2 — Sitio Web Bilingüe + Análisis Estratégico

## Document Control
- Project ID: `factory-lolobake-v2-001`
- Project title: `LOLO's Bake v2 — Sitio Web Bilingüe + Análisis Estratégico`
- Project slug: `lolobake-v2`
- Work order: `factory-lolobake-v2-001:architecture-review`
- Stage: `ARCHITECTURE_REVIEW`
- Owner: `nico-arquitecto`
- Artifact path: `artifacts/architecture_brief.md`
- Expected preview: `https://kidu.app/p/lolobake-v2/`
- Repo: `SiteOneTech/factory-su-lolobake-v2`
- Status: `PROPOSED FOR NEXT GATE REVIEW`

## Decision
Recommend a **content-first bilingual marketing site with a lightweight inquiry backend and separate strategic-content deliverables**.

The smallest durable architecture is:

1. **Static-or-hybrid bilingual website** for landing, gallery, and inquiry flow.
2. **Light server boundary** only for inquiry submission, validation, anti-spam, and optional analytics/event logging.
3. **Structured localized content model** for ES/EN, not runtime machine translation.
4. **WhatsApp treated as an external conversion channel**, linked and optionally prefilled, not a conversational system.
5. **Strategic analysis artifacts kept separate from runtime site logic**, even if their outputs drive copy, IA, and CTA decisions.

This is the simplest sufficient architecture because the product is a lead-generation site, not ecommerce, not an admin platform, and not a workflow app.

## Context
The brief, research dossier, and product shaping package align on a consistent product truth:

- LOLO's Bake wins through **visual trust, custom celebration fit, bilingual clarity, and inquiry-first conversion**.
- The strongest observable differentiators are **Swiss buttercream**, **custom decoration**, **made-to-order freshness**, and **Miami-local relevance**.
- The architecture must support:
  - bilingual ES/EN storytelling;
  - visual gallery performance;
  - WhatsApp + form inquiry entry points;
  - basic localized SEO;
  - mobile-first behavior;
  - later QA/browser validation.
- The architecture must explicitly avoid drifting into:
  - ecommerce;
  - admin dashboards;
  - order management;
  - delivery integrations;
  - extra product lines unsupported by evidence.

The strategic analysis deliverable matters, but it is not a second software product. It should shape the site’s content architecture, copy system, CTA hierarchy, and funnel behavior.

## Options Considered

### Option A — Pure static site with only outbound WhatsApp
**Pros**
- Lowest implementation complexity
- Very fast delivery path
- Minimal attack surface

**Cons**
- Weak fallback if users prefer form inquiry
- No structured lead capture
- Less observable funnel behavior
- Harder to support richer validation and QA around inquiry states

### Option B — Static-or-hybrid bilingual site with lightweight inquiry backend **(Recommended)**
**Pros**
- Keeps implementation small
- Supports both WhatsApp and form entry
- Good fit for SEO, performance, and mobile conversion
- Easier validation, analytics, QA, and future refinement
- Maintains clean boundary between site content and operational logic

**Cons**
- Slightly more complexity than static-only
- Requires careful content modeling and spam protection

### Option C — CMS-heavy or app-like architecture
**Pros**
- Higher editorial flexibility
- More future extensibility

**Cons**
- Overbuilt for current scope
- Adds operational overhead without corresponding product value
- Raises risk of architecture drift away from inquiry-first MVP

## Recommendation
Choose **Option B**.

Architect the product as a **lean bilingual conversion site** with these layers:

- **Presentation layer:** landing, gallery, inquiry UX
- **Content layer:** structured ES/EN localized copy and image metadata
- **Inquiry layer:** form validation + submission handling + WhatsApp CTA orchestration
- **Strategic artifact layer:** positioning, tone, funnel, and copy framework maintained as documentation inputs, not runtime dependencies

## Proposed Architecture

### 1. Experience Layer
Primary public surfaces:

- **Home / Landing**
  - hero
  - UVP
  - brand story
  - trust cues
  - occasion framing
  - inquiry CTAs

- **Gallery**
  - visual proof
  - category or occasion grouping
  - image metadata and captions
  - CTA re-entry points

- **Inquiry Surface**
  - quote request form
  - WhatsApp CTA
  - expectations / process hints

- **Language Toggle**
  - explicit ES/EN switch
  - localized routes or localized state
  - no machine translation fallback as shipped UX

Architectural rule:
**The bilingual experience must be authored content, not runtime auto-translation.**

### 2. Content Architecture Layer
Use a structured content model for both languages.

Recommended content domains:
- site settings
- navigation labels
- hero copy
- brand story blocks
- value propositions
- occasion/category labels
- gallery item metadata
- inquiry form labels/help text
- CTA labels
- SEO metadata
- footer/contact copy

Recommended structure:
- one shared content schema;
- localized ES and EN variants per content object;
- explicit required-field validation so one language does not silently lag behind the other.

Architectural rule:
**Localization parity should be enforced by schema or content validation, not manual hope.**

### 3. Inquiry Layer
This is the only meaningful backend need in MVP.

Responsibilities:
- form input validation
- anti-spam / abuse control
- normalization of inquiry data
- delivery to configured sink
- success/failure state handling
- optional event logging

Suggested inquiry fields:
- name
- email
- phone or WhatsApp
- event type
- event date
- serving size / guest estimate
- inspiration / notes
- preferred language

Recommended endpoint boundary:
- `POST /api/inquiries`

Optional secondary endpoints:
- `POST /api/analytics/cta` if the implementation chooses lightweight CTA telemetry
- `GET /api/health` for QA/release diagnostics

### 4. WhatsApp Integration Boundary
WhatsApp is a **conversion entry point**, not a bot system in this project.

Recommended behavior:
- CTA opens WhatsApp with prefilled message templates
- templates vary by language
- templates can include event context when initiated from inquiry UX or gallery context

Examples:
- ES prefill: “Hola, me gustaría pedir información para un pastel personalizado…”
- EN prefill: “Hi, I’d like more information about a custom cake…”

Architectural rule:
**Do not build conversational automation, chat state, or order workflow into MVP architecture unless a later stage explicitly re-scopes the product.**

### 5. Media / Gallery Layer
Gallery images are central to conversion, so media architecture matters.

Requirements:
- responsive image variants
- compressed assets
- stable aspect-ratio handling
- alt text in ES/EN or at least language-aware fallback strategy
- optional occasion tags for filtering or grouping

Architectural rule:
**The gallery is not just decoration; it is proof-of-quality and must be treated as a first-class conversion asset.**

### 6. SEO Layer
Keep SEO foundational and localized.

Requirements:
- localized page titles
- localized meta descriptions
- semantic headings
- Open Graph basics
- canonical/alternate language strategy where applicable
- crawlable text supporting:
  - `custom cakes Miami`
  - `pasteles personalizados Miami`

Architectural rule:
**SEO should come from content architecture, not last-minute metadata patching.**

### 7. Strategic Analysis Deliverable Boundary
The “análisis estratégico” should not become embedded application logic.

It should live as stage/report outputs containing:
- positioning lane
- tone of voice
- messaging framework
- UX journey map
- CTA/funnel recommendations
- competitive framing

Architecture implication:
- these outputs feed copywriting, IA, and UX decisions;
- they should not require runtime services or special back-office tooling.

### 8. QA and Release Readiness
Architecture must support later:
- Playwright flows for ES/EN switch, gallery access, CTA paths, and inquiry submission
- mobile and desktop browser validation
- performance checks
- accessibility review
- safe release on `kidu.app/p/lolobake-v2/`

## Key Architectural Decisions

### AD-01 — Content-first architecture
The product is primarily a bilingual content and conversion system, not a business operations system.

### AD-02 — Inquiry backend stays lightweight
Only build the smallest server boundary needed for reliable form handling, validation, and anti-spam.

### AD-03 — WhatsApp is a CTA channel, not a workflow engine
Use prefilled deep links or equivalent lightweight patterns instead of building chat orchestration.

### AD-04 — ES/EN are first-class authored experiences
No runtime auto-translation dependency in MVP.

### AD-05 — Strategic deliverables remain documentation outputs
Positioning and messaging strategy shape the experience but do not become runtime modules.

### AD-06 — No ecommerce creep
Do not introduce cart, checkout, pricing engine, or order-tracking concepts into architecture.

### AD-07 — Media performance is mission-critical
The gallery must be optimized because trust depends on visual proof and mobile performance.

## Suggested Module Boundaries
A clean implementation could separate:

- `site-shell`
- `localized-content`
- `gallery`
- `inquiry-form`
- `whatsapp-cta`
- `seo-metadata`
- `shared-ui`
- `validation`
- `analytics-events` (optional/lightweight)
- `tests/e2e`

## Consequences

### Positive
- Closely matches the real product scope
- Minimizes overengineering
- Preserves fast path to preview
- Supports bilingual trust and inquiry conversion well
- Makes QA and UX review easier through clear boundaries

### Tradeoffs
- Less editorial flexibility than a CMS-heavy setup
- Inquiry handling remains intentionally simple
- Future expansion into richer business operations would require new architecture, which is acceptable because it is out of scope now

## Rejected Alternatives

### Rejected: ecommerce-first architecture
Rejected because the brief explicitly excludes cart/checkout and the product is inquiry-first.

### Rejected: admin/CRM-style backend
Rejected because no admin panel, workflow system, or inventory/order tooling belongs in MVP.

### Rejected: machine-translated bilingual layer
Rejected because the brief requires localized content quality and the brand depends on warmth and nuance.

### Rejected: WhatsApp bot architecture
Rejected because the current scope only needs a conversion channel, not chat automation.

## Assumptions
1. Existing LOLO brand signals and Instagram media are strong enough to seed the visual and copy direction.
2. The inquiry sink can be handled via email, form destination, or equivalent lightweight operational endpoint in later stages.
3. ES and EN content will be authored/reviewed intentionally, not generated automatically.
4. WhatsApp remains a primary CTA path, especially on mobile.
5. Security posture stays low because there is no payment, account, or sensitive business workflow in scope.

## Risks
1. **Localization quality risk:** literal translation could weaken trust and premium warmth.
2. **Conversion ambiguity risk:** if inquiry expectations are unclear, users may admire the gallery and not convert.
3. **Asset quality risk:** inconsistent or weak media will reduce the value of the architecture.
4. **CTA dilution risk:** too many equal CTAs may weaken the inquiry-first funnel.
5. **Scope drift risk:** strategic analysis could accidentally expand into branding overhaul or campaign work if not bounded.
6. **Operational sink risk:** downstream teams still need a clean decision on where form inquiries land and how failures are surfaced.

## Open Questions
1. What exact destination should receive form inquiries in production-preview flow?
2. Should WhatsApp CTA remain persistent on mobile across all key sections?
3. Is gallery navigation better grouped primarily by occasion, by style, or hybrid?
4. Are there approved constraints on delivery geography, lead time, or order minimums that should be reflected later in copy and form logic?
5. Should the inquiry form include inspiration-upload later, or remain text-only for MVP?
6. Is bilingual SEO parity required on every major section, or only on core landing/inquiry surfaces?

## Verification Plan
Architecture should be considered ready for downstream planning when execution can verify:

1. localized ES/EN content renders correctly;
2. language toggle behaves predictably;
3. gallery assets load responsively and perform well on mobile;
4. inquiry form validates and submits successfully;
5. WhatsApp CTA opens the expected language-aware entry path;
6. no ecommerce implications appear in UI;
7. core SEO metadata exists in both languages;
8. preview is testable at `https://kidu.app/p/lolobake-v2/`.

## Exact Next Gate Recommendation
**Next gate recommendation: `READY_FOR_SPRINT` via `leo-orquestador`, with explicit coordination from `iris-ux` on page hierarchy, bilingual behavior, CTA persistence, and inquiry UX.**

Rationale:
- product intent and scope are now clear enough for implementation planning;
- the architecture is simple, bounded, and aligned with non-goals;
- downstream stages must still preserve specialist gates for UX, QA, security, release, and Zeus acceptance.
