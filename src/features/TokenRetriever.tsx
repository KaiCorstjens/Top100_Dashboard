import { useEffect, useState } from "react";
import { getAccessCodeFromUrl } from "./Dashboard/components/Authorization/authorizationHelper";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../app/store";
import { getToken } from "./Dashboard/components/Authorization/accessTokenHelper";
import { requestUserAuthorization } from "./Dashboard/components/Authorization/userAuthorizationHelper";
import { setRefreshToken, setToken } from "./Dashboard/api/DashboardSlice";
import { Dashboard } from "./Dashboard/Dashboard";

export const TokenRetriever: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const access_code = getAccessCodeFromUrl(window.location.href);
  const { refreshToken, token } = useSelector(
    (state: RootState) => state.dashboard
  );

  useEffect(() => {
    const fetchData = async () => {
      if (access_code && !isLoading) {
        try {
          setIsLoading(true);
          const token = await getToken(access_code);
          if (token) {
            dispatch(setToken(token));
            setRefreshToken(false);
          }
        } catch (error) {
          setHasError(true);
        } finally {
          setIsLoading(false);
        }
      } else if (token === undefined || (refreshToken && !isLoading)) {
        console.log("Call authorizing from TokenRetriever");
        requestUserAuthorization();
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
