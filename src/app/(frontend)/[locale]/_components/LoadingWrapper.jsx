'use client'
import React, { useState, useEffect } from 'react'
import Loading from './Loading'

export default function ClientLoader({ children }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Give React one render cycle before showing content
    const timeout = setTimeout(() => setLoading(false), 0)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <>
      {loading && (
        <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black flex items-center justify-center">
          <Loading />
        </div>
      )}
      <div style={{ visibility: loading ? 'hidden' : 'visible' }}>{children}</div>
    </>
  )
}
