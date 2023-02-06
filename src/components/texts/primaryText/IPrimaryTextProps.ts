import {IFwkGenericTextProps} from '~/fwk/texts/genericText/IFwkGenericTextProps';

export interface IPrimaryTextProps extends IFwkGenericTextProps {
  variant?: 'default' | 'title' | 'errorMessage' | 'label';
}
