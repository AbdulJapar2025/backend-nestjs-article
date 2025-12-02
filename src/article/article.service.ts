import { Injectable } from '@nestjs/common';
import { IArticle, ArticleStatus } from './interface/article.interface';
import { CreateArticleDto } from './interface/dto/create-article.dto';
import { UpdateArticleDto } from './interface/dto/update-article.dto';
import { Article } from './entities/article.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ArticleService {
  // resource
  constructor(
    @InjectRepository(Article)
    private ArticleRepository: Repository<Article>,
  ) {}

  async createArticle(createArticleDto: CreateArticleDto): Promise<Article> {
    const newArticle = await this.ArticleRepository.save(createArticleDto);
    return newArticle;
  }
  async findAllArticle(): Promise<Article[]> {
    return await this.ArticleRepository.find();
  }

  async findOneByParams(id: string): Promise<Article | null> {
    return await this.ArticleRepository.findOne({ where: { id } });
  }

  async updateArticleByParams(
    article: IArticle,
    updateArticleDto: UpdateArticleDto,
  ): Promise<Article> {
    Object.assign(article, updateArticleDto);
    return await this.ArticleRepository.save(article);
  }

  async deleteByParams(articleData: Article): Promise<void> {
    await this.ArticleRepository.delete(articleData.id);
  }
}
