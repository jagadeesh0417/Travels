import { NavLink, Service, Testimonial, GalleryImage, Destination } from '../../types';

export const navLinks: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'Services', href: '/services' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Testimonials', href: '/testimonials' },
  { label: 'Contact', href: '/contact' },
];

export const services: Service[] = [
  {
    id: 1,
    title: 'Tour Packages',
    description: 'Curated luxury travel experiences across India\'s most captivating destinations.',
    icon: '🗺️',
  },
  {
    id: 2,
    title: 'Bus Booking',
    description: 'Premium bus travel with comfort seating, AC and entertainment systems.',
    icon: '🚌',
  },
  {
    id: 3,
    title: 'Cab Booking',
    description: 'Executive car rentals with professional chauffeurs for any occasion.',
    icon: '🚗',
  },
  {
    id: 4,
    title: 'Corporate Travel',
    description: 'End-to-end corporate travel management and event transportation.',
    icon: '💼',
  },
  {
    id: 5,
    title: 'Family Trips',
    description: 'Safe and enjoyable family travel packages with curated itineraries.',
    icon: '👨‍👩‍👧‍👦',
  },
  {
    id: 6,
    title: 'Group Tours',
    description: 'Exclusive group travel experiences with expert guides and premium amenities.',
    icon: '🎯',
  },
];

export const destinations: Destination[] = [
  {
    id: 1,
    name: 'Hyderabad',
    image: 'https://images.unsplash.com/photo-1599894012649-f2c101c6d194?w=600&q=80',
    distance: '0 km',
    duration: 'Base City',
    price: 'From ₹0',
  },
  {
    id: 2,
    name: 'Tirupati',
    image: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=600&q=80',
    distance: '650 km',
    duration: '10-12 hrs',
    price: 'From ₹1,299',
  },
  {
    id: 3,
    name: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8056fc?w=600&q=80',
    distance: '570 km',
    duration: '8-10 hrs',
    price: 'From ₹999',
  },
  {
    id: 4,
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=600&q=80',
    distance: '760 km',
    duration: '12-14 hrs',
    price: 'From ₹1,599',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Arun Sharma',
    location: 'Hyderabad',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80',
    rating: 5,
    content: 'Exceptional service! The luxury bus was immaculate and the journey to Tirupati was incredibly comfortable. Highly recommend BDL Travels.',
  },
  {
    id: 2,
    name: 'Priya Patel',
    location: 'Bangalore',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80',
    rating: 5,
    content: 'Best travel agency I have ever used. From booking to drop-off, everything was seamless. The corporate travel package is top-notch.',
  },
  {
    id: 3,
    name: 'Rahul Verma',
    location: 'Mumbai',
    avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80',
    rating: 5,
    content: 'Our family trip to Goa was absolutely magical. BDL Travels took care of every detail. The kids loved the comfortable ride!',
  },
  {
    id: 4,
    name: 'Ananya Reddy',
    location: 'Chennai',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80',
    rating: 5,
    content: 'The cab booking service is phenomenal. Clean cars, professional drivers, and punctual service. My go-to travel partner.',
  },
  {
    id: 5,
    name: 'Vikram Singh',
    location: 'Delhi',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80',
    rating: 5,
    content: 'Group tour to Tirupati was flawlessly organized. BDL Travels exceeded all expectations. Will definitely book again!',
  },
];

export const galleryImages: GalleryImage[] = [
  { id: 1, src: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80', alt: 'Luxury Bus', width: 800, height: 1000, category: 'fleet' },
  { id: 2, src: 'https://images.unsplash.com/photo-1566837945700-30057527ade0?w=1000&q=80', alt: 'Tirupati Temple', width: 1000, height: 800, category: 'destinations' },
  { id: 3, src: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?w=800&q=80', alt: 'Goa Beach', width: 800, height: 800, category: 'destinations' },
  { id: 4, src: 'https://images.unsplash.com/photo-1599894012649-f2c101c6d194?w=1000&q=80', alt: 'Hyderabad Charminar', width: 1000, height: 600, category: 'destinations' },
  { id: 5, src: 'https://images.unsplash.com/photo-1596178060671-7a80dc8056fc?w=600&q=80', alt: 'Bangalore Palace', width: 600, height: 1000, category: 'destinations' },
  { id: 6, src: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=1000&q=80', alt: 'Luxury Interior', width: 1000, height: 800, category: 'fleet' },
];

export const destinations_list = ['Hyderabad', 'Tirupati', 'Bangalore', 'Goa'];
