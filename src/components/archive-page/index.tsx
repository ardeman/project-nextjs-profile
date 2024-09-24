import { metadata } from '@/data'

export const ArchivePage = () => {
  return (
    <main className="lg:py-24">
      <a
        className="group mb-2 inline-flex items-center font-semibold leading-tight text-sky-300"
        href="/"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="mr-1 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-2"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
            clipRule="evenodd"
          ></path>
        </svg>
        {metadata.title?.toString()}
      </a>
      <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
        All Projects
      </h1>
      {/* <table
        id="content"
        className="mt-12 w-full border-collapse text-left"
      >
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Made at
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 lg:table-cell">
              Built with
            </th>
            <th className="hidden py-4 pr-8 text-sm font-semibold text-slate-200 sm:table-cell">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2023</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Emerson Collective (opens in a new tab)"
                  >
                    <span>
                      Emerson{' '}
                      <span className="inline-block">
                        Collective
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Emerson Collective</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Contentful
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.emersoncollective.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="emersoncollective.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        emersoncollective.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2023</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.hbs.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Harvard Business School Next.js Site (opens in a new tab)"
                  >
                    <span>
                      Harvard Business School Next.js{' '}
                      <span className="inline-block">
                        Site
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Harvard Business School Next.js Site
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Contentful
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.hbs.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="hbs.edu (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        hbs.edu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2022</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>Harvard Business School Design System</span>
                </div>
                <div className="hidden sm:block">
                  Harvard Business School Design System
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Storybook
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2022</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Threadable (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        Threadable
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Threadable</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React Native
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Ruby on Rails
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link text-smfont-medium inline-flex items-baseline leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://apps.apple.com/app/apple-store/id1550995547?pt=122219983&amp;ct=threadablebooks.com%20header&amp;mt=8"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="apps.apple.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        apps.apple.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2022</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.pratt.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Pratt (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        Pratt
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Pratt</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress Multisite
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Gutenberg
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.pratt.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="pratt.edu (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        pratt.edu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2022</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://everytownresearch.org/rankings/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Everytown Gun Law Rankings (opens in a new tab)"
                  >
                    <span>
                      Everytown Gun Law{' '}
                      <span className="inline-block">
                        Rankings
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Everytown Gun Law Rankings
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    PHP
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Airtable API
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://everytownresearch.org/rankings/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="everytownresearch.org/rankings (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        everytownresearch.org/rankings
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2021</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.koala.health/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Koala Health (opens in a new tab)"
                  >
                    <span>
                      Koala{' '}
                      <span className="inline-block">
                        Health
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Koala Health</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Redux Toolkit
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Stripe
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Algolia
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase Auth
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Formik
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Vercel
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.koala.health/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="koala.health (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        koala.health
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2021</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.inquirer.com/sports/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Philadelphia Inquirer Sports Scoreboards (opens in a new tab)"
                  >
                    <span>
                      Philadelphia Inquirer Sports{' '}
                      <span className="inline-block">
                        Scoreboards
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Philadelphia Inquirer Sports Scoreboards
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Stats Perform API
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.inquirer.com/sports/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="inquirer.com/sports (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        inquirer.com/sports
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2021</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.vanderbilt.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Vanderbilt Design System (opens in a new tab)"
                  >
                    <span>
                      Vanderbilt Design{' '}
                      <span className="inline-block">
                        System
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Vanderbilt Design System</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Twig
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Puppy
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.vanderbilt.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="vanderbilt.edu (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        vanderbilt.edu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://toolkit.michelleforboston.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Michelle Wu for Boston Grassroots Toolkit (opens in a new tab)"
                  >
                    <span>
                      Michelle Wu for Boston Grassroots{' '}
                      <span className="inline-block">
                        Toolkit
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Michelle Wu for Boston Grassroots Toolkit
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Gatsby
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Styled Components
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://toolkit.michelleforboston.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="toolkit.michelleforboston.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        toolkit.michelleforboston.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://19thnews.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="The 19th News (opens in a new tab)"
                  >
                    <span>
                      The 19th{' '}
                      <span className="inline-block">
                        News
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">The 19th News</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Gutenberg
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    PHP
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Mailchimp
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    AMP
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://19thnews.org/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="19thnews.org (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        19thnews.org
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>Upstatement’s WordPress Starter Kit</span>
                </div>
                <div className="hidden sm:block">
                  Upstatement’s WordPress Starter Kit
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Gutenberg
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    PHP
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://cssh.northeastern.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Northeastern CSSH (opens in a new tab)"
                  >
                    <span>
                      Northeastern{' '}
                      <span className="inline-block">
                        CSSH
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Northeastern CSSH</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress Multisite
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    PHP
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Algolia
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://cssh.northeastern.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="cssh.northeastern.edu (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        cssh.northeastern.edu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
                  >
                    <span>
                      Integrating Algolia Search with WordPress{' '}
                      <span className="inline-block">
                        Multisite
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Integrating Algolia Search with WordPress Multisite
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Algolia
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    PHP
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://medium.com/stories-from-upstatement/integrating-algolia-search-with-wordpress-multisite-e2dea3ed449c"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="medium.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        medium.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2020</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://time-to-have-more-fun.now.sh/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Time to Have More Fun (opens in a new tab)"
                  >
                    <span>
                      Time to Have More{' '}
                      <span className="inline-block">
                        Fun
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Time to Have More Fun</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Tailwind CSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://time-to-have-more-fun.now.sh/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="time-to-have-more-fun.now.sh (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        time-to-have-more-fun.now.sh
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2019</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.upstatement.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Upstatement.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        Upstatement.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Upstatement.com</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Nuxt
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Vue
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Prismic
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.upstatement.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="upstatement.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        upstatement.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2019</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)"
                  >
                    <span>
                      Building a Headless Mobile App CMS From{' '}
                      <span className="inline-block">
                        Scratch
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Building a Headless Mobile App CMS From Scratch
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Node
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Express
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Vue
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://medium.com/stories-from-upstatement/building-a-headless-mobile-app-cms-from-scratch-bab2d17744d9"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="medium.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        medium.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2019</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.upstatement.com/work/moms-demand-action/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Moms Demand Action Mobile App (opens in a new tab)"
                  >
                    <span>
                      Moms Demand Action Mobile{' '}
                      <span className="inline-block">
                        App
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Moms Demand Action Mobile App
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    NativeScript Vue
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    iOS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Android
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.upstatement.com/work/moms-demand-action/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Case Study (opens in a new tab)"
                  >
                    <span>
                      Case{' '}
                      <span className="inline-block">
                        Study
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2019</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://octoprofile.now.sh"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="OctoProfile (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        OctoProfile
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">OctoProfile</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Next.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Chart.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    GitHub API
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://octoprofile.now.sh"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="octoprofile.now.sh (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        octoprofile.now.sh
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/bchiang7/google-keep-vue-firebase"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Google Keep Clone (opens in a new tab)"
                  >
                    <span>
                      Google Keep{' '}
                      <span className="inline-block">
                        Clone
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Google Keep Clone</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Vue
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/bchiang7/google-keep-vue-firebase"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://spotify-profile.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Spotify Profile (opens in a new tab)"
                  >
                    <span>
                      Spotify{' '}
                      <span className="inline-block">
                        Profile
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Spotify Profile</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Express
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Styled Components
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://spotify-profile.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="spotify-profile.herokuapp.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        spotify-profile.herokuapp.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.devoted.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Devoted Health (opens in a new tab)"
                  >
                    <span>
                      Devoted{' '}
                      <span className="inline-block">
                        Health
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Devoted Health</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Gatsby
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    TypeScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Algolia
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.devoted.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="devoted.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        devoted.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.flagshippioneering.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Flagship Pioneering (opens in a new tab)"
                  >
                    <span>
                      Flagship{' '}
                      <span className="inline-block">
                        Pioneering
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Flagship Pioneering</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Craft CMS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Chart.js
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.flagshippioneering.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="flagshippioneering.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        flagshippioneering.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.npmjs.com/package/@upstatement/eslint-config"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Upstatement ESLint Config (opens in a new tab)"
                  >
                    <span>
                      Upstatement ESLint{' '}
                      <span className="inline-block">
                        Config
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Upstatement ESLint Config</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    ESLint
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.npmjs.com/package/@upstatement/eslint-config"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="npmjs.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        npmjs.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.npmjs.com/package/@upstatement/prettier-config"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Upstatement Prettier Config (opens in a new tab)"
                  >
                    <span>
                      Upstatement Prettier{' '}
                      <span className="inline-block">
                        Config
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Upstatement Prettier Config
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Upstatement
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Prettier
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.npmjs.com/package/@upstatement/prettier-config"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="npmjs.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        npmjs.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>blistabloc</span>
                </div>
                <div className="hidden sm:block">blistabloc</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Scout</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WordPress
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Timber
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    WooCommerce
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2018</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/bchiang7/spotify-top-tracks-2017"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Spotify’s Top Tracks of 2017 (opens in a new tab)"
                  >
                    <span>
                      Spotify’s Top Tracks of{' '}
                      <span className="inline-block">
                        2017
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Spotify’s Top Tracks of 2017
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Northeastern
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    R
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Spotify API
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/bchiang7/spotify-top-tracks-2017"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://halcyon-theme.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Halcyon Theme (opens in a new tab)"
                  >
                    <span>
                      Halcyon{' '}
                      <span className="inline-block">
                        Theme
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Halcyon Theme</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    VS Code
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Sublime Text
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Atom
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    iTerm2
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Hyper
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://halcyon-theme.netlify.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="halcyon-theme.netlify.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        halcyon-theme.netlify.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://developer.apple.com/documentation/musickitjs"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Apple Music - MusicKit JS (opens in a new tab)"
                  >
                    <span>
                      Apple Music - MusicKit{' '}
                      <span className="inline-block">
                        JS
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Apple Music - MusicKit JS</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Apple</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://developer.apple.com/documentation/musickitjs"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="developer.apple.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        developer.apple.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://tools.applemusic.com/en-us"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Apple Music Embeddable Web Player Widget (opens in a new tab)"
                  >
                    <span>
                      Apple Music Embeddable Web Player{' '}
                      <span className="inline-block">
                        Widget
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Apple Music Embeddable Web Player Widget
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Apple</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    MusicKit.js
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://tools.applemusic.com/en-us"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="tools.applemusic.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        tools.applemusic.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Apple Music Facebook Messenger Integration (opens in a new tab)"
                  >
                    <span>
                      Apple Music Facebook Messenger{' '}
                      <span className="inline-block">
                        Integration
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">
                  Apple Music Facebook Messenger Integration
                </div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Apple</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Ember
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://www.theverge.com/2017/10/5/16433770/facebook-messenger-apple-music-bot-song-streaming"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="theverge.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        theverge.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://v3.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Personal Website V3 (opens in a new tab)"
                  >
                    <span>
                      Personal Website{' '}
                      <span className="inline-block">
                        V3
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Personal Website V3</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Jekyll
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://v3.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="v3.brittanychiang.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        v3.brittanychiang.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://interventions.design/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Interventions (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        Interventions
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Interventions</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Scout</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Jekyll
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://interventions.design/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="interventions.design (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        interventions.design
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/bchiang7/CS3200-Project"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Lonely Planet DBMS (opens in a new tab)"
                  >
                    <span>
                      Lonely Planet{' '}
                      <span className="inline-block">
                        DBMS
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Lonely Planet DBMS</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Northeastern
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Python
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    MySQL
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Flask
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/bchiang7/CS3200-Project"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://bchiang7.github.io/Redesign-myNEU/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="myNEU Redesign (opens in a new tab)"
                  >
                    <span>
                      myNEU{' '}
                      <span className="inline-block">
                        Redesign
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">myNEU Redesign</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Northeastern
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Jekyll
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://bchiang7.github.io/Redesign-myNEU/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="bchiang7.github.io/Redesign-myNEU (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        bchiang7.github.io/Redesign-myNEU
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2017</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/crowddj/crowddj-react"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Crowd DJ (opens in a new tab)"
                  >
                    <span>
                      Crowd{' '}
                      <span className="inline-block">
                        DJ
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Crowd DJ</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                HackBeanpot 2017
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Firebase
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Spotify API
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/crowddj/crowddj-react"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://v2.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Personal Website V2 (opens in a new tab)"
                  >
                    <span>
                      Personal Website{' '}
                      <span className="inline-block">
                        V2
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Personal Website V2</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Jekyll
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://v2.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="v2.brittanychiang.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        v2.brittanychiang.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/bchiang7/DemoWebApp"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Weather Widget (opens in a new tab)"
                  >
                    <span>
                      Weather{' '}
                      <span className="inline-block">
                        Widget
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Weather Widget</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Node
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Express
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    EJS
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/bchiang7/DemoWebApp"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Screentime 2.0 (opens in a new tab)"
                  >
                    <span>
                      Screentime{' '}
                      <span className="inline-block">
                        2.0
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Screentime 2.0</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">Starry</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Cordova
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Backbone
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Marionette
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://starry.com/blog/product/whats-new-screentime-just-got-better-for-parents"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="starry.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        starry.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://bchiang7.github.io/react-profile/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="React Profile (opens in a new tab)"
                  >
                    <span>
                      React{' '}
                      <span className="inline-block">
                        Profile
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">React Profile</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    React
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    CSS
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://bchiang7.github.io/react-profile/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="bchiang7.github.io/react-profile (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        bchiang7.github.io/react-profile
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="CourseSource (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        CourseSource
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">CourseSource</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Northeastern
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Angular
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Node
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Express
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    MongoDB
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="flex items-center text-sm text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://github.com/bchiang7/WebDevSpring2016/tree/master/public/project"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="GitHub (opens in a new tab)"
                  >
                    <span>GitHub</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 16 16"
                      fill="currentColor"
                      className="ml-1.5 h-3.5 w-3.5 shrink-0"
                      aria-hidden="true"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://v1.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Personal Website V1 (opens in a new tab)"
                  >
                    <span>
                      Personal Website{' '}
                      <span className="inline-block">
                        V1
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Personal Website V1</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    HTML
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    CSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Bootstrap
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://v1.brittanychiang.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="v1.brittanychiang.com (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        v1.brittanychiang.com
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2016</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="http://bchiang7.github.io/fontipsums/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Fontipsums (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        Fontipsums
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">Fontipsums</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap"></div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    HTML
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="http://bchiang7.github.io/fontipsums/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="bchiang7.github.io/fontipsums (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        bchiang7.github.io/fontipsums
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2015</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-slate-200 hover:text-sky-300 focus-visible:text-sky-300 sm:hidden"
                    href="https://nuwit.ccs.neu.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="NU Women in Tech (opens in a new tab)"
                  >
                    <span>
                      NU Women in{' '}
                      <span className="inline-block">
                        Tech
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-1 inline-block h-4 w-4 shrink-0 translate-y-px transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </div>
                <div className="hidden sm:block">NU Women in Tech</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">
                Northeastern
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Jekyll
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Bootstrap
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell">
              <ul className="translate-y-1">
                <li className="mb-1 flex items-center">
                  <a
                    className="group/link inline-flex items-baseline text-sm font-medium leading-tight text-slate-400 hover:text-sky-300 focus-visible:text-sky-300"
                    href="https://nuwit.ccs.neu.edu/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="nuwit.ccs.neu.edu (opens in a new tab)"
                  >
                    <span>
                      {' '}
                      <span className="inline-block">
                        nuwit.ccs.neu.edu
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          className="ml-0.5 inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                            clipRule="evenodd"
                          ></path>
                        </svg>
                      </span>
                    </span>
                  </a>
                </li>
              </ul>
            </td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2015</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>One Card For All</span>
                </div>
                <div className="hidden sm:block">One Card For All</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">MullenLowe</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    HTML
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    SCSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    jQuery
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
          <tr className="border-b border-slate-300/10 last:border-none">
            <td className="py-4 pr-4 align-top text-sm">
              <div className="translate-y-px">2015</div>
            </td>
            <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
              <div>
                <div className="block sm:hidden">
                  <span>JetBlue HumanKinda</span>
                </div>
                <div className="hidden sm:block">JetBlue HumanKinda</div>
              </div>
            </td>
            <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
              <div className="translate-y-px whitespace-nowrap">MullenLowe</div>
            </td>
            <td className="hidden py-4 pr-4 align-top lg:table-cell">
              <ul className="flex -translate-y-1.5 flex-wrap">
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    Tumblr
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    HTML
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    CSS
                  </div>
                </li>
                <li className="my-1 mr-1.5">
                  <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-sky-300 ">
                    JavaScript
                  </div>
                </li>
              </ul>
            </td>
            <td className="hidden py-4 align-top sm:table-cell"></td>
          </tr>
        </tbody>
      </table> */}
    </main>
  )
}