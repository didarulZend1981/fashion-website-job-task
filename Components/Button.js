export default function AddToCartButton({ text = "Add to Cart", className = "" }) {
  return (
    <button className={`${className}`}>
      {text}
    </button>
  );
}