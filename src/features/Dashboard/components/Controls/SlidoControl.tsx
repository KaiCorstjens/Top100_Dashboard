import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../app/store";
import { setShowSlido } from "../../api/DashboardSlice";
import { SlidoControlButton } from "./Controls.style";

export const SlidoControl = () => {
  const dispatch = useDispatch();
  const showSlido: boolean = useSelector(
    (state: RootState) => state.dashboard.showSlido
  );

  return (
    <SlidoControlButton onClick={() => dispatch(setShowSlido(!showSlido))}>
      {showSlido ? "Hide chat" : "Show chat"}
    </SlidoControlButton>
  );
};
