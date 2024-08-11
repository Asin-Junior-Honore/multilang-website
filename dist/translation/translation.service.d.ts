import { OnModuleInit } from '@nestjs/common';
export declare class TranslationService implements OnModuleInit {
    private translations;
    private defaultLanguage;
    onModuleInit(): Promise<void>;
    getAllTranslations(lang: string): any;
}
