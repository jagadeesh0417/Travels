export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Destination {
  id: number;
  name: string;
  image: string;
  distance: string;
  duration: string;
  price: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  content: string;
}

export interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  width: number;
  height: number;
  category: string;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  destination: string;
  date: string;
  passengers: number;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
}

export interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff';
  created_at: string;
}

export interface Package {
  id: string;
  title: string;
  description: string;
  price: number;
  duration: string;
  destinations: string[];
  includes: string[];
  image: string;
  featured: boolean;
  created_at: string;
}

export interface Message {
  id: string;
  name: string;
  email: string;
  message: string;
  read: boolean;
  created_at: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  content: string;
  approved: boolean;
  created_at: string;
}

export interface Analytics {
  total_bookings: number;
  total_users: number;
  total_packages: number;
  total_messages: number;
  monthly_bookings: number[];
  revenue_data: number[];
}
