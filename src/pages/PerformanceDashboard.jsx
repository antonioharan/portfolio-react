import CaseStudy from "./CaseStudy";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import performanceDashboard from "../i18n/performanceDashboard";

const BASE = "/images/projects/pyc/";

export default function PerformanceDashboard() {
  const { lang } = useLanguage();
  const t = performanceDashboard[lang];
  const tCommon = casestudy[lang];
  const tb = t.textBlocks;

  return (
    <CaseStudy
      coverImage="/images/projects/cover-pyc.webp"
      coverImageMobile="/images/projects/cover-pyc-mobile.webp"
      projectDescription="Internal Analytics Platform"
      projectTitle={t.projectTitle}
      areas={["Product Design", "UX/UI Design"]}
      summaryTabs={t.summaryTabs}

      overviewImages={[
        { pair: false, src: `${BASE}01over.webp` },
        { pair: false, src: `${BASE}05over.webp` },
        { pair: false, src: `${BASE}08over.webp` },
        { pair: false, src: `${BASE}09over.webp` },
        { pair: false, src: `${BASE}10over.webp` },
        { pair: false, src: `${BASE}11over.webp` },
        { pair: false, src: `${BASE}12over.webp` },
      ]}

      fullCaseImages={[
        { pair: false, src: `${BASE}01over.webp` },
        { pair: true,  images: [`${BASE}02.webp`, `${BASE}03.webp`], captions: t.captions },
        { pair: false, src: `${BASE}04.webp` },
        { type: 'text', title: tb[0].title, body: tb[0].body },
        { pair: false, src: `${BASE}05over.webp` },
        { pair: true,  images: [`${BASE}06.webp`, `${BASE}07.webp`] },
        { pair: false, src: `${BASE}08over.webp` },
        { type: 'text', title: tb[1].title, body: tb[1].body },
        { pair: false, src: `${BASE}09over.webp` },
        { type: 'text', title: tb[2].title, body: tb[2].body },
        { pair: false, src: `${BASE}10over.webp` },
        { type: 'text', title: tb[3].title, body: tb[3].body },
        { pair: false, src: `${BASE}11over.webp` },
        { type: 'text', title: tb[4].title, body: tb[4].body },
        { pair: false, src: `${BASE}12over.webp` },
      ]}

      nextProjectHref="/works/customer-portal"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
