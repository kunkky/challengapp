import React from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const DashboardNav = () => {
    
    const userInfo = JSON.parse(sessionStorage.getItem("user"));
    const fullnam = userInfo.fullname;

    const navigation = [
        { name: 'Dashboard', href: '/dashboard', current: true },
        { name: 'Challenge', href: '/challenge/default', current: false },
        { name: 'Profile', href: '/profile', current: false },
            ]
    const userNavigation = [
        { name: 'Your Profile', href: '/profile' },
        { name: 'Sign out', href: '/logout' },
    ]

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    //get initials for dp
    let name = fullnam;
    let initials = name.split(' ').map(word => word[0]).join('');
    
  return (
    
      <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
              <>
                  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                      <div className="flex h-16 items-center justify-between">
                          <div className="flex items-center">
                              <div className="flex-shrink-0 text-white font-extrabold text-2xl">
                                  Tech Challenge
                              </div>
                              <div className="hidden md:block">
                                  <div className="ml-10 flex items-baseline space-x-4">
                                      {navigation.map((item) => (
                                          <NavLink
                                              key={item.name}
                                              to={item.href}
                                              className=
                                              {({ isActive }) => { return isActive ? 'bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium' : 'text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium' }} 
                                              aria-current={item.current ? 'page' : undefined}
                                          >
                                              {item.name}
                                          </NavLink>
                                      ))}
                                      
                                  </div>
                              </div>
                          </div>
                          <div className="hidden md:block">
                              <div className="ml-4 flex items-center md:ml-6">
                                  <button
                                      type="button"
                                      className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                  >
                                      <span className="absolute -inset-1.5" />
                                      <span className="sr-only">View notifications</span>
                                     
                                  </button>

                                  {/* Profile dropdown */}
                                  <Menu as="div" className="relative ml-3">
                                      <div>
                                          <Menu.Button className="relative flex max-w-xs items-center rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                              <span className="absolute -inset-1.5" />
                                              <span className="sr-only">Open user menu</span>
                                              <div className="text-white font-bold text-2xl bg-slate-600 flex justify-center items-center p-2 rounded-full">{initials.toUpperCase()}</div>
                                          </Menu.Button>
                                      </div>
                                      <Transition
                                          as={Fragment}
                                          enter="transition ease-out duration-100"
                                          enterFrom="transform opacity-0 scale-95"
                                          enterTo="transform opacity-100 scale-100"
                                          leave="transition ease-in duration-75"
                                          leaveFrom="transform opacity-100 scale-100"
                                          leaveTo="transform opacity-0 scale-95"
                                      >
                                          <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                              {userNavigation.map((item) => (
                                                  <Menu.Item key={item.name}>
                                                      {({ active }) => (
                                                          <NavLink
                                                              to={item.href}
                                                              className={classNames(
                                                                  active ? 'bg-gray-100' : '',
                                                                  'block px-4 py-2 text-sm text-gray-700'
                                                              )}
                                                          >
                                                              {item.name}
                                                          </NavLink>
                                                      )} 
                                                  </Menu.Item>
                                              ))}
                                               
                                          </Menu.Items>
                                      </Transition>
                                  </Menu>
                              </div>
                          </div>
                          <div className="-mr-2 flex md:hidden">
                              {/* Mobile menu button */}
                              <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                  <span className="absolute -inset-0.5" />
                                  <span className="sr-only">Open main menu</span>
                                  {open ? (
                                      // <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                      <i class="bi bi-x-lg"></i>
                                  ) : (
                                      
                                          <i class="bi bi-three-dots-vertical"></i>
                                  )}
                              </Disclosure.Button>
                          </div>
                      </div>
                  </div>

                  <Disclosure.Panel className="md:hidden">
                      <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                          {navigation.map((item) => (
                              <Disclosure.Button
                                  key={item.name}
                                  as="NavLink"
                                  to={item.href}
                                  className={classNames(
                                      item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                      'block rounded-md px-3 py-2 text-base font-medium'
                                  )}
                                  aria-current={item.current ? 'page' : undefined}
                              >
                                  {item.name}
                              </Disclosure.Button>
                          ))}
                      </div>
                      <div className="border-t border-gray-700 pb-3 pt-4">
                          <div className="flex items-center px-5">
                              <div className="flex-shrink-0">
                                  <div className="text-white font-bold text-2xl bg-slate-600 flex justify-center items-center p-2 rounded-full">{initials.toUpperCase()}</div>
                              </div>
                              <div className="ml-3 flex flex-col">
                                  <div className="text-base font-medium leading-none text-white">{userInfo.fullname}</div>
                                  <div className="text-sm font-medium leading-none text-gray-400">@{userInfo.email}</div>
                              </div>
                              
                          </div>
                          <div className="mt-3 space-y-1 px-2">
                              {userNavigation.map((item) => (
                                  <Disclosure.Button
                                  
                                      key={item.name}
                                      as="NavLink"
                                      to={item.href}
                                      className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-gray-700 hover:text-white"
                                  >
                                      {item.name}
                                  </Disclosure.Button>
                              ))}
                          </div>
                      </div>
                  </Disclosure.Panel>
              </>
          )}
      </Disclosure>
  )
}

export default DashboardNav