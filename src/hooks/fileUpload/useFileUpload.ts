import DocumentPicker, {DocumentPickerResponse} from 'react-native-document-picker';
import {File} from './Models';

export const useFileUpload = () => {
  const mapToFile = (fileToMap: DocumentPickerResponse): File => ({
    name: fileToMap.name ?? 'file',
    size: fileToMap.size ?? 0,
    type: fileToMap.type ?? '.txt',
    data: fileToMap.uri,
  });

  const uploadSingleFile = async (): Promise<File> => {
    const res = await DocumentPicker.pickSingle({
      type: [DocumentPicker.types.allFiles],
    });

    return mapToFile(res);
  };

  const uploadMultipleFiles = async (): Promise<File[]> => {
    const res = await DocumentPicker.pickMultiple({
      type: [DocumentPicker.types.allFiles],
    });

    return res.map(f => mapToFile(f));
  };

  return {uploadSingleFile, uploadMultipleFiles};
};
