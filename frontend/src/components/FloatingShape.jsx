import { motion } from "framer-motion";

const FloatingShape = ({ color, size, top, left, delay, shape = "circle" }) => {
	const shapeClass = shape === "square" ? "rounded-none" : "rounded-full"; // Use 'rounded-none' for square

	return (
		<motion.div
			className={`absolute ${shapeClass} ${color} ${size} opacity-20 blur-xl`}
			style={{ top, left }}
			animate={{
				y: ["0%", "100%", "0%"],
				x: ["0%", "100%", "0%"],
				rotate: [0, 360],
			}}
			transition={{
				duration: 20,
				ease: "linear",
				repeat: Infinity,
				delay,
				rotate: {
					type: "spring",
					duration: 1,
					ease: "linear",
					repeat: Infinity, // Ensure the rotation is infinite
				},
			}}
			aria-hidden='true'
		/>
	);
};

export default FloatingShape;
