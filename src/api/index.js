export const url = "http://localhost:3001/api/v1";

export const setHeaders = () => {
  const headers = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  };

  return headers;
};
