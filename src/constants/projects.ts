import { IProject } from '@/types/IProject';

export const projects: IProject[] = [
	{
		is_featured: true,
		id: 'best-in-hel',
		title: 'Best in HEL - Membership & Event Management App',
		category: 'Co-founded Product',
		type: 'Mobile & Web App',
		description:
			'A full-stack mobile and web platform that connects users with local businesses through membership perks, event ticketing, and real-time engagement tools. Rebuilt from a no-code prototype to a scalable, production-ready solution.',
		fullDescription: `Co-founded and led the technical development of Best in HEL, transforming a simple no-code MVP into a comprehensive event management platform serving the Helsinki community. The platform revolutionizes how locals discover and engage with businesses through exclusive memberships and seamless event experiences.

Built with React Native for cross-platform mobile compatibility and Next.js for the admin dashboard, the platform integrates Firebase for real-time data synchronization, Stripe for secure payment processing, and custom analytics for business insights. The solution handles everything from membership management to event ticketing with QR code generation and real-time check-ins.`,
		color: '#0F172A',
		tags: [
			'#reactnative',
			'#nextjs',
			'#firebase',
			'#stripe',
			'#typescript',
		],
		year: '2024',
		status: 'Live',
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1750638971/simplefolio/bestinhel/cqfxlrtjeq698qqd6sn7.png',
		web_link: 'https://www.bestinhel.app/',
		play_store_link:
			'https://play.google.com/store/apps/details?id=com.bestinhel.android',
		app_store_link:
			'https://apps.apple.com/fi/app/best-in-hel-app/id6739634576',
		features: [
			'Exclusive business membership perks and discounts',
			'Event creation, ticketing, and real-time QR code check-ins',
			'Comprehensive admin dashboard for managing users, businesses, and events',
			'Secure Stripe integration for seamless payment processing',
			'Role-based access control and real-time updates via Firestore',
			'Push notifications for event updates and membership benefits',
			'Analytics dashboard for business insights and user engagement',
		],
		achievements: [
			'Co-founded the company and established technical vision and architecture',
			'Successfully migrated no-code MVP to scalable React Native application',
			'Achieved 2,000+ users within 6 months of launch',
			'Built and deployed to both iOS App Store and Google Play Store',
			'Integrated with 50+ local Helsinki businesses for membership perks',
			'Processed around 10 events with zero payment processing issues',
			'Maintained 5 app store rating across both platforms',
		],
		keyMetrics: {
			Users: '2,500+',
			'Events Hosted': '10+',
			'Business Partners': '50+',
			'App Rating': '5',
		},
		technologies: [
			'React Native',
			'Next.js',
			'TypeScript',
			'Firebase',
			'Firestore',
			'Cloud Functions',
			'Stripe',
			'Expo',
		],
		mobileImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1750638971/simplefolio/bestinhel/cqfxlrtjeq698qqd6sn7.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1750638588/simplefolio/bestinhel/bokwi2r3phn7rgjvvyw4.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1750638222/simplefolio/bestinhel/vkuza6lib0y5xi0dpspm.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1750638377/simplefolio/bestinhel/f51sqyx2i10ddtx65sfs.jpg',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1750624603/simplefolio/bestinhel/sgednsy9m1elmwtezsb1.png',
		],
	},

	{
		is_featured: true,
		id: 'parky',
		title: 'Parky - AI-Powered Smart Parking System',
		category: 'Personal Innovation',
		type: 'AI-Powered Mobile & Web App',
		color: '#FFD036',
		tags: [
			'#reactnative',
			'#react',
			'#flask',
			'#tensorflow',
			'#postgresql',
			'#mpesa',
		],
		year: '2023',
		status: 'Prototype',
		description:
			'Revolutionary parking management system using deep learning for real-time parking space detection, integrated with M-Pesa for seamless mobile payments, accessible via cross-platform mobile and web applications.',
		fullDescription: `Parky represents a breakthrough in urban parking solutions, combining computer vision, machine learning, and mobile technology to solve real-world parking challenges. The system uses advanced deep learning algorithms to analyze camera feeds and detect available parking spaces in real-time with 94% accuracy.

The comprehensive solution includes a React Native mobile app for users, a React web dashboard for parking operators, and a Flask backend with PostgreSQL database. The AI model, built with TensorFlow, processes live camera feeds to identify parking space availability, while the M-Pesa integration enables seamless mobile payments for Kenyan users.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1678352779/simplefolio/new_3_d4uhwc.jpg',
		features: [
			'AI-powered real-time parking space detection with 94% accuracy',
			'Seamless M-Pesa integration for secure mobile payments',
			'Automatic billing system based on parking duration',
			'Cross-platform mobile app and web dashboard',
			'Real-time notifications for space availability',
			'Comprehensive analytics and revenue reporting',
		],
		achievements: [
			'Developed and trained custom deep learning model for parking detection',
			'Achieved 94% accuracy in real-time parking space identification',
			'Successfully integrated M-Pesa API for mobile payment processing',
			'Built scalable architecture supporting multiple parking locations',
			'Created comprehensive admin dashboard for parking operators',
			'Designed user-friendly mobile interface with intuitive navigation',
			'Established proof of concept for smart city parking solutions',
		],

		technologies: [
			'React Native',
			'React',
			'Flask',
			'TensorFlow',
			'PostgreSQL',
			'M-Pesa API',
			'OpenCV',
			'Python',
		],
		mobileImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678350170/simplefolio/parky_rrm5so.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350166/simplefolio/parky_welcome_zmp718.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350168/simplefolio/User_View_dlhpow.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/Picture4_rvrzfe.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350164/simplefolio/parky_login_bbq0tj.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/parky_signup_tkchri.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350164/simplefolio/parky_home_tebxty.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350169/simplefolio/parky_addmoney_bk7dej.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350165/simplefolio/Picture31_vjz6bc.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350168/simplefolio/parky_parking1_fgu7d7.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678350166/simplefolio/parkky_profile_ldtfgw.jpg',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678351874/simplefolio/parky_d_login_vvbswy.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352779/simplefolio/new_3_d4uhwc.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678351874/simplefolio/parky_d_locations_iduuj3.jpg',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352777/simplefolio/new_1_xftmjc.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678352782/simplefolio/new_2_evp82t.png',
		],
	},

	{
		is_featured: true,
		id: 'freedom',
		title: 'Freedom - Personal Finance Tracker',
		category: 'Personal Project',
		type: 'Mobile App',
		color: '#3F9569',
		tags: ['#reactnative', '#realm-db', '#javascript'],
		year: '2022',
		status: 'Published',
		description:
			'A comprehensive personal finance mobile app that empowers users with expense tracking, intelligent budgeting, and data-driven financial insights to improve their financial health and achieve monetary goals.',
		fullDescription: `Freedom is a personal finance management application designed to help users take control of their financial lives through intuitive expense tracking and smart budgeting tools. Built with React Native for cross-platform compatibility, the app uses Realm database for fast, offline-first data storage.

The application features a clean, user-friendly interface that makes financial management accessible to users of all technical backgrounds. With detailed expense categorization, visual spending reports, and budget goal tracking, Freedom transforms complex financial data into actionable insights that help users make better financial decisions.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1676284888/simplefolio/freedom_l4lfk0.png',
		play_store_link: 'https://com-bmksoftware-freedom.en.uptodown.com/',
		features: [
			'Comprehensive expense tracking with category-based organization',
			'Budgeting system with goal setting and progress monitoring',
			'Visual spending reports with charts and analytics',
			'Offline-first architecture for reliable data access',
			'Intuitive user interface designed for daily use',
			'Detailed expense history with search and filter capabilities',
			'Budget alerts and spending limit notifications',
		],
		achievements: [
			'Implemented offline-first architecture using Realm database',
			'Created intuitive UI/UX design focused on user accessibility',
			'Built comprehensive expense categorization system',
			'Developed visual reporting system with interactive charts',
			'Achieved smooth performance across different platforms',
			'Implemented secure local data storage with encryption',
			'Maintained consistent user engagement through thoughtful design',
		],

		technologies: [
			'React Native',
			'Realm Database',
			'JavaScript',
			'Victory Charts',
		],
		mobileImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1678184517/simplefolio/group12_c0wlfu.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184513/simplefolio/group7_giiypi.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184513/simplefolio/group8_qcqpin.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1678184511/simplefolio/group11_a7a0kd.png',
		],
	},

	{
		id: 'loftlime',
		title: 'LoftLime - Interactive Landing Page',
		category: 'Client Project',
		type: 'Web Application',
		web_link: 'https://leadmint.vercel.app/',
		color: '#c4c056',
		tags: ['#react', '#javascript', '#gsap'],
		year: '2023',
		status: 'Live',
		description:
			'A dynamic and engaging landing page for a rewards-based app, built with React and GSAP to create smooth animations and interactive elements that enhance user experience and drive conversions.',
		fullDescription: `LoftLime represents a modern approach to landing page design, combining React's component architecture with GSAP's powerful animation capabilities to create an immersive user experience. The project showcases advanced web development techniques including scroll-triggered animations, interactive elements, and responsive design principles.

The landing page effectively communicates the value proposition of the rewards-based app through strategic use of animations, compelling copy, and intuitive user flow. Built with performance in mind, the site achieves excellent Core Web Vitals scores while maintaining rich interactive features.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1724828571/simplefolio/leadmint/1_-_LeadMint_-_leadmint.vercel.app_shhjgq.png',
		features: [
			'Smooth scroll-triggered animations using GSAP',
			'Responsive design optimized for all device sizes',
			'Interactive elements that engage users throughout the journey',
			'Performance-optimized with excellent Core Web Vitals scores',
			'SEO-friendly structure with semantic HTML',
			'Accessibility features for inclusive user experience',
			'Fast loading times with optimized assets',
		],
		achievements: [
			'Delivered pixel-perfect implementation from Figma designs',
			'Implemented complex GSAP animations with smooth performance',
			'Created fully responsive design working across all devices',
			'Deployed with CI/CD pipeline for seamless updates',
			'Received positive client feedback for attention to detail',
		],
		technologies: ['React', 'JavaScript', 'GSAP'],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1724828571/simplefolio/leadmint/1_-_LeadMint_-_leadmint.vercel.app_shhjgq.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724828571/simplefolio/leadmint/2_-_LeadMint_-_leadmint.vercel.app_raub4l.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724828584/simplefolio/leadmint/3_-_LeadMint_-_leadmint.vercel.app_yb5uj9.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724828569/simplefolio/leadmint/4_-_LeadMint_-_leadmint.vercel.app_dcsy99.png',
		],
	},

	{
		id: 'stayke',
		title: 'Stayke - Property Rental Platform',
		category: 'Personal Project',
		type: 'Full-Stack Web App',
		color: '#1b8bd1',
		repo_link: 'https://github.com/brianMunyao/stayke',
		tags: ['#javascript', '#react', '#nodejs', '#express', '#mongodb'],
		year: '2022',
		status: 'Completed',
		description:
			'A comprehensive web application that connects landlords and renters through an intuitive platform displaying available apartments with detailed location information, photos, and seamless booking functionality.',
		fullDescription: `Stayke is a full-stack property rental platform designed to streamline the apartment hunting process for both renters and landlords. Built with the MERN stack, the application provides a comprehensive solution for property management, featuring advanced search capabilities, detailed property listings, and secure user authentication.

The platform includes separate interfaces for renters and landlords, with renters able to search, filter, and view detailed property information, while landlords can manage their listings, track inquiries, and communicate with potential tenants through the integrated messaging system.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1679864230/simplefolio/stayke_-_Asset_1_zjsdk2.png',
		features: [
			'Advanced property search with multiple filter options',
			'Detailed property listings with photo galleries',
			'Secure user authentication and profile management',
			'Responsive design optimized for all devices',
			'RESTful API architecture for scalable backend',
		],
		achievements: [
			'Built complete full-stack application using MERN stack',
			'Implemented secure JWT-based authentication system',
			'Created responsive UI with modern React patterns',
			'Designed and implemented RESTful API with Express.js',
			'Integrated MongoDB for efficient data storage and retrieval',
			'Implemented advanced search and filtering functionality',
			'Created separate user roles with different access levels',
			'Deployed application with proper error handling and validation',
		],
		technologies: [
			'React',
			'Node.js',
			'Express.js',
			'MongoDB',
			'JWT',
			'Mongoose',
			'React Router',
			'Axios',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1679864230/simplefolio/stayke_-_Asset_1_zjsdk2.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864227/simplefolio/stayke_-_Asset_2_ko6yfo.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864203/simplefolio/stayke_-_Asset_3_artrs4.png',
		],
	},

	{
		id: 'stadium-booking',
		title: 'Stadium Ticket Booking System',
		category: 'Academic Project',
		type: 'Web Application',
		color: '#ffd700',
		tags: ['#react', '#flask', '#sqlite', '#python'],
		year: '2022',
		status: 'Completed',
		description:
			'A comprehensive web-based ticketing system that allows users to browse upcoming stadium events, select seats, and securely purchase tickets online with an intuitive interface and robust backend.',
		fullDescription: `The Stadium Ticket Booking System is a full-stack web application designed to handle the complete ticket purchasing workflow for stadium events. Built with React frontend and Flask backend, the system provides a seamless experience from event browsing to ticket confirmation.

The application features a sophisticated seat selection interface, secure payment processing simulation, and comprehensive admin panel for event management. The system handles concurrent bookings, prevents double-booking through database constraints, and provides real-time seat availability updates.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1679864215/simplefolio/booking_-_Asset_8_wkpzso.png',
		features: [
			'Interactive seat selection with real-time availability',
			'Comprehensive event browsing and filtering',
			'Secure user authentication and profile management',
			'Admin panel for event and booking management',
			'Responsive design for mobile and desktop users',
			'Database optimization for concurrent bookings',
		],
		technologies: [
			'React',
			'Flask',
			'SQLite',
			'Python',
			'SQLAlchemy',
			'React Router',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1679864215/simplefolio/booking_-_Asset_8_wkpzso.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864192/simplefolio/booking_-_Asset_10_vhc6j0.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864164/simplefolio/booking_-_Asset_9_wcbjco.png',
		],
	},

	{
		id: 'project-management',
		title: 'Project Manager - Collaboration Platform',
		category: 'Personal Project',
		type: 'Full-Stack Web App',
		color: '#5c4bff',
		repo_link: 'https://github.com/brianMunyao/pm',
		tags: ['#react', '#mongodb', '#expressjs', '#nodejs'],
		year: '2021',
		status: 'Completed',
		description:
			'A comprehensive project management platform inspired by Monday.com that streamlines team workflows, enhances collaboration, and provides customizable tools for tracking project progress and team productivity.',
		fullDescription: `This project management platform provides teams with a centralized workspace for planning, tracking, and collaborating on projects. Built with the MERN stack, the application offers a flexible and intuitive interface that adapts to different team workflows and project requirements.

The platform includes advanced features like customizable project boards, task assignment and tracking, team collaboration tools, and comprehensive reporting capabilities. The system supports multiple project views, real-time updates, and integrates communication tools to keep teams aligned and productive.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1676284901/simplefolio/pm_j0eiuz.png',
		features: [
			'Customizable project boards with drag-and-drop functionality',
			'Advanced task management with assignments and due dates',
			'Team collaboration tools with real-time updates',
			'Multiple project views (Kanban, List)',
			'Comprehensive reporting and analytics dashboard',
			'Team communication with comments and notifications',
		],
		achievements: [
			'Built scalable MERN stack application with modern architecture',
			'Implemented real-time updates using WebSocket connections',
			'Created intuitive drag-and-drop interface for task management',
			'Designed flexible database schema supporting various project types',
			'Implemented comprehensive user authentication and authorization',
			'Built responsive design working across all device sizes',
			'Created advanced filtering and search capabilities',
			'Integrated file upload and management system',
		],
		technologies: [
			'React',
			'Node.js',
			'Express.js',
			'MongoDB',
			'Socket.io',
			'Mongoose',
			'Multer',
			'JWT',
		],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1679864145/simplefolio/pm_-_Asset_6_obyzcp.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864142/simplefolio/pm_-_Asset_5_qpej4z.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864140/simplefolio/pm_-_Asset_4_rkp8yj.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1679864180/simplefolio/pm_-_Asset_7_qkwvzv.png',
		],
	},

	{
		id: 'coinday',
		title: 'Coinday - Cryptocurrency Landing Page',
		category: 'Client Project',
		type: 'Static Website',
		color: '#dcad4d',
		tags: ['#html', '#css', '#javascript', '#responsive'],
		year: '2021',
		status: 'Completed',
		description:
			'A modern, responsive landing page for CoinDay cryptocurrency platform, designed and developed using vanilla HTML, CSS, and JavaScript with focus on performance and user engagement.',
		fullDescription: `CoinDay landing page represents a clean, professional approach to cryptocurrency platform marketing. Built with vanilla web technologies, the site emphasizes performance, accessibility, and conversion optimization while maintaining a modern aesthetic that appeals to crypto enthusiasts.

The landing page features smooth animations, responsive design, and optimized loading times. Special attention was paid to SEO optimization and mobile performance, ensuring the site ranks well in search results and provides excellent user experience across all devices.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1724614632/simplefolio/coinday/ljmzko6rl8mucx3zj5bd.png',
		features: [
			'Fully responsive design optimized for all devices',
			'Smooth CSS animations and transitions',
			'SEO-optimized structure with semantic HTML',
			'Fast loading times with optimized assets',
			'Cross-browser compatibility testing',
			'Accessibility features for inclusive design',
			'Contact form with JavaScript validation',
			'Modern CSS Grid and Flexbox layouts',
		],
		achievements: [
			'Implemented pixel-perfect design from provided mockups',
			'Created smooth animations using pure CSS',
			'Optimized images and assets for fast loading',
			'Ensured cross-browser compatibility across major browsers',
			'Implemented proper SEO meta tags and structured data',
			'Created accessible design following WCAG guidelines',
			'Delivered project ahead of deadline with client satisfaction',
		],
		technologies: ['HTML5', 'CSS3', 'JavaScript', 'Responsive Design'],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1724614632/simplefolio/coinday/ljmzko6rl8mucx3zj5bd.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724614634/simplefolio/coinday/ullh5q7kopwqvy5ixpjq.png',
		],
	},

	{
		id: 'autermow',
		title: 'Autermow - Lawn Care Service Landing Page',
		category: 'Client Project',
		type: 'React Website',
		color: '#50ac29',
		tags: ['#typescript', '#react', '#reactnative'],
		year: '2021',
		status: 'Completed',
		description:
			"A professional landing page for Autermow lawn care company, built with React to showcase their expert services and help transform yards into the neighborhood's pride with modern design and smooth user experience.",
		fullDescription: `Autermow's landing page combines professional design with modern web development practices to create an effective marketing tool for the lawn care business. Built with React and styled with Tailwind CSS, the site emphasizes the company's expertise while providing clear calls-to-action for potential customers.

The website features service showcases, customer testimonials, and an easy-to-use contact system. The design reflects the natural, green aesthetic appropriate for a lawn care business while maintaining professional credibility and trust-building elements.`,
		main_image:
			'https://res.cloudinary.com/breivaco/image/upload/v1724614636/simplefolio/autermow/v0aenukerunqmxwnlxsh.png',
		features: [
			'Modern React-based architecture for optimal performance',
			'Responsive design optimized for mobile and desktop',
			'Service showcase with detailed descriptions',
			'Customer testimonials and success stories',
			'Contact form with real-time validation',
			'SEO-optimized content structure',
			'Fast loading with optimized images',
			'Professional green-themed design system',
		],
		achievements: [
			'Created conversion-focused landing page design',
			'Implemented modern React patterns and best practices',
			'Achieved excellent mobile performance scores',
			'Built reusable component library for future updates',
			'Optimized images and assets for fast loading',
			'Implemented proper form validation and error handling',
			'Created accessible design with proper ARIA labels',
			'Delivered project with comprehensive documentation',
		],
		technologies: ['React', 'TypeScript', 'React Router', 'React Native'],
		webImages: [
			'https://res.cloudinary.com/breivaco/image/upload/v1724614636/simplefolio/autermow/v0aenukerunqmxwnlxsh.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724614638/simplefolio/autermow/dcql7pgdoxvb5vm9d48v.png',
			'https://res.cloudinary.com/breivaco/image/upload/v1724614630/simplefolio/autermow/vtppuiewz90yun4u56r1.png',
		],
	},
];
