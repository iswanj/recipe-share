import Image from "next/image";

export default function Home() {
  return (
    <div className="realative h-screen flex items-center overflow-x-hidden">
      <div className="container pt-32 max-w-4xl mx-auto w-full h-full flex justify-between flex-col">
        <div className="max-w-sm w-full lg:max-w-full lg:flex">
          <div className="mb-2 border-gray-400 bg-white rounded-lg p-4 flex flex-col justify-between leading-normal">
            <div className="mb-8">
              <div className="text-gray-900 font-bold text-xl mb-2">Hyderabadi Chicken Biryani</div>
              <p className="text-gray-700 text-base">
                Hyderabadi biryani recipe – Making a good Hyderabadi biryani is very simple and this
                recipe is perfect for a home preparation.
              </p>
            </div>
            <div className="flex items-center">
              <div className="text-sm">
                <p className="text-gray-900 leading-none">Jonathan Reinink</p>
                <p className="text-gray-600">Aug 23</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
