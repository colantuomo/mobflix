import { VideoInfo } from '../interfaces';

const undefinedResponse = { url: undefined, category: undefined };

export function getVideoById(id: string | undefined): VideoInfo {
  if (id === undefined) return undefinedResponse;
  return undefinedResponse;
}
