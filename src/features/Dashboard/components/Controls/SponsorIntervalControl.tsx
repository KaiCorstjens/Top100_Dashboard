import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setSponsorInterval } from "../../api/DashboardSlice";
import { SponsorIntervalControlButton } from "./ControlsModal.style";

export const SponsorIntervalControl = () => {
  const dispatch = useDispatch();
  const sponsorInterval: number = useSelector(
    (state: RootState) => state.dashboard.sponsorInterval
  );

  const handleButtonOnClick = () => {
    const prompt_input = prompt(
      "Please enter new polling interval in ms:",
      sponsorInterval.toString()
    );

    const new_interval = Number(prompt_input);

    if (isNaN(new_interval)) {
      alert("Non-valid number entered");
    } else if (new_interval == null || new_interval === 0) {
      alert("Cancelled. Interval will stay " + sponsorInterval);
    } else {
      dispatch(setSponsorInterval(new_interval));
    }
  };
  return (
    <SponsorIntervalControlButton onClick={handleButtonOnClick}>
      Sponsor Interval
    </SponsorIntervalControlButton>
  );
};
