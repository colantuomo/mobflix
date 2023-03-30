export type ID = string | number;
export type TCategory = {
  name: string;
  color: string;
  isSelected?: boolean;
  id: ID;
};
export interface VideoInfo {
  url: string | undefined;
  category: TCategory | undefined;
}
