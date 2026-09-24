import React from 'react';
import { notFound } from 'next/navigation';
import { 
  getGraphicDesignItemBySlug, 
  getGraphicDesignCategoryBySlug, 
  getAllGraphicDesignSlugs 
} from '@/lib/data/graphicDesignItemsData';
import { GraphicDesignDetailView } from '@/components/GraphicDesignDetailView';

export async function generateStaticParams() {
  const slugs = getAllGraphicDesignSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const item = getGraphicDesignItemBySlug(params.slug);
  if (item) {
    return {
      title: `${item.name} Services — Formats, Pricing & Turnaround | BMA`,
      description: item.desc,
    };
  }

  const category = getGraphicDesignCategoryBySlug(params.slug);
  if (category) {
    return {
      title: `${category.title} Services — Formats, Pricing & Turnaround | BMA`,
      description: category.description,
    };
  }

  return {
    title: 'Graphic Design Service Details | BMA',
    description: 'Professional custom graphic design services with fast 24-48h turnaround.',
  };
}

export default function ServicesGraphicDesignItemPage({ params }: { params: { slug: string } }) {
  const item = getGraphicDesignItemBySlug(params.slug);
  const category = getGraphicDesignCategoryBySlug(params.slug);

  if (!item && !category) {
    notFound();
  }

  return <GraphicDesignDetailView item={item} category={category} />;
}
