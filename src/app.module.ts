import { Module } from '@nestjs/common';
import { TranslationService } from './translation/translation.service';
import { TranslationController } from './translation/translation.controller';

@Module({
  imports: [],
  controllers: [TranslationController],
  providers: [TranslationService],
})
export class AppModule {}
