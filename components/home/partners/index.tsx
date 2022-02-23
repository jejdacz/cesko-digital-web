import * as S from "./styles";
import LogoList from "components/logo-list";
import useStrings from "components/useStrings";
import { PortalPartner } from "lib/portal-types";

interface Props {
  partners: readonly PortalPartner[];  
}

const Partners: React.FC<Props> = ({ partners }) => {
  const {strings} = useStrings();
  return (
    <S.Wrapper>
      <S.MainTitle>
        {strings.pages.homepage.sections.partners.title}
      </S.MainTitle>
      <LogoList items={partners} />
    </S.Wrapper>
  );
};

export default Partners;
