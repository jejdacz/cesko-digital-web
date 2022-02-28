import { useRouter } from "next/router";
import csstrings from "content/strings.json";
import enstrings from "content/strings-en.json";

const dictionary = { cs: csstrings, en: enstrings };
export type Locale = "cs" | "en";

export const useStrings = () => {
  const router = useRouter();
  const { pathname, asPath, query, locale, locales } = router;

  const switchLang = (l: Locale) => {
    router.push({ pathname, query }, asPath, { locale: l });
  };

  const langSwitches: [Locale, () => void][] = locales?.filter((e) => e !== locale)
    .map((e) => [e as Locale, () => switchLang(e as Locale)])!;

  return {
    strings: dictionary[locale as keyof typeof dictionary],
    dictionary,
    lang: locale as Locale,
    langs: locales as Locale[],
    langSwitches,
  };
};

export default useStrings;
