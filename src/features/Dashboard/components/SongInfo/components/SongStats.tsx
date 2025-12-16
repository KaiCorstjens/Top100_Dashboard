import { useSelector } from "react-redux";
import { RootState } from "../../../../../app/store";
import {
  SongStatsContainer,
  SongStatsMobileContainer,
  SongVotersContainer,
} from "./SongStats.style";

export const SongStats: React.FC = () => {
  const { stats, showVoters } = useSelector(
    (state: RootState) => state.dashboard
  );

  if (stats) {
    return (
      <SongStatsContainer>
        <SongStatsMobileContainer>
          {!showVoters && <br />}
          Punten: {stats?.points}
          <br />
          <br />
          {showVoters && (
            <SongVotersContainer>
              Stemmen:{" "}
              {stats.voters.map((vote) => vote.submitter_name).join(", \n")}
            </SongVotersContainer>
          )}
        </SongStatsMobileContainer>
      </SongStatsContainer>
    );
  } else {
    return <></>;
  }
};
