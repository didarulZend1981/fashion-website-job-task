
import { FaStar } from "react-icons/fa";

export default function StarRating({ rating }) {
	

		const maxStars = 5; // Total number of stars

		  return (
		    <div className="flex space-x-1">
		      {Array.from({ length: maxStars }, (_, index) => (
		        <FaStar
		          key={index}
		          className={index < rating ? "text-yellow-400" : "text-gray-300"}
		          size={20} 
		        />
		      ))}
		    </div>
		  );

93041904
D23190803(5)
D23190803(1)

}