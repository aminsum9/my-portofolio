'use client'

import {
  PopoverGroup,
} from '@headlessui/react'
import {
  UserIcon
} from '@heroicons/react/24/solid'

export default function Header() {

  return (
    <header className="bg-white fixed w-full">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5 flex row">
            <UserIcon height="30" className="mr-2" />
            <span className="w-24">My Portfolio</span>
          </a>
        </div>
        <div className="flex lg:hidden">
      
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">
          <a href="#introduction" className="text-sm/6 font-semibold text-gray-900">
            Introduction
          </a>
          <a href="#last-education" className="text-sm/6 font-semibold text-gray-900">
            Last Education
          </a>
          <a href="#sertification" className="text-sm/6 font-semibold text-gray-900">
            Sertification
          </a>
          <a href="#experiences" className="text-sm/6 font-semibold text-gray-900">
            Experiences
          </a>
          <a href="#skills" className="text-sm/6 font-semibold text-gray-900">
            Skills
          </a>
          <a href="#portfolio" className="text-sm/6 font-semibold text-gray-900">
            Portfolio
          </a>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          
        </div>
      </nav>
    </header>
  )
}
