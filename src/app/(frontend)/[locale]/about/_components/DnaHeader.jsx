import React from 'react'

const DnaHeader = ({ title, span }) => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 justify-center sm:justify-start">
      <svg
        width="88"
        height="85"
        viewBox="0 0 88 85"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M51.1832 64.7452H43.9652L51.8753 50.3525L59.1779 50.3525L51.1832 64.7452ZM51.0896 33.8906L43.8716 33.8906L48.4359 50.3507L55.7385 50.3507L51.0896 33.8906Z"
          fill="#7272FD"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M43.2665 19.8672H36.0484L28.0537 34.2599H31.4938L36.142 50.7179H39.3632L31.6534 64.7461H38.8715L46.8662 50.3534H43.259L43.2585 50.3516H43.4267L38.7779 33.8915H35.5588L43.2665 19.8672Z"
          fill="#CC4221"
        ></path>
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M24.3599 20H31.578L23.669 34.3906H27.1073L31.6716 50.8507H24.4535L19.8053 34.3927H16.3652L24.3599 20Z"
          fill="#CDB2F9"
        ></path>
      </svg>

      <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
        <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl italic font-semibold leading-tight md:leading-[105px] text-TextColor">
          {title}
        </p>
        <p className="text-TextColor lg:-mt-4">{span}</p>
      </div>
    </div>
  )
}

export default DnaHeader
