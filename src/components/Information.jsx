import React, { useState } from "react";
import Translation from "./Translation";
import Transcription from "./Transcription";

const Information = () => {
  const [tab, setTab] = useState("transcription");

  return (
    <main className="flex-1 p-4 flex flex-col gap-3 text-center sm:gap-4 justify-center pb-20 max-w-prose w-full mx-auto">
      <h1 className="font-semibold text-4xl sm:text-5xl md:text-6xl whitespace-nowrap">
        Your <span className="text-blue-400 bold"> Transcription </span>
      </h1>{" "}
      <div className="grid grid-cols-2 sm:mx-auto bg-white  rounded-full overflow-hidden items-center p-1 blueShadow border-[2px] border-solid border-blue-300">
        <button
          onClick={() => setTab("transcription")}
          className={
            "px-4 rounded-full duration-200 py-1 font-medium " +
            (tab === "transcription"
              ? "bg-blue-300 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Transcription
        </button>
        <button
          onClick={() => setTab("translation")}
          className={
            "px-4 rounded-full duration-200 py-1 font-medium " +
            (tab === "translation"
              ? "bg-blue-300 text-white"
              : "text-blue-400 hover:text-blue-600")
          }
        >
          Translation
        </button>
      </div>
      {tab === "transcription" ? <Transcription /> : <Translation />}
    </main>
  );
};

export default Information;
