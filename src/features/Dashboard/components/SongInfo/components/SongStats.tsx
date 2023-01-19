import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import {
  SongStatsContainer,
  SongStatsMobileContainer,
  SongVotersContainer,
} from "./SongStats.style";
import { SongStats as Stats } from "../../../types";

export const SongStats: React.FC = () => {
  const stats: Stats | undefined = useSelector(
    (state: RootState) => state.dashboard.stats
  );

  if (stats) {
    return (
      <SongStatsContainer>
        <SongStatsMobileContainer>
          Punten: {stats?.points}
          <br />
          <br />
          <SongVotersContainer>
            Stemmen:{" "}
            {stats.voters.map((vote) => vote.submitter_name).join(", \n")}
          </SongVotersContainer>
        </SongStatsMobileContainer>
      </SongStatsContainer>
    );
  } else {
    return <></>;
  }
};

//Array.from( myMap ).map(([key, value]) => ({ key, value }));
