"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranslationService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const path = require("path");
let TranslationService = class TranslationService {
    constructor() {
        this.translations = {};
        this.defaultLanguage = 'en';
    }
    async onModuleInit() {
        const translationsDir = path.join(__dirname, '../../src/translations');
        const files = fs.readdirSync(translationsDir);
        for (const file of files) {
            const lang = path.basename(file, '.json');
            const filePath = path.join(translationsDir, file);
            const content = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
            this.translations[lang] = content;
        }
    }
    getAllTranslations(lang) {
        return this.translations[lang] || this.translations[this.defaultLanguage] || `Missing translations for language: ${lang}`;
    }
};
exports.TranslationService = TranslationService;
exports.TranslationService = TranslationService = __decorate([
    (0, common_1.Injectable)()
], TranslationService);
//# sourceMappingURL=translation.service.js.map