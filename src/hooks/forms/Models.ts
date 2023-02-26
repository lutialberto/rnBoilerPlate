export interface IFormProps<T> {
  defaultValues: T;
  validateForm: (values: T) => IFormErrors<T>;
  onSuccess: (values: T) => void;
  onError?: (values: T, errors: IFormErrors<T>) => void;
}

export type IFormErrors<T> = {
  [PropertyKey in keyof T]: string;
};
