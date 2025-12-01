import { Injectable } from '@nestjs/common';
import { IArticle, ArticleStatus } from './interface/article.interface';
import { CreateArticleDto } from './interface/dto/create-article.dto';
import { randomUUID } from 'crypto';
import { UpdateArticleDto } from './interface/dto/update-article.dto';

@Injectable()
export class ArticleService {
  // resource
  private articles: IArticle[] = [];

  createArticle(CreateArticleDto: CreateArticleDto) {
    const article: IArticle = {
      id: randomUUID(),
      ...CreateArticleDto,
    };
    this.articles.push(article);
    return article;
  }

  findAllArticle(): IArticle[] {
    return this.articles;
  }

  findOneByParams(id: string): IArticle | undefined {
    return this.articles.find((item) => item.id === id);
  }

  updateArticleByParams(
    article: IArticle,
    updateArticleDto: UpdateArticleDto,
  ): IArticle {
    Object.assign(article, updateArticleDto);
    return article;
  }

  deleteByParams(articleData: IArticle): void {
    this.articles = this.articles.filter(
      (filterData) => filterData.id !== articleData.id,
    );
  }
}
