import { IS_IOS } from '@shared/utils';

export const GLOBAL_FONTS = {
    ROBOTO: 'Roboto',
    ROBOTO_BOLD: 'Roboto-Bold',
    ROBOTO_CONDENSED: IS_IOS ? 'RobotoCondensed-Regular' : 'RobotoCondensed',
    ROBOTO_CONDENSED_BOLD: 'RobotoCondensed-Bold',
};

export const GLOBAL_FONTSIZES = {
    header: 20,
    description: 12,
    info: 14,
};
