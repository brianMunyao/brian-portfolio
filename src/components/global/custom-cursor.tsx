'use client';

import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';

import cursor from '@/assets/cursor-white.svg';

const CustomCursor = () => {
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	const [isHovering, setIsHovering] = useState(false);
	const [isClicking, setIsClicking] = useState(false);

	useEffect(() => {
		const updateMousePosition = (e: MouseEvent) => {
			setMousePosition({ x: e.clientX, y: e.clientY });
			console.log(e.clientX, e.clientX);
		};

		const handleMouseDown = () => setIsClicking(true);
		const handleMouseUp = () => setIsClicking(false);

		const handleMouseEnter = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.tagName === 'BUTTON' ||
				target.tagName === 'A' ||
				target.closest('button') ||
				target.closest('a') ||
				target.classList.contains('cursor-pointer') ||
				getComputedStyle(target).cursor === 'pointer'
			) {
				setIsHovering(true);
			}
		};

		const handleMouseLeave = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (
				target.tagName === 'BUTTON' ||
				target.tagName === 'A' ||
				target.closest('button') ||
				target.closest('a') ||
				target.classList.contains('cursor-pointer') ||
				getComputedStyle(target).cursor === 'pointer'
			) {
				setIsHovering(false);
			}
		};

		// Add event listeners
		window.addEventListener('mousemove', updateMousePosition);
		window.addEventListener('mousedown', handleMouseDown);
		window.addEventListener('mouseup', handleMouseUp);
		document.addEventListener('mouseover', handleMouseEnter);
		document.addEventListener('mouseout', handleMouseLeave);

		// Hide default cursor
		document.body.style.cursor = 'none';
		document.documentElement.style.cursor = 'none';

		return () => {
			window.removeEventListener('mousemove', updateMousePosition);
			window.removeEventListener('mousedown', handleMouseDown);
			window.removeEventListener('mouseup', handleMouseUp);
			document.removeEventListener('mouseover', handleMouseEnter);
			document.removeEventListener('mouseout', handleMouseLeave);

			// Restore default cursor
			document.body.style.cursor = 'auto';
			document.documentElement.style.cursor = 'auto';
		};
	}, []);

	return (
		<>
			{/* Main Cursor */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-difference"
				animate={{
					x: mousePosition.x - 12,
					y: mousePosition.y - 12,
					scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 500,
					damping: 28,
					mass: 0.5,
				}}
			>
				<Image
					src={cursor}
					alt="Custom cursor"
					width={24}
					height={24}
					className="w-6 h-6"
					style={{
						filter: isHovering
							? 'brightness(1.5) saturate(1.2)'
							: 'none',
					}}
				/>

				<span
					style={{
						color: '#fff',
					}}
				>
					{JSON.stringify(mousePosition)}
				</span>
			</motion.div>

			{/* Cursor Trail Effect */}
			<motion.div
				className="fixed top-0 left-0 pointer-events-none z-[9998]"
				animate={{
					x: mousePosition.x - 20,
					y: mousePosition.y - 20,
					scale: isHovering ? 1.2 : 0.8,
					opacity: isHovering ? 0.6 : 0.3,
				}}
				transition={{
					type: 'spring',
					stiffness: 200,
					damping: 25,
					mass: 0.8,
				}}
			>
				<div
					className="w-10 h-10 rounded-full border-2 border-secondary/50"
					style={{
						background: `radial-gradient(circle, rgba(205, 238, 211, 0.1) 0%, transparent 70%)`,
					}}
				/>
			</motion.div>

			{/* Click Ripple Effect */}
			{isClicking && (
				<motion.div
					className="fixed top-0 left-0 pointer-events-none z-[9997]"
					initial={{
						x: mousePosition.x - 15,
						y: mousePosition.y - 15,
						scale: 0,
						opacity: 1,
					}}
					animate={{
						scale: 2,
						opacity: 0,
					}}
					transition={{
						duration: 0.6,
						ease: 'easeOut',
					}}
				>
					<div className="w-8 h-8 rounded-full border-2 border-secondary" />
				</motion.div>
			)}
		</>
	);
};

export default CustomCursor;
