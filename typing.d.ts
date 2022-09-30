export interface SubTitle {
  title: string;
  subMenu: { title: string; href: string }[];
  href: string;
}

export interface SubMap {
  title: string;
  description: string;
  subTitle: SubTitle[];
}

export interface SiteMap {
  info: SubMap;
  research: SubMap;
  major: SubMap
  data: SubMap
  notice: SubMap
}
