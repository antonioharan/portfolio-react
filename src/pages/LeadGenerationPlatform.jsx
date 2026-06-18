import CaseStudy from "./CaseStudy";

const BASE = "/images/projects/choose/";

export default function LeadGenerationPlatform() {
  return (
    <CaseStudy
      coverImage="/images/projects/cover-choose.webp"
      coverImageMobile="/images/projects/cover-choose-mobile.webp"
      projectDescription="Lead Generation Platform"
      projectTitle={`Lead\nGeneration`}
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryTabs={[
        "Choose es una landing page orientada a la captación de leads a través de tests interactivos de personalidad, habilidades y orientación laboral. El proyecto combinó branding, diseño UX/UI y estrategia de captación para crear una experiencia dinámica, pensada para generar engagement en redes y atraer a personas interesadas en su desarrollo profesional.",
        "Lorem ipsum dolor sit amet",
        "La implementación del CMS redujo la dependencia del equipo de desarrollo y permitió mantener la landing siempre actualizada con nuevos contenidos. Choose combinó diseño visual, estrategia de captación y autonomía operativa, consolidándose como una herramienta atractiva tanto para los usuarios como para el equipo interno de marketing.",
      ]}
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
