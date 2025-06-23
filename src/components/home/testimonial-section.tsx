import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { testimonials } from '@/constants/testimonials';
import { Button } from '../ui/button';
import { SiUpwork } from 'react-icons/si';
import Link from 'next/link';
import { UpworkLink } from '@/constants/socials';

const TestimonialsSection = () => {
	return (
		<section
			id="testimonials"
			className="w-full px-6 md:px-12 py-24 bg-[oklch(0.15_0_0)] text-[oklch(1_0_0)]"
		>
			<div className="mx-auto w-full max-w-7xl">
				<motion.div
					className="mb-8 text-center"
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.3 }}
				>
					<div className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-5 py-2 text-xs font-medium text-white shadow">
						<span>Testimonials From Clients</span>
					</div>
				</motion.div>

				<h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
					Client Feedback
				</h2>
				<p className="text-center text-white/70 max-w-2xl mx-auto mb-12">
					Don&apos;t just take it from me — see what clients say about
					the results we achieved together.
				</p>

				<Swiper
					slidesPerView={1}
					spaceBetween={24}
					breakpoints={{
						768: { slidesPerView: 2 },
						1024: { slidesPerView: 3 },
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
									<p className="text-white/90 text-base mb-4 leading-relaxed">
										“{item.testimonial}”
									</p>
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
		</section>
	);
};

export default TestimonialsSection;
