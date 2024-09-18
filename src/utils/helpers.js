/* eslint-disable no-useless-escape */
export const formatDate = (originalDateStr) => {
  // Create a new Date object
  const dateObj = new Date(originalDateStr);

  // Extract the date parts
  const year = dateObj.getUTCFullYear();
  const month = String(dateObj.getUTCMonth() + 1).padStart(2, '0'); // getUTCMonth() is zero-based
  const day = String(dateObj.getUTCDate()).padStart(2, '0');

  // Format the date as YYYY-MM-DD
  const formattedDateStr = `${year}-${month}-${day}`;

  return formattedDateStr;
};

export const emailValidation = (email) => {
  const regex =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  return regex.test(email);
};

export const isFileSizeLarge = (fileSizeInBytes, size) => {
  const sizeInMB = size < 1024 ? size * 1024 : size * 1024 * 1024; // 5 MB in bytes
  return fileSizeInBytes > sizeInMB;
};

export const isAnyFieldEmpty = (formData) => {
  return Object.values(formData).some((value) => value === '');
};

export const isObjectEmpty = (object) => {
  return Object.keys(object).length > 0;
};

const sizeInKB = 500;

export const handleImageUpload = (event, setUploadError, setUploadedFiles, setCheckFileSize) => {
  const file = event[0];
  const fileSize = isFileSizeLarge(file?.size, sizeInKB);

  try {
    if (event.length > 0 && !file?.type?.includes('image')) {
      setUploadError('File size must be an image');
      setUploadedFiles([]);
      setCheckFileSize([]);
      return;
    } else if (fileSize) {
      setUploadError(`File size must be less than ${sizeInKB}KB`);
      setUploadedFiles([]);
      setCheckFileSize([]);
      return;
    } else {
      if (file) {
        setCheckFileSize(file);
        setUploadedFiles(URL.createObjectURL(file));
      }
      setUploadError(undefined);
      return;
    }
  } catch (error) {
    console.log('error in handleImageUpload', error);
    setUploadError('Something went wrong');
  }
};
