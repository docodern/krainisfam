import { default as NextLink } from 'next/link';
import { RichText } from 'prismic-reactjs';
import { hrefResolver } from 'prismic-configuration';
import { useRouter } from "next/router";


const MenuLinks = ({ links = [] }) => {
  const router = useRouter();
  console.log(router)
  if (links) {
    return links.map((menuLink) => {
      
      return (
        <NextLink
        key={menuLink.link.id}
        href={hrefResolver(menuLink.link)}
        passHref
      >
        <a
        className={'text-txc hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium text-center'}
        >{RichText.asText(menuLink.label)}</a>
      </NextLink>
      );
    });
    }
};

const Navigation = ({ menu }) =>
  menu ? <MenuLinks links={menu.data.menu_links} /> : null;

export default Navigation;