import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setShowSponsors } from "../../api/DashboardSlice";
import { SponsorsControlButton } from "./ControlsModal.style";

export const SponsorsControl = () => {
  const dispatch = useDispatch();
  const showSponsors: boolean = useSelector(
    (state: RootState) => state.dashboard.showSponsors
  );

  return (
    <SponsorsControlButton
      onClick={() => dispatch(setShowSponsors(!showSponsors))}
    >
      {showSponsors ? "Hide sponsors" : "Show sponsors"}
    </SponsorsControlButton>
  );
};
