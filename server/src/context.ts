import { TrackAPI } from "./dataSources/track-api";

export type DataSourceContext = {
  dataSources: {
    trackAPI: TrackAPI;
  };
};
