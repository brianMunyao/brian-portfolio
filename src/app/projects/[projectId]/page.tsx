'use client';
import { use, useRef, useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
	ArrowLeft,
	Github,
	Tag,
	TrendingUp,
	Award,
	Lightbulb,
	Code,
	Zap,
	CheckCircle,
	Smartphone,
	Monitor,
	ImageIcon,
	Globe,
	X,
	ChevronLeft,
	ChevronRight,
} from 'lucide-react';
import Link from 'next/link';
import { projects } from '@/constants/projects';
import Image from 'next/image';
import { RiAppStoreLine, RiGooglePlayLine } from 'react-icons/ri';

type Props = {
	params: Promise<{ projectId: string }>;
};

interface ImageModalProps {
	images: string[];
	currentIndex: number;
	isOpen: boolean;
	onClose: () => void;
	onNavigate: (index: number) => void;
	imageType: 'mobile' | 'web';
	projectTitle: string;
}

function ImageModal({
	images,
	currentIndex,
	isOpen,
	onClose,
	onNavigate,
	imageType,
	projectTitle,
}: ImageModalProps) {
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (!isOpen) return;

			switch (e.key) {
				case 'Escape':
					onClose();
					break;
				case 'ArrowLeft':
					e.preventDefault();
					onNavigate(
						currentIndex > 0 ? currentIndex - 1 : images.length - 1
					);
					break;
				case 'ArrowRight':
					e.preventDefault();
					onNavigate(
						currentIndex < images.length - 1 ? currentIndex + 1 : 0
					);
					break;
			}
		};

		document.addEventListener('keydown', handleKeyDown);
		return () => document.removeEventListener('keydown', handleKeyDown);
	}, [isOpen, currentIndex, images.length, onClose, onNavigate]);

	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'unset';
		}

		return () => {
			document.body.style.overflow = 'unset';
		};
	}, [isOpen]);

	if (!isOpen) return null;

	return (
		<AnimatePresence>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
				className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
				onClick={onClose}
			>
				<div className="relative w-full h-full flex items-center justify-center p-4">
					{/* Close Button */}
					<button
						onClick={onClose}
						className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
						aria-label="Close image viewer"
					>
						<X size={24} />
					</button>

					{/* Navigation Buttons */}
					{images.length > 1 && (
						<>
							<button
								onClick={(e) => {
									e.stopPropagation();
									onNavigate(
										currentIndex > 0
											? currentIndex - 1
											: images.length - 1
									);
								}}
								className="absolute left-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
								aria-label="Previous image"
							>
								<ChevronLeft size={24} />
							</button>
							<button
								onClick={(e) => {
									e.stopPropagation();
									onNavigate(
										currentIndex < images.length - 1
											? currentIndex + 1
											: 0
									);
								}}
								className="absolute right-4 z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white transition-colors"
								aria-label="Next image"
							>
								<ChevronRight size={24} />
							</button>
						</>
					)}

					{/* Image Container */}
					<motion.div
						initial={{ scale: 0.8, opacity: 0 }}
						animate={{ scale: 1, opacity: 1 }}
						exit={{ scale: 0.8, opacity: 0 }}
						transition={{ duration: 0.3 }}
						className="relative max-w-7xl max-h-full"
						onClick={(e) => e.stopPropagation()}
					>
						<div
							className={`relative ${
								imageType === 'mobile'
									? 'max-w-md lg:max-w-lg xl:max-w-xl'
									: 'w-full'
							}`}
						>
							<Image
								src={images[currentIndex] || '/placeholder.svg'}
								alt={`${projectTitle} ${imageType} screenshot ${
									currentIndex + 1
								}`}
								width={imageType === 'mobile' ? 600 : 1200}
								height={imageType === 'mobile' ? 900 : 800}
								className={`object-contain max-h-[90vh] w-auto ${
									imageType === 'mobile'
										? 'rounded-2xl'
										: 'rounded-lg'
								}`}
								priority
							/>
						</div>

						{/* Image Info */}
						<div className="absolute bottom-4 left-4 right-4 bg-black/70 rounded-lg p-4 text-white">
							<div className="flex items-center justify-between">
								<div>
									<h3 className="font-semibold">
										{projectTitle} -{' '}
										{imageType === 'mobile'
											? 'Mobile'
											: 'Web'}{' '}
										View
									</h3>
									<p className="text-sm text-gray-300">
										Image {currentIndex + 1} of{' '}
										{images.length}
									</p>
								</div>
								{images.length > 1 && (
									<div className="flex gap-1">
										{images.map((_, index) => (
											<button
												key={index}
												onClick={() =>
													onNavigate(index)
												}
												className={`w-2 h-2 rounded-full transition-colors ${
													index === currentIndex
														? 'bg-white'
														: 'bg-white/40 hover:bg-white/60'
												}`}
												aria-label={`Go to image ${
													index + 1
												}`}
											/>
										))}
									</div>
								)}
							</div>
						</div>
					</motion.div>
				</div>
			</motion.div>
		</AnimatePresence>
	);
}

export default function ProjectDetailPage({ params }: Props) {
	const { projectId } = use(params);
	const project = projects.find((p) => p.id === projectId);
	const pageRef = useRef<HTMLDivElement>(null);

	// Modal state
	const [modalState, setModalState] = useState<{
		isOpen: boolean;
		images: string[];
		currentIndex: number;
		imageType: 'mobile' | 'web';
	}>({
		isOpen: false,
		images: [],
		currentIndex: 0,
		imageType: 'mobile',
	});

	const openModal = (
		images: string[],
		index: number,
		type: 'mobile' | 'web'
	) => {
		setModalState({
			isOpen: true,
			images,
			currentIndex: index,
			imageType: type,
		});
	};

	const closeModal = () => {
		setModalState((prev) => ({ ...prev, isOpen: false }));
	};

	const navigateModal = (index: number) => {
		setModalState((prev) => ({ ...prev, currentIndex: index }));
	};

	if (!project) {
		return (
			<div className="min-h-screen flex flex-col items-center justify-center">
				<h1 className="text-2xl font-bold text-white mb-4">
					Project Not Found
				</h1>
				<Link href="/projects">
					<motion.button
						whileHover={{ scale: 1.05 }}
						className="cursor-pointer flex items-center gap-2 text-secondary hover:underline transition-colors duration-300"
					>
						Back to Projects
					</motion.button>
				</Link>
			</div>
		);
	}

	return (
		<div ref={pageRef} className="min-h-screen ">
			<div className="relative z-10 pt-32 pb-20 px-6">
				<div className="max-w-7xl mx-auto">
					{/* Header */}
					<motion.div
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8 }}
						className="mb-16"
					>
						<Link href="/projects">
							<motion.button
								whileHover={{ x: -5 }}
								className="cursor-button flex items-center gap-2 hover:text-secondary transition-colors duration-300 mb-8"
							>
								<ArrowLeft size={20} />
								Back to Projects
							</motion.button>
						</Link>
					</motion.div>

					<section id="overview" className="content-section mb-20">
						<div className="text-center mb-12">
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8 }}
								className="mb-6"
							>
								<h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
									{project.title}
								</h1>
								<p className="text-xl text-gray-300 leading-relaxed mb-8 max-w-4xl mx-auto">
									{project.description}
								</p>
								{/* Action Buttons */}
								<div className="flex flex-wrap gap-4 justify-center mb-12">
									{project.repo_link && (
										<Link
											href={project.repo_link}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-secondary hover:underline flex items-center gap-1"
										>
											<Github size={14} />
											Code
										</Link>
									)}
									{project.web_link && (
										<Link
											href={project.web_link}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-secondary hover:underline flex items-center gap-1"
										>
											<Globe size={14} />
											Live
										</Link>
									)}
									{project.play_store_link && (
										<Link
											href={project.play_store_link}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-secondary hover:underline flex items-center gap-1"
										>
											<RiGooglePlayLine size={14} />
											Play Store
										</Link>
									)}
									{project.app_store_link && (
										<Link
											href={project.app_store_link}
											target="_blank"
											rel="noopener noreferrer"
											className="hover:text-secondary hover:underline flex items-center gap-1"
										>
											<RiAppStoreLine size={14} />
											App Store
										</Link>
									)}
								</div>
							</motion.div>
							{/* Project Meta Grid */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								className="items-center justify-center flex gap-6 max-w-4xl mx-auto"
							>
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<Tag
										size={24}
										className="text-purple-400 mb-3 mx-auto"
									/>
									<div className="text-sm text-gray-400 mb-1">
										Type
									</div>
									<div className="text-white font-semibold text-center">
										{project.type}
									</div>
								</div>
								<div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
									<TrendingUp
										size={24}
										className="text-orange-400 mb-3 mx-auto"
									/>
									<div className="text-sm text-gray-400 mb-1">
										Platform
									</div>
									<div className="text-white font-semibold">
										{project.mobileImages &&
										project.webImages
											? 'Mobile & Web'
											: project.mobileImages
											? 'Mobile'
											: 'Web'}
									</div>
								</div>
							</motion.div>
						</div>
					</section>

					{/* Image Gallery Section */}
					<section
						id="gallery"
						className="content-section image-gallery-section mb-20"
					>
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center justify-center gap-3 mb-12">
								<div className="p-3 bg-primary/20 rounded-xl">
									<ImageIcon
										size={24}
										className="text-secondary"
									/>
								</div>
								<h2 className="text-4xl font-bold text-white">
									Project Gallery
								</h2>
							</div>

							{/* Mobile Images */}
							{project.mobileImages &&
								project.mobileImages.length > 0 && (
									<div className="mb-16">
										<div className="flex items-center gap-3 mb-8">
											<Smartphone
												size={20}
												className="text-secondary"
											/>
											<h3 className="text-2xl font-semibold text-white">
												Mobile Experience
											</h3>
											<span className="text-sm text-gray-400 ml-2">
												Click to view full size
											</span>
										</div>
										<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
											{project.mobileImages.map(
												(image, index) => (
													<motion.div
														key={index}
														className="group cursor-pointer"
														whileHover={{
															scale: 1.05,
															y: -5,
														}}
														transition={{
															duration: 0.3,
														}}
														onClick={() =>
															openModal(
																project.mobileImages!,
																index,
																'mobile'
															)
														}
													>
														<div className="relative rounded-2xl overflow-hidden shadow-lg border border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
															<Image
																src={
																	image ||
																	'/placeholder.svg' ||
																	'/placeholder.svg'
																}
																alt={`${
																	project.title
																} mobile screenshot ${
																	index + 1
																}`}
																width={400}
																height={600}
																className="object-cover w-full h-auto rounded-2xl group-hover:scale-105 transition-transform duration-500"
																priority={
																	index === 0
																}
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
															<div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
																<p className="text-white text-sm font-medium">
																	Mobile View{' '}
																	{index + 1}
																</p>
																<p className="text-gray-300 text-xs">
																	Click to
																	enlarge
																</p>
															</div>
														</div>
													</motion.div>
												)
											)}
										</div>
									</div>
								)}

							{/* Web Images */}
							{project.webImages &&
								project.webImages.length > 0 && (
									<div>
										<div className="flex items-center gap-3 mb-8">
											<Monitor
												size={20}
												className="text-secondary"
											/>
											<h3 className="text-2xl font-semibold text-white">
												Web Experience
											</h3>
											<span className="text-sm text-gray-400 ml-2">
												Click to view full size
											</span>
										</div>
										<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
											{project.webImages.map(
												(image, index) => (
													<motion.div
														key={index}
														className="image-grid-item group cursor-pointer"
														whileHover={{
															scale: 1.02,
															y: -5,
														}}
														transition={{
															duration: 0.3,
														}}
														onClick={() =>
															openModal(
																project.webImages!,
																index,
																'web'
															)
														}
													>
														<div className="relative aspect-video rounded-2xl overflow-hidden shadow-xl border border-gray-700 group-hover:border-primary/50 transition-colors duration-300">
															<img
																src={
																	image ||
																	'/placeholder.svg' ||
																	'/placeholder.svg'
																}
																alt={`${
																	project.title
																} web screenshot ${
																	index + 1
																}`}
																className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
															/>
															<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
															<div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
																<div className="text-white font-medium">
																	Web
																	Interface{' '}
																	{index + 1}
																</div>
																<div className="text-gray-300 text-sm">
																	Click to
																	enlarge
																</div>
															</div>
														</div>
													</motion.div>
												)
											)}
										</div>
									</div>
								)}

							{/* No Images Fallback */}
							{(!project.mobileImages ||
								project.mobileImages.length === 0) &&
								(!project.webImages ||
									project.webImages.length === 0) && (
									<div className="text-center py-16">
										<div className="w-24 h-24 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
											<ImageIcon
												size={32}
												className="text-gray-600"
											/>
										</div>
										<p className="text-gray-400">
											Project images coming soon...
										</p>
									</div>
								)}
						</motion.div>
					</section>

					{/* The Thinking Process */}
					<section id="thinking" className="content-section mb-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
							className="mb-12"
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-3 bg-primary/20 rounded-xl">
									<Lightbulb
										size={24}
										className="text-secondary"
									/>
								</div>
								<h2 className="text-4xl font-bold text-white">
									The Thinking Process
								</h2>
							</div>
							<div
								style={{
									backgroundColor: 'oklch(0.22 0.025 180)', // Card
								}}
								className="backdrop-blur-sm rounded-2xl p-8 border border-gray-700"
							>
								<p className="text-lg text-gray-300 leading-relaxed whitespace-pre-line">
									{project.fullDescription ||
										project.description}
								</p>
							</div>
						</motion.div>
						{/* Key Metrics */}
						{project.keyMetrics && (
							<motion.div
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.8, delay: 0.2 }}
								viewport={{ once: true }}
								className="grid grid-cols-2 md:grid-cols-4 gap-6"
							>
								{Object.entries(project.keyMetrics).map(
									([key, value], index) => (
										<motion.div
											key={key}
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ delay: index * 0.1 }}
											viewport={{ once: true }}
											className="bg-gray-800/50 rounded-xl p-6 text-center border border-gray-700  transition-all duration-300"
										>
											<div className="text-2xl font-bold text-secondary mb-1">
												{value}
											</div>
											<div className="text-sm text-gray-400">
												{key}
											</div>
										</motion.div>
									)
								)}
							</motion.div>
						)}
					</section>

					{/* Features */}
					<section id="features" className="content-section mb-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-3 bg-green-500/20 rounded-xl">
									<Zap size={24} className="text-green-400" />
								</div>
								<h2 className="text-4xl font-bold text-white">
									Key Features
								</h2>
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								{project.features.map((feature, index) => (
									<motion.div
										key={index}
										initial={{ opacity: 0, x: -20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											delay: index * 0.1,
											duration: 0.5,
										}}
										viewport={{ once: true }}
										className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-green-500/30 hover:bg-green-500/5 transition-all duration-300"
									>
										<CheckCircle
											size={20}
											className="text-green-400 mt-1 flex-shrink-0"
										/>
										<span className="text-gray-300 leading-relaxed">
											{feature}
										</span>
									</motion.div>
								))}
							</div>
						</motion.div>
					</section>

					{/* Tech Stack */}
					<section id="tech-stack" className="content-section mb-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-3 bg-blue-500/20 rounded-xl">
									<Code size={24} className="text-blue-400" />
								</div>
								<h2 className="text-4xl font-bold text-white">
									Technology Stack
								</h2>
							</div>
							<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
								{/* Technologies */}
								<div>
									<h3 className="text-xl font-semibold text-white mb-4">
										Technologies Used
									</h3>
									<div className="flex flex-wrap gap-3">
										{(
											project.technologies ||
											project.tags.map((tag) =>
												tag.replace('#', '')
											)
										).map((tech, index) => (
											<motion.span
												key={index}
												initial={{
													opacity: 0,
													scale: 0,
												}}
												whileInView={{
													opacity: 1,
													scale: 1,
												}}
												transition={{
													delay: index * 0.1,
												}}
												whileHover={{
													scale: 1.05,
													y: -2,
												}}
												viewport={{ once: true }}
												className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/30 font-medium hover:bg-blue-500/30 transition-colors duration-300"
											>
												{tech}
											</motion.span>
										))}
									</div>
								</div>
								{/* Platform Support */}
								<div>
									<h3 className="text-xl font-semibold text-white mb-4">
										Platform Support
									</h3>
									<div className="space-y-3">
										{project.mobileImages && (
											<div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
												<Smartphone
													size={20}
													className="text-secondary"
												/>
												<span className="text-gray-300">
													Mobile (iOS & Android)
												</span>
											</div>
										)}
										{project.webImages && (
											<div className="flex items-center gap-3 p-4 bg-gray-800/30 rounded-lg border border-gray-700">
												<Monitor
													size={20}
													className="text-secondary"
												/>
												<span className="text-gray-300">
													Web Application
												</span>
											</div>
										)}
									</div>
								</div>
							</div>
						</motion.div>
					</section>

					{/* Impact & Achievements */}
					<section id="impact" className="content-section mb-20">
						<motion.div
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center gap-3 mb-8">
								<div className="p-3 bg-purple-500/20 rounded-xl">
									<Award
										size={24}
										className="text-purple-400"
									/>
								</div>
								<h2 className="text-4xl font-bold text-white">
									Impact & Achievements
								</h2>
							</div>
							{project.achievements && (
								<div className="space-y-4">
									{project.achievements.map(
										(achievement, index) => (
											<motion.div
												key={index}
												initial={{ opacity: 0, x: -20 }}
												whileInView={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													delay: index * 0.1,
													duration: 0.5,
												}}
												viewport={{ once: true }}
												className="flex items-start gap-4 p-6 bg-gray-800/30 rounded-xl border border-gray-700 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300"
											>
												<TrendingUp
													size={20}
													className="text-purple-400 mt-1 flex-shrink-0"
												/>
												<span className="text-gray-300 leading-relaxed">
													{achievement}
												</span>
											</motion.div>
										)
									)}
								</div>
							)}
						</motion.div>
					</section>
				</div>
			</div>

			{/* Image Modal */}
			<ImageModal
				images={modalState.images}
				currentIndex={modalState.currentIndex}
				isOpen={modalState.isOpen}
				onClose={closeModal}
				onNavigate={navigateModal}
				imageType={modalState.imageType}
				projectTitle={project.title}
			/>
		</div>
	);
}
