export interface CosmicObject {
  id: string;
  slug: string;
  title: string;
  content?: string;
  metadata: Record<string, any>;
  type: string;
  created_at: string;
  modified_at: string;
}

export interface CosmicImage {
  url: string;
  imgix_url: string;
}

export interface Service extends CosmicObject {
  type: 'services';
  metadata: {
    service_name?: string;
    icon_emoji?: string;
    summary?: string;
    description?: string;
    key_features?: string[];
    industries_served?: string[];
    featured_image?: CosmicImage;
  };
}

export interface TeamMember extends CosmicObject {
  type: 'team-members';
  metadata: {
    name?: string;
    job_title?: string;
    photo?: CosmicImage;
    bio?: string;
    areas_of_expertise?: string[];
    linkedin_url?: string;
  };
}

export interface CaseStudy extends CosmicObject {
  type: 'case-studies';
  metadata: {
    project_title?: string;
    client_name?: string;
    industry?: string;
    challenge?: string;
    solution?: string;
    results?: string;
    related_services?: Service[];
    featured_image?: CosmicImage;
  };
}

export interface Testimonial extends CosmicObject {
  type: 'testimonials';
  metadata: {
    quote?: string;
    client_name?: string;
    client_title?: string;
    company?: string;
    client_photo?: CosmicImage;
    star_rating?: number;
  };
}

export interface CosmicResponse<T> {
  objects: T[];
  total: number;
  limit: number;
  skip: number;
}