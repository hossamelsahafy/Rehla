import React from 'react'
import { motion } from 'framer-motion'

const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
const imageVariant = {
  hidden: { opacity: 0, y: 100 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
const textRtlVariant = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
const textLtrVariant = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}
const WorkMobile = ({ featured, work, locale }) => {
  return (
    <div className="lg:hidden relative flex text-white flex-col min-h-screen max-w-6xl mx-auto p-4 overflow-hidden">
      <motion.img
        src="/WorkBg/works_mobile.png"
        alt="mobile bg"
        variants={imageVariant}
        initial="hidden"
        animate="visible"
        className="absolute inset-0 w-full h-[80vh] object-cover -z-10"
      />

      <div className="flex uppercase font-jost font-medium text-xl flex-row gap-2 items-center justify-center">
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textLtrVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          Work That
        </motion.p>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={textLtrVariant}
          className="italic font-playfair"
          viewport={{ once: false, amount: 0.3 }}
        >
          Works
        </motion.p>
      </div>

      <motion.p
        initial="hidden"
        whileInView="visible"
        variants={textRtlVariant}
        className="font-playfair text-center mt-3 italic text-xl"
      >
        {featured}
      </motion.p>

      <motion.div
        className="flex flex-wrap justify-center gap-4 mt-6"
        variants={containerVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
      >
        {work.map((w) => (
          <motion.div
            key={w.Name}
            variants={cardVariant}
            className="flex flex-col gap-3 items-center"
          >
            <div className="relative w-32 sm:w-36 h-32 sm:h-36 rounded-md overflow-hidden shadow-md">
              <img src={w.Image} className="w-full h-full object-cover clibPath" alt={w.Name} />
            </div>

            <p className="text-center text-white text-xs sm:text-sm leading-snug font-medium font-jost uppercase line-clamp-2 w-32 sm:w-36">
              {locale === 'ar' ? w.NameAr : w.Name}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default WorkMobile
