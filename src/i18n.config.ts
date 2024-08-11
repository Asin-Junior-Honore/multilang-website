import { Module } from '@nestjs/common';
import { I18nModule } from 'nestjs-i18n';
import { join } from 'path';

@Module({
  imports: [
    I18nModule.forRoot({
      loaderOptions: {
        path: join(__dirname, '../../src/translations'),
        watch: true,
      },
      fallbackLanguage: 'en',
    }),
  ],
})
export class AppModule {}
