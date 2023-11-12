import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
	return {
		theme_color: '#3579f6',
		background_color: '#ffffff',
		display: 'standalone',
		scope: '/',
		start_url: '/',
		name: 'Tester',
		short_name: 'Tester',
		description: 'Tester for you',
		icons: [
			{
				src: '/pwa-image-192.png',
				sizes: '192x192',
				type: 'image/png',
			},
			{
				src: '/pwa-image-512.png',
				sizes: '512x512',
				type: 'image/png',
			},
		],
	};
}
