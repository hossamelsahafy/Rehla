'use client'
import React from 'react'
import { motion } from 'framer-motion'

export default function Loading() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-full h-full">
        <motion.img
          src="/Logo/Logo.png"
          alt="Logo"
          className="object-contain w-40 mb-10 z-10"
          initial={{ opacity: 1, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        />

        <motion.p
          className="font-playfair italic text-white text-5xl text-center px-4 animate-pulse"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.5,
            ease: 'easeInOut',
          }}
        >
          Rehla Marketing
        </motion.p>
      </div>
    </div>
  )
}
