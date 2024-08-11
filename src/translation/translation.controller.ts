import { Controller, Get, Param } from '@nestjs/common';
import { TranslationService } from './translation.service';

@Controller('translate')
export class TranslationController {
  constructor(private readonly translationService: TranslationService) {}

  @Get('/:lang')
  getAllTranslations(@Param('lang') lang: string) {
    return this.translationService.getAllTranslations(lang);
  }
}
