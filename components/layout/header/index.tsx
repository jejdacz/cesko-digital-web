import { useState } from "react";
import Section from "../section";
import SectionContent from "../section-content";
import { ButtonAsLink, Link } from "components/links";
import { ButtonSize } from "components/buttons";
import { CloseIcon, MenuIcon } from "components/icons";
import { Route } from "lib/routing";
import * as S from "./styles";
import useStrings from "components/useStrings";

const Header: React.FC = () => {
  const { dictionary, lang } = useStrings();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const renderCS = () => {
    const strings = dictionary["cs"];
    const menu = [
      [Route.projects, strings.header.projects],
      [Route.dashboard, strings.header.dashboard],
      [Route.partners, strings.header.partners],
      [Route.blog, "Blog"],
      [Route.supportUs, strings.header.supportUs],
    ];

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

              <S.HeaderButton
                to={Route.joinUs}
                size={ButtonSize.Normal}
                inverted
              >
                {strings.header.signUp}
              </S.HeaderButton>

              <Link key={"en"} to={"/"} locale={"en"} size={ButtonSize.Small}>
                {strings.header.english}
              </Link>
            </S.DesktopLinksContainer>

            <S.MobileLinksContainer>
              <Link key={"en"} to={"/"} locale={"en"} size={ButtonSize.Small}>
                {strings.header.english}
              </Link>
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

  const renderEN = () => {
    const strings = dictionary["en"];    
    return (
      <Section as={"header"}>
        <SectionContent verticalPadding={0}>
          <S.Container>
            <Link to="/" size={ButtonSize.Small}>
              <S.Logo />
            </Link>
            <S.DesktopLinksContainer>
              <Link key={"cs"} to={"/"} locale={"cs"} size={ButtonSize.Small}>
                {strings.header.czech}
              </Link>
            </S.DesktopLinksContainer>
            <S.MobileLinksContainer>
              <Link key={"cs"} to={"/"} locale={"cs"} size={ButtonSize.Small}>
                {strings.header.czech}
              </Link>
            </S.MobileLinksContainer>
          </S.Container>
        </SectionContent>
      </Section>
    );
  };

  return lang === "cs" ? renderCS() : renderEN();
};

export default Header;
