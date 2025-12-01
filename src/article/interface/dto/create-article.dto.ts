import { ArticleStatus } from "../article.interface";
import { IsNotEmpty, IsString, IsEnum} from "class-validator";
export class CreateArticleDto {
    @IsNotEmpty()
    @IsString()
    title: string;

    @IsNotEmpty()
    @IsString()
    content: string;

    @IsNotEmpty()
    @IsEnum(ArticleStatus)
    status: ArticleStatus
}