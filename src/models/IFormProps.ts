import {IFormErrors} from '~/hooks/forms/Models';

export interface IFormProps<T> {
  onSuccess: (values: T) => void;
  onError: (values: T, errors: IFormErrors<T>) => void;
}
