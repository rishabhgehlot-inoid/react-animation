/* eslint-disable react/prop-types */
// src/components/ImageCard.js

const ImageCard = ({ image, onEdit, onDelete }) => (
  <div className="relative group p-2">
    <img
      src={image.url}
      alt={image.alt || "Gallery Image"}
      className="rounded-md shadow-md"
    />
    <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-0 bg-black bg-opacity-50 group-hover:opacity-100">
      <button
        onClick={() => onEdit(image.id)}
        className="px-3 py-1 text-white bg-blue-600 rounded-md"
      >
        Edit
      </button>
      <button
        onClick={() => onDelete(image.id)}
        className="px-3 py-1 text-white bg-red-600 rounded-md"
      >
        Delete
      </button>
    </div>
  </div>
);

export default ImageCard;
