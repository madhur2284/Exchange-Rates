import React, {useState, useEffect} from 'react'
import { CgArrowsExchangeV } from "react-icons/cg";
import { IoMdArrowDropdown } from "react-icons/io";
import Dropdown from './Components/dropdown'




const App = () => {
  let [fromValue, setFromValue] = useState("");
  let [toValue, setToValue] = useState("");
  let [exchangeRate, setExchangeRate] = useState("");
  let [fromCurrency, setFromCurrency] = useState("EUR");
  let [toCurrency, setToCurrency] = useState("INR");
  let [showHide1, setShowHide1] = useState(false);
  let [showHide2, setShowHide2] = useState(false);

  let func = async ()=>{
    let res = await fetch(`https://api.frankfurter.dev/v1/latest?base=${fromCurrency}&symbols=${toCurrency}`);
    let data = await res.json();
    let rate = await (data.rates[toCurrency]);
    setExchangeRate(rate);
  }

  let change = useEffect(()=>{

  }, [fromCurrency, toCurrency]);

  useEffect(()=>{
    if(fromValue && exchangeRate){
      setToValue(fromValue*exchangeRate);
    }
  }, [fromValue, exchangeRate]);

  return (
    <div className="h-screen w-full bg-[url(/pexels-arturoaez225-30268012.jpg)] bg-cover bg-center flex justify-center items-center">
      <div className="bg-white/10 backdrop-blur-xs gap-2 rounded-lg shadow-xl p-6 border border-white/20 h-100 w-150  flex flex-col justify-center items-center">
        <div className="bg-white w-135 h-40 rounded-lg shadow-xl flex flex-col justify-center items-center gap-5 relative">
          <div className="flex justify-between w-135 pl-4 text-slate-500 px-5 relative">
            <h3>From</h3>
            <h3>Currency Type</h3>
          </div>
          <div className="flex justify-between w-135 px-5 relative">
            <input type="text" placeholder="From" value={fromValue} className="relative" onChange={(e)=>{
              setFromValue(e.target.value);
            }}></input>
            <button className="rounded-lg cursor-pointer bg-slate-300 p-2 hover:bg-slate-500 hover:text-white relative w-20"onClick={()=>{
              setShowHide1(prev => !prev);
            }}>{fromCurrency} <IoMdArrowDropdown /></button>
            {showHide1 && <Dropdown  fn={setFromCurrency}/>}
          </div>
        </div>
        <button className="bg-blue-500 h-10 w-10 mb-18 flex justify-center items-center rounded-lg cursor-pointer hover:bg-blue-900 hover:text-white absolute z-40" onClick={()=>{
          let str = fromCurrency;
          setFromCurrency(toCurrency);
          setToCurrency(str);
        }}><CgArrowsExchangeV /></button>
        <div className="bg-white w-135 h-40 rounded-lg shadow-xl flex flex-col justify-center items-center gap-5 relative">
          <div className="flex justify-between w-135 pl-4 text-slate-500 px-5 relative">
            <h3>To</h3>
            <h3>Currency Type</h3>
          </div>
          <div className="flex justify-between w-135 px-5 relative">
            <input type="text" placeholder="To" value={toValue} className="relative" readOnly></input>
            <button className="rounded-lg cursor-pointer bg-slate-300 p-2 hover:bg-slate-500 hover:text-white relative w-20" onClick={()=>{
              setShowHide2(prev => !prev);
            }}>
              {toCurrency} <IoMdArrowDropdown />
            </button>
            {showHide2 && <Dropdown  fn={setToCurrency}/>}
          </div>
        </div>
        <button className="bg-blue-500 h-15 w-135 flex justify-center items-center rounded-lg cursor-pointer hover:bg-blue-900 hover:text-white" onClick={()=>{
          func();
        }}>Convert from {fromCurrency} to {toCurrency}</button>
      </div>
    </div>
  )
}

export default App;