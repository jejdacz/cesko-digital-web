import { useRouter } from "next/router";
import csstrings from "content/strings.json";
import enstrings from "content/strings-en.json";

const strings = { cs: csstrings, en: enstrings };

export const useStrings = () => {
  const router = useRouter();
  const locale = router.locale;
  return strings[locale];
};
export default useStrings;
