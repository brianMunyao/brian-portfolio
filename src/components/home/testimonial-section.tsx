import { motion } from 'framer-motion';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '@/constants/testimonials';
import { Button } from '../ui/button';
import { SiUpwork } from 'react-icons/si';
import Link from 'next/link';
import { UpworkLink } from '@/constants/socials';
import SectionContainer from '../global/section-container';

const TestimonialsSection = () => {
	return (
		<SectionContainer
			id="testimonials"
			pillText="Testimonials From Clients"
			sectionTitle="Client Feedback"
			description="Don't just take it from me — see what clients say about the results we achieved together."
			className="bg-[oklch(0.15_0_0)] text-[oklch(1_0_0)]"
		>
			<div className="mx-auto w-full max-w-7xl">
				<Swiper
					slidesPerView={1}
					spaceBetween={24}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 2 },
					}}
					autoplay={{ delay: 5000 }}
					loop
					modules={[Pagination, Autoplay]}
					className="cursor-grab relative"
				>
					{testimonials.map((item, index) => (
						<SwiperSlide key={index} style={{ height: '100%' }}>
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5 }}
								className="rounded-xl bg-[oklch(0.2_0.02_140)] p-6 shadow-md h-full flex flex-col justify-between"
							>
								{item.testimonial && (
									<div className="relative">
										<FaQuoteLeft className="absolute -top-3 -left-3 text-secondary opacity-15 text-4xl" />

										<p className="text-white/90 text-base mb-4 leading-relaxed">
											&ldquo;{item.testimonial}&rdquo;
										</p>
									</div>
								)}
								<div className="flex items-center justify-between mt-auto">
									<div>
										<p className="font-semibold">
											{item.name}
										</p>
										<p className="text-sm text-white/60">
											{item.role}
										</p>
									</div>
									<div className="flex gap-1 text-yellow-400">
										{Array.from({
											length: item.rating,
										}).map((_, i) => (
											<FaStar
												key={i}
												className="w-4 h-4"
											/>
										))}
									</div>
								</div>
							</motion.div>
						</SwiperSlide>
					))}
				</Swiper>

				<div className="flex items-center justify-center mt-6">
					<Link href={UpworkLink} target="_blank">
						<Button
							// size="sm"
							className="bg-secondary text-primary hover:bg-secondary/90 font-semibold px-4 py-2 rounded-sm text-sm shadow-lg flex items-center gap-2"
						>
							<SiUpwork className="size-4 " />
							Check Out My Upwork Profile
						</Button>
					</Link>
				</div>
			</div>
		</SectionContainer>
	);
};

export default TestimonialsSection;
