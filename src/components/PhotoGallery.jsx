import React, { useState } from 'react';

const PhotoGallery = ({ images, title }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openLightbox = (image) => {
    setSelectedImage(image);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setSelectedImage(null);
  };

  // Dummy image data for demonstration
  const dummyImages = [
    { id: 1, src: 'https://images.pexels.com/photos/30215055/pexels-photo-30215055.jpeg', alt: 'Wedding Couple' },
    { id: 2, src: 'https://images.pexels.com/photos/33151089/pexels-photo-33151089.jpeg', alt: 'Portrait of a woman' },
    { id: 3, src: 'https://images.pexels.com/photos/2728557/pexels-photo-2728557.jpeg', alt: 'Event photography' },
    { id: 4, src: 'https://images.pexels.com/photos/19995838/pexels-photo-19995838.jpeg', alt: 'Family photo' },
    { id: 5, src: 'https://images.pexels.com/photos/22705582/pexels-photo-22705582.jpeg', alt: 'Nature photography' },
    { id: 6, src: 'https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg', alt: 'Fashion photography' },
    { id: 7, src: 'https://images.pexels.com/photos/1365425/pexels-photo-1365425.jpeg', alt: 'Traveling photography' },
    { id: 8, src: 'https://images.pexels.com/photos/30032395/pexels-photo-30032395.jpeg', alt: 'Pre-Wedding photography' },
  ];

  const displayImages = images.length > 0 ? images : dummyImages;

  return (
    <div className="container mx-auto px-4 py-8">
      {title && <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">{title}</h2>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {displayImages.map((image) => (
          <div
            key={image.id}
            className="relative overflow-hidden rounded-lg shadow-md cursor-pointer group"
            onClick={() => openLightbox(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <p className="text-white text-lg font-semibold">{image.alt}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          onClick={closeLightbox}
        >
          <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
            />
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white text-3xl p-2 rounded-full bg-gray-800 bg-opacity-50 hover:bg-opacity-80 transition-colors"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PhotoGallery;