import { Outlet } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SplashScreen from '../components/SplashScreen';

const RootPage = () => {
	const [scrollY, setScrollY] = useState(0);

	const getScrollY = useCallback(() => {
		// try {
		// 	const scrollYPos = containerRef.current.scrollY;
		// 	console.log(scrollYPos);
		// } catch (e) {}
		const scrollPosition =
			window.scrollY || document.documentElement.scrollTop;
		setScrollY(scrollPosition);
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			// Ensure this runs only on the client side
			window.addEventListener('scroll', getScrollY);
			window.addEventListener('load', getScrollY);

			return () => {
				window.removeEventListener('scroll', getScrollY);
				window.removeEventListener('load', getScrollY);
			};
		}
	}, [getScrollY]);

	return (
		<div>
			<SplashScreen />

			<NavBar scrolled={scrollY > 130} />

			<main>
				<Outlet />
			</main>

			<Footer />
		</div>
	);
};

export default RootPage;
