export interface INavigationProps {
  navigation: INavigations;
  setOpen?: Function;
}

export interface INavigations {
  id: number;
  title: string;
  path: string;
}
