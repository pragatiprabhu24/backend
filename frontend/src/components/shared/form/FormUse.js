import React from "react";
import { useState } from "react";
import { InputField } from "./InputField";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { handleLogin, handleRegister } from "../../../service/AuthService";

const FormUse = ({
  formlabel,
  btntext,
  smalltext1,
  smalltext2,
  formType,
  smalllink,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [name, setName] = useState("");
  const [organisationName, setOrganisationName] = useState("");
  const [hospitalName, setHospitalName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  return (
    <div className="md:flex md:items-center md:justify-center w-full sm:w-auto md:h-full w-2/5 xl:w-2/5 p-8  md:p-10 lg:p-14 sm:rounded-lg md:rounded-none bg-white ">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="text-xl font-bold font-mono text-gray-900">
            {formlabel}
          </h2>
        </div>
        <form
          className="space-y-6"
          onSubmit={(e) => {
            if (formType === "login")
              return handleLogin(e, email, password, role);
            else if (formType === "register")
              return handleRegister(
                e,
                name,
                email,
                password,
                role,
                organisationName,
                hospitalName,
                address,
                phone
              );
          }}
        >
          <Box textAlign="center">
            <FormControl>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="row-radio-buttons-group"
              >
                <FormControlLabel
                  value="admin"
                  control={<Radio />}
                  label="Admin"
                  name="role"
                  onChange={(e) => setRole(e.target.value)}
                />
                <FormControlLabel
                  value="donar"
                  control={<Radio />}
                  label="Donar"
                  name="role"
                  onChange={(e) => setRole(e.target.value)}
                />
                <FormControlLabel
                  value="organisation"
                  control={<Radio />}
                  label="Organisation"
                  name="role"
                  onChange={(e) => setRole(e.target.value)}
                />
                <FormControlLabel
                  value="hospital"
                  control={<Radio />}
                  label="Hospital"
                  name="role"
                  onChange={(e) => setRole(e.target.value)}
                />
              </RadioGroup>
            </FormControl>
          </Box>

          {(() => {
            switch (true) {
              case formType === "login": {
                return (
                  <>
                    <InputField
                      label={"Email"}
                      type={"email"}
                      placeholder={"user@gmail.com"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                      label={"Password"}
                      type={"password"}
                      placeholder={"******"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </>
                );
              }
              case formType === "register": {
                return (
                  <>
                    {(role === "admin" || role === "donar") && (
                      <InputField
                        label={"Name"}
                        type={"text"}
                        placeholder={"John Doe"}
                        name={"name"}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    )}

                    {role === "organisation" && (
                      <InputField
                        label={"Organisation Name"}
                        type={"text"}
                        placeholder={"AIMS"}
                        name={"organisation"}
                        value={organisationName}
                        onChange={(e) => setOrganisationName(e.target.value)}
                      />
                    )}
                    {role === "hospital" && (
                      <InputField
                        label={"Hospital Name"}
                        type={"text"}
                        placeholder={"City hospital"}
                        name={"hospital"}
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                      />
                    )}
                    <InputField
                      label={"Email"}
                      type={"email"}
                      placeholder={"user@gmail.com"}
                      name={"email"}
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />

                    <InputField
                      label={"Password"}
                      type={"password"}
                      placeholder={"******"}
                      name={"password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />

                    <InputField
                      label={"Address"}
                      type={"text"}
                      placeholder={"Delhi India"}
                      name={"address"}
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <InputField
                      label={"Phone Number"}
                      type={"text"}
                      placeholder={"8787878989"}
                      name={"phone"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                    />
                  </>
                );
              }
            }
          })()}

          <div>
            <button
              type="submit"
              className="w-full flex justify-center bg-gradient-to-r from-rose-400 to-rose-700  hover:bg-gradient-to-l hover:from-rose-400 hover:to-rose-700 text-gray-50 p-4  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
            >
              {btntext}
            </button>
          </div>
          <p className="flex flex-col items-center justify-center mt-10 text-center text-md text-gray-500">
            <span>{smalltext1}</span>
            <Link
              to={smalllink}
              className="text-indigo-400 hover:text-blue-500 no-underline hover:underline cursor-pointer transition ease-in duration-300"
            >
              {smalltext2}
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default FormUse;
