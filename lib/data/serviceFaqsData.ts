export interface FaqItem {
  q: string;
  a: string;
}

export const SERVICE_FAQS: Record<string, FaqItem[]> = {
  // ── SEO ──
  seo: [
    {
      q: 'How long until I see Page 1 rankings on Google?',
      a: 'Initial keyword movement and indexing improvements are typically visible within 60 to 90 days. Highly competitive commercial search terms usually reach top 3 positions within 4 to 6 months of steady white-hat optimization.',
    },
    {
      q: 'Do you guarantee #1 ranking on Google?',
      a: 'No reputable agency can guarantee #1 rankings due to Google algorithm updates. However, we follow proven white-hat technical, on-page, and authority-building practices that consistently drive top 3 rankings and qualified buyer traffic.',
    },
    {
      q: 'Do you help write blog posts and content for SEO?',
      a: 'Yes! We research high-intent commercial keywords and write comprehensive, SEO-optimized blog articles and service pages with proper schema markup to capture valuable search engine queries.',
    },
    {
      q: 'Will SEO help my local map ranking?',
      a: 'Yes, technical website SEO works in tandem with Google Business Profile optimization and local citations to substantially boost your visibility in Google Maps local pack rankings.',
    },
  ],

  // ── GOOGLE ADS ──
  'google-ads': [
    {
      q: 'Is there a minimum ad budget requirement for Google Ads?',
      a: 'We manage accounts starting from ₹15,000/month in ad spend up to enterprise multi-lakh monthly budgets. We scale budgets progressively based on validated ROAS and cost-per-lead benchmarks.',
    },
    {
      q: 'Who owns the Google Ads account and campaign data?',
      a: 'You retain 100% direct ownership of your Google Ads account, campaign structures, conversion actions, and billing profiles. You always have full administrative access.',
    },
    {
      q: 'What is the pricing model for Google Ads management?',
      a: 'We charge 18% of monthly ad spend with complete transparent reporting, weekly check-ins, and zero lock-in contracts.',
    },
    {
      q: 'Do you create display ad graphics and video assets?',
      a: 'Yes, our in-house design and copywriting team creates all responsive display banners, remarketing creatives, and video ad assets tailored to your brand.',
    },
  ],

  // ── META ADS ──
  'meta-ads': [
    {
      q: 'Do you design the ad graphics and videos for Facebook & Instagram?',
      a: 'Yes! High-converting creative design, video editing, hook scripting, and direct-response copywriting are completely included in our Meta Ads management.',
    },
    {
      q: 'How do you prevent junk or unqualified leads?',
      a: 'We filter out tire-kickers by implementing custom screening questions, OTP mobile verification, and qualification hurdles inside Meta Instant Forms and custom landing pages.',
    },
    {
      q: 'What is the turnaround time to launch a new Meta campaign?',
      a: 'We launch campaigns within 5 to 7 business days following strategy approval, pixel/CAPI verification, and creative asset signoff.',
    },
    {
      q: 'Do you assist with disabled ad account recovery?',
      a: 'Yes, we assist with submitting official Meta appeals, domain verification, and configuring backup Business Managers to ensure continuity.',
    },
  ],

  // ── SOCIAL MEDIA MARKETING ──
  'social-media-marketing': [
    {
      q: 'Which platforms do you cover in Social Media Marketing?',
      a: 'We handle Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts based on where your ideal customers are most active.',
    },
    {
      q: 'Do I get to approve posts before they go live?',
      a: 'Yes, we provide an advance 14-day content calendar with visual grids, copy, hashtags, and posting dates for your review and approval.',
    },
    {
      q: 'Do you create original graphics, captions, and reels?',
      a: '100%! All visual creatives, custom graphics, captions, hashtag sets, and video reels scripts are custom-produced for your brand.',
    },
    {
      q: 'Is community engagement and comment moderation included?',
      a: 'Yes, our team actively monitors, likes, and replies to comments and direct messages during business hours to nurture inbound customer enquiries.',
    },
  ],
  smm: [
    {
      q: 'Which platforms do you cover in Social Media Marketing?',
      a: 'We handle Instagram, Facebook, LinkedIn, Twitter/X, Pinterest, and YouTube Shorts based on where your ideal customers are most active.',
    },
    {
      q: 'Do I get to approve posts before they go live?',
      a: 'Yes, we provide an advance 14-day content calendar with visual grids, copy, hashtags, and posting dates for your review and approval.',
    },
    {
      q: 'Do you create original graphics, captions, and reels?',
      a: '100%! All visual creatives, custom graphics, captions, hashtag sets, and video reels scripts are custom-produced for your brand.',
    },
    {
      q: 'Is community engagement and comment moderation included?',
      a: 'Yes, our team actively monitors, likes, and replies to comments and direct messages during business hours to nurture inbound customer enquiries.',
    },
  ],

  // ── WEB DEVELOPMENT ──
  'web-development': [
    {
      q: 'Is hosting and domain setup included?',
      a: 'Yes, we include 1 year of SSL high-speed cloud hosting, domain connection, and ongoing technical maintenance with our website development packages.',
    },
    {
      q: 'Can I easily edit content and images myself later?',
      a: 'Yes, we provide an intuitive admin dashboard and a 15-minute screen recording tutorial so your team can easily update text, products, and images anytime.',
    },
    {
      q: 'How long does full website development take?',
      a: 'Single high-converting landing pages take 3 to 5 business days. Full corporate websites (5 to 10 pages) take approximately 7 to 14 business days.',
    },
    {
      q: 'Is the website optimized for mobile speed and search engines?',
      a: 'Yes, we build every website with semantic clean code, sub-2 second mobile load times, 90+ Google PageSpeed scores, and built-in technical SEO schema.',
    },
  ],

  // ── GRAPHIC DESIGN ──
  'graphic-design': [
    {
      q: 'How is graphic design priced?',
      a: 'We offer transparent per-design pricing. Standard formats are ₹200, structured designs are ₹340, and multi-page layouts are ₹130/page. Zero hidden fees or retainer traps.',
    },
    {
      q: 'Do you design brand logos and corporate identity kits?',
      a: 'Yes, we design professional vector logos starting from ₹850 up to ₹3,500 depending on concepts, revision rounds, and brand guideline deliverables required.',
    },
    {
      q: 'How fast is design delivery?',
      a: 'Standard social posts, flyers, and ad creatives are delivered within 24 to 48 hours. Complex brochures, packaging layouts, or pitch decks take 48 to 72 hours.',
    },
    {
      q: 'Do prices include revisions and source files?',
      a: 'Yes, all prices include revisions to ensure you are 100% happy, plus print-ready PDFs (CMYK 300 DPI) and editable vector source files (AI/PSD/Figma).',
    },
  ],
  'branding-design': [
    {
      q: 'How is graphic design priced?',
      a: 'We offer transparent per-design pricing. Standard formats are ₹200, structured designs are ₹340, and multi-page layouts are ₹130/page. Zero hidden fees or retainer traps.',
    },
    {
      q: 'Do you design brand logos and corporate identity kits?',
      a: 'Yes, we design professional vector logos starting from ₹850 up to ₹3,500 depending on concepts, revision rounds, and brand guideline deliverables required.',
    },
    {
      q: 'How fast is design delivery?',
      a: 'Standard social posts, flyers, and ad creatives are delivered within 24 to 48 hours. Complex brochures, packaging layouts, or pitch decks take 48 to 72 hours.',
    },
    {
      q: 'Do prices include revisions and source files?',
      a: 'Yes, all prices include revisions to ensure you are 100% happy, plus print-ready PDFs (CMYK 300 DPI) and editable vector source files (AI/PSD/Figma).',
    },
  ],
  'poster-design': [
    {
      q: 'How is graphic design priced?',
      a: 'We offer transparent per-design pricing. Standard formats are ₹200, structured designs are ₹340, and multi-page layouts are ₹130/page. Zero hidden fees or retainer traps.',
    },
    {
      q: 'Do you design brand logos and corporate identity kits?',
      a: 'Yes, we design professional vector logos starting from ₹850 up to ₹3,500 depending on concepts, revision rounds, and brand guideline deliverables required.',
    },
    {
      q: 'How fast is design delivery?',
      a: 'Standard social posts, flyers, and ad creatives are delivered within 24 to 48 hours. Complex brochures, packaging layouts, or pitch decks take 48 to 72 hours.',
    },
    {
      q: 'Do prices include revisions and source files?',
      a: 'Yes, all prices include revisions to ensure you are happy, plus print-ready PDFs (CMYK 300 DPI) and editable vector source files (AI/PSD/Figma).',
    },
  ],

  // ── UGC REELS & CREATOR MARKETING ──
  'ugc-reels-creator-marketing': [
    {
      q: 'Who provides the video creators and actors?',
      a: 'We match vetted creators from our curated network of 250+ talent across lifestyle, beauty, technology, fitness, and fashion niches.',
    },
    {
      q: 'Are commercial digital ad rights included?',
      a: 'Yes, full commercial digital ad usage rights and TikTok / Meta Spark Ads whitelisting permissions are included with all delivered assets.',
    },
    {
      q: 'Can we review and approve scripts beforehand?',
      a: 'Yes, you approve all Problem-Agitate-Solve hook scripts, visual storyboards, and call-to-actions before creators begin filming.',
    },
    {
      q: 'What is the average turnaround for completed UGC videos?',
      a: 'Filming, editing, sound design, color grading, and final delivery take approximately 7 to 10 business days.',
    },
  ],
  'reels-video-production': [
    {
      q: 'Who provides the video creators and actors?',
      a: 'We match vetted creators from our curated network of 250+ talent across lifestyle, beauty, technology, fitness, and fashion niches.',
    },
    {
      q: 'Are commercial digital ad rights included?',
      a: 'Yes, full commercial digital ad usage rights and TikTok / Meta Spark Ads whitelisting permissions are included with all delivered assets.',
    },
    {
      q: 'Can we review and approve scripts beforehand?',
      a: 'Yes, you approve all Problem-Agitate-Solve hook scripts, visual storyboards, and call-to-actions before creators begin filming.',
    },
    {
      q: 'What is the average turnaround for completed UGC videos?',
      a: 'Filming, editing, sound design, color grading, and final delivery take approximately 7 to 10 business days.',
    },
  ],

  // ── DASHBOARD & KPI SYSTEMS ──
  'dashboard-kpi-systems': [
    {
      q: 'Can I view my business dashboard on mobile devices?',
      a: 'Yes! All our dashboards are 100% mobile-responsive and update automatically so you can monitor business performance on the go.',
    },
    {
      q: 'Is our sensitive business and sales data secure?',
      a: '100% secure. Data connectors use direct encrypted APIs (Google Cloud, AWS) with restricted OAuth access. We never store or resell your data.',
    },
    {
      q: 'Which platforms and software can you connect?',
      a: 'We connect Shopify, WooCommerce, Meta Ads, Google Ads, Amazon, Zoho, HubSpot, Stripe, Razorpay, and Google Sheets into unified dashboards.',
    },
    {
      q: 'How often does the dashboard data update?',
      a: 'Data refreshes automatically in real-time or every hour depending on the API rate limits of each connected marketing channel.',
    },
  ],
  'dashboard-kpi': [
    {
      q: 'Can I view my business dashboard on mobile devices?',
      a: 'Yes! All our dashboards are 100% mobile-responsive and update automatically so you can monitor business performance on the go.',
    },
    {
      q: 'Is our sensitive business and sales data secure?',
      a: '100% secure. Data connectors use direct encrypted APIs (Google Cloud, AWS) with restricted OAuth access. We never store or resell your data.',
    },
    {
      q: 'Which platforms and software can you connect?',
      a: 'We connect Shopify, WooCommerce, Meta Ads, Google Ads, Amazon, Zoho, HubSpot, Stripe, Razorpay, and Google Sheets into unified dashboards.',
    },
    {
      q: 'How often does the dashboard data update?',
      a: 'Data refreshes automatically in real-time or every hour depending on the API rate limits of each connected marketing channel.',
    },
  ],

  // ── WHATSAPP MARKETING ──
  'whatsapp-marketing': [
    {
      q: 'Are broadcast messages safe from phone number bans?',
      a: 'Yes, we use the official Meta WhatsApp Cloud API with verified business identity to eliminate ban risks that affect unauthorized scraping tools.',
    },
    {
      q: 'Can customers browse catalogs and place orders inside WhatsApp?',
      a: 'Yes! We configure native WhatsApp product catalogs, automated ordering carts, and instant payment links directly in chat.',
    },
    {
      q: 'Is there a setup fee for WhatsApp Business API onboarding?',
      a: 'All Meta Business verification, message template registration, and API onboarding are included in our standard package with zero hidden charges.',
    },
    {
      q: 'Can we send rich media like videos, images, and PDF catalogs?',
      a: 'Yes, WhatsApp Business API supports high-resolution images, video promos, PDF brochures, and interactive quick-reply buttons.',
    },
  ],

  // ── EMAIL MARKETING ──
  'email-marketing': [
    {
      q: 'Which email marketing platforms do you support?',
      a: 'We specialize in Klaviyo, Mailchimp, ActiveCampaign, HubSpot, Brevo, and ConvertKit.',
    },
    {
      q: 'Do you design the graphics and write email copy?',
      a: 'Yes! Professional copywriting, responsive email layout design, and technical automation logic are completely handled by our team.',
    },
    {
      q: 'How quickly can automated email flows be set live?',
      a: 'Core automated sequences (Welcome Series, Abandoned Cart, Post-Purchase Nurturing) are typically live within 5 to 7 business days.',
    },
    {
      q: 'Will this help our emails avoid spam folders?',
      a: 'Yes, we configure SPF, DKIM, and DMARC DNS security records alongside inbox warmup protocols to maintain 98%+ primary inbox deliverability.',
    },
  ],

  // ── INFLUENCER MARKETING ──
  'influencer-marketing': [
    {
      q: 'How do you check for fake influencer followers and bot engagement?',
      a: 'We audit creator audience authenticity scores, historical comment sentiment, and follower location demographics to prevent wasted ad spend.',
    },
    {
      q: 'Do we get to approve influencers before campaigns launch?',
      a: 'Yes, you receive a shortlisted roster with creator engagement metrics, sample content, and pricing for final approval before booking.',
    },
    {
      q: 'Are commercial ad usage rights included?',
      a: 'Yes, our contracts ensure digital commercial usage rights so your brand can boost top-performing creator posts as paid Spark ads.',
    },
    {
      q: 'What tier of influencers do you manage?',
      a: 'We manage nano-influencers (5K–25K), micro-influencers (25K–100K), and macro-creators (100K–1M+) across India and international markets.',
    },
  ],

  // ── B2B LEAD GENERATION ──
  'b2b-lead-generation': [
    {
      q: 'How do you ensure B2B prospects are genuine decision-makers?',
      a: 'We filter outreach strictly by exact job title, company headcount, revenue tier, tech stack, and intent triggers agreed upon before campaign launch.',
    },
    {
      q: 'Do you write the outbound sales messaging and email sequences?',
      a: 'Yes, we draft customized multi-touch cold email and LinkedIn messaging sequences tailored to decision-maker pain points.',
    },
    {
      q: 'Which CRM systems can you integrate with?',
      a: 'We connect directly with HubSpot, Zoho, Salesforce, Pipedrive, and Google Sheets for instantaneous lead delivery.',
    },
    {
      q: 'What is the setup time for outbound lead campaigns?',
      a: 'Dedicated inbox domain warmup, ICP list curation, and sequence building take approximately 7 business days before sending starts.',
    },
  ],
  'lead-generation': [
    {
      q: 'How do you ensure B2B prospects are genuine decision-makers?',
      a: 'We filter outreach strictly by exact job title, company headcount, revenue tier, tech stack, and intent triggers agreed upon before campaign launch.',
    },
    {
      q: 'Do you write the outbound sales messaging and email sequences?',
      a: 'Yes, we draft customized multi-touch cold email and LinkedIn messaging sequences tailored to decision-maker pain points.',
    },
    {
      q: 'Which CRM systems can you integrate with?',
      a: 'We connect directly with HubSpot, Zoho, Salesforce, Pipedrive, and Google Sheets for instantaneous lead delivery.',
    },
    {
      q: 'What is the setup time for outbound lead campaigns?',
      a: 'Dedicated inbox domain warmup, ICP list curation, and sequence building take approximately 7 business days before sending starts.',
    },
  ],

  // ── E-COMMERCE SCALING ──
  'ecommerce-scaling': [
    {
      q: 'What return on ad spend (ROAS) can we expect?',
      a: 'Our e-commerce client campaigns average between 3.5x to 6.2x blended ROAS depending on your product margins, price point, and organic baseline.',
    },
    {
      q: 'Do you work with Shopify, WooCommerce, and custom stores?',
      a: 'Yes, we have deep engineering and marketing expertise with Shopify, WooCommerce, Magento, and custom headless e-commerce builds.',
    },
    {
      q: 'Do you set up automated abandoned checkout recovery flows?',
      a: 'Yes, we configure multi-stage WhatsApp and email recovery flows that recover up to 15% to 22% of abandoned carts automatically.',
    },
    {
      q: 'Do you manage marketplace ads on Amazon and Flipkart?',
      a: 'Yes, we configure and optimize Amazon Sponsored Products, Sponsored Brands, and A+ content to accelerate multi-channel revenue.',
    },
  ],
  'ecommerce-marketing': [
    {
      q: 'What return on ad spend (ROAS) can we expect?',
      a: 'Our e-commerce client campaigns average between 3.5x to 6.2x blended ROAS depending on your product margins, price point, and organic baseline.',
    },
    {
      q: 'Do you work with Shopify, WooCommerce, and custom stores?',
      a: 'Yes, we have deep engineering and marketing expertise with Shopify, WooCommerce, Magento, and custom headless e-commerce builds.',
    },
    {
      q: 'Do you set up automated abandoned checkout recovery flows?',
      a: 'Yes, we configure multi-stage WhatsApp and email recovery flows that recover up to 15% to 22% of abandoned carts automatically.',
    },
    {
      q: 'Do you manage marketplace ads on Amazon and Flipkart?',
      a: 'Yes, we configure and optimize Amazon Sponsored Products, Sponsored Brands, and A+ content to accelerate multi-channel revenue.',
    },
  ],

  // ── CRO ──
  cro: [
    {
      q: 'How much can Conversion Rate Optimization improve our revenue?',
      a: 'Most brands experience a 20% to 50% lift in website conversion rates following systematic UX heuristic audits and A/B test implementations.',
    },
    {
      q: 'Do we need high monthly traffic for CRO to work?',
      a: 'While statistical A/B testing benefits from higher traffic, qualitative heuristic friction audits and checkout fixes improve conversion rates on any traffic volume.',
    },
    {
      q: 'Do you implement the code changes or just provide recommendations?',
      a: 'We provide both! We can deliver tested, ready-to-deploy code or directly implement validated winners on Shopify, WordPress, or custom web apps.',
    },
    {
      q: 'How long does a complete CRO audit take?',
      a: 'The initial heuristic, heatmap, and analytics tracking audit takes 5 to 7 days, followed by structured 30-day split-testing sprints.',
    },
  ],

  // ── LOCAL SEO ──
  'local-seo': [
    {
      q: 'Will local SEO increase direct customer calls and store visits?',
      a: 'Yes! Ranking in the Google Maps top 3 pack directly drives incoming phone calls, driving direction requests, and in-person foot traffic.',
    },
    {
      q: 'Can you help reinstate suspended Google Business Profiles?',
      a: 'Yes, we assist businesses with Google Business Profile suspension reinstatement appeals, address verification, and compliance fixes.',
    },
    {
      q: 'How long until local map rankings improve?',
      a: 'Local map listings typically start climbing search positions within 30 to 60 days following citation cleanup, review generation, and profile optimization.',
    },
    {
      q: 'Do you manage Google review replies?',
      a: 'Yes, we draft keyword-rich, professional responses to all customer reviews to strengthen local SEO algorithmic authority.',
    },
  ],

  // ── AI AUTOMATION SYSTEMS ──
  'ai-automation-systems': [
    {
      q: 'How accurately do AI agents answer customer questions?',
      a: 'We train the AI exclusively on your verified business knowledge base, FAQs, and product catalogs to eliminate hallucinations and ensure accurate answers.',
    },
    {
      q: 'Can the AI transfer complex chats to a human team member?',
      a: 'Yes, the AI detects complex or high-intent enquiries and seamlessly escalates conversations to human support on WhatsApp or live chat.',
    },
    {
      q: 'Which platforms and apps can the AI connect to?',
      a: 'We integrate AI agents with WhatsApp, Website Chat widgets, Instagram DMs, Email, and major CRMs including HubSpot and Zoho.',
    },
    {
      q: 'How long does full AI system deployment take?',
      a: 'Standard AI customer support and automated lead qualification pipelines are fully built, tested, and deployed within 7 to 10 business days.',
    },
  ],
  'crm-automation': [
    {
      q: 'How accurately do AI agents answer customer questions?',
      a: 'We train the AI exclusively on your verified business knowledge base, FAQs, and product catalogs to eliminate hallucinations and ensure accurate answers.',
    },
    {
      q: 'Can the AI transfer complex chats to a human team member?',
      a: 'Yes, the AI detects complex or high-intent enquiries and seamlessly escalates conversations to human support on WhatsApp or live chat.',
    },
    {
      q: 'Which platforms and apps can the AI connect to?',
      a: 'We integrate AI agents with WhatsApp, Website Chat widgets, Instagram DMs, Email, and major CRMs including HubSpot and Zoho.',
    },
    {
      q: 'How long does full AI system deployment take?',
      a: 'Standard AI customer support and automated lead qualification pipelines are fully built, tested, and deployed within 7 to 10 business days.',
    },
  ],

  // ── BRAND IDENTITY DESIGN ──
  'brand-identity-design': [
    {
      q: 'Do I own full legal commercial copyright of the logo?',
      a: 'Yes, 100% full commercial copyright and ownership rights are transferred to your company upon final delivery.',
    },
    {
      q: 'What file formats will I receive?',
      a: 'You receive scalable vector files (AI, EPS, SVG), high-resolution transparent PNGs, and print-ready CMYK PDFs for all digital and physical applications.',
    },
    {
      q: 'How many design revision cycles are included?',
      a: 'We provide 3 complete rounds of design revisions on the chosen logo concept to perfect typography, spacing, and colors.',
    },
    {
      q: 'Can you help modernize an existing brand logo?',
      a: 'Yes, we offer brand modernization and logo refinement services to refresh older branding while maintaining recognized brand equity.',
    },
  ],
  'logo-branding': [
    {
      q: 'Do I own full legal commercial copyright of the logo?',
      a: 'Yes, 100% full commercial copyright and ownership rights are transferred to your company upon final delivery.',
    },
    {
      q: 'What file formats will I receive?',
      a: 'You receive scalable vector files (AI, EPS, SVG), high-resolution transparent PNGs, and print-ready CMYK PDFs for all digital and physical applications.',
    },
    {
      q: 'How many design revision cycles are included?',
      a: 'We provide 3 complete rounds of design revisions on the chosen logo concept to perfect typography, spacing, and colors.',
    },
    {
      q: 'Can you help modernize an existing brand logo?',
      a: 'Yes, we offer brand modernization and logo refinement services to refresh older branding while maintaining recognized brand equity.',
    },
  ],

  // ── CONTENT MARKETING ──
  'content-marketing': [
    {
      q: 'How do you choose topics for content marketing?',
      a: 'Every article is selected based on commercial search intent, search volume, competitor keyword gaps, and alignment with your service offerings.',
    },
    {
      q: 'Are articles optimized for SEO and Google algorithms?',
      a: 'Yes, every piece follows Google E-E-A-T guidelines, semantic internal linking structures, and targeted meta tags for organic rankings.',
    },
    {
      q: 'Do you create graphics or lead magnets to accompany articles?',
      a: 'Yes, we include custom header graphics, illustrative diagrams, and downloadable checklist lead magnets to capture reader emails.',
    },
    {
      q: 'How often will new content be published?',
      a: 'Standard plans include 4 long-form comprehensive articles per month, formatted and uploaded directly to your CMS.',
    },
  ],
};

const DEFAULT_SERVICE_FAQS: FaqItem[] = [
  {
    q: 'How quickly can we get started?',
    a: 'Most services can kick off within 24 to 48 hours following a brief onboarding chat and access setup on WhatsApp.',
  },
  {
    q: 'Are there any lock-in contracts or long-term commitments?',
    a: 'No. All our marketing packages and services operate on transparent, month-to-month or per-project terms with zero cancellation penalties.',
  },
  {
    q: 'How do you report progress and performance?',
    a: 'You receive weekly WhatsApp progress updates, monthly PDF analytics reports, and a dedicated account lead you can reach at any time.',
  },
  {
    q: 'What if I need custom deliverables outside the standard scope?',
    a: 'We routinely tailor scopes to meet exact brand requirements. Simply ping our team on WhatsApp and we will structure a custom proposal.',
  },
];

export function getServiceFaqs(slug: string): FaqItem[] {
  const clean = slug.toLowerCase().trim();
  if (SERVICE_FAQS[clean]) {
    return SERVICE_FAQS[clean];
  }
  const aliasMap: Record<string, string> = {
    'seo-services': 'seo',
    'website-development': 'web-development',
    'reels-video-production': 'ugc-reels-creator-marketing',
    'ugc-creator-marketing': 'ugc-reels-creator-marketing',
    'dashboard-kpi': 'dashboard-kpi-systems',
    'ecommerce-marketing': 'ecommerce-scaling',
    'crm-automation': 'ai-automation-systems',
    'lead-generation': 'b2b-lead-generation',
    'logo-branding': 'brand-identity-design',
  };
  if (aliasMap[clean] && SERVICE_FAQS[aliasMap[clean]]) {
    return SERVICE_FAQS[aliasMap[clean]];
  }
  return DEFAULT_SERVICE_FAQS;
}
