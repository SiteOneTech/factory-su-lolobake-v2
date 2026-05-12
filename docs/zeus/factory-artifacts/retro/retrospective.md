# Sprint Retrospective - sprint-001

Project: `factory-lolobake-v2-001`

## Outcome

- Public preview recovered and published at `https://kidu.app/p/lolobake-v2/`.
- Product repo branch `feat/lolobake-bilingual-foundation` now includes the required KIDU subpath fix, Preview Lab credit, and WhatsApp inquiry handoff.
- Factory publication catalog now includes `lolobake-v2`.
- Release evidence is recorded in `roles/release_log.md` and `handoff/factory_completion_report.md`.

## What Failed

1. The release path was not encoded in the Factory agent context, so Zeus left the project in `HOLD` with "kidu.app deploy mechanism unknown".
2. A blocked owner artifact was incorrectly treated as success because the callback adapter only recognized `BLOCKED_...` when it appeared as a standalone token.
3. First recovery deploy produced HTTP 200 but the app was not actually usable because Vite emitted root-relative assets for a subpath preview.
4. The global supervisor flagged the project only after manual inspection, not through an automatic release recovery loop.

## Correctives Applied

- Published through the canonical KIDU Preview Lab path: `preview-lab deploy-static <slug> <dist>`.
- Added `base: './'` to the product Vite config so assets load under `/p/lolobake-v2/`.
- Added required `desarrollado por: SitioUno Factory` credit to static HTML and visible footer.
- Replaced simulated form submit with WhatsApp prefilled lead handoff.
- Updated Sicilia delegate receiver blocker detection for embedded blocked tokens such as `EXECUTION_NOT_STARTED_BLOCKED_BY_UPSTREAM_EXECUTION_PACKET`.
- Restarted the canonical `openclaw-delegate-sicilia.service`.

## Follow-Up

- Move Preview Lab release instructions into the agent prompt/tool contract for Rene Release and Zeus.
- Add a reusable release worker command that can deploy static Vite/React artifacts, verify subpath assets, and register the publication record.
- Keep earlier failed gate artifacts visible; do not rewrite them as if the initial pass succeeded.
