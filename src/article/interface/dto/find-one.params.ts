import { IsNotEmpty, IsString, IsUUID } from "class-validator";

export class FindOneParams {
    @IsString()
    @IsUUID()
    @IsNotEmpty()
    id: string;
}