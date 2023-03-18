import {IFwkGenericButtonProps} from '~/fwk/buttons/genericButton/IFwkGenericButtonProps';

export interface IDownloadButtonProps extends IFwkGenericButtonProps {
  url: string;
  fileName: string;
  fileExtension: string;
}
