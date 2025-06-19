'use client'

import React, { useEffect, useState } from 'react'
import { Box, Fade } from '@mui/material'
import { motion } from 'framer-motion'

interface LoaderProps {
  onLoadingComplete: () => void
}

const Loader: React.FC<LoaderProps> = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false)
      setTimeout(onLoadingComplete, 500) // Wait for fade out
    }, 3000) // Show loader for 3 seconds

    return () => clearTimeout(timer)
  }, [onLoadingComplete])

  return (
    <Fade in={isVisible} timeout={500}>
      <Box
        component={motion.div}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        sx={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          backgroundColor: 'background.default',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 9999,
        }}
      >
        <Box
          component="video"
          autoPlay
          loop
          muted
          sx={{
            width: { xs: '80%', sm: '60%', md: '40%' },
            height: 'auto',
            borderRadius: 2,
          }}
        >
          <source src="/assets/loader.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </Box>
      </Box>
    </Fade>
  )
}

export default Loader 