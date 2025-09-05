import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProjectDetail } from '@/components/portfolio/project-detail';
import { getProjectBySlug, projects } from '@/lib/portfolio-data';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.seo.title,
    description: project.seo.description,
    keywords: project.seo.keywords,
    openGraph: {
      title: project.seo.title,
      description: project.seo.description,
      images: [project.video.poster],
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  // Structured Data for VideoObject
  const videoSchema = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: project.title,
    description: project.description,
    thumbnailUrl: project.video.poster,
    uploadDate: `${project.year}-01-01`,
    duration: `PT${project.duration.replace(':', 'M')}S`,
    contentUrl: project.video.url,
    embedUrl: project.video.url,
    publisher: {
      '@type': 'Organization',
      name: 'MediaStudio',
      logo: {
        '@type': 'ImageObject',
        url: 'https://mediastudio.com/images/logo.png'
      }
    },
    creator: {
      '@type': 'Organization',
      name: 'MediaStudio'
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(videoSchema),
        }}
      />
      <ProjectDetail project={project} />
    </>
  );
}