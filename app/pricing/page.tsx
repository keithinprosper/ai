import Link from "next/link";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center justify-center my-20">
      <div
        className="text-7xl text-center font-bold pb-4 text-gradient bg-gradient-to-l from-orange-700 to-red-400
        max-w-4xl bg-clip-text text-transparent"
      >
        Premium quality without the premium price.
      </div>
      <div className="text-center text-xl font-medium text-slate-700 px-10 mt-4 max-w-4xl tracking-wider">
        Update your LinkedIn profile picture, boost your job application rate,
        or upgrade your company's website with our tailored AI headshot plans.
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-4 lg:gap-6 mt-16 mb-12">
        {/* Starter Plan */}
        <div className="relative mx-auto h-full w-full max-w-lg rounded-lg border bg-white p-12 border-black/[0.08]">
          <div className="flex h-full flex-col px-6">
            <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
              Starter
            </div>
            <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
              <span className="line-through text-[2.5rem] opacity-20">$59</span>
              <span className="mt-1">$35</span>
            </div>
            <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
              <li className="text-black/70">
                📸 <b>20</b> high-quality headshots
              </li>
              <li className="text-black/70">
                ⏱️ <b>2</b>-hour processing time
              </li>
              <li className="text-black/70">
                👕 <b>5</b> outfits and backgrounds
              </li>
              <li className="text-black/70">
                🕺 <b>5</b> poses
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/login">
                <button className="flex w-[250px] justify-center items-center bg-orange-700 hover:bg-orange-800 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                  Buy Starter
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Basic Plan */}
        <div className="relative mx-auto h-full w-full max-w-lg rounded-lg p-[2px] bg-gradient-to-l from-orange-700 to-red-400">
          <div className="flex flex-col h-full w-full rounded-lg bg-white p-12">
            <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-orange-500 bg-white px-4 py-1 text-sm font-semibold shadow-md">
              <span className="text-gradient bg-gradient-to-l from-orange-700 to-red-400 bg-clip-text text-transparent">
                90% pick this plan
              </span>
            </div>
            <div className="flex h-full flex-col">
              <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
                Basic
              </div>
              <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
                <span className="line-through text-[2.5rem] opacity-20">
                  $79
                </span>
                <span className="mt-1 text-gradient bg-gradient-to-l from-orange-700 to-red-400 bg-clip-text text-transparent">
                  $45
                </span>
              </div>
              <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
                <li className="text-black/70">
                  📸 <b>60</b> high-quality headshots
                </li>
                <li className="text-black/70">
                  ⏱️ <b>1</b>-hour processing time
                </li>
                <li className="text-black/70">
                  👕 <b>20</b> outfits and backgrounds
                </li>
                <li className="text-black/70">
                  🕺 <b>20</b> poses
                </li>
              </ul>
              <div className="flex justify-center">
                <Link href="/login">
                  <button className="flex w-[250px] justify-center items-center bg-gradient-to-l from-orange-700 to-red-400 hover:from-orange-800 hover:to-red-500 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                    Buy Basic
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Premium Plan */}
        <div className="relative mx-auto h-full w-full max-w-lg rounded-lg border bg-white p-12 border-black/[0.08]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full border bg-white px-4 py-1 text-sm shadow-md font-semibold border-black/[0.08]">
            <span className="text-[#ee3f87]">Best Value</span>
          </div>
          <div className="flex h-full flex-col">
            <div className="uppercase text-center tracking-wider mb-1 text-base text-black/50">
              Premium
            </div>
            <div className="flex flex-col text-center text-[4rem] font-extrabold leading-none tracking-tight lg:text-[4.5rem]">
              <span className="line-through text-[2.5rem] opacity-20">
                $129
              </span>
              <span className="mt-1">$75</span>
            </div>
            <ul className="flex-grow flex flex-col gap-3 pt-9 pb-10">
              <li className="text-black/70">
                📸 <b>100</b> high-quality headshots
              </li>
              <li className="text-black/70">
                ⏱️ <b>30</b>-min processing time
              </li>
              <li className="text-black/70">
                👕 <b>40</b> outfits and backgrounds
              </li>
              <li className="text-black/70">
                🕺 <b>40</b> poses
              </li>
            </ul>
            <div className="flex justify-center">
              <Link href="/login">
                <button className="flex w-[250px] justify-center items-center bg-orange-700 hover:bg-orange-800 font-medium text-white px-14 py-3 rounded-xl text-lg transition tracking-wider">
                  Buy Premium
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
