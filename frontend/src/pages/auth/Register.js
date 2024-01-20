import React from "react";
import "../../asset/style.css"; // Import your Tailwind CSS file
import { InputField } from "../../components/shared/form/InputField";
import FormUse from "../../components/shared/form/FormUse";

export const Register = () => {
  return (
    <div className="relative min-h-screen flex ">
      <div className="flex flex-col sm:flex-row items-center md:items-start sm:justify-center md:justify-start flex-auto min-w-0 bg-white">
        <div
          className="sm:w-1/2 xl:w-2/5 h-full hidden md:flex flex-auto items-center justify-start p-10 overflow-hidden bg-white text-white bg-no-repeat bg-cover relative"
          style={{
            backgroundImage:
              "url(https://advinhealthcare.com/wp-content/uploads/2022/10/Blood-Donation-2.jpg)",
          }}
        >
          <div className="absolute bg-gradient-to-b from-gray-800 to-gray-900 opacity-75 inset-0 z-0" />
          <div
            className="absolute triangle  min-h-screen right-0 w-16"
            style={{}}
          />

          <div className="w-full  max-w-md z-10">
            <div className="sm:text-4xl xl:text-5xl font-bold leading-tight mb-6">
              LifeFlow Connect
            </div>
            <div className="sm:text-sm xl:text-xl text-gray-200 font-semibold">
              {" "}
              <ul style={{ listStyleType: "circle" }}>
                <li>Be the reason for someone's heartbeat. </li>
                <li>A single drop of blood can make a huge difference.</li>
                <li>Stay fit and eat right and donate blood.</li>
                <li>The gift of blood is a gift to someone's life.</li>
                <li>
                  {" "}
                  Donate blood and be the reason for someone's existence.
                </li>
              </ul>
            </div>
          </div>
          {/*-remove custom style*/}
          <ul className="circles">
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
            <li />
          </ul>
        </div>
        <FormUse
          formlabel={"Create an account by providing the required information."}
          btntext={"Sign Up"}
          smalltext1={"Already have an account?"}
          smalltext2={"Sign In"}
          formType={"register"}
          smalllink={'/login'}
        />
      </div>
    </div>
  );
};
