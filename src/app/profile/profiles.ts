import { moerebuukTheme } from "../theme/moerebuuk-theme-tokens";
import { top100Theme } from "../theme/top100-theme-tokens";
import { Profile } from "./types";

const profileIdIdentifier = "profile";

const popellProfile: Profile = {
  id: 1,
  name: "Popell",
  theme: top100Theme,
  interval: 200,
  showChat: false,
  showStats: true,
  showVoters: false,
  showSponsors: true,
  showPoster: true,
};

const moerebuukProfile: Profile = {
  id: 2,
  name: "Moerebuuk",
  theme: moerebuukTheme,
  interval: 200,
  showChat: false,
  showStats: false,
  showVoters: false,
  showSponsors: false,
  showPoster: false,
};

export const getDefaultProfile = (): Profile => {
  const profileId = localStorage.getItem(profileIdIdentifier);
  if (profileId) {
    const foundProfile = getProfileById(profileId);
    if (foundProfile) {
      return foundProfile;
    }
  }
  const defaultProfile = Profiles[0];
  saveDefaultProfile(defaultProfile.id.toString());
  return defaultProfile;
};

export const saveDefaultProfile = (profileId: string) => {
  localStorage.setItem(profileIdIdentifier, profileId);
};

export const getProfileById = (profileId: string): Profile | undefined => {
  const foundProfile = Profiles.find(
    (profile) => profile.id.toString() === profileId
  );
  return foundProfile;
};

export const getProfileByName = (profileName: string): Profile | undefined => {
  const foundProfile = Profiles.find((profile) => profile.name === profileName);
  return foundProfile;
};

export const Profiles = [popellProfile, moerebuukProfile];
