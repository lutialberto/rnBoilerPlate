import {TRANSLATOR} from '~/constants/Translator';
import {TOAST_TYPES} from './toasts/Models';
import {useToasts} from './toasts/useToasts';

const translator = TRANSLATOR.components.errors;

const {showToast} = useToasts();

export const handleGenericError = (error: any, onPress: () => void = () => {}) => {
  handleCustomError(error, translator.apiCallErrorMessage, onPress);
};

export const handleCustomError = (error: any, message: string, onPress: () => void = () => {}) => {
  showToast(TOAST_TYPES.error, message, error);
  onPress();
};
