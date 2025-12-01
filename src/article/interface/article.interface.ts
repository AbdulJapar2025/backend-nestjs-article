export interface IArticle {
  id: string;
  title: string;
  content: string;
  status: ArticleStatus;
}

export enum ArticleStatus {
  SUSCESS = 'SUCCESS',
  PENDING = 'PENDING',
  CANCEL = 'CANCEL',
}
