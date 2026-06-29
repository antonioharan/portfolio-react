import CaseStudy from "./CaseStudy";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import leadGenerationPlatform from "../i18n/leadGenerationPlatform";

const BASE = "/images/projects/choose/";

export default function LeadGenerationPlatform() {
  const { lang } = useLanguage();
  const t = leadGenerationPlatform[lang];
  const tCommon = casestudy[lang];

  return (
    <CaseStudy
      coverImage="/images/projects/cover-choose.webp"
      coverImageMobile="/images/projects/cover-choose-mobile.webp"
      projectDescription="Lead Generation Platform"
      projectTitle={t.projectTitle}
      titleSize="clamp(72px, 13vw, 189px)"
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryTabs={t.summaryTabs}

      overviewImages={[
        { pair: false, src: `${BASE}01over.webp` },
        { pair: false, src: `${BASE}02over.webp` },
        { pair: false, src: `${BASE}03over.webp` },
        { pair: false, src: `${BASE}05over.webp` },
        { pair: false, src: `${BASE}06over.webp` },
        { pair: false, src: `${BASE}10over.webp` },
        { pair: true,  images: [`${BASE}11over.webp`, `${BASE}12over.webp`] },
        { pair: false, src: `${BASE}14over.webp` },
      ]}

      fullCaseImages={[
        { pair: false, src: `${BASE}01over.webp` },
        { pair: false, src: `${BASE}02over.webp` },
        { pair: false, src: `${BASE}03over.webp` },
        { pair: false, src: `${BASE}04.webp` },
        { pair: false, src: `${BASE}05over.webp` },
        { pair: false, src: `${BASE}06over.webp` },
        { pair: false, src: `${BASE}08.webp` },
        { pair: false, src: `${BASE}09.webp` },
        { pair: false, src: `${BASE}10over.webp` },
        { pair: true,  images: [`${BASE}11over.webp`, `${BASE}12over.webp`] },
        { pair: false, src: `${BASE}13.webp` },
        { pair: false, src: `${BASE}14over.webp` },
        { pair: false, src: `${BASE}15.webp` },
        { pair: true,  images: [`${BASE}16.webp`, `${BASE}17.webp`] },
      ]}

      nextProjectHref="/works/performance-dashboard"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
