import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setPollingInterval } from "../../api/DashboardSlice";
import { PollIntervalControlButton } from "./ControlsModal.style";

export const PollIntervalControl = () => {
  const dispatch = useDispatch();
  const pollingInterval: number = useSelector(
    (state: RootState) => state.dashboard.pollingInterval
  );

  const handleButtonOnClick = () => {
    const prompt_input = prompt(
      "Please enter new polling interval in ms:",
      pollingInterval.toString()
    );

    const new_interval = Number(prompt_input);

    if (isNaN(new_interval)) {
      alert("Non-valid number entered");
    } else if (new_interval == null || new_interval === 0) {
      alert("Cancelled. Interval will stay " + pollingInterval);
    } else {
      dispatch(setPollingInterval(new_interval));
    }
  };
  return (
    <PollIntervalControlButton onClick={handleButtonOnClick}>
      Interval
    </PollIntervalControlButton>
  );
};
