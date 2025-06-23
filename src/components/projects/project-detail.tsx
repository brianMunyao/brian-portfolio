'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { IProject } from '@/types/IProject';

type Props = {
	project: IProject;
};

const ProjectDetail = ({ project }: Props) => {
	const router = useRouter();

	return (
		<section className="min-h-screen bg-[#0F172A] text-white px-6 md:px-12 py-24">
			<button
				onClick={() => router.back()}
				className="flex items-center text-sm gap-2 mb-6 text-white/80 hover:text-white"
			>
				<ArrowLeft size={16} /> Back
			</button>

			<header className="mb-12">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					{project.title}
				</h1>
				<p className="text-white/80 max-w-3xl">{project.description}</p>
			</header>

			{(project.mobileImages?.length || project.webImages?.length) && (
				<div className="mb-12">
					<Swiper
						spaceBetween={20}
						slidesPerView={1.2}
						breakpoints={{
							768: { slidesPerView: 2.2 },
							1024: { slidesPerView: 3 },
						}}
					>
						{[
							...(project.mobileImages || []),
							...(project.webImages || []),
						].map((src, i) => (
							<SwiperSlide key={i}>
								<img
									src={src}
									alt="project screenshot"
									className="rounded-xl border border-white/10 w-full h-auto object-cover"
								/>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			)}

			<motion.div
				initial={{ opacity: 0, y: 20 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ amount: 0.5 }}
				transition={{ duration: 0.6 }}
				className="space-y-10 max-w-4xl"
			>
				<section>
					<h2 className="text-xl font-semibold mb-2 text-white/80">
						Thinking Process
					</h2>
					<p className="leading-relaxed text-white/90">
						{project.fullDescription}
					</p>
				</section>

				{project.features?.length > 0 && (
					<section>
						<h2 className="text-xl font-semibold mb-2 text-white/80">
							Key Features
						</h2>
						<ul className="list-disc pl-5 space-y-2 text-white/90">
							{project.features.map((f, i) => (
								<li key={i}>{f}</li>
							))}
						</ul>
					</section>
				)}

				{project?.technologies && project?.technologies?.length > 0 && (
					<section>
						<h2 className="text-xl font-semibold mb-2 text-white/80">
							Tech Stack
						</h2>
						<div className="flex flex-wrap gap-2">
							{project?.technologies.map((tech, i) => (
								<span
									key={i}
									className="bg-white/10 text-white px-3 py-1 rounded-full text-xs"
								>
									{tech}
								</span>
							))}
						</div>
					</section>
				)}
			</motion.div>
		</section>
	);
};

export default ProjectDetail;
