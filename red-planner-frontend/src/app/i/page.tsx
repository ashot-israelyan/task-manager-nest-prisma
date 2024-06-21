import type { Metadata } from 'next';

import { Heading } from '@/components/ui/Heading';

import { NO_INDEX_PAGE } from '@/constants/seo.constants';

import Staistics from './Staistics';

export const metadata: Metadata = {
	title: 'Dashboard',
	...NO_INDEX_PAGE,
};

export default function DashboardPage() {
	return (
		<div>
			<Heading title='Statistics' />
			<Staistics />
		</div>
	);
}
