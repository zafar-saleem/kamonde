export interface IButtons {
  views?: number;
  likes?: number;
}

export interface Props extends IButtons {
  children?: React.ReactNode;
  type: string;
}