export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: 'SEO & AI' | 'Performance Marketing' | 'Social Media' | 'Growth Strategy';
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  image: string;
  content: string;
  featured?: boolean;
}

export const BLOG_DATA: BlogPost[] = [
  {
    id: 'strategies-boost-brand-awareness',
    slug: '7-proven-strategies-boost-brand-awareness',
    title: '7 Proven Strategies to Boost Brand Awareness in 2026',
    excerpt: 'Discover actionable omnichannel techniques that combine viral organic short-form content with high-intent paid performance funnels.',
    category: 'Growth Strategy',
    date: 'May 10, 2026',
    readTime: '6 min read',
    author: {
      name: 'Aditya Mehta',
      role: 'Chief Strategy Officer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80',
    featured: true,
    content: `Building brand equity in 2026 requires an integrated approach that connects organic search visibility, short-form viral storytelling, and algorithmic paid media execution. In this article, we break down the 7 exact frameworks used by top 1% brands...`
  },
  {
    id: 'measure-roi-digital-marketing',
    slug: 'how-to-measure-roi-digital-marketing',
    title: 'How to Accurately Measure the ROI of Digital Marketing Campaigns',
    excerpt: 'Cut through attribution noise. Learn how to track multi-touch customer journeys and calculate true Marketing Efficiency Ratio (MER).',
    category: 'Performance Marketing',
    date: 'Apr 28, 2026',
    readTime: '8 min read',
    author: {
      name: 'Priya Verma',
      role: 'Head of Analytics',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    content: `Attribution model decay has made standard analytics tools insufficient. To scale aggressively without losing margin, modern growth teams must monitor blended Marketing Efficiency Ratio (MER) and First-Party Server-Side conversion API data...`
  },
  {
    id: 'social-media-trends-2026',
    slug: 'social-media-trends-you-cant-ignore',
    title: 'Social Media Trends You Cannot Ignore This Year',
    excerpt: 'From Generative AI creative production to interactive broadcast channels, explore the algorithms reshaping Instagram & LinkedIn.',
    category: 'Social Media',
    date: 'Apr 15, 2026',
    readTime: '5 min read',
    author: {
      name: 'Rohan Kapoor',
      role: 'Creative Director',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80'
    },
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80',
    content: `Social platforms have evolved from broadcast networks into recommendation feeds powered by user interest graphs. Success requires high-frequency creative testing, micro-influencer co-creation, and conversational AI auto-responses...`
  }
];
