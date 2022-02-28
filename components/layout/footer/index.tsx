import { ButtonSize } from "components/buttons";
import NewsletterBox from "./newsletter-form";
import * as S from "./styles";
import { Route } from "lib/routing";
import { Link } from "components/links";
import useStrings from "components/useStrings";

const Footer: React.FC = () => {
  const { strings, lang, dictionary } = useStrings();
  const footer = strings.components.sections.footer;

  const o = footer.online;
  const socialLinks = [
    [o.facebook, "https://www.facebook.com/cesko.digital"],
    [o.twitter, "https://twitter.com/CeskoDigital"],
    [o.linkedin, "https://www.linkedin.com/company/cesko-digital"],
    [o.github, "https://github.com/cesko-digital"],
    [o.youtube, "https://www.youtube.com/channel/UCYMZxCNq_IWI8URpcx2sBwg"],
  ];

  const createPageLinksCS = () => {
    const p = dictionary["cs"].components.sections.footer.pageLinks;
    return [
      [p.projects, Route.projects],
      [p.dashboard, Route.dashboard],
      [p.blog, Route.blog],
      [p.loginToSlack, Route.joinUs],
      [p.submitProject, Route.submitProject],
      [p.supportUs, Route.supportUs],
      [p.logo, Route.brandManual],
      [p.mediaContact, "mailto:pr@cesko.digital"],
    ];
  };

  const createPageLinksEN = () => {
    const p = dictionary["en"].components.sections.footer.pageLinks;
    return [
      [p.projects, Route.projects],
      [p.blog, Route.blog],
      [p.loginToSlack, Route.joinUs],
      [p.submitProject, Route.submitProject],
      [p.supportUs, Route.supportUs],
      [p.logo, Route.brandManual],
      [p.mediaContact, "mailto:pr@cesko.digital"],
    ];
  };

  const pageLinks = { cs: createPageLinksCS(), en: createPageLinksEN() };

  return (
    <S.Wrapper>
      <S.Outer>
        <S.Container>
          <S.Info>
            <S.InfoBlock>
              <S.Heading>{footer.pageLinks.title}</S.Heading>
              <S.Navigation>
                <S.Links>
                  {pageLinks[lang as keyof typeof pageLinks].map(
                    ([name, url], i) => (
                      <S.LinkItem key={i}>
                        <Link size={ButtonSize.Small} to={url}>
                          {name}
                        </Link>
                      </S.LinkItem>
                    )
                  )}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
            <S.InfoBlock>
              <S.Heading>{footer.online.title}</S.Heading>
              <S.Navigation>
                <S.Links>
                  {socialLinks.map(([name, url], index) => (
                    <S.LinkItem key={index}>
                      <Link size={ButtonSize.Small} to={url}>
                        {name}
                      </Link>
                    </S.LinkItem>
                  ))}
                </S.Links>
              </S.Navigation>
            </S.InfoBlock>
          </S.Info>
          <NewsletterBox />
          <S.Note>{footer.footNote}</S.Note>
        </S.Container>
      </S.Outer>
    </S.Wrapper>
  );
};

export default Footer;
