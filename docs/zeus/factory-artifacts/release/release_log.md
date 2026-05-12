# Rene Release

## Running Log

- 2026-05-12T23:23:19Z — Release recovery executed for `factory-lolobake-v2-001`.
  - Repo: `https://github.com/SiteOneTech/factory-su-lolobake-v2`
  - Branch: `feat/lolobake-bilingual-foundation`
  - Accepted commit: `cdb90eba89ee6ddd20ab312ef8bf32d897f3e2e0`
  - Preview: `https://kidu.app/p/lolobake-v2/`
  - Deploy route: KIDU Preview Lab `preview-lab deploy-static lolobake-v2`
  - Runtime QA: HTTP 200, visible footer credit, top navigation smoke, ES toggle smoke, WhatsApp inquiry handoff smoke.
  - Release status: `PUBLISHED`

## Incident Notes

- Initial release was held because the deploy mechanism was not encoded in the Factory worker context.
- First recovery deploy returned HTTP 200 but the React app did not hydrate on the public subpath because Vite emitted absolute `/assets/...` URLs.
- Fix applied in product repo: `base: './'` in `vite.config.ts`.
- Preview Lab requires the exact static credit `desarrollado por: SitioUno Factory`; the product now includes it in `index.html` and visible footer content.
