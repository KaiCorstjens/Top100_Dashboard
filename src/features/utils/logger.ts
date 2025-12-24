const loggingEnabled = true;
export const logger = (message?: any, ...optionalParams: any[]): void => {
  if (loggingEnabled) {
    if (optionalParams) {
      console.log(message, optionalParams);
    } else {
      console.log(message);
    }
  }
};
