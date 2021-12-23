interface BlogpostMeta {
  slug: string;
  title: string;
  written_at: string;
  description: string;
  author: string;
}

interface BlogpostInfo {
  meta: BlogpostMeta;
  content: string;
}

export type { BlogpostMeta, BlogpostInfo };
