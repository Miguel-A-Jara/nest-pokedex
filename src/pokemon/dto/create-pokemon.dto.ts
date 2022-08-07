import { IsInt, IsPositive, IsString, Min, MinLength } from 'class-validator';

export class CreatePokemonDto {

  //IsInt, isPositive, Min(1)
  @IsPositive({ message: 'The pokemon number must be a positive integer'})
  @IsInt()
  @Min(1, { message: 'The pokemon number must be greater than 0'})
  no:   number;

  //IsString, MinLength(1)
  @IsString()
  @MinLength(1)
  name: string;
}
