import { registerConstantValue } from '@di';

import { AppStore } from '../models';

import { STORE } from './names';

export function registerStoreServices(store: AppStore): void {
    registerConstantValue(STORE, store);
}
