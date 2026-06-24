import CaseStudy from "./CaseStudy";
import { useLanguage } from "../context/LanguageContext";
import casestudy from "../i18n/casestudy";
import customerPortal from "../i18n/customerPortal";

const BASE = "/images/projects/adeslas/";

export default function CustomerPortal() {
  const { lang } = useLanguage();
  const t = customerPortal[lang];
  const tCommon = casestudy[lang];

  return (
    <CaseStudy
      coverImage="/images/projects/cover-adeslas.webp"
      coverImageMobile="/images/projects/cover-adeslas-mobile.webp"
      projectDescription="Self-Service Platform for Insurance Clients"
      projectTitle={t.projectTitle}
      areas={["Branding", "Product Design", "UX/UI Design"]}
      summaryTabs={t.summaryTabs}
      overviewImages={[
        `${BASE}mockup-overview.webp`,
        `${BASE}landingfull-overview.webp`,
        `${BASE}compra4-overview.webp`,
        `${BASE}mobilecompra-overview.webp`,
      ]}
      fullImages={[
        { pair: false, src: `${BASE}landing-overiew.webp` },
        { pair: false, src: `${BASE}cards.webp` },
        { pair: false, src: `${BASE}faqs.webp` },
        { pair: false, src: `${BASE}compra1.webp` },
        { pair: false, src: `${BASE}compra2.webp` },
        { pair: false, src: `${BASE}compra3.webp` },
        { pair: false, src: `${BASE}compra5.webp` },
        { pair: true, images: [`${BASE}modal-overview.webp`, `${BASE}child-overview.webp`] },
      ]}
      nextProjectHref="/works/lead-generation-platform"
      nextProjectLabel={tCommon.nextProject}
      backHref="/works"
    />
  );
}
