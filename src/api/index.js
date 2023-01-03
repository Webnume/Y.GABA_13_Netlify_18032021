// export const url = "http://localhost:3001/api/v1";
// export const url = "https://argentbankbackend-app.herokuapp.com/api/v1";
export const url = "https://project-13-bank-api.onrender.com";


export const setHeaders = () => {
  const getToken =
    sessionStorage.getItem("token") || localStorage.getItem("token");
    
  const headers = {
    headers: {
      Authorization: "Bearer " + getToken,
    },
  };

  return headers;
};
