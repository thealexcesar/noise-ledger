export type Language = 'pt-BR' | 'en';

const FALLBACK_LANGUAGE: Language = 'en';

/**
 * Maps the device language (for example `navigator.language`) to a supported language.
 * Any Portuguese variant reads as pt-BR, any English variant as en, and anything else
 * falls back to en, the language most users can read.
 *
 * @param deviceLanguage - BCP 47 tag such as "pt-PT", "en-US" or "fr".
 */
export function pickLanguage(deviceLanguage: string): Language {
  const baseLanguage = deviceLanguage.toLowerCase().split('-')[0];
  if (baseLanguage === 'pt') return 'pt-BR';
  if (baseLanguage === 'en') return 'en';
  return FALLBACK_LANGUAGE;
}
