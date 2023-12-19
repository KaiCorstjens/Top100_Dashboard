import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setShowStats } from "../../api/DashboardSlice";
import { StatsControlButton } from "./ControlsModal.style";

export const StatsControl = () => {
  const dispatch = useDispatch();
  const showStats: boolean = useSelector(
    (state: RootState) => state.dashboard.showStats
  );

  return (
    <StatsControlButton onClick={() => dispatch(setShowStats(!showStats))}>
      {showStats ? "Hide stats" : "Show stats"}
    </StatsControlButton>
  );
};
