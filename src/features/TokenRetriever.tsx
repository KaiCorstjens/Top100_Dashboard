import { useEffect, useState } from "react";
import { getAccessCodeFromUrl } from "./Dashboard/components/Authorization/authorizationHelper";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  getToken,
  getTokenFromRefresh,
} from "./Dashboard/components/Authorization/accessTokenHelper";
import { requestUserAuthorization } from "./Dashboard/components/Authorization/userAuthorizationHelper";
import { setToken } from "./Dashboard/api/DashboardSlice";
import { Dashboard } from "./Dashboard/Dashboard";

export const TokenRetriever: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { token } = useSelector((state: RootState) => state.dashboard);

  const access_code = getAccessCodeFromUrl(window.location.href);

  useEffect(() => {
    const fetchData = async () => {
      if (access_code && !isLoading) {
        try {
          setIsLoading(true);
          const response = await getToken(access_code);
          const refresh_token = response.refresh_token;
          const expires_in = response.expires_in * 1000 * 0.9; // convert to milliseconds, take 90% to never be too late
          const token = response.access_token;
          console.log("response", response);
          if (token) {
            dispatch(setToken(token));
            console.log("refresh token: " + refresh_token);
            //dispatch(setRefreshToken(refresh_token));
            // Call for token refresh when token expires
            setTimeout(() => {
              console.log("Refresh token");
              fetchRefreshToken(refresh_token);
            }, expires_in);
          }
        } catch (error) {
          console.log("error");
          console.log(error);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      } else if (token === undefined && !isLoading) {
        console.log("Call authorizing from TokenRetriever");
        requestUserAuthorization();
      }
    };

    const fetchRefreshToken = async (refreshToken: string) => {
      console.log("Refresh token");
      if (refreshToken) {
        const response = await getTokenFromRefresh(refreshToken);
        const refresh_token = response.refresh_token;
        const expires_in = response.expires_in;
        const token = response.access_token;
        console.log("token: " + token);
        console.log("response: " + response);
        if (token) {
          dispatch(setToken(token));
          console.log("refresh token: " + refresh_token);
          //dispatch(setRefreshToken(refresh_token));
          // Call for token refresh when token expires
          setTimeout(() => {
            console.log("Refresh token");
            fetchRefreshToken(refresh_token);
          }, expires_in);
        }
      } else {
        console.log("No refresh token: " + refreshToken);
      }
    };
    fetchData();
  }, [access_code]);

  return isLoading ? (
    <div>Fetching token from spotify</div>
  ) : hasError ? (
    <div>Error</div>
  ) : (
    <Dashboard />
  );
};
