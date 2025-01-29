// import { useState, useCallback, useEffect, useRef } from "react";

// function App() {
//   const [length, setLength] = useState(8);
//   const [numberAllowed, setnumberAllowed] = useState(false);
//   const [charAllowed, setcharAllowed] = useState(false);
//   const [Password, setPassword] = useState("");

//   //useRef hook
//   const passwordRef = useRef(null);

//   const passwordGenerator = useCallback(() => {
//     let pass = "";
//     let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
//     if (numberAllowed) {
//       str += "0123456789";
//     }
//     if (charAllowed) str += "!@#$%^&*()_-=+{}[]~";
//     for (let i = 0; i < length; i++) {
//       let char = Math.floor(Math.random() * str.length + 1);
//       pass += str.charAt(char);
//     }
//     setPassword(pass);
//   }, [length, numberAllowed, charAllowed, setPassword]);

//   const copyPasswordToClipboard = useCallback(() => {
//     passwordRef.current?.select()
//     passwordRef.current?.setSelectionRange(0,100);
//     window.navigator.clipboard.writeText(Password);
//   }, [Password]);

//   useEffect(() => {
//     passwordGenerator();
//   }, [length, numberAllowed, charAllowed, passwordGenerator]);

//   return (
//     <>
//       <div className="W-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-white">
//         <h1 className="text-white text-center">Password</h1>
//         <div className="flex shadow rounded-lg overflow-hidden mb-4">
//           <input
//             type="text"
//             value={Password}
//             className=" outline-none w-full py-1 px-3 bg-white"
//             placeholder="password"
//             readOnly
//             ref={passwordRef}
//           />
//           <button
//             onClick={copyPasswordToClipboard}
//             className="outline-none bg-blue-700 text-white
//           px-3 py-0.5 shrink-0"
//           >
//             Copy
//           </button>
//         </div>
//         <div className="flex text-sm gap-x-2">
//           <div className="flex items-center gap-x-1">
//             <input
//               type="range"
//               min={6}
//               max={100}
//               value={length}
//               className="cursor-pointer"
//               onChange={(e) => {
//                 setLength(e.target.value);
//               }}
//             />
//             <label>Length:{length}</label>
//           </div>
//           <div className="flex item-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="numberInput"
//               onChange={() => {
//                 setnumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="numberInput">Number</label>
//           </div>
//           <div className="flex item-center gap-x-1">
//             <input
//               type="checkbox"
//               defaultChecked={numberAllowed}
//               id="CharacterInput"
//               onChange={() => {
//                 setnumberAllowed((prev) => !prev);
//               }}
//             />
//             <label htmlFor="CharacterInput">Character</label>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useState, useCallback, useEffect, useRef } from "react";

function App() {

  //to manage all the state change 

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*()_-=+{}[]~";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

//the function use window to copy the genrated password 

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-black-500 to-black-600">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 text-gray-800">
        <h1 className="text-2xl font-bold text-center text-indigo-600 mb-4">Password Generator</h1>
        <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden mb-4">
          <input
            type="text"
            value={password}
            readOnly
            ref={passwordRef}
            className="w-full px-3 py-2 text-lg bg-gray-100 outline-none"
          />
          <button
            onClick={copyPasswordToClipboard}
            className="px-4 py-2 bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition-all"
          >
            Copy
          </button>
        </div>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <label className="text-lg font-medium">Length: {length}</label>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-2/3 cursor-pointer"
            />
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={numberAllowed}
                onChange={() => setNumberAllowed((prev) => !prev)}
                className="w-5 h-5 cursor-pointer"
              />
              <label className="text-lg">Include Numbers</label>
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={charAllowed}
                onChange={() => setCharAllowed((prev) => !prev)}
                className="w-5 h-5 cursor-pointer"
              />
              <label className="text-lg">Include Symbols</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

