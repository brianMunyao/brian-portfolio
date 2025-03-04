import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import HomePage from './routes/home.tsx';
import ProjectsPage from './routes/projects.tsx';
import SingleProject, {
	loader as singleProjectLoader,
} from './routes/single-project.tsx';
import ContactPage from './routes/contact.tsx';
import RootPage from './routes/root.tsx';
import { Analytics } from '@vercel/analytics/react';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootPage />,
		children: [
			{
				path: '',
				element: <HomePage />,
			},
			{
				path: 'projects',
				element: <ProjectsPage />,
			},
			{
				path: 'projects/:projectId',
				loader: singleProjectLoader,
				element: <SingleProject />,
			},
			{
				path: 'contact',
				element: <ContactPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
		<Analytics />
	</StrictMode>
);
