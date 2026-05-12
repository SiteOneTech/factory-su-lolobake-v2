# Factory Artifact Manifest - LOLO's Bake v2

Project: `factory-lolobake-v2-001`
Slug: `lolobake-v2`
Preview: https://kidu.app/p/lolobake-v2/
Repository: https://github.com/SiteOneTech/factory-su-lolobake-v2
Branch: `feat/lolobake-bilingual-foundation`
Status: published after release recovery

## Purpose

This index mirrors the role-owned Factory artifacts that Zeus and Jean need for
Notion, QA review, release audit, and future reopening. The operational source
of truth remains the Factory workflow run; this repo mirror is the durable
GitHub evidence layer.

## Public Release Evidence

- Preview Lab URL: https://kidu.app/p/lolobake-v2/
- Browser smoke URL: https://kidu.app/p/lolobake-v2/?v=cdb90eb
- Product QA: `npm run lint` passed; `npm run build` passed.
- Runtime QA: nav anchors, ES/EN toggle, contact form, WhatsApp handoff, and
  visible `desarrollado por: SitioUno Factory` credit passed.

## Artifact Index

| Stage | Owner | Artifact | Path | SHA256 |
| --- | --- | --- | --- | --- |
| IDEA | zeus | Project brief | `docs/zeus/factory-artifacts/idea/project_brief.md` | `89d4c219bf2d75cea2fa805aa59c297d347f92eae1d6c1e2c9dcd2d3bf5fa183` |
| DISCOVERY | vera-research | Research dossier | `docs/zeus/factory-artifacts/discovery/research_dossier.md` | `df405a1d34ed24c672937b79f3b0746b320aa9bb63ac375291e5d31dd3e4bfa3` |
| PRODUCT_SHAPING | mia-producto | PRD | `docs/zeus/factory-artifacts/product/prd.md` | `b25f59e66a2ecacb12f9ac1a3d75e2c99ac2e9369e9b903ab85f734fba9e3b4a` |
| PRODUCT_SHAPING | mia-producto / zeus | Strategy report | `docs/zeus/factory-artifacts/product/strategy_report_notion.md` | `851886f44345436b4a3e99f1101f0b28a3150f06059a0ae3ad04a5d29b170d44` |
| ARCHITECTURE_REVIEW | nico-arquitecto | Architecture brief | `docs/zeus/factory-artifacts/architecture/architecture_brief.md` | `f9bde723da7066c90c1e1453c98178b028823cc110b1807c5062ad8d8860f571` |
| READY_FOR_SPRINT | leo-orquestador | Sprint plan | `docs/zeus/factory-artifacts/sprints/sprint-001/sprint_plan.md` | `42f6cd5166672d636934d5b7021e3af97131e49423c96adf0f8106345a51dc17` |
| EXECUTION | olga-openhands / recovery operator | Execution trace | `docs/zeus/factory-artifacts/execution/execution_trace.md` | `a98bf1a9da9db0bc879e1b589bda31ca91adb481211ba0ac04d49cff3aa8ee07` |
| CODE_REVIEW | bruno-integrador | Code review | `docs/zeus/factory-artifacts/review/code_review.md` | `85b34cb86e1ea0eb29a6f9800c327a2403ddb6efcb5ec0d50eee4ecc17dada26` |
| QA_VALIDATION | tina-qa / belen-browser | QA report | `docs/zeus/factory-artifacts/qa/qa_report.md` | `088dd8a4d0de081ba5ef04787899573e4c39fba799aac793265f0961d8929e8b` |
| SECURITY_REVIEW | sofia-secdevops | Security report | `docs/zeus/factory-artifacts/security/security_report.md` | `e657a13a14a9eb05260211bdb5362f2e162b8a10e3d9a99e113cd89628face56` |
| ZEUS_ACCEPTANCE | zeus | Completion report | `docs/zeus/factory-artifacts/acceptance/factory_completion_report.md` | `694499e1fc47d89a0a73f008d1da7f2a4463c2c50e46804d34be801ecbb527a6` |
| RELEASE | rene-release | Release log | `docs/zeus/factory-artifacts/release/release_log.md` | `f36dfb707c46de5ec075333045aca6e08f3d4d35766c631ff4c12ae8504f382e` |
| RELEASE | rene-release | Completion report | `docs/zeus/factory-artifacts/release/factory_completion_report.md` | `694499e1fc47d89a0a73f008d1da7f2a4463c2c50e46804d34be801ecbb527a6` |
| RETROSPECTIVE | ana-pmo | Retrospective | `docs/zeus/factory-artifacts/retro/retrospective.md` | `6e2a5707d78957c9dd96a6229fdb4b2c887ec66612e2bc35cb119f16eb63d95c` |
| MEMORY_UPDATE | dario-docs | Memory update | `docs/zeus/factory-artifacts/memory/memory_update.md` | `ca15eb0695226e34999f5114b41d93c6dc2727b4a865a58b3d4a304e6f267340` |

## Recovery Notes

- The initial release hold was valid: Zeus did not have the Preview Lab deploy
  command in its role/tool contract.
- The recovery route is `preview-lab deploy-static <slug> <dist>` on the KIDU
  Preview Lab VM.
- Vite projects served under `/p/<slug>/` must use `base: './'` or the preview
  can return HTTP 200 while JS/CSS assets 404.
- The Sicilia delegate receiver now detects embedded blocked tokens such as
  `EXECUTION_NOT_STARTED_BLOCKED_BY_UPSTREAM_EXECUTION_PACKET`.
