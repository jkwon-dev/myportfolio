import React from "react";
import Jeju from "../../src/assets/images/jejumarket2.png";
import rn1 from "../../src/assets/images/rn1.png";
import rn2 from "../../src/assets/images/rn2.png";

const BUTTON_CSS =
  "text-3xl text-white rounded-lg bg-primary p-4 mr-2 ml-2 mt-4 hover:scale-105";

export default function Mydemo() {
  const oepnJeju = () => {
    window.open("https://steady-tapioca-22ffb6.netlify.app/");
  };
  return (
    <div>
      <h2 className="text-3xl mx-2 my-6 font-bold">Jeju Market</h2>
      <div>
        <div className="container">
          {/* 비디오, 스크린샷*/}
          <div className="flex">
            <img className="w-80" src={Jeju} alt="screenshot1" />
            <img
              className="w-60 mx-4 rounded-2xl"
              src={rn1}
              alt="screenshot2"
            />
            <img className="w-60 rounded-2xl" src={rn2} alt="screenshot3" />
          </div>

          <div className="text-3xl mt-4">
            <p>
              • Utilized React and React Native to develop features and
              functionality
            </p>
            <p>
              • Implemented REST APIs and SDK to connect the application to the
              backend services(Firebase)
            </p>
            <p>• Firebase(Auth, Realtime Database)</p>
            <p>• Optimized data fetching using React Query</p>
            <p>• Managed state data using the Context API</p>
            <button className={BUTTON_CSS} onClick={oepnJeju}>
              Go to website
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
