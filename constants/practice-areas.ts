// data.ts
import { FaShieldAlt, FaGavel, FaBriefcase, FaSearch } from "react-icons/fa";
import { IconType } from "react-icons/lib";
import { FaBuilding, FaCopyright } from "react-icons/fa6";
export type PracticeArea = {
  title: string;
  slug: string;
  icon: IconType;
  iconName: string;
  image?: string;
  shortDescription: string;
  description: string;
};

export const practiceAreas: PracticeArea[] = [
  {
    title: "Data Protection and Cybersecurity",
    shortDescription:
      "In today's environment, nearly all businesses handle commercially sensitive information, personal data or substantial datasets. We help businesses solve their data protection and cybersecurity issues, implementing compliance with Nigerian and international Data Protection laws.",
    description:
      "In today's environment, nearly all businesses handle commercially sensitive information, personal data or substantial datasets. The increasing adoption of AI technologies adds further layers of risk and creates new avenues for governance.\n\nGlobal regulators are tightening oversight of data protection and preparing new rules for sensitive data, data governance and AI. To protect your business, you need to stay ahead of these shifts. Strong data practices and a robust cybersecurity approach are also key to reducing risk and reputational damage as cyberattacks surge across the world.\n\nWe have experience in helping businesses to solve their data protection and cybersecurity issues.\n\nWe can support you with:\n- Implementing and maintaining compliance with Nigerian and international Data Protection laws\n- Addressing privacy and data protection matters and digital compliance\n- Developing new digital business models and products that meet privacy‑by‑design standards\n- Establishing and operating data protection and AI governance frameworks\n- Reviewing new products and services for privacy and AI compliance, including Data Protection Impact Assessment (DPIAs) and fundamental rights impact assessments\n- Meeting consumer data protection obligations\n- Responding to data security incidents, including cyberattacks and breach‑response guidance\n- Providing breach‑readiness training to prepare your teams for security incidents\n- Handling proceedings and investigations involving Nigerian Data Protection Commission (NDPC)\n- Drafting and negotiating complex privacy agreements\n- Managing cross‑border data transfers, including Binding Corporate Rules\n- Supporting the exercise and management of data subject rights",
    icon: FaShieldAlt,
    iconName: "FaShieldAlt",
    slug: "data-protection-and-cybersecurity",
    image: "https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg",
  },
  {
    title: "Dispute Resolution",
    shortDescription:
      "Our solution-oriented approach focuses on resolving issues efficiently and constructively. We encourage amicable settlement through Alternative Dispute Resolution mechanisms, with litigation as the last option when necessary.",
    description:
      "Our approach to dispute is solution‑oriented. We focus on resolving issues efficiently and constructively. Where necessary and by default we encourage the amicable settlement of disputes through appropriate Alternative Dispute Resolution mechanisms such as mediation, conciliation and arbitration.\n\nWe see litigation as the last option for resolving disputes, but we fully understand its dynamics when it is or becomes, the only viable path. When court proceedings are unavoidable, we bring the full weight of our experience to bear.\n\nThe unique experience of our lawyers in contentious commercial, election and criminal litigation enable us to deliver practical advice supported by adaptable and results‑driven strategies. Whether navigating complex negotiations or advocating vigorously in court, we are committed to securing the best possible outcome for our clients.",
    icon: FaGavel,
    iconName: "FaGavel",
    slug: "dispute-resolution",
    image: "https://images.pexels.com/photos/7579319/pexels-photo-7579319.jpeg",
  },
  {
    title: "Corporate",
    shortDescription:
      "We support you throughout your business journey, from incorporation and governance to growth and strategic partnerships. Our team advises on start-up funding, venture capital, private equity investments and M&A transactions.",
    description:
      "Wherever you are in your business journey, we are ready to support you. From the very beginning, we help you establish and structure your business, guiding you through incorporation, governance and early operational decisions. As you grow, we stay by your side to navigate post‑incorporation challenges, from shareholder arrangements and regulatory compliance to commercial contracting and strategic partnerships.\n\nOur team advises on the full spectrum of corporate activity, including start‑up funding, venture capital, large‑scale private equity investments and M&A transactions, acting on both the buy and sell side. Whether you are raising your first round, expanding internationally or preparing for a major transaction, we bring the commercial insight and experience needed to help your business thrive.",
    icon: FaBriefcase,
    iconName: "FaBriefcase",
    slug: "corporate",
    image: "https://images.pexels.com/photos/6077520/pexels-photo-6077520.jpeg",
  },
  {
    title: "Real Estate",
    shortDescription:
      "We advise on the full spectrum of real estate transactions from high-profile acquisitions and disposals, to large-scale development projects and their financing. Our broad expertise enables us to support clients across every aspect of their real estate needs.",
    description:
      "We advise on the full spectrum of real estate transactions from high‑profile acquisitions and disposals, to large‑scale development projects and their financing. Our broad expertise enables us to support clients across every aspect of their real estate needs and to help them benefit from opportunities in the property market.\n\nWe advise on the full spectrum of real estate transactions. From high profile acquisitions and disposals to large scale development projects and the financing structures that support them. Our broad expertise allows us to guide clients through every stage of the property lifecycle, involving investment, development or restructure.\n\nWe have a deep understanding of market dynamics and emerging opportunities. We help clients navigate complexity, manage risk and unlock value in an increasingly competitive real estate environment. Whatever the scale or ambition of the project, we provide the strategic insight and practical support needed to achieve successful outcomes.",
    icon: FaBuilding,
    iconName: "FaBuilding",
    slug: "real-estate",
    image: "https://images.pexels.com/photos/4161619/pexels-photo-4161619.jpeg",
  },
  {
    title: "Intellectual Property",
    shortDescription:
      "We understand that IP is at the heart of innovation and growth. We work closely with you to understand your innovation, simplify and craft effective strategies that strengthen your competitive advantage for trademarks, patents, designs or copyright.",
    description:
      "We understand that IP is at the heart of innovation and growth and they require appropriate protections.\n\nOur support goes beyond legal protection. We work closely with you to understand your innovation, simplify and craft effective strategies that strengthen your competitive advantage. Whether it is trademarks, patents, designs or copyright, we ensure your IP drives growth rather than limits it.\n\nYou can rely on us to help you protect your ideas and navigate any IP challenges.",
    icon: FaCopyright,
    iconName: "FaCopyright",
    slug: "intellectual-property",
    image: "https://images.pexels.com/photos/7841847/pexels-photo-7841847.jpeg",
  },
  {
    title: "Investigations",
    shortDescription:
      "We support clients through the full lifecycle of internal and external investigations. Our team employs legal privilege to advise on how best to assess findings, mitigate exposure and respond strategically to regulatory and enforcement inquiries.",
    description:
      "We support clients through the full lifecycle of internal and external investigations. Our team employ legal privilege to advise on how best to assess findings, mitigate exposure and respond strategically. Where regulators or enforcement authorities initiate inquiries, we stand firmly by your side, defend your position and guide you through every procedural and substantive step.\n\nIn Nigeria's rapidly evolving regulatory landscape shaped by new technologies, data‑driven business models and increasingly assertive oversight bodies, we are particularly well placed to assist both local and international companies. We help clients navigate investigations arising from compliance failures, governance lapses, sector‑specific regulations and cross border enforcement trends.\n\nWe can support you with:\n- Regulatory and Enforcement Investigations\n- White Collar Crime & Anti‑Corruption Investigations\n- Civil Law Investigations and other fact finding enquiries\n\nOur approach is not only to respond effectively when issues arise but to help you build resilient systems that reduce the likelihood of future investigations.",
    icon: FaSearch,
    iconName: "FaSearch",
    slug: "investigations",
    image: "https://images.pexels.com/photos/7319070/pexels-photo-7319070.jpeg",
  },
];
