'use client'
import React, { useState } from 'react'
import { IoMdArrowDropdown } from 'react-icons/io'
const DropMenue = ({ data, title, Icon }) => {
  const [open, setOpen] = useState(false)
  const [selected, setSelected] = useState(data[0])
  return (
    <div className="inline-block w-40">
      <p className="text-white text-base font-thin mb-2">{title}</p>

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-between w-full gap-2 rounded-lg bg-black/70 px-4 py-2 text-white text-sm hover:bg-black/80 transition"
      >
        <div className="flex items-center gap-2">
          {(selected.name === 'ALL' || selected.name === 'الكل') && <Icon className="text-xl" />}
          <span>{selected.name}</span>
        </div>
        <IoMdArrowDropdown
          className={`transition-transform duration-300 ${open ? 'rotate-180' : 'rotate-0'}`}
        />
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? 'max-h-60 mt-1' : 'max-h-0'
        }`}
      >
        <ul className="bg-black/70 rounded-md shadow-lg ring-1 ring-black/30 py-1">
          {data.map((d, i) => (
            <li
              key={i}
              onClick={() => {
                setSelected(d)
                setOpen(false)
              }}
              className="px-4 py-2 text-white text-sm cursor-pointer hover:bg-white/20 transition flex items-center gap-2"
            >
              {(d.name === 'ALL' || d.name === 'الكل') && <Icon className="text-xl" />}
              {d.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DropMenue
