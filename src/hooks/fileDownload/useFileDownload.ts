import RNFetchBlob from 'rn-fetch-blob';
import {useToasts} from '../toasts/useToasts';
import {File} from '../fileUpload/Models';
import {TRANSLATION_TOASTS} from '~/constants/Translator';

const translator = TRANSLATION_TOASTS.download;

export const useFileDownload = () => {
  const {showToast} = useToasts();
  const downloadFile = (
    url: string,
    fileName: string,
    fileExtension: string,
    onSuccess: (file: File) => void,
    onError: (error: any) => void,
  ) => {
    const {config, fs} = RNFetchBlob;
    const pictureDir = fs.dirs.DownloadDir;
    const fullFileName = `${fileName}.${fileExtension}`;
    const path = `${pictureDir}/${fullFileName}`;
    const options = {
      fileCache: true,
      addAndroidDownloads: {
        useDownloadManager: true,
        notification: true,
        path,
      },
    };
    config(options)
      .fetch('GET', url)
      .then(() => {
        showToast(
          'success',
          translator.success.text1,
          translator.success.text2.replace('{{file}}', fullFileName),
        );
        onSuccess({
          name: fullFileName,
          type: fileExtension,
          size: 0,
          data: path,
        });
      })
      .catch(error => {
        showToast('error', translator.error.text1, translator.success.text2);
        onError(error);
      });
  };
  return {downloadFile};
};
