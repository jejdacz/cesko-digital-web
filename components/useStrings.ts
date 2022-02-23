import { useRouter } from "next/router";
import csstrings from "content/strings.json";
import enstrings from "content/strings-en.json";

// type JSONValue =
//     | string
//     | number
//     | boolean
//     | { [x: string]: JSONValue }
//     | Array<JSONValue>;

// interface JSONObject {
//     [x: string]: JSONValue;
// }

// interface Dictionary {
//   [index: string]: typeof csstrings | typeof enstrings;
// }

// const dictionary: { [x: string]: JSONObject } = { cs: csstrings, en: enstrings };
//const dictionary: Dictionary = { cs: csstrings, en: enstrings };

export const useStrings = () => {
  const lang = useRouter().locale as string;
  const langs = useRouter().locales;
  switch (lang) {
    case "cs" : return {strings:csstrings,lang,langs};
    case "en" : return {strings:enstrings,lang,langs};
    default: return {strings:csstrings,lang,langs};
  }
    
  //return [dictionary[locale],locale];
};

export default useStrings;
