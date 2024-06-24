import type { Dispatch, SetStateAction } from 'react';

import { IPomodoroRoundResponse } from '@/types/pomodoro.types';

export interface ITimerState {
	secondsLeft: number;
	activeRound: IPomodoroRoundResponse | undefined;
	setIsRunning: Dispatch<SetStateAction<boolean>>;
	setSecondsLeft: Dispatch<SetStateAction<number>>;
	setActiveRound: Dispatch<SetStateAction<IPomodoroRoundResponse | undefined>>;
	isRunning: boolean;
}
