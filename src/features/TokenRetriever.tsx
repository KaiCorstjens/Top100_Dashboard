import { useEffect, useState } from "react";
import { getAccessCodeFromUrl } from "./Dashboard/components/Authorization/authorizationHelper";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import {
  getToken,
  getTokenFromRefresh,
} from "./Dashboard/components/Authorization/accessTokenHelper";
import { requestUserAuthorization } from "./Dashboard/components/Authorization/userAuthorizationHelper";
import { setRefreshToken, setToken } from "./Dashboard/api/DashboardSlice";
import { Dashboard } from "./Dashboard/Dashboard";

export const TokenRetriever: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const { refreshToken, token } = useSelector(
    (state: RootState) => state.dashboard
  );

  const access_code = getAccessCodeFromUrl(window.location.href);

  useEffect(() => {
    const fetchData = async () => {
      if (access_code && !isLoading) {
        try {
          setIsLoading(true);
          const response = await getToken(access_code);
          const refresh_token = response.refresh_token;
          const expires_in = response.expires_in;
          const token = response.access_token;
          if (token) {
            dispatch(setToken(token));
            dispatch(setRefreshToken(refresh_token));
            // Call for token refresh when token expires
            setTimeout(() => {
              console.log("Refresh token");
              fetchRefreshToken();
            }, expires_in);
          }
        } catch (error) {
          console.log("error");
          console.log(error);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      } else if (token === undefined || (refreshToken && !isLoading)) {
        console.log("Call authorizing from TokenRetriever");
        requestUserAuthorization();
      }
    };

    const fetchRefreshToken = async () => {
      console.log("Refresh token");
      if (refreshToken) {
        const response = await getTokenFromRefresh(refreshToken);
        const refresh_token = response.refresh_token;
        const expires_in = response.expires_in;
        const token = response.access_token;
        if (token) {
          dispatch(setToken(token));
          dispatch(setRefreshToken(refresh_token));
          // Call for token refresh when token expires
          setTimeout(() => {
            console.log("Refresh token");
            fetchRefreshToken();
          }, expires_in);
        }
      } else {
        console.log("No refresh token");
      }
    };
    fetchData();
  }, [access_code, refreshToken]);

  return isLoading ? (
    <div>Fetching token from spotify</div>
  ) : hasError ? (
    <div>Error</div>
  ) : (
    <Dashboard />
  );
};
