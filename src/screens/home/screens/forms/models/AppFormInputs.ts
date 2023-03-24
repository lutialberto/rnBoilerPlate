import {File} from '~/hooks/fileUpload/Models';

export interface AppFormInputs {
  firstName: string;
  flag: boolean;
  selectedOption: string;
  optionsWithSearch: string;
  password: string;
  otpCode: string;
  picture: File;
  date: Date | undefined;
}
