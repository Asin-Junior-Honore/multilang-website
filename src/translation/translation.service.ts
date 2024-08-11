import { Injectable, OnModuleInit } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class TranslationService implements OnModuleInit {
  private translations: Record<string, any> = {};
  private defaultLanguage = 'en'; // Define default language

  async onModuleInit() {
    const translationsDir = path.join(__dirname, '../../src/translations');
    const files = fs.readdirSync(translationsDir);

    for (const file of files) {
      const lang = path.basename(file, '.json');
      const filePath = path.join(translationsDir, file);
      const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
      this.translations[lang] = content;
    }

    // console.log('Loaded translations:', this.translations);
  }

  getAllTranslations(lang: string): any {
    return this.translations[lang] || this.translations[this.defaultLanguage] || `Missing translations for language: ${lang}`;
  }
}
