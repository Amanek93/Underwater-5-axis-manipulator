import { getService } from '@di';

import { AppStore } from '../models';

import { STORE } from './names';

export const getState = () => getService<AppStore>(STORE).getState();
