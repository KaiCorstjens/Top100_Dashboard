const loggingEnabled: boolean = false;
export const logger = (message?: any, ...optionalParams: any[]): void => {
    if(loggingEnabled) {
        console.log(message,optionalParams);
    }
}