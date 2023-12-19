import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setPosterInterval, setPosterShowTime } from "../../api/DashboardSlice";
import { PosterIntervalControlButton } from "./ControlsModal.style";

export const PosterIntervalControl = () => {
  const dispatch = useDispatch();
  const posterInterval: number = useSelector(
    (state: RootState) => state.dashboard.posterInterval
  );
  const posterShowTime: number = useSelector(
    (state: RootState) => state.dashboard.posterShowTime
  );

  const handleButtonOnClick = () => {
    const prompt_interval_input = prompt(
      "Please enter time between showing posters in seconds:",
      (posterInterval / 1000).toString()
    );
    const prompt_showtime_input = prompt(
      "Please enter time poster should be shown in seconds:",
      (posterShowTime / 1000).toString()
    );

    const new_interval = Number(prompt_interval_input);
    const new_showTime = Number(prompt_showtime_input);

    if (isNaN(new_interval)) {
      alert("Non-valid number entered for interval");
    } else if (new_interval == null || new_interval === 0) {
      alert("Cancelled. Interval will stay " + posterInterval / 1000);
    } else {
      dispatch(setPosterInterval(new_interval * 1000));
    }
    if (isNaN(new_showTime)) {
      alert("Non-valid number entered for poster show time");
    } else if (new_showTime == null || new_showTime === 0) {
      alert("Cancelled. Poster show time will stay " + posterShowTime / 1000);
    } else {
      dispatch(setPosterShowTime(new_showTime * 1000));
    }
  };
  return (
    <PosterIntervalControlButton onClick={handleButtonOnClick}>
      Poster Times
    </PosterIntervalControlButton>
  );
};
