import {IPrimaryTextProps} from '../primaryText/IPrimaryTextProps';

export interface IHideableTextProps extends IPrimaryTextProps {
  hiddenText: boolean;
  regex: string;
  replaceWith: string;
}
