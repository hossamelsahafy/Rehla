'use client'
import React from 'react'
import { useTranslations } from 'next-intl'
import { useParams } from 'next/navigation'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useRef, useState } from 'react'
function escapeRegExp(str = '') {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

const HighlightText = ({ text, highlights = [] }) => {
  if (!text) return null
  if (!highlights.length) return <p>{text}</p>

  const pattern = highlights.map(escapeRegExp).join('|')
  const regex = new RegExp(`(${pattern})`, 'gi')
  const parts = text.split(regex)

  return (
    <p>
      {parts.map((part, i) => {
        const isHighlight = highlights.some((h) => part.toLowerCase() === h.toLowerCase())
        const isLast = i === parts.length - 1

        if (isHighlight) {
          return (
            <span key={i} className="text-[#CCB0FA]">
              {part}
            </span>
          )
        }

        if (isLast) {
          return <span key={i}>{part} "</span>
        }

        return <span key={i}>{part} </span>
      })}
    </p>
  )
}

const VideoContent = () => {
  const t = useTranslations('Video')
  const { locale } = useParams()
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.3,
  })
  const handlePlay = () => {
    videoRef.current.play()
    setIsPlaying(true)
  }
  const videoRef = useRef(null)
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="max-w-6xl mx-auto text-center text-white mt-20 p-4 space-y-4 text-3xl lg:text-5xl font-playfair">
      <motion.p
        ref={ref}
        initial={{ opacity: 0, x: 100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        " {t('paraOne')}
      </motion.p>

      <motion.div
        ref={ref}
        initial={{ opacity: 0, x: -100 }}
        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-20"
      >
        <HighlightText text={t('paraTwo')} highlights={['innovation', 'culture']} />
      </motion.div>

      <motion.p
        initial={{ opacity: 0, y: 100 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="mt-10 text-2xl lg:text-4xl text-end"
      >
        {t('paraThree')}
      </motion.p>

      <div className="relative w-full mt-4">
        <motion.video
          ref={videoRef}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="https://kijamii.com/Kijami_Final_Licensed_Music.mp4"
          controls
          className="w-full rounded-lg"
          poster="/thumbnail.png"
        />
        {!isPlaying && (
          <div className="absolute inset-0 flex flex-row items-center justify-center bg-black/40">
            {/* Circle Play Button */}
            <button
              onClick={handlePlay}
              className="flex items-center justify-center w-15 h-15 lg:w-20 lg:h-20 border border-white text-white rounded-full 
                 bg-white/10 backdrop-blur-md transition transform hover:scale-110 hover:bg-white/20 
                 hover:shadow-lg hover:shadow-white/30 cursor-pointer"
            >
              <span className="text-xl lg:text-3xl">▶</span>
            </button>

            {/* Text next to button */}
            <div className="flex flex-col font-jost items-start ml-4 text-white">
              <span className="text-xl lg:text-3xl font-semibold">PLAY</span>
              <span className="text-xl lg:text-3xl tracking-wide opacity-80">SHOWREEL</span>
            </div>
          </div>
        )}

        <motion.img
          initial={{ opacity: 0, x: -100 }}
          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          src="/time.png"
          alt="time"
          className={`absolute -top-5 ${locale === 'en' ? 'left-0' : 'right-0'} w-40 md:w-60 md:-top-10`}
        />
      </div>
    </div>
  )
}

export default VideoContent
