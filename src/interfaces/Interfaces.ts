export interface IPage {
  page: Gallery;
}
export interface Gallery {
  title: string;
  "total-content-items": string;
  "page-num-requested": string;
  "page-size-requested": string;
  "page-size-returned": string;
  "content-items": ContentItems;
}

export interface ContentItems {
  content: Content[];
}

export interface Content {
  name: string;
  "poster-image": string;
}
