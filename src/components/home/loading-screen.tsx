'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useEffect, useState } from 'react';

type LoadingScreenProps = {
	onLoadingComplete: () => void;
};

const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
	const [loadingProgress, setLoadingProgress] = useState(0);
	const [currentPhase, setCurrentPhase] = useState<
		'loading' | 'logo-reveal' | 'complete'
	>('loading');

	useEffect(() => {
		// Simulate loading progress
		const progressInterval = setInterval(() => {
			setLoadingProgress((prev) => {
				if (prev >= 100) {
					clearInterval(progressInterval);
					setCurrentPhase('logo-reveal');
					return 100;
				}
				// Realistic loading curve - faster at start, slower at end
				const increment =
					prev < 50 ? Math.random() * 15 + 5 : Math.random() * 8 + 2;
				return Math.min(prev + increment, 100);
			});
		}, 150);

		return () => clearInterval(progressInterval);
	}, []);

	useEffect(() => {
		if (currentPhase === 'logo-reveal') {
			// Start logo reveal animation after a brief pause
			const timer = setTimeout(() => {
				setCurrentPhase('complete');
				// Complete loading after logo animation
				setTimeout(onLoadingComplete, 1500);
			}, 500);

			return () => clearTimeout(timer);
		}
	}, [currentPhase, onLoadingComplete]);

	return (
		<AnimatePresence>
			<motion.div
				className="fixed inset-0 z-50 flex items-center justify-center"
				style={{ backgroundColor: '#001d21' }}
				initial={{ opacity: 1 }}
				exit={{
					opacity: 0,
					scale: 1.1,
					filter: 'blur(10px)',
				}}
				transition={{
					duration: 0.8,
					ease: 'easeInOut',
					delay: currentPhase === 'complete' ? 0.5 : 0,
				}}
			>
				{/* Animated Background Particles */}
				<div className="absolute inset-0 overflow-hidden">
					{[...Array(20)].map((_, i) => (
						<motion.div
							key={i}
							className="absolute w-1 h-1 rounded-full opacity-30"
							style={{ backgroundColor: '#cdeed3' }}
							animate={{
								y: [0, -100, 0],
								opacity: [0.3, 0.8, 0.3],
								scale: [1, 1.5, 1],
							}}
							transition={{
								duration: 3 + Math.random() * 2,
								repeat: Number.POSITIVE_INFINITY,
								delay: Math.random() * 2,
								ease: 'easeInOut',
							}}
						/>
					))}
				</div>

				{/* Main Loading Content */}
				<div className="relative z-10 text-center">
					{currentPhase === 'loading' && (
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -20 }}
							transition={{ duration: 0.6 }}
						>
							{/* Loading Spinner */}
							<div className="relative mb-8">
								<motion.div
									className="w-20 h-20 border-4 border-muted rounded-full mx-auto"
									style={{ borderTopColor: '#cdeed3' }}
									animate={{ rotate: 360 }}
									transition={{
										duration: 1,
										repeat: Number.POSITIVE_INFINITY,
										ease: 'linear',
									}}
								/>
								<motion.div
									className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full mx-auto"
									style={{ borderRightColor: '#cdeed3' }}
									animate={{ rotate: -360 }}
									transition={{
										duration: 1.5,
										repeat: Number.POSITIVE_INFINITY,
										ease: 'linear',
									}}
								/>
							</div>

							{/* Loading Text */}
							<motion.div
								className="space-y-4"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.3 }}
							>
								<h2 className="text-2xl font-bold text-white">
									Loading Portfolio
								</h2>
								<div className="text-muted-foreground">
									Preparing something amazing...
								</div>
							</motion.div>

							{/* Progress Bar */}
							<div className="mt-8 w-64 mx-auto">
								<div className="flex justify-between text-sm text-muted-foreground mb-2">
									<span>Progress</span>
									<motion.span
										key={loadingProgress}
										initial={{ opacity: 0, scale: 0.8 }}
										animate={{ opacity: 1, scale: 1 }}
										transition={{ duration: 0.2 }}
									>
										{Math.round(loadingProgress)}%
									</motion.span>
								</div>
								<div className="w-full bg-muted rounded-full h-2 overflow-hidden">
									<motion.div
										className="h-full bg-gradient-to-r from-[#cdeed3] to-[#a8e6cf] rounded-full"
										initial={{ width: 0 }}
										animate={{
											width: `${loadingProgress}%`,
										}}
										transition={{
											duration: 0.3,
											ease: 'easeOut',
										}}
									/>
								</div>
							</div>

							{/* Loading Steps */}
							<motion.div
								className="mt-6 text-sm text-muted-foreground"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ delay: 0.5 }}
							>
								{loadingProgress < 30 &&
									'Initializing components...'}
								{loadingProgress >= 30 &&
									loadingProgress < 60 &&
									'Loading projects...'}
								{loadingProgress >= 60 &&
									loadingProgress < 90 &&
									'Setting up animations...'}
								{loadingProgress >= 90 && 'Almost ready...'}
							</motion.div>
						</motion.div>
					)}

					{currentPhase === 'logo-reveal' && <LogoReveal />}
				</div>

				{/* Corner Decorations */}
				<motion.div
					className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 opacity-30"
					style={{ borderColor: '#cdeed3' }}
					initial={{ scale: 0, rotate: -45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 1, delay: 0.2 }}
				/>
				<motion.div
					className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-primary opacity-30"
					initial={{ scale: 0, rotate: 45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 1, delay: 0.4 }}
				/>
				<motion.div
					className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-primary opacity-30"
					initial={{ scale: 0, rotate: 45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 1, delay: 0.6 }}
				/>
				<motion.div
					className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-primary opacity-30"
					initial={{ scale: 0, rotate: -45 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{ duration: 1, delay: 0.8 }}
				/>
			</motion.div>
		</AnimatePresence>
	);
};

function LogoReveal() {
	return (
		<motion.div
			className="flex flex-col items-center"
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
		>
			{/* Logo Container */}
			<motion.div
				className="relative mb-8"
				initial={{ scale: 0.5, opacity: 0 }}
				animate={{ scale: 1, opacity: 1 }}
				transition={{
					duration: 0.8,
					ease: 'back.out(1.7)',
					delay: 0.2,
				}}
			>
				{/* Outer Ring */}
				<motion.div
					className="absolute inset-0 w-32 h-32 border-4 rounded-full"
					style={{ borderColor: '#cdeed3' }}
					initial={{ scale: 0, rotate: -180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{
						duration: 1.2,
						ease: 'easeOut',
						delay: 0.3,
					}}
				/>

				{/* Inner Ring */}
				<motion.div
					className="absolute inset-2 w-28 h-28 border-2 border-primary rounded-full opacity-60"
					initial={{ scale: 0, rotate: 180 }}
					animate={{ scale: 1, rotate: 0 }}
					transition={{
						duration: 1,
						ease: 'easeOut',
						delay: 0.5,
					}}
				/>

				{/* Logo Content */}
				<div className="relative w-32 h-32 flex items-center justify-center">
					{/* Background Circle */}
					<motion.div
						className="absolute inset-4 rounded-full"
						style={{
							background:
								'linear-gradient(135deg, #cdeed3, #a8e6cf)',
						}}
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{
							duration: 0.6,
							ease: 'back.out(1.7)',
							delay: 0.7,
						}}
					/>

					{/* Initials */}
					<motion.div
						className="relative z-10 text-3xl font-bold text-primary-foreground"
						initial={{ opacity: 0, scale: 0.5 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							duration: 0.5,
							ease: 'back.out(1.7)',
							delay: 0.9,
						}}
					>
						BK
					</motion.div>
				</div>

				{/* Rotating Accent */}
				<motion.div
					className="absolute -inset-2 w-36 h-36 border border-primary rounded-full opacity-20"
					animate={{ rotate: 360 }}
					transition={{
						duration: 8,
						repeat: Number.POSITIVE_INFINITY,
						ease: 'linear',
					}}
				>
					<div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2" />
					<div className="absolute bottom-0 left-1/2 w-2 h-2 bg-primary rounded-full transform -translate-x-1/2 translate-y-1/2" />
				</motion.div>
			</motion.div>

			{/* Brand Name */}
			<motion.div
				className="text-center space-y-2"
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6, delay: 1.1 }}
			>
				<motion.h1
					className="text-4xl font-bold text-white"
					initial={{ opacity: 0, letterSpacing: '0.5em' }}
					animate={{ opacity: 1, letterSpacing: '0.1em' }}
					transition={{ duration: 0.8, delay: 1.2 }}
				>
					Brian Kalusi
				</motion.h1>
				<motion.div
					className="text-primary text-lg font-medium"
					style={{ color: '#cdeed3' }}
					initial={{ opacity: 0, y: 10 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 1.4 }}
				>
					Full-Stack Developer & QA Engineer
				</motion.div>
			</motion.div>

			{/* Tagline */}
			<motion.div
				className="mt-6 text-muted-foreground text-center max-w-md"
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.6, delay: 1.6 }}
			>
				Building robust applications with quality in mind
			</motion.div>

			{/* Loading Complete Indicator */}
			<motion.div
				className="mt-8 flex items-center gap-2 text-chart-4"
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.4, delay: 1.8 }}
			>
				<motion.div
					className="w-2 h-2 bg-chart-4 rounded-full"
					animate={{ scale: [1, 1.5, 1] }}
					transition={{
						duration: 1,
						repeat: Number.POSITIVE_INFINITY,
					}}
				/>
				<span className="text-sm">Ready to explore</span>
			</motion.div>
		</motion.div>
	);
}

export default LoadingScreen;
