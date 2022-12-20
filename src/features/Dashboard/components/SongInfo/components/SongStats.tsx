import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { SongStatsContainer } from "./SongStats.style";
import { SongStats as Stats } from "../../../types";

export const SongStats: React.FC = () => {
  const stats: Stats | undefined = useSelector(
    (state: RootState) => state.dashboard.stats
  );

  return (
    <SongStatsContainer
      style={{ display: stats?.position ? "table-cell" : "none" }}
    >
      Punten: {stats?.value} <br />
      <br />
      Stemmen: {stats?.voters.join(", ")}
    </SongStatsContainer>
  );
};
