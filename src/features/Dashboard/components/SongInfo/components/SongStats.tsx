import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import { SongStatsContainer, SongVotersContainer } from "./SongStats.style";
import { SongStats as Stats } from "../../../types";

export const SongStats: React.FC = () => {
  const stats: Stats | undefined = useSelector(
    (state: RootState) => state.dashboard.stats
  );

  if (stats) {
    return (
      <SongStatsContainer style={{ display: stats ? "table-cell" : "none" }}>
        Punten: {stats?.points} <br />
        <br />
        Stemmen:{" "}
        <SongVotersContainer>
          {stats.voters.map((vote) => vote.submitter_name).join(", \n")}
        </SongVotersContainer>
      </SongStatsContainer>
    );
  } else {
    return <></>;
  }
};

//Array.from( myMap ).map(([key, value]) => ({ key, value }));
