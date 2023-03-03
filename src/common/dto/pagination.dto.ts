import { IsOptional, IsPositive, Min } from 'class-validator';
import { Injectable } from '@nestjs/common';


export class PaginationDto{

    @IsOptional()
    @IsPositive()
    @Min(1)
    limit?: number;

    @IsOptional()
    @IsPositive()
    offset?: number;
    
}