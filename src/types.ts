export type ProjectType = 'notion' | 'video';

export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  type: ProjectType;
  link?: string; // For Notion/External links
  videoUrl?: string; // For Embed video URL (Youtube/Vimeo)
  description: string;
}

