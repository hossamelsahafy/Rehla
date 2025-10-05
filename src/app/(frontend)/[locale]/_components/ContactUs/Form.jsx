'use client'
import React, { useState } from 'react'
const Form = ({ form, buttons, submit, market, s, m, locale }) => {
  const [selected, setSelected] = useState(null)
  const [selectedMarket, setSelectedMarket] = useState(null)

  const handleSelect = (i) => {
    setSelected(i)
  }
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-20 justify-center items-center lg:items-start lg:justify-between w-full">
        <div className="flex flex-col  justify-start items-start mt-20 text-white">
          <div className="font-jost text-2xl lg:text-4xl cursor-pointer whitespace-nowrap">
            {buttons.map((b, i) => (
              <p
                key={i}
                onClick={() => handleSelect(i)}
                className={`${selected === i ? 'text-white font-playfair italic transition-all duration-300' : 'text-white/50 hover:text-white/80 transition-all duration-100'} my-4`}
              >
                {b.name}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-16  text-white w-full py-10 px-4">
          <div className="uppercase futura text-lg max-sm:text-sm leading-[28.16px] font-medium text-white/70 w-full max-w-2xl">
            {Object.entries(form).map(([key, label]) => (
              <div
                key={key}
                className="flex flex-col justify-center items-start w-full mb-5 sm:mb-6"
              >
                <label htmlFor={key} className="mb-2 tracking-wide text-white/70 text-xl lg:2xl">
                  {label}*
                </label>
                <input
                  required
                  id={key}
                  name={key}
                  className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/30 focus:outline-none transition-all ease-in-out duration-300 py-2
                focus:border-image-slice-[1] border-gradient-focus focus:border-b-2 "
                />
              </div>
            ))}
            <div className="lg:hidden flex flex-col items-start">
              <label className="mb-2 tracking-wide text-white/70  text-xl lg:2xl">{m}</label>
              <input
                required
                className="w-full bg-transparent border-b-2 border-white/30 text-white placeholder-white/30 focus:outline-none transition-all ease-in-out duration-300 py-2
              focus:border-image-slice-[1] border-gradient-focus focus:border-b-2 "
              />
            </div>
          </div>
        </div>

        <div className="flex flex-col mb-10 lg:mt-24 justify-center items-start text-white whitespace-nowrap">
          <p className="uppercase font-jost text-xl lg:text-2xl max-sm:text-sm leading-[160%] font-medium text-white mb-6">
            {s}
          </p>

          <div className="max-w-4xl max-h-48 flex flex-row flex-wrap gap-6 mb-6">
            {Object.entries(market).map(([key, label]) => (
              <div
                key={key}
                onClick={() => setSelectedMarket(key)}
                className={`flex items-center gap-2 cursor-pointer transition-all duration-300 ${
                  selectedMarket === key ? 'text-[#D4FF66]' : 'text-white/70 hover:text-white'
                }`}
              >
                {selectedMarket === key && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="19"
                    viewBox="0 0 18 19"
                    fill="none"
                  >
                    <path
                      d="M2.63863 11.919L2.05226 12.9506L7.43658 16.9901L8.78274 15.1939L2.63863 11.919Z"
                      fill="#D4FF66"
                      stroke="#D4FF66"
                      strokeWidth="1.67709"
                    ></path>
                    <path
                      d="M10.578 12.9535L8.78314 12.0561L14.0196 1.53954L16.1016 1.42545L10.578 12.9535Z"
                      fill="#D4FF66"
                      stroke="#D4FF66"
                      strokeWidth="1.67709"
                    ></path>
                  </svg>
                )}
                <p className="text-lg  font-jost whitespace-nowrap">{label}</p>
              </div>
            ))}
          </div>

          <div className="hidden lg:flex flex-3 flex-col mt-10 w-full h-full">
            <p
              className={`uppercase ${locale === 'en' ? 'text-left ' : 'text-right'} font-jost text-xl lg:text-2xl leading-[28.16px] font-medium text-white/70 group-focus-within:text-white`}
            >
              {m}
            </p>
            <textarea
              rows={15}
              className="w-full my-2 bg-transparent border-b-2 border-white/30 text-white placeholder-white/30 
            focus:outline-none transition-all ease-in-out duration-300 py-2
            focus:border-image-slice-[1] border-gradient-focus focus:border-b-2 "
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center my-10">
        <button
          type="submit"
          className="flex items-center justify-center gap-2 
            bg-transparent text-white uppercase font-jost text-lg font-medium
            border border-white rounded-full px-6 py-3 cursor-pointer
            transition-all duration-300 hover:bg-white hover:text-black"
        >
          {submit}
          <svg
            width="14.32"
            height="15"
            viewBox="0 0 21 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="lg:w-[21px] lg:h-[22px]"
          >
            <path
              d="M6.54168 10.023L2.5004 3H6.18786L10.2725 10.023H8.50624L6.18786 18H2.5004L4.77497 10.023H6.54168Z"
              fill="#B6FE00"
              stroke="white"
              strokeWidth="0.5"
            ></path>
            <path
              d="M14.7692 10.023L10.7279 3H14.4154L18.5 10.023H16.7338L14.4154 18H10.7279L13.0025 10.023H14.7692Z"
              fill="#B6FE00"
              stroke="white"
              strokeWidth="0.5"
            ></path>
          </svg>
        </button>
      </div>
    </>
  )
}

export default Form
