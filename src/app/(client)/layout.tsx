import type { Metadata } from 'next';

export const metadata: Metadata = {
	title: 'Client metadata',
	description: 'Desc',
};

export default function ClientLayout(props: { children: React.ReactNode }) {
	return (
		<div>
			{props.children}
		</div>
	);
}
