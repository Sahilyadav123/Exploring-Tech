import { useState, useCallback, useEffect, useRef, use } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed, SetNum] = useState(false);
  const [charAllowed, SetChar] = useState(false);
  const [passWord, setPassWord] = useState("");
  const [copy,setCopy]=useState(false);


  //!password reference hook

  const passwordRef= useRef(null)
  const passWordGenerator = useCallback(() => {
    let password = "";
    let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789";
    if (numAllowed) {
      string += num;
    }
    if (charAllowed) string += "!@#$%^&*()";
    for (let i = 0; i < length; i++) {
      password += string.charAt(Math.floor(Math.random() * string.length));
    }
    setPassWord(password);
  }, [length, numAllowed, charAllowed, setPassWord]); // if any of element of array changes the usecallback will be called again
  
  const copyPassword = useCallback(() => {
    passwordRef.current?.focus();
    passwordRef.current?.select();
    navigator.clipboard.writeText(passWord);
    setCopy(true);
    setTimeout(() => {
      setCopy(false);
    }, 2000);
  }, [passWord]);
  
  useEffect(() => {
    passWordGenerator();
  }, [passWordGenerator, length, numAllowed, charAllowed]); // if we give password then it will get stuck in infinite loop
  return (
    <>
      <div className="w-full max-w-xl mx-auto  shadow-md rounded-md px-4 py-3 my-8 text-white-600 bg-green-300 text-center">
        <h1 className="text-white text-center text-2xl  ">
          Password Generator
        </h1>
        <div className="flex shadow rounded-md overflow-hidden mb -4 py-2 ">
          <input
            type="text"
            value={passWord}
            className="outline-none w-full py-1 px-1 mx-3 bg-white rounded-sm overflow-hidden"
            placeholder="password"
            readOnly
            ref={passwordRef}
          />
          <button
            onClick={copyPassword}
            className={`px-4 py-2 rounded-md font-medium transition duration-300 ${
        copy ? "bg-green-700 text-red-500" :  "bg-green-500 text-white"
      }`}
          >
            {copy ? "Copied!" : "copy"}
            
          </button>
        </div>
        <div className="flex text-sm gap-x-2 mt-3">
          <div className="flex items-center gap-x-1 w-50">
            <input
              type="range"
              min={8}
              max={100}
              value={length}
              className="cursor-pointer"
              onChange={(e) => {
                setLength(e.target.value);
              }}
            />
            <label className="mt-0.5"> Length:{length}</label>
          </div>
          <div className="flex items-center gap-x-2 ">
            <input
              type="checkbox"
              checked={numAllowed}
              onChange={(e) => {
                SetNum(e.target.checked);
              }}
            />
            <label className="mt-0.5">Numbers</label>
            <input
              type="checkbox"
              checked={charAllowed}
              onChange={(e) => {
                SetChar(e.target.checked);
              }}
            />
            <label className="mt-0.5">Character</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
