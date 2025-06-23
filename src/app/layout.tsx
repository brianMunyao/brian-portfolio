import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import LetsTalkSection from '@/components/home/lets-talk-section';
import FooterSection from '@/components/global/footer-section';
import Navigation from '@/components/global/navigation-alt';
import { Analytics } from '@vercel/analytics/next';

const inter = Inter({
	variable: '--font-inter',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Brian Kalusi',
	description: 'Fullstack Developer',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} antialiased bg-primary min-h-screen `}
			>
				<Navigation />
				{children}

				<LetsTalkSection />

				<FooterSection />
				<Analytics />
			</body>
		</html>
	);
}
