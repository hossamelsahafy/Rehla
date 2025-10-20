'use client'
import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const textVariants = {
  hiddenRight: { x: '60vw', opacity: 0 },
  center: { x: 0, opacity: 1 },
  exitLeft: { x: '-60vw', opacity: 0 },
  hiddenLeft: { x: '-60vw', opacity: 0 },
  exitRight: { x: '60vw', opacity: 0 },
}

export default function Loading() {
  const [step, setStep] = useState(1)

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    let isMounted = true

    const startAnimationCycle = async () => {
      while (isMounted) {
        await new Promise((resolve) => setTimeout(resolve, 3000))
        if (!isMounted) break
        setStep((prev) => (prev === 1 ? 2 : 1))
        await new Promise((resolve) => setTimeout(resolve, 4000))
      }
    }

    startAnimationCycle()

    return () => {
      isMounted = false
      document.body.style.overflow = 'auto'
    }
  }, [])

  return (
    <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black">
      <motion.img
        src="/Logo/Logo.png"
        alt="Logo"
        className="object-contain w-40 mb-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      />

      <div className="relative h-20 flex items-center justify-center">
        <AnimatePresence mode="wait">
          {step === 1 ? (
            <motion.p
              key="text1"
              className="font-playfair italic text-white text-5xl"
              variants={textVariants}
              initial="hiddenRight"
              animate="center"
              exit="exitLeft"
              transition={{ duration: 3, ease: 'easeInOut' }}
            >
              Rehla Marketing
            </motion.p>
          ) : (
            <motion.p
              key="text2"
              className="font-playfair italic text-white text-5xl"
              variants={textVariants}
              initial="hiddenLeft"
              animate="center"
              exit="exitRight"
              transition={{ duration: 3, ease: 'easeInOut' }}
            >
              From Vision To Voice
            </motion.p>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
