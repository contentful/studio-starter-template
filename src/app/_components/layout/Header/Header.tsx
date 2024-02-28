'use client';

import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import {
  Bars3Icon,
  UserCircleIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

const navigation = [
  { name: 'Product', href: '#' },
  { name: 'Features', href: '#' },
  { name: 'Marketplace', href: '#' },
  { name: 'Company', href: '#' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav className="container flex items-center py-5" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Studio Starter Template</span>
            <svg
              width="50"
              viewBox="0 0 279 272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M182.01 128.481V8.57436C182.01 4.314 178.549 0.860291 174.28 0.860291L104.029 0.860291C99.7596 0.860291 96.2986 4.314 96.2986 8.57436L96.2986 128.481C96.2986 132.741 99.7596 136.195 104.029 136.195H174.28C178.549 136.195 182.01 132.741 182.01 128.481Z"
                fill="url(#paint0_linear_1_21)"
              />
              <path
                d="M166.871 169.633L270.666 109.706C274.354 107.577 275.618 102.861 273.489 99.1735L238.453 38.4894C236.324 34.8014 231.608 33.5379 227.92 35.6671L124.124 95.5935C120.436 97.7227 119.173 102.438 121.302 106.126L156.338 166.81C158.467 170.498 163.183 171.762 166.871 169.633Z"
                fill="url(#paint1_linear_1_21)"
              />
              <path
                d="M125.78 176.814L229.576 236.74C233.264 238.869 237.979 237.606 240.109 233.918L275.145 173.234C277.274 169.546 276.01 164.83 272.322 162.701L168.527 102.774C164.839 100.645 160.123 101.909 157.994 105.597L122.958 166.281C120.829 169.969 122.092 174.684 125.78 176.814Z"
                fill="url(#paint2_linear_1_21)"
              />
              <path
                d="M96.2986 143.909L96.2986 263.815C96.2986 268.075 99.7596 271.529 104.029 271.529H174.28C178.549 271.529 182.01 268.075 182.01 263.815V143.909C182.01 139.648 178.549 136.195 174.28 136.195H104.029C99.7596 136.195 96.2986 139.648 96.2986 143.909Z"
                fill="url(#paint3_linear_1_21)"
              />
              <path
                d="M111.024 104.18L7.22801 164.106C3.54007 166.235 2.2765 170.951 4.40573 174.639L39.4417 235.323C41.5709 239.011 46.2867 240.275 49.9746 238.146L153.77 178.219C157.458 176.09 158.722 171.374 156.592 167.686L121.556 107.002C119.427 103.314 114.712 102.051 111.024 104.18Z"
                fill="url(#paint4_linear_1_21)"
              />
              <path
                d="M9.61816 108.24L113.414 168.166C117.102 170.296 121.817 169.032 123.947 165.344L158.983 104.66C161.112 100.972 159.848 96.2564 156.16 94.1271L52.3647 34.2007C48.6768 32.0715 43.9611 33.3351 41.8318 37.023L6.79588 97.7071C4.66665 101.395 5.93022 106.111 9.61816 108.24Z"
                fill="url(#paint5_linear_1_21)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_21"
                  x1="139.155"
                  y1="0.995625"
                  x2="139.155"
                  y2="135.247"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FC7575" />
                  <stop offset="1" stopColor="#FF8888" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_1_21"
                  x1="138.82"
                  y1="136.468"
                  x2="252.456"
                  y2="70.8605"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFB78F" />
                  <stop offset="1" stopColor="#FCA87E" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_1_21"
                  x1="257.978"
                  y1="203.779"
                  x2="143.522"
                  y2="137.697"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#FFC969" />
                  <stop offset="1" stopColor="#FFD47D" />
                </linearGradient>
                <linearGradient
                  id="paint3_linear_1_21"
                  x1="139.019"
                  y1="271.935"
                  x2="139.019"
                  y2="136.601"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#58C484" />
                  <stop offset="1" stopColor="#68DA9A" />
                </linearGradient>
                <linearGradient
                  id="paint4_linear_1_21"
                  x1="21.5046"
                  y1="205.067"
                  x2="136.312"
                  y2="138.783"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#73A8C6" />
                  <stop offset="1" stopColor="#8DBAD8" />
                </linearGradient>
                <linearGradient
                  id="paint5_linear_1_21"
                  x1="142.519"
                  y1="135.611"
                  x2="27.3598"
                  y2="69.1236"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#AB8ACE" />
                  <stop offset="1" stopColor="#BF9EDB" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>
        <div className="flex lg:hidden ml-auto">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary-500 transition-all"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <UserCircleIcon width={25} className="stroke-primary-400" />
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/">
              <span className="sr-only">Studio Starter Template</span>
              <svg
                width="50"
                viewBox="0 0 279 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M182.01 128.481V8.57436C182.01 4.314 178.549 0.860291 174.28 0.860291L104.029 0.860291C99.7596 0.860291 96.2986 4.314 96.2986 8.57436L96.2986 128.481C96.2986 132.741 99.7596 136.195 104.029 136.195H174.28C178.549 136.195 182.01 132.741 182.01 128.481Z"
                  fill="url(#paint0_linear_1_21)"
                />
                <path
                  d="M166.871 169.633L270.666 109.706C274.354 107.577 275.618 102.861 273.489 99.1735L238.453 38.4894C236.324 34.8014 231.608 33.5379 227.92 35.6671L124.124 95.5935C120.436 97.7227 119.173 102.438 121.302 106.126L156.338 166.81C158.467 170.498 163.183 171.762 166.871 169.633Z"
                  fill="url(#paint1_linear_1_21)"
                />
                <path
                  d="M125.78 176.814L229.576 236.74C233.264 238.869 237.979 237.606 240.109 233.918L275.145 173.234C277.274 169.546 276.01 164.83 272.322 162.701L168.527 102.774C164.839 100.645 160.123 101.909 157.994 105.597L122.958 166.281C120.829 169.969 122.092 174.684 125.78 176.814Z"
                  fill="url(#paint2_linear_1_21)"
                />
                <path
                  d="M96.2986 143.909L96.2986 263.815C96.2986 268.075 99.7596 271.529 104.029 271.529H174.28C178.549 271.529 182.01 268.075 182.01 263.815V143.909C182.01 139.648 178.549 136.195 174.28 136.195H104.029C99.7596 136.195 96.2986 139.648 96.2986 143.909Z"
                  fill="url(#paint3_linear_1_21)"
                />
                <path
                  d="M111.024 104.18L7.22801 164.106C3.54007 166.235 2.2765 170.951 4.40573 174.639L39.4417 235.323C41.5709 239.011 46.2867 240.275 49.9746 238.146L153.77 178.219C157.458 176.09 158.722 171.374 156.592 167.686L121.556 107.002C119.427 103.314 114.712 102.051 111.024 104.18Z"
                  fill="url(#paint4_linear_1_21)"
                />
                <path
                  d="M9.61816 108.24L113.414 168.166C117.102 170.296 121.817 169.032 123.947 165.344L158.983 104.66C161.112 100.972 159.848 96.2564 156.16 94.1271L52.3647 34.2007C48.6768 32.0715 43.9611 33.3351 41.8318 37.023L6.79588 97.7071C4.66665 101.395 5.93022 106.111 9.61816 108.24Z"
                  fill="url(#paint5_linear_1_21)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_1_21"
                    x1="139.155"
                    y1="0.995625"
                    x2="139.155"
                    y2="135.247"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FC7575" />
                    <stop offset="1" stopColor="#FF8888" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_1_21"
                    x1="138.82"
                    y1="136.468"
                    x2="252.456"
                    y2="70.8605"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFB78F" />
                    <stop offset="1" stopColor="#FCA87E" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_1_21"
                    x1="257.978"
                    y1="203.779"
                    x2="143.522"
                    y2="137.697"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#FFC969" />
                    <stop offset="1" stopColor="#FFD47D" />
                  </linearGradient>
                  <linearGradient
                    id="paint3_linear_1_21"
                    x1="139.019"
                    y1="271.935"
                    x2="139.019"
                    y2="136.601"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#58C484" />
                    <stop offset="1" stopColor="#68DA9A" />
                  </linearGradient>
                  <linearGradient
                    id="paint4_linear_1_21"
                    x1="21.5046"
                    y1="205.067"
                    x2="136.312"
                    y2="138.783"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#73A8C6" />
                    <stop offset="1" stopColor="#8DBAD8" />
                  </linearGradient>
                  <linearGradient
                    id="paint5_linear_1_21"
                    x1="142.519"
                    y1="135.611"
                    x2="27.3598"
                    y2="69.1236"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#AB8ACE" />
                    <stop offset="1" stopColor="#BF9EDB" />
                  </linearGradient>
                </defs>
              </svg>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <UserCircleIcon width={25} className="stroke-primary-400" />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
