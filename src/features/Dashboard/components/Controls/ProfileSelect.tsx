import { useDispatch } from "react-redux";
import {
  getProfileByName,
  Profiles,
  saveDefaultProfile,
} from "../../../../app/profile/profiles";
import { setProfile } from "../../api/DashboardSlice";

export const ProfileSelect = () => {
  const dispatch = useDispatch();

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
    <>
      Select profile: <br />
      <select
        name="profiles"
        id="profiles"
        onChange={(e) => onProfileSelectionChange(e.target.value)}
      >
        {getProfileOptions()}
      </select>
    </>
  );
};
