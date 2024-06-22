import { useIsFetching, useIsMutating } from '@tanstack/react-query';

import Loader from '@/components/ui/Loader';

export function GlobalLoader() {
	const isMutating = useIsMutating();
	const isFetching = useIsFetching();

	if (!isMutating && !isFetching) return null;

	return (
		<div className='fixed top-layout right-layout z-50'>
			<Loader />
		</div>
	);
}
