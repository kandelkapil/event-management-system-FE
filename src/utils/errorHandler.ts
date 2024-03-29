import { toast } from "react-toastify";

export const ERROR_MESSAGE = {
  SUCCESS: "success",
  ERROR: "error",
};

const errorHandler = (data: any, type: string) => {  
  const response = data.response;
  const responseData = response.data.message || "";
  
  switch (type) {
    case ERROR_MESSAGE.SUCCESS:
      toast?.success(responseData, { autoClose: 500 });
      break;
    case ERROR_MESSAGE.ERROR:
      toast?.error(responseData, { autoClose: 500 });
      break;
    default:
      "";
      break;
  }
};

export { errorHandler };
