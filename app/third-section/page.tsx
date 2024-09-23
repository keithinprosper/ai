import Image from "next/image";

const ThirdSection = () => {
  return (
    <div className="flex p-10 flex-col md:flex-row md:justify-evenly">
      <div className="flex-col md:flex-row gap-6 md:px-10 flex">
        <div className="md:w-2/3 w-full">
          <video className="rounded-xl" autoPlay muted loop preload="none">
            <source src="/content/video-3.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="flex-col border p-4 rounded-xl md:w-2/5">
          <div
            className="text-4xl flex justify-center text-center 
                md:text-6xl
                bg-gradient-to-r
                from-yellow-300
                to-blue-300
                bg-clip-text
                text-transparent
                font-bold
                "
          >
            Fully Customizable AI Headshots.
          </div>
          <div className="md:px-20 space-y-6 flex-col items-center justify-center">
            <div className="text-lg pt-10 items-center flex gap-5">
              <Image
                src="/images/icon-store.png"
                width={70}
                height={70}
                alt="feature-1"
              />
              <div className="flex flex-col gap-2">
                Choose from a variety of AI generated headshots.
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-product.png"
                  width={70}
                  height={70}
                  alt="feature-2"
                />
                <div>Customize your headshot with our AI editor.</div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-analytics.png"
                  width={70}
                  height={70}
                  alt="feature-2"
                />
                <div>Gain valuable feedback by using our AI headshots.</div>
              </div>
            </div>

            <div className="flex-col">
              <div className="text-lg flex items-center gap-5">
                <Image
                  src="/images/icon-shield.png"
                  width={70}
                  height={70}
                  alt="feature-2"
                />
                <div>Best in class AI to generate your AI headshots.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThirdSection;
