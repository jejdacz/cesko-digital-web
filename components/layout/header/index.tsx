import { useState } from "react";
import Section from "../section";
import SectionContent from "../section-content";
import { ButtonAsLink, Link } from "components/links";
import { ButtonSize } from "components/buttons";
import { CloseIcon, MenuIcon } from "components/icons";
import { Route } from "lib/routing";
import * as S from "./styles";
import useStrings from "components/useStrings";

const LangMenu: React.FC = () => {
  const { strings, lang } = useStrings();
  return (
    <>
      {lang !== "cs" && (
        <Link key="czech" to={"/"} size={ButtonSize.Small}>
          {strings.header.czech}
        </Link>
      )}
      {lang !== "en" && (
        <Link key="english" to={"/en/"} size={ButtonSize.Small}>
          {strings.header.english}
        </Link>
      )}
    </>
  );
};

const Header: React.FC = () => {
  const { strings, lang } = useStrings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const menuCS = [
    [Route.projects, strings.header.projects],
    [Route.dashboard, strings.header.dashboard],
    [Route.partners, strings.header.partners],
    [Route.blog, "Blog"],
    [Route.supportUs, strings.header.supportUs],
  ];

  const menuEN = [
    [Route.projects, strings.header.projects],
    [Route.partners, strings.header.partners],
    [Route.blog, "Blog"],
    [Route.supportUs, strings.header.supportUs],
  ];

  const menu = lang === "cs" ? menuCS : menuEN;

  return (
    <Section as={"header"}>
      <SectionContent verticalPadding={0}>
        <S.Container>
          <Link to="/" size={ButtonSize.Small}>
            <S.Logo />
          </Link>

          <S.DesktopLinksContainer>
            {menu.map(([link, label]) => (
              <Link key={label} to={link} size={ButtonSize.Small}>
                {label}
              </Link>
            ))}

            <S.HeaderButton to={Route.joinUs} size={ButtonSize.Normal} inverted>
              {strings.header.signUp}
            </S.HeaderButton>

            <LangMenu />
          </S.DesktopLinksContainer>

          <S.MobileLinksContainer>
            <LangMenu />
            <ButtonAsLink to={Route.joinUs} size={ButtonSize.Small} inverted>
              {strings.header.signUp}
            </ButtonAsLink>
            <S.IconButton onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </S.IconButton>
          </S.MobileLinksContainer>
        </S.Container>

        {mobileMenuOpen && (
          <S.MobileMenu>
            {menu.map(([link, label]) => (
              <Link key={label} to={link} size={ButtonSize.Small}>
                {label}
              </Link>
            ))}
          </S.MobileMenu>
        )}
      </SectionContent>
    </Section>
  );
};

export default Header;
