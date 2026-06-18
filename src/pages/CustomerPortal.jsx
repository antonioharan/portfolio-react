import CaseStudy from "./CaseStudy";

const BASE = "/images/projects/adeslas/";

export default function CustomerPortal() {
  return (
    <CaseStudy
      coverImage="/images/projects/cover-adeslas.webp"
      coverImageMobile="/images/projects/cover-adeslas-mobile.webp"
      projectDescription="Self-Service Platform for Insurance Clients"
      projectTitle={`Customer\nPortal`}
      areas={["Branding", "Product Design", "UX/UI Design"]}
      summaryTabs={[
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Lorem ipsum dolor sit amet",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      ]}
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
      nextProjectLabel="Next project"
      backHref="/works"
    />
  );
}
