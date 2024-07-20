import { AxiosError } from "axios";

export const errorInterceptor = (error: AxiosError) => {
  const errorMessage = (error.response?.data as { message: string }).message;

  if (error.response?.status == 400) {
    const errorMessage = (
      error.response?.data as [{ path: string; message: string }]
    ).map((err) => err.message);

    errorMessage.forEach((err) => alert(err));

    return Promise.reject(errorMessage);
  } else if (error.response?.status == 401) {
    return Promise.reject(errorMessage);
  } else {
    alert(errorMessage);
    return Promise.reject(errorMessage);
  }
};
