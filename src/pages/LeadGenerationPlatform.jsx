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
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryTabs={t.summaryTabs}
      overviewImages={[
        `${BASE}landing1-overview.webp`,
        `${BASE}landingresults-overview.webp`,
        `${BASE}image-overview.webp`,
        `${BASE}test02-overview.webp`,
      ]}
      fullImages={[
        { pair: false, src: `${BASE}Mockup.webp` },
        { pair: false, src: `${BASE}image.webp` },
        { pair: true, images: [`${BASE}image 01.webp`, `${BASE}image 02.webp`] },
        { pair: false, src: `${BASE}test01.webp` },
        { pair: false, src: `${BASE}test03.webp` },
        { pair: true, images: [`${BASE}image3.webp`, `${BASE}image4.webp`] },
      ]}
      nextProjectHref="/works/performance-dashboard"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
