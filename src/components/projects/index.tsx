export const Projects = () => {
  return (
    <section
      id="projects"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Selected projects"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-orange-100/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 dark:bg-slate-900/75">
        <h2 className="text-sm font-bold uppercase tracking-widest text-red-900 lg:sr-only dark:text-slate-200">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-red-900 hover:text-gray-900 focus-visible:text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                    href="https://www.newline.co/courses/build-a-spotify-connected-app"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Build a Spotify Connected App (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Build a Spotify Connected
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
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Video course that teaches how to build a web app with the
                  Spotify Web API. Topics covered include the principles of REST
                  APIs, user auth flows, Node, Express, React, Styled
                  Components, and more.
                </p>
              </div>
              {/* <img alt="Build a Spotify Connected App Newline course marketing card" loading="lazy" width="200"
                height="48" decoding="async" data-nimg="1"
                className="rounded text-transparent border-2 border-red-900/10 dark:border-slate-200/10 transition group-hover:border-red-900/30 dark:group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                srcSet="
                    /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=256&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75 2x
                  " src="/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&amp;w=640&amp;q=75" /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-red-900 hover:text-gray-900 focus-visible:text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                    href="https://spotify-profile.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Spotify Profile (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Spotify
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
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Web app for visualizing personalized Spotify data. View your
                  top artists, top tracks, recently played tracks, and detailed
                  audio information about each track. Create and save new
                  playlists of recommended tracks based on your existing
                  playlists and more.
                </p>
                <a
                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-gray-900 focus-visible:text-gray-900 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                  href="https://github.com/bchiang7/spotify-profile"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="648 stars on GitHub (opens in a new tab)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-3 w-3"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span>648</span>
                </a>
                <ul
                  className="mt-2 flex flex-wrap"
                  aria-label="Technologies used:"
                >
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-900 dark:text-sky-400">
                      React
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-900 dark:text-sky-400">
                      Express
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="ttext-gray-900 flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 dark:text-sky-400">
                      Spotify API
                    </div>
                  </li>
                  <li className="mr-1.5 mt-2">
                    <div className="flex items-center rounded-full bg-sky-400/10 px-3 py-1 text-xs font-medium leading-5 text-gray-900 dark:text-sky-400">
                      Heroku
                    </div>
                  </li>
                </ul>
              </div>
              {/* <img alt="Spotify Profile app homepage" loading="lazy" width="200" height="48" decoding="async"
                data-nimg="1"
                className="text-transparent rounded border-2 border-red-900/10 dark:border-slate-200/10 transition group-hover:border-red-900/30 dark:group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                srcSet="
                    /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=256&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75 2x
                  " src="/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&amp;w=640&amp;q=75" /> */}
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <div className="z-10 sm:order-2 sm:col-span-6">
                <h3>
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-red-900 hover:text-gray-900 focus-visible:text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                    href="https://halcyon-theme.netlify.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Halcyon Theme (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Halcyon
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
                </h3>
                <p className="mt-2 text-sm leading-normal">
                  Minimal dark blue theme for VS Code, Sublime Text, Atom,
                  iTerm, and more.
                </p>
                <a
                  className="relative mt-2 inline-flex items-center text-sm font-medium text-slate-300 hover:text-gray-900 focus-visible:text-gray-900 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                  href="https://marketplace.visualstudio.com/items?itemName=brittanychiang.halcyon-vscode"
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label="Over 100,000 installs on Visual Studio Code Marketplace (opens in a new tab)"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="mr-1 h-4 w-4"
                    aria-hidden="true"
                  >
                    <path d="M10.75 2.75a.75.75 0 00-1.5 0v8.614L6.295 8.235a.75.75 0 10-1.09 1.03l4.25 4.5a.75.75 0 001.09 0l4.25-4.5a.75.75 0 00-1.09-1.03l-2.955 3.129V2.75z"></path>
                    <path d="M3.5 12.75a.75.75 0 00-1.5 0v2.5A2.75 2.75 0 004.75 18h10.5A2.75 2.75 0 0018 15.25v-2.5a.75.75 0 00-1.5 0v2.5c0 .69-.56 1.25-1.25 1.25H4.75c-.69 0-1.25-.56-1.25-1.25v-2.5z"></path>
                  </svg>
                  <span>100k+ Installs</span>
                </a>
              </div>
              {/* <img alt="Halcyon Theme homepage hero with screenshot of VS Code editor" loading="lazy" width="200"
                height="48" decoding="async" data-nimg="1"
                className="text-transparent rounded border-2 border-red-900/10 dark:border-slate-200/10 transition group-hover:border-red-900/30 dark:group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                srcSet="
                    /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=256&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75 2x
                  " src="/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&amp;w=640&amp;q=75" /> */}
            </div>
          </li>
        </ul>
        <div className="mt-12">
          <a
            className="group inline-flex items-center font-semibold leading-tight text-red-900 dark:text-slate-200"
            aria-label="View Full Project Archive"
            href="/archive"
          >
            <span>
              <span className="border-b border-transparent pb-px transition group-hover:border-gray-900 motion-reduce:transition-none dark:group-hover:border-sky-400">
                View Full Project{' '}
              </span>
              <span className="whitespace-nowrap">
                <span className="border-b border-transparent pb-px transition group-hover:border-gray-900 motion-reduce:transition-none dark:group-hover:border-sky-400">
                  Archive
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-1 inline-block h-4 w-4 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </span>
          </a>
        </div>
      </div>
    </section>
  )
}
