import CaseStudy from "./CaseStudy";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import customerPortal from "../i18n/customerPortal";

const BASE = "/images/projects/entorno/";

export default function CustomerPortal() {
  const { lang } = useLanguage();
  const t = customerPortal[lang];
  const tCommon = casestudy[lang];

  return (
    <CaseStudy
      coverImage="/images/projects/cover-adeslas.webp"
      coverImageMobile="/images/projects/cover-adeslas-mobile.webp"
      projectTitle={t.projectTitle}
      areas={["Strategy", "Product Design", "UX/UI Design"]}
      summaryTabs={t.summaryTabs}

      overviewImages={[
        { pair: true,  images: [`${BASE}04over.webp`, `${BASE}05over.webp`] },
        { pair: false, src: `${BASE}06over.webp` },
        { pair: false, src: `${BASE}07over.webp` },
        { pair: false, src: `${BASE}09over.webp` },
        { pair: false, src: `${BASE}11over.webp` },
        { pair: false, src: `${BASE}13GIFover.gif` },
        { pair: false, src: `${BASE}14over.webp` },
        { pair: false, src: `${BASE}16over.webp` },
        { pair: false, src: `${BASE}17over.webp` },
        { pair: false, src: `${BASE}18over.webp` },
        { pair: true,  images: [`${BASE}21over.gif`, `${BASE}22over.webp`] },
      ]}

      fullCaseImages={[
        { pair: false, src: `${BASE}01.webp` },
        { pair: false, src: `${BASE}02.webp` },
        { pair: false, src: `${BASE}03.webp` },
        { pair: true,  images: [`${BASE}04over.webp`, `${BASE}05over.webp`] },
        { pair: false, src: `${BASE}06over.webp` },
        { pair: false, src: `${BASE}07over.webp` },
        { pair: false, src: `${BASE}08.webp` },
        { pair: false, src: `${BASE}09over.webp` },
        { pair: false, src: `${BASE}10.webp` },
        { pair: false, src: `${BASE}11over.webp` },
        { pair: false, src: `${BASE}12.webp` },
        { pair: false, src: `${BASE}13GIFover.gif` },
        { pair: false, src: `${BASE}14over.webp` },
        { pair: false, src: `${BASE}15.webp` },
        { pair: false, src: `${BASE}16over.webp` },
        { pair: false, src: `${BASE}17over.webp` },
        { pair: false, src: `${BASE}18over.webp` },
        { pair: false, src: `${BASE}19.webp` },
        { pair: false, src: `${BASE}20.webp` },
        { pair: true,  images: [`${BASE}21over.gif`, `${BASE}22over.webp`] },
      ]}

      nextProjectHref="/works/lead-generation-platform"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
