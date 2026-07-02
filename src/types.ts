export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  benefits: string[];
  image: string;
  iconName: string; // lucide icon identifier
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
  service: string;
  date: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "valeting" | "upholstery" | "carpet";
  image: string;
  description: string;
}
