import CaseStudy from "./CaseStudy";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import performanceDashboard from "../i18n/performanceDashboard";

const BASE = "/images/projects/pyc/";

export default function PerformanceDashboard() {
  const { lang } = useLanguage();
  const t = performanceDashboard[lang];
  const tCommon = casestudy[lang];

  return (
    <CaseStudy
      coverImage="/images/projects/cover-pyc.webp"
      projectDescription="Internal Analytics Platform"
      projectTitle={t.projectTitle}
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryTabs={t.summaryTabs}
      overviewImages={[
        `${BASE}dashboard-overview.webp`,
        `${BASE}dashboard2-overview.webp`,
        `${BASE}product-overview.webp`,
        `${BASE}product2-overview.webp`,
        `${BASE}list-overview.webp`,
        `${BASE}leads-overview.webp`,
      ]}
      fullImages={[
        { pair: true, images: [`${BASE}resultados.webp`, `${BASE}stepper.webp`] },
        { pair: false, src: `${BASE}marketing.webp` },
        { pair: true, images: [`${BASE}dashcards.webp`, `${BASE}dashdetail.webp`] },
      ]}
      nextProjectHref="/works"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
