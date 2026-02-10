import { ui, defaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function getLocalizedPath(lang: string, path: string = '') {
  // Remove leading/trailing slashes from path
  const cleanPath = path.replace(/^\/|\/$/g, '');
  
  // If it's the default language, return the path without language prefix
  if (lang === defaultLang) {
    return cleanPath ? `/${cleanPath}` : '/';
  }
  
  // For other languages, prepend the language code
  return cleanPath ? `/${lang}/${cleanPath}` : `/${lang}`;
}

export function getAlternateLanguageUrl(currentUrl: URL, targetLang: string, translationKey?: string) {
  const currentLang = getLangFromUrl(currentUrl);
  
  // If no translation key is provided, just switch to the blog index or home page
  if (!translationKey) {
    if (currentUrl.pathname.includes('/blog')) {
      return getLocalizedPath(targetLang, 'blog');
    }
    return getLocalizedPath(targetLang);
  }
  
  // For blog posts, construct the URL with the translation key
  return getLocalizedPath(targetLang, `blog/${translationKey}`);
}
