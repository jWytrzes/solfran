import { useState, useEffect } from 'react';
import { storage } from '../base';

const useFirebaseUpload = () => {
  const [data, setData] = useState();
  const [fileData, setFileData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [progress, setProgress] = useState(null);
  const storageRef = storage.ref();

  useEffect(() => {
    const uploadData = async () => {
      setIsError(false);
      setIsLoading(true);
      setProgress({ value: 0 });

      if (!fileData) return;

      try {
        let fName = `${new Date().getTime()}-${fileData.name}`;
        let ref = storageRef.child('images/' + fName);
        let uploadTask = ref.put(fileData);

        uploadTask.on(
          'state_changed',
          (progress) => {
            var value = progress.bytesTransferred / progress.totalBytes;
            setProgress({ value });
          },
          (error) => {
            setIsLoading(false);
            setIsError(error);
          },
          async () => {
            setIsError(false);
            setIsLoading(false);

            let downloadUrl = await uploadTask.snapshot.ref.getDownloadURL();
            setData({
              metaData: uploadTask.snapshot.metadata,
              downloadUrl,
            });
          },
        );
      } catch (error) {
        setIsLoading(false);
        setIsError(error);
      }
    };

    fileData && uploadData();
  }, [fileData]);

  return [{ data, isLoading, isError, progress }, setFileData, setData];
};

export default useFirebaseUpload;
