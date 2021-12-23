interface BlogpostMeta {
  slug: string;
  title: string;
  written_at: string;
}

interface BlogpostInfo {
  meta: BlogpostMeta;
  content: string;
}

export type { BlogpostMeta, BlogpostInfo };
