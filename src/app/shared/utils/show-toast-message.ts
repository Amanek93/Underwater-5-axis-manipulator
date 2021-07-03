import Toast from 'react-native-simple-toast';

export const showToastMessage = (message: string) => {
    Toast.show(message);
};
