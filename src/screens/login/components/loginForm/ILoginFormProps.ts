import {IFormErrors} from '~/hooks/forms/Models';
import {LoginFormInputs} from '../../models/LoginFormInputs';

export interface ILoginFormProps {
  onSuccess: (values: LoginFormInputs) => void;
  onError: (values: LoginFormInputs, errors: IFormErrors<LoginFormInputs>) => void;
}
