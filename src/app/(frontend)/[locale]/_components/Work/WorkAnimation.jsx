'use client'
import React from 'react'
import { motion } from 'framer-motion'

const WorkAnimation = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }} // 👈 fade in once, never disappear
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

export default WorkAnimation
