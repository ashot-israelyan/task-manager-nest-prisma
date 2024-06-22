import { GanttChartSquare } from 'lucide-react';
import Link from 'next/link';

import { COLORS } from '@/constants/color.constants';

export function Sidebar() {
	return (
		<aside className='border-r border-r-border h-full bg-sidebar flex flex-col justify-between'>
			<div>
				<Link
					href='/'
					className='flex items-center gap-2.5 p-layout border-b border-b-border'
					draggable={false}
				>
					<GanttChartSquare
						color={COLORS.primary}
						size={30}
					/>
					<span className='text-2xl font-bold relative'>
						RED Planner
						<span className='absolute -top-1 -right-6 text-xs opacity-40 rotate-[18deg] font-normal'>
							beta
						</span>
					</span>
				</Link>
			</div>
		</aside>
	);
}
