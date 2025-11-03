'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import GetArticles from '../_actions/GetArticles'

const ArticlesContext = createContext()

export const ArticlesProvider = ({ children }) => {
  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchArticles = async () => {
      const data = await GetArticles()
      setArticles(data)
      setLoading(false)
    }

    if (!articles) fetchArticles()
  }, [])

  return (
    <ArticlesContext.Provider value={{ articles, loading }}>{children}</ArticlesContext.Provider>
  )
}

export const useArticles = () => useContext(ArticlesContext)
