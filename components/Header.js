import { Navigation, LanguageSwitcher } from '.';
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'


export default function Header({ menu, altLangs }) {
  return (
    <header>
    <Disclosure as="nav" className="bg-bgc fixed w-full z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16 lg:h-24">
              <div className="absolute inset-y-0 right-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-txc hover:text-white hover:bg-txc focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center lg:items-center lg:justify-between">
                <div className="flex-shrink-0 flex items-center">
                <a href="/"><img
                    className="block h-12 lg:h-20 w-auto"
                    src="/images/logo.svg"
                    alt="Workflow"
                  /></a>
                </div>
                <div className="hidden lg:block lg:ml-6">
                  <div className="flex space-x-4">
                  <Navigation menu={menu} />
                  <LanguageSwitcher altLangs={altLangs} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
            <Navigation menu={menu} />
            <LanguageSwitcher altLangs={altLangs} />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
    </header>
  )
}
