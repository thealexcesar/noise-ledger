import { describe, expect, it } from 'vitest';
import { pickLanguage } from './pick-language.ts';

describe('pickLanguage', () => {
  it('reads any Portuguese variant as pt-BR', () => {
    expect(pickLanguage('pt-BR')).toBe('pt-BR');
    expect(pickLanguage('pt-PT')).toBe('pt-BR');
    expect(pickLanguage('pt')).toBe('pt-BR');
  });

  it('reads any English variant as en', () => {
    expect(pickLanguage('en-US')).toBe('en');
    expect(pickLanguage('en-GB')).toBe('en');
    expect(pickLanguage('en')).toBe('en');
  });

  it('ignores letter case', () => {
    expect(pickLanguage('EN-us')).toBe('en');
    expect(pickLanguage('PT-br')).toBe('pt-BR');
  });

  it('falls back to en for unknown or empty languages', () => {
    expect(pickLanguage('ja-JP')).toBe('en');
    expect(pickLanguage('de-DE')).toBe('en');
    expect(pickLanguage('')).toBe('en');
  });
});
