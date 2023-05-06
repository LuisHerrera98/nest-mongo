import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { PokemonModule } from './pokemon/pokemon.module';
import { CommonModule } from './common/common.module';
import { SeedModule } from './seed/seed.module';
import { EnvConfiguration } from './config/app.config';
import { joiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [ EnvConfiguration ],
      validationSchema: joiValidationSchema
    }),
    MongooseModule.forRoot(process.env.DATABASE_URI),
    PokemonModule,
    CommonModule,
    SeedModule
  ],
})
export class AppModule {}
