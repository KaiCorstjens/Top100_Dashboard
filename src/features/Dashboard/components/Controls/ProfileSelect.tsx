import { profile } from "console";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfileByName,
  Profiles,
  saveDefaultProfile,
} from "../../../../app/profile/profiles";
import { RootState } from "../../../../app/store";
import { setProfile } from "../../api/DashboardSlice";
import { ProfileControlSelect } from "./ControlsModal.style";

export const ProfileSelect = () => {
  const dispatch = useDispatch();
  const { profile } = useSelector((state: RootState) => state.dashboard);

  const getProfileOptions = () => {
    return Profiles.map((profile) => {
      return (
        <option key={profile.id} value={profile.name}>
          {profile.name}
        </option>
      );
    });
  };

  const onProfileSelectionChange = (profileName: string) => {
    // Save to state
    const profile = getProfileByName(profileName);
    if (profile) {
      saveDefaultProfile(profile.id.toString());
      dispatch(setProfile(profile));
    }
  };

  return (
    <ProfileControlSelect>
      Select profile: <br />
      <select
        name="profiles"
        id="profiles"
        value={profile?.name}
        onChange={(e) => onProfileSelectionChange(e.target.value)}
      >
        {getProfileOptions()}
      </select>
    </ProfileControlSelect>
  );
};
