import CaseStudy from "./CaseStudy";

const BASE = "/images/projects/choose/";

export default function LeadGenerationPlatform() {
  return (
    <CaseStudy
      coverImage="/images/projects/cover-choose.webp"
      projectDescription="Lead Generation Platform"
      projectTitle={`Lead\nGeneration`}
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryText="Choose es una plataforma de captación de leads orientada al marketing digital. Diseñé una solución que permite al equipo gestionar campañas, analizar conversiones y optimizar el proceso de captación, ofreciendo una visión clara del rendimiento."
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
      nextProjectLabel="Next project"
      backHref="/works"
    />
  );
}
