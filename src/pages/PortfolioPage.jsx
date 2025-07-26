import React from 'react';
import PhotoGallery from '../components/PhotoGallery';
import SectionHeader from '../components/SectionHeader';

// Dummy data for categorized galleries
const portfolioCategories = [
  {
    id: 'weddings',
    name: 'Weddings',
    images: [
      { id: 101, src: 'https://images.unsplash.com/photo-1520854221256-bd4645221151?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wedding Couple Portrait' },
      { id: 102, src: 'https://images.unsplash.com/photo-1519741497674-61148186355d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wedding Ceremony' },
      { id: 103, src: 'https://images.unsplash.com/photo-1549506691-88f6a911a3b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Bridal Portrait' },
      { id: 104, src: 'https://images.unsplash.com/photo-1521791165427-f4726cdb1981?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Wedding Dance' },
    ],
  },
  {
    id: 'portraits',
    name: 'Portraits',
    images: [
      { id: 201, src: 'https://images.unsplash.com/photo-1518020349830-672ce003dd37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Studio Portrait' },
      { id: 202, src: 'https://images.unsplash.com/photo-1560965377-241f39f28d32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Outdoor Portrait' },
      { id: 203, src: 'https://images.unsplash.com/photo-1594747713292-1e967a5b3a37?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Child Portrait' },
      { id: 204, src: 'https://images.unsplash.com/photo-1533965902148-9c60010901e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Couple Portrait' },
    ],
  },
  {
    id: 'events',
    name: 'Events',
    images: [
      { id: 301, src: 'https://images.unsplash.com/photo-1522881193437-14e38e6e87f8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Concert Photography' },
      { id: 302, src: 'https://images.unsplash.com/photo-1505373740266-9e1e9d0d343c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Conference Photography' },
      { id: 303, src: 'https://images.unsplash.com/photo-1511578314322-a7f804a8e6e5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Birthday Party' },
    ],
  },
  {
    id: 'commercial',
    name: 'Commercial',
    images: [
      { id: 401, src: 'https://images.unsplash.com/photo-1587573679169-231a5e78a635?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Product Photography' },
      { id: 402, src: 'https://images.unsplash.com/photo-1542838383-7c9e9b98d1a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', alt: 'Food Photography' },
    ],
  },
];

const PortfolioPage = () => {
  return (
    <div className="bg-light-gray py-16">
      <SectionHeader
        title="Our Photography Portfolio"
        subtitle="Explore our diverse range of work, showcasing our passion for capturing unique stories."
      />

      <div className="container mx-auto px-4">
        {portfolioCategories.map(category => (
          <div key={category.id} className="mb-16" id={category.id}>
            <SectionHeader title={category.name} subtitle={`A selection of our best ${category.name.toLowerCase()} work.`} />
            <PhotoGallery images={category.images} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPage;