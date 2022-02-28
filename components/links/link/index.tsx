import * as S from "./styles";
import { ButtonSize } from "components/buttons";
import { isExternalURL } from "lib/utils";
import NLink from "next/link";

export interface StyledLinkProps {
  disabled?: boolean;
  size: ButtonSize;
}

export interface LinkProps extends Partial<StyledLinkProps> {
  to: string;
  children: React.ReactNode;
  language?: string;
  locale?: string | false | undefined;
}

const Link: React.FC<LinkProps> = ({
  children,
  size = ButtonSize.Normal,
  to: url,  
  ...rest
}: LinkProps) => {
  const href = rest.disabled ? "" : url;
  const props = { size, ...rest };

  if (isExternalURL(href)) {
    return (
      <S.ExternalLink href={href} {...props}>
        {children}
      </S.ExternalLink>
    );
  }
  return (
    <NLink href={href} {...props} passHref>
      <S.InternalLink {...props}>{children}</S.InternalLink>
    </NLink>
  );
};

export default Link;
