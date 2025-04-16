function GalleryPage() {
  return (
    <div className="relative mx-auto mt-24 max-lg:max-w-2xl">
      <div className="line-y px-4 py-2 sm:px-2">
        <h2 className="max-w-3xl text-3xl font-medium tracking-tight text-pretty md:text-[2.5rem]/14">
          Every pixel designed with intent
        </h2>
        <p className="mt-4 max-w-2xl text-base/7 text-gray-600">
          Not too trendy, not too plain — Catalyst finds the perfect middle
          ground, blending depth, clarity, and motion into an interface that’s
          as intuitive as it is beautiful.
        </p>
      </div>
      <div className="line-y mt-6 px-4 py-2 sm:px-2">
        <a
          href="https://catalyst-demo.tailwindui.com"
          className="gap-2 inline-flex justify-center rounded-full text-sm/6 font-semibold bg-gray-950 text-white hover:bg-gray-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-950 px-4 py-2"
          target="_blank"
        >
          Live preview
          <svg
            fill="currentColor"
            aria-hidden="true"
            viewBox="0 0 10 10"
            className="-mr-0.5 w-2.5"
          >
            <path d="M0 0H3V1H1V9H9V7H10V10H0V0Z"></path>
            <path d="M8.29293 1H5.00004V0H10V5H9.00004V1.70711L4.35359 6.35355L3.64648 5.64645L8.29293 1Z"></path>
          </svg>
        </a>
      </div>

      <label htmlFor="uploadFile1"
      className="bg-white text-slate-500 font-semibold text-base rounded max-w-md h-52 flex flex-col items-center justify-center cursor-pointer border-2 border-gray-300 border-dashed mx-auto">
      <svg xmlns="http://www.w3.org/2000/svg" className="w-11 mb-3 fill-gray-500" viewBox="0 0 32 32">
        <path
          d="M23.75 11.044a7.99 7.99 0 0 0-15.5-.009A8 8 0 0 0 9 27h3a1 1 0 0 0 0-2H9a6 6 0 0 1-.035-12 1.038 1.038 0 0 0 1.1-.854 5.991 5.991 0 0 1 11.862 0A1.08 1.08 0 0 0 23 13a6 6 0 0 1 0 12h-3a1 1 0 0 0 0 2h3a8 8 0 0 0 .75-15.956z"
          data-original="#000000" />
        <path
          d="M20.293 19.707a1 1 0 0 0 1.414-1.414l-5-5a1 1 0 0 0-1.414 0l-5 5a1 1 0 0 0 1.414 1.414L15 16.414V29a1 1 0 0 0 2 0V16.414z"
          data-original="#000000" />
      </svg>
      Upload file

      <input type="file" id='uploadFile1' className="hidden" />
      <p className="text-xs font-medium text-slate-400 mt-2">PNG, JPG SVG, WEBP, and GIF are Allowed.</p>
      </label>
      

      <div className="relative mt-16 lg:mt-20">
        <div className="pointer-events-none absolute inset-0 z-10 grid grid-cols-1 gap-10 max-sm:hidden sm:grid-cols-2 sm:max-md:gap-5 lg:grid-cols-3 xl:grid-cols-4">
          <div className="border-r border-gray-950/5"></div>
          <div className="border-l border-gray-950/5 lg:border-x"></div>
          <div className="border-l border-gray-950/5 max-lg:hidden xl:border-x"></div>
          <div className="border-l border-gray-950/5 max-xl:hidden"></div>
        </div>
        <ul className="grid grid-cols-1 gap-10 sm:grid-cols-2 sm:max-md:gap-x-5 lg:grid-cols-3 xl:grid-cols-4">
          <li className="max-sm:line-y sm:max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
            <a
              className="block transition hover:bg-gray-950/2.5"
              href="https://catalyst.tailwindui.com/docs/button"
              target="_blank"
            >
              <div className="p-2">
                <img
                  src="/plus-assets/img/templates/catalyst/components/button.png"
                  className="aspect-[1062/720] rounded-md outline outline-gray-950/10 sm:rounded-xl lg:rounded-xl"
                  width="1416"
                  height="962"
                  alt=""
                />
              </div>
              <p className="px-4 py-2 text-sm/6 font-medium sm:px-2">Button</p>
            </a>
          </li>
          <li className="max-sm:line-y sm:max-lg:nth-[2n+1]:line-y lg:max-xl:nth-[3n+1]:line-y xl:nth-[4n+1]:line-y">
            <a
              className="block transition hover:bg-gray-950/2.5"
              href="https://catalyst.tailwindui.com/docs/input"
              target="_blank"
            >
              <div className="p-2">
                <img
                  src="/plus-assets/img/templates/catalyst/components/input.png"
                  className="aspect-[1062/720] rounded-md outline outline-gray-950/10 sm:rounded-xl lg:rounded-xl"
                  width="1416"
                  height="962"
                  alt=""
                />
              </div>
              <p className="px-4 py-2 text-sm/6 font-medium sm:px-2">Input</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default GalleryPage;
