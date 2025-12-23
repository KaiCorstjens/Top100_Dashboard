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
import { logger } from "./utils/logger";

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
          logger("response", response);
          if (token) {
            dispatch(setToken(token));
            logger("refresh token: " + refresh_token);
            //dispatch(setRefreshToken(refresh_token));
            // Call for token refresh when token expires
            setTimeout(() => {
              logger("Refresh token");
              fetchRefreshToken(refresh_token);
            }, expires_in);
          }
        } catch (error) {
          logger("error");
          logger(error);
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      } else if (token === undefined && !isLoading) {
        logger("Call authorizing from TokenRetriever");
        requestUserAuthorization();
      } else {
        logger("no accesss code, loading");
      }
    };

    const fetchRefreshToken = async (refreshToken: string) => {
      logger("Refresh token");
      if (refreshToken) {
        const response = await getTokenFromRefresh(refreshToken);
        const refresh_token = response.refresh_token;
        const expires_in = response.expires_in;
        const token = response.access_token;
        logger("token: " + token);
        logger("response: " + response);
        if (token) {
          dispatch(setToken(token));
          logger("refresh token: " + refresh_token);
          // Call for token refresh when token expires
          setTimeout(() => {
            logger("Refresh token from timeout");
            fetchRefreshToken(refresh_token);
          }, expires_in);
        } else {
          logger("invalid response, no token: ");
          logger(response);
        }
      } else {
        logger("No refresh token: " + refreshToken);
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
