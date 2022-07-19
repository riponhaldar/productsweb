import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
const TextInput = ({
  name,
  error,
  type,
  display,
  touched,
  required,
  hidden,
  ...rest
}) => {
  const [showPass, setshowPass] = useState(type);
  return hidden ? (
    ""
  ) : (
    <>
      <div className="mb-1  ">
        <label htmlFor={name} className="block tracking-wide text-gray-800 text-xs font-bold mb-2">
          {display} {required ? <span className="text-red-500">*</span> : ""}
        </label>

        <div className="relative">
          <input
            className={`  mt-1 w-full p-2 text-sm outline-none rounded focus:placeholder:text-xs  focus:bg-white bg-gray-100     placeholder:text-sm ${
              touched && error
                ? "border-red-600 border-b"
                : "border-gray-400  border-b "
            }  `}
            // className={`w-full outline-none py-2 px-2 dark:text-gray-50  darK:bg-[#171717] rounded-lg bg-transparent placeholder:text-sm ${
            //   touched && error ? "border-purple-600 border-b" : "border-gray-400  border-b "
            // }  `}
            id={name}
            name={name}
            type={showPass}
            {...rest}
          />
          {display == "Password" ? (
            <div
              className="absolute top-3 cursor-pointer right-2"
            >
              {showPass === "text" ? (
                <>
                  <AiOutlineEye onClick={() => setshowPass("password")} className="text-xl" />
                </>
              ) : (
                <>
                  <AiOutlineEyeInvisible  onClick={() => setshowPass("text")} className="text-xl" />
                </>
              )}
            </div>
          ) : (
            ""
          )}
        </div>

        {touched && error && (
          <>
            <p className="text-red-500 mt-1 text-xs italic">{error}</p>
          </>
        )}
      </div>
    </>
  );
};

export { TextInput };
