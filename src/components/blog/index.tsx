export const Blog = () => {
  return (
    <section
      id="blog"
      className="scroll-mt-16 lg:scroll-mt-24"
      aria-label="Blog posts"
    >
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-orange-100/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0 dark:bg-slate-900/75">
        <h2 className="text-sm font-bold uppercase tracking-widest text-red-900 lg:sr-only dark:text-slate-200">
          Blog
        </h2>
      </div>
      <div>
        <ul className="group/list">
          <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              {/* <img alt="Telescope" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                className="text-transparent z-10 col-span-2 rounded border-2 dark:border-slate-200/10 border-red-900/10 transition group-hover:border-red-900/30 dark:group-hover:border-slate-200/30 sm:col-span-2"
                srcSet="
                    /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=256&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75 2x
                  " src="/_next/image?url=%2Fimages%2Fwriting%2Falgolia-search.jpeg&amp;w=640&amp;q=75" /> */}
              <div className="z-10 col-span-6">
                <p className="-mt-1 text-sm font-semibold leading-6">2020</p>
                <h3 className="-mt-1">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-red-900 hover:text-gray-900 focus-visible:text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                    href="https://upstatement.com/blog/integrating-algolia-search-with-wordpress-multisite/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Integrating Algolia Search with WordPress Multisite (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Integrating Algolia Search with WordPress
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
                </h3>
              </div>
            </div>
          </li>
          <li className="mb-12">
            <div className="group relative grid grid-cols-8 gap-4 transition-all sm:items-center sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
              <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              {/* <img alt="Headless horseamn" loading="lazy" width="200" height="48" decoding="async" data-nimg="1"
                className="text-transparent z-10 col-span-2 rounded border-2 dark:border-slate-200/10 border-red-900/10 transition dark:group-hover:border-slate-200/30 group-hover:border-red-900/30 sm:col-span-2"
                srcSet="
                    /_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=256&amp;q=75 1x,
                    /_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75 2x
                  " src="/_next/image?url=%2Fimages%2Fwriting%2Fheadless.jpeg&amp;w=640&amp;q=75" /> */}
              <div className="z-10 col-span-6">
                <p className="-mt-1 text-sm font-semibold leading-6">2019</p>
                <h3 className="-mt-1">
                  <a
                    className="group/link inline-flex items-baseline text-base font-medium leading-tight text-red-900 hover:text-gray-900 focus-visible:text-gray-900 dark:text-slate-200 dark:hover:text-sky-400 dark:focus-visible:text-sky-400"
                    href="https://upstatement.com/blog/building-a-headless-mobile-app-cms-from-scratch/"
                    target="_blank"
                    rel="noreferrer noopener"
                    aria-label="Building a Headless Mobile App CMS From Scratch (opens in a new tab)"
                  >
                    <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                    <span>
                      Building a Headless Mobile App CMS From
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
                </h3>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}
