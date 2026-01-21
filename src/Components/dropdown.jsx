import React from 'react'

const Dropdown = ({fn}) => {
  return (
    <div className="absolute bg-slate-300 h-fit w-fit p-3 rounded-lg z-10 ml-109 mt-16">
        <ol>
            <li className="hover:bg-slate-500  hover:text-white rounded-lg m-2 "><button className="cursor-pointer p-2" onClick={()=>{
                fn("INR")
            }}>INR</button></li>
            <li className="hover:bg-slate-500  hover:text-white rounded-lg m-2 "><button className="cursor-pointer p-2" onClick={()=>{
                fn("USD")
            }}>USD</button></li>
            <li className="hover:bg-slate-500  hover:text-white rounded-lg m-2 "><button className="cursor-pointer p-2" onClick={()=>{
                fn("AUD")
            }}>AUD</button></li>
            <li className="hover:bg-slate-500 hover:text-white rounded-lg m-2 "><button className="cursor-pointer p-2" onClick={()=>{
                fn("EUR")
            }}>EUR</button></li>
        </ol>
    </div>
  )
}

export default Dropdown