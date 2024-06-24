import { IPomodoroRoundResponse } from '@/types/pomodoro.types';

import type { ITimerState } from '../timer.types';

import { useLoadSettings } from './useLoadSettings';
import { useUpdateRound } from './useUpdateRound';

type TypeUseTimerActiosn = ITimerState & {
	rounds: IPomodoroRoundResponse[] | undefined;
};

export function useTimerActions({
	activeRound,
	setIsRunning,
	secondsLeft,
	rounds,
}: TypeUseTimerActiosn) {
	const { workInterval } = useLoadSettings();
	const { isUpdateRoundPending, updateRound } = useUpdateRound();

	const pauseHandler = () => {
		setIsRunning(false);
		if (!activeRound?.id) return;

		updateRound({
			id: activeRound?.id,
			data: {
				totalSeconds: secondsLeft,
				isCompleted: Math.floor(secondsLeft / 60) > workInterval,
			},
		});
	};

	const playHandler = () => {
		setIsRunning(true);
	};

	const nextRoundHandler = () => {
		if (!activeRound?.id) return;

		updateRound({
			id: activeRound?.id,
			data: {
				isCompleted: true,
				totalSeconds: workInterval * 60,
			},
		});
	};

	const prevRoundHandler = () => {
		const lastCompleteRound = rounds?.findLast(round => round.isCompleted);

		if (!lastCompleteRound?.id) return;

		updateRound({
			id: lastCompleteRound?.id,
			data: {
				isCompleted: false,
				totalSeconds: 0,
			},
		});
	};

	return { playHandler, pauseHandler, nextRoundHandler, prevRoundHandler, isUpdateRoundPending };
}
