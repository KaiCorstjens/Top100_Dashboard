import { ThemeSchema } from "../theme/theme-schema";

export type Profile = {
  id: number;
  name: string;
  theme: ThemeSchema;
  interval: number;
  showChat: boolean;
  showStats: boolean;
  showPoster: boolean;
  showSponsors: boolean;
};
