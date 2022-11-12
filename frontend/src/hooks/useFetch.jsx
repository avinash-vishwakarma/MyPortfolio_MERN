import { useState } from "react";
import { AuthContext } from "../contexts/authContexts";
import { useContext } from "react";
import { useCallback } from "react";
const useFetch = () => {
  const authContext = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  const request = useCallback(
    async (
      url,
      metadata = {
        method: "GET",
      }
    ) => {
      setIsLoading(true);

      if (metadata.headers) {
        metadata.headers.Authorization = `Bearer ${localStorage.getItem(
          "user_token"
        )}`;
      } else {
        metadata.headers = {
          Authorization: `Bearer ${localStorage.getItem("user_token")}`,
        };
      }

      try {
        const response = await fetch(url, metadata);
        const data = await response.json();
        if (data.status !== "ok") {
          if (data.error.authorization) {
            authContext.logout();
          }
          setError(data.error);
        } else {
          setData(data);
        }
      } catch (err) {
        setError(err);
      }
      setIsLoading(false);
    },
    [authContext]
  );
  return {
    isLoading,
    error,
    data,
    request,
  };
};

export default useFetch;
