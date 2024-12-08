// components/ImageGallery.js

export default function ImageGallery({ images }) {
  return (
    <div className="flex space-x-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Image ${index}`} className="w-24 h-24 object-cover rounded-md" />
      ))}
    </div>
  );
}