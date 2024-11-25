export default function AddToCartButton({ label = "Add to Cart", className = "", onClick }) {
  return (
    <button 
      onClick={onClick}
      className={`${className}`}



      >
      {label}
    </button>
  );
}