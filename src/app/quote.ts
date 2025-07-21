export interface Quote {
  content: string;
  author: string;
  authorSlug?: string; // Optional since you might not use it
  length?: number;     // Optional since you might not use it
}
