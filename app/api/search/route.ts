import { NextResponse } from 'next/server';
import { SERVICES_DATA } from '@/lib/data/servicesData';
import { BLOG_DATA } from '@/lib/data/blogData';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') || '';

  if (!q) {
    return NextResponse.json({ services: [], blogs: [] });
  }

  const query = q.toLowerCase();
  const services = SERVICES_DATA.filter((s) =>
    s.title.toLowerCase().includes(query) || s.shortDesc.toLowerCase().includes(query)
  );

  const blogs = BLOG_DATA.filter((b) =>
    b.title.toLowerCase().includes(query) || b.excerpt.toLowerCase().includes(query)
  );

  return NextResponse.json({ services, blogs });
}
