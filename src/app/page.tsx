'use client';

import { useRef } from 'react';
import TwoWorldsSection from '@/components/home/two-world-section';
import HeroSection from '@/components/home/hero-section';
import { cn } from '@/lib/utils';
import ProjectsSection from '@/components/home/projects-section';
import ServicesSection from '@/components/home/services-section';
import TestimonialsSection from '@/components/home/testimonial-section';

const HomePage = () => {
	const heroRef = useRef<HTMLDivElement>(null);

	return (
		<div className="min-h-screen bg-primary" ref={heroRef}>
			<div>
				<div
					className={cn(
						'absolute inset-0',
						'[background-size:50px_50px]',
						'[background-image:radial-gradient(#ffffff21_1px,transparent_1px)]'
					)}
				/>

				<HeroSection />
			</div>

			<ServicesSection />

			<ProjectsSection count={4} />

			<TwoWorldsSection />

			<TestimonialsSection />
		</div>
	);
};

export default HomePage;
