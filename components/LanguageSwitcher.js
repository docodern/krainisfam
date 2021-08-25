import NextLink from 'next/link';
import { linkResolver, hrefResolver } from 'prismic-configuration';

const AltLangs = ({ altLangs = [] }) =>
  altLangs.map((altLang) => {
    return (
        <NextLink
          key={altLang.id}
          locale={altLang.lang}
          as={linkResolver(altLang)}
          href={hrefResolver(altLang)}
          passHref
        >
          <a className={`w-5 h-3 bg-transparent bg-flag-${altLang.lang.slice(-2)} bg-center bg-cover block m-auto `}></a>
        </NextLink>
    );
  });

const LanguageSwitcher = ({ altLangs }) => <AltLangs altLangs={altLangs} />;

export default LanguageSwitcher;
