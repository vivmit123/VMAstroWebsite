export interface SiteConfig {
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  lang: string;
  base: string;
  website: string;
  social: Record<string, string>;
  googleAnalyticsId?: string;
  homeHeroDescription: string;
  blogDescription: string;
  projectsDescription: string;

  // Homepage post counts
  featuredPostsCount: number;
  latestPostsCount: number;

  // Homepage projects
  homeProjects: {
    enabled: boolean;
    count: number;
  };

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: boolean;
    filePath: string; // Path to markdown file with CTA content
  };

  // Homepage Hero block
  hero: {
    enabled: boolean;
    filePath: string;
  };

  // Giscus comments configuration
  comments: {
    enabled: boolean;
    repo: string; // e.g., 'username/repo'
    repoId: string;
    category: string;
    categoryId: string;
    mapping: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
    reactionsEnabled: boolean;
    emitMetadata: boolean;
    inputPosition: 'top' | 'bottom';
    theme: string; // e.g., 'preferred_color_scheme', 'light', 'dark'
    lang: string;
  };
}

export const SITE: SiteConfig = {
  author: 'Vivek Mittal',
  desc: 'Writer, Lawyer, Dad.',
  title: 'Vivek Mittal',
  ogImage: 'og.png',
  lang: 'en-US',
  base: '/',
  website: 'https://vivekmittal.com',
  social: {
    bluesky: 'https://bsky.app/profile/vivmit.bsky.social',
    instagram: 'https://instagram.com/vivmit',
    facebook: 'https://facebook.com/vivmit',
  },
  googleAnalyticsId: 'G-TLZ1WFVTH3', // Example: 'G-XXXXXXXXXX'
  homeHeroDescription:
    'Writing science fiction and essays fighting for immigrants rights and father to two wonderful human beings.',
  blogDescription: 'Some thoughts.',
  projectsDescription: 'My writing.',

  // Homepage post counts
  featuredPostsCount: 1,
  latestPostsCount: 1,

  // Homepage projects
  homeProjects: {
    enabled: true,
    count: 0,
  },

  // CTA (Call-to-Action) block for blog posts
  cta: {
    enabled: false,
    filePath: 'site/cta.md',
  },

  hero: {
    enabled: true,
    filePath: 'site/hero.md',
  },

  // Giscus comments configuration
  // Get your configuration from https://giscus.app
  comments: {
    enabled: false, // Set to true after filling in the IDs below
    repo: 'vivmit123/VMAstroWebsite', // Your GitHub repository
    repoId: '', // Get from https://giscus.app - enter repo above and copy the value
    category: 'General', // GitHub Discussions category name
    categoryId: '', // Get from https://giscus.app - select category and copy the value
    mapping: 'pathname',
    reactionsEnabled: true,
    emitMetadata: false,
    inputPosition: 'bottom',
    theme: 'preferred_color_scheme', // Automatically matches your site theme
    lang: 'en',
  },
};
