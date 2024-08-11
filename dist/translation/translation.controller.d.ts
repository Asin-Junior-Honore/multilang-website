import { TranslationService } from './translation.service';
export declare class TranslationController {
    private readonly translationService;
    constructor(translationService: TranslationService);
    getAllTranslations(lang: string): any;
}
