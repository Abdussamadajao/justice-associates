import { notFound } from "next/navigation";
import { practiceAreas, type PracticeArea } from "@/constants/practice-areas";
import type { Metadata } from "next";
import PracticeSlug from "@/sections/practice-areas/practice-slug";

// Generate static params for all practice areas
export async function generateStaticParams() {
  return practiceAreas.map((area) => ({
    slug: area.slug,
  }));
}

// Generate metadata for each practice area
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const practiceArea = practiceAreas.find((area) => area.slug === slug);

  if (!practiceArea) {
    return {
      title: "Practice Area Not Found",
    };
  }

  const imageUrl =
    practiceArea.image ||
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1000";

  return {
    title: `${practiceArea.title} | Justice & Associates`,
    description: practiceArea.shortDescription,
    openGraph: {
      title: `${practiceArea.title} | Justice & Associates`,
      description: practiceArea.shortDescription,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: practiceArea.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${practiceArea.title} | Justice & Associates`,
      description: practiceArea.shortDescription,
      images: [imageUrl],
    },
  };
}

const PracticeAreaPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const practiceArea: PracticeArea | undefined = practiceAreas.find(
    (area) => area.slug === slug
  );

  if (!practiceArea) {
    notFound();
  }

  return <PracticeSlug practiceArea={practiceArea} />;
};

export default PracticeAreaPage;
