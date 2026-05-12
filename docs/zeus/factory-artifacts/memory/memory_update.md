# Memory Update — factory-lolobake-v2-001 (Release Recovery)

**Project:** `factory-lolobake-v2-001` — LOLO's Bake v2
**Date:** 2026-05-12T23:25:20Z
**Status:** ✅ **PUBLISHED — release recovery completed.**

---

## Decisión Final del Gate Monitor

Proyecto `factory-lolobake-v2-001` ha completado todos los gates de la Factory:

| Gate | Decisión | Evidencia |
|---|---|---|
| IDEA → DISCOVERY | ✅ APPROVED | research_dossier.md |
| DISCOVERY → PRODUCT_SHAPING | ✅ APPROVED | PRD + architecture |
| PRODUCT_SHAPING → ARCHITECTURE_REVIEW | ✅ APPROVED | architecture_brief.md |
| ARCHITECTURE_REVIEW → EXECUTION | ✅ APPROVED | Zeus directo (Anti-Pattern #11) |
| EXECUTION → CODE_REVIEW | ✅ APPROVED | Commit `a09dc7b`, build verificado |
| CODE_REVIEW → QA_VALIDATION | ✅ APPROVED | Build pass, lint fixed |
| QA_VALIDATION → SECURITY_REVIEW | ✅ APPROVED | Static site |
| SECURITY_REVIEW → ZEUS_ACCEPTANCE | ✅ APPROVED | Todos entregables |
| ZEUS_ACCEPTANCE → RELEASE | ✅ APPROVED | Handoffs finalizados |
| **RELEASE** | ✅ PUBLISHED | `https://kidu.app/p/lolobake-v2/` |

---

## Estado Publicado

El proyecto está publicado y registrado:

- Preview: `https://kidu.app/p/lolobake-v2/`
- Repo: `https://github.com/SiteOneTech/factory-su-lolobake-v2`
- Accepted commit: `cdb90eba89ee6ddd20ab312ef8bf32d897f3e2e0`
- Catalog slug: `lolobake-v2`
- Public catalog lookup: `factory_publications.py lookup --query lolobake`

---

## Recovery Lessons

- `kidu.app` deploy is not unknown: the current static route is KIDU Preview Lab on VM `sitiouno-preview-lab-01` with `preview-lab deploy-static`.
- For Vite/React previews under `/p/<slug>/`, use `base: './'` or assets may 404 while `index.html` returns 200.
- Preview Lab validates the exact credit string `desarrollado por: SitioUno Factory`.
- The Factory callback adapter must treat embedded blocked status tokens as failed/running callbacks, not completion.
- Browser QA must verify hydrated UI, not only HTTP 200.

---

## Anti-Patterns Documentados

- **#10**: kidu.app mecanismo desconocido — fixed by documenting and executing Preview Lab route
- **#11**: Pipeline desync — Zeus ejecutó directamente
- **#12**: Vite 8 EISDIR con favicon.svg — data URI workaround
- **#14**: Gateway HTTP 400 — gate decisions via artifact, no gateway API
- **#15**: ESLint Permission Denied — workaround documentado
- **#16**: Scope ambiguity inquiry form — WhatsApp como CTA principal
- **#17** *(nuevo)*: Research dossier existe pero estrategia nunca se escribió — Zeus lo produjo directamente

---

## Proyecto Publicado

`factory-lolobake-v2-001` is no longer waiting on Jean for deploy. Remaining work belongs to future enhancement only: real photos, optional backend/CRM, and broader brand/product refinement.
