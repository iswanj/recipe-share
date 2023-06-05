import { FC } from "react";
import type { Metadata } from "next";

interface pageProps {}

export const metadata: Metadata = {
  title: "Recipe Page",
  description: "Recipe details goes here",
};

const page: FC<pageProps> = ({}) => {
  return (
    <div className="realative h-screen flex items-center overflow-x-hidden">
      <div className="container pt-32 max-w-4xl mx-auto w-full h-full flex justify-between flex-col">
        <p>Recipe page</p>
      </div>
    </div>
  );
};

export default page;
