
import { useDispatch, useSelector } from "react-redux";
import { setShowVoters } from "../../api/DashboardSlice";
import { StatsControlButton } from "./ControlsModal.style";
import { RootState } from "../../../../app/store";

export const VotersControl = () => {
  const dispatch = useDispatch();
  const showVoters: boolean = useSelector(
    (state: RootState) => state.dashboard.showVoters
  );

  return (
    <StatsControlButton onClick={() => dispatch(setShowVoters(!showVoters))}>
      {showVoters ? "Hide voters" : "Show voters"}
    </StatsControlButton>
  );
};
