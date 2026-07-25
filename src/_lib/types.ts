export type NewsType = {
  id: string;
  title: string;
  subTitle: string;
  miniDescription: string;
  description: string[];
  imageURL: string;
  include1stBanner: boolean;
  include2ndBanner: boolean;
}[];