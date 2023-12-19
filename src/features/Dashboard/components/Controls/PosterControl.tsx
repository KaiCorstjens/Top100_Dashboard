import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setShowPoster } from "../../api/DashboardSlice";
import { SponsorsControlButton } from "./ControlsModal.style";

export const PosterControl = () => {
  const dispatch = useDispatch();
  const showPoster: boolean = useSelector(
    (state: RootState) => state.dashboard.showPoster
  );

  return (
    <SponsorsControlButton onClick={() => dispatch(setShowPoster(!showPoster))}>
      {showPoster ? "Hide poster" : "Show poster"}
    </SponsorsControlButton>
  );
};
