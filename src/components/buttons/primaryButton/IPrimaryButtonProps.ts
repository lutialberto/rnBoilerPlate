import {IFwkGenericButtonProps} from '~/fwk/buttons/genericButton/IFwkGenericButtonProps';

export interface IPrimaryButtonProps extends IFwkGenericButtonProps {
  variant?: 'default' | 'secondary' | 'secondaryNoBorder';
}
