import CaseStudy from "./CaseStudy";

const BASE = "/images/projects/pyc/";

export default function PerformanceDashboard() {
  return (
    <CaseStudy
      coverImage="/images/projects/cover-pyc.webp"
      projectDescription="Internal Analytics Platform"
      projectTitle={`Performance\nDashboard`}
      areas={["Strategy", "Product Design", "UX Design"]}
      summaryTabs={[
        "Para&Compara es un comparador de tarifas móviles orientado a captación de leads. Diseñé un dashboard para que el equipo de marketing pudiera gestionar campañas, leads y productos, ofreciendo una visión clara del rendimiento y ayudando a tomar decisiones estratégicas.",
        "Para&Compara es un comparador de tarifas móviles orientado a la captación de leads. Tras completar un formulario y responder algunas preguntas, el usuario recibe ofertas personalizadas adaptadas a su consumo.",
        `El equipo de marketing necesitaba una interfaz que permitiera gestionar y hacer seguimiento de las campañas del comparador. El diseño debía cubrir todo el flujo de gestión, desde la captación del lead hasta la actualización de las tarifas mostradas al usuario. El sistema debía permitir:\n\n• Obtener una lectura del rendimiento de las campañas\n• Visualizar y gestionar los leads captados\n• Cargar y editar empresas asociadas\n• Cargar y actualizar productos (tarifas) del comparador\n• Controlar los envíos automáticos de leads a cada empresa según su programación`,
      ]}
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
      nextProjectLabel="Next project"
      backHref="/works"
    />
  );
}
