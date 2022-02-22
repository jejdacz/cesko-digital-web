import type { NextPage, GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useContext } from "react";

import { PortalPartner, PortalProject } from "lib/portal-types";
import { siteData } from "lib/site-data";

import { Layout, Section, SectionContent } from "components/layout";
import { Projects, JoinUs } from "components/sections";
import { ThemeContext } from "styled-components";

import {
  Hero,
  OurValues,
  Numbers,
  ImageGallery,
  Partners,
} from "components/home";

type PageProps = {
  projects: readonly PortalProject[];
  partners: readonly PortalPartner[];
};

const Page: NextPage<PageProps> = ({ projects, partners }) => {
  const theme = useContext(ThemeContext);
  const router = useRouter();
  const displayBanner = !!router.query.banner;

  const lang = router.locale === "en" ? "en" : "cs";

  return (
    <Layout showBanner={displayBanner} lang={lang}>
      <Section>
        <Hero lang={lang} />
      </Section>

      <Numbers lang={lang} />

      <Section>
        <SectionContent>
          <Projects projects={projects.slice(0, 3)} />
        </SectionContent>
      </Section>

      <Section>
        <SectionContent>
          <JoinUs />
        </SectionContent>
      </Section>

      <Section backgroundColor={theme.colors.pebble}>
        <SectionContent>
          <OurValues lang={lang} />
        </SectionContent>
      </Section>

      <Section>
        <ImageGallery />
      </Section>

      {partners.length > 0 && (
        <Section>
          <SectionContent>
            <Partners partners={partners} lang={lang} />
          </SectionContent>
        </Section>
      )}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<PageProps> = async () => {
  const allPartners = siteData.partners;
  const homepagePartners = allPartners.filter((p) =>
    p.categories.some((c) => c === "homepage")
  );
  return {
    props: {
      projects: siteData.projects,
      partners: homepagePartners,
    },
  };
};

export default Page;
