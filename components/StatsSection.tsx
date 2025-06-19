'use client'

import React, { useState, useEffect, useRef } from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material'
import { motion, useInView } from 'framer-motion'

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
}

const Counter: React.FC<CounterProps> = ({ end, duration = 2, suffix = '' }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      let startTime: number
      let animationId: number

      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime
        const elapsed = (currentTime - startTime) / 1000
        const progress = Math.min(elapsed / duration, 1)
        
        setCount(Math.floor(end * progress))

        if (progress < 1) {
          animationId = requestAnimationFrame(animate)
        }
      }

      animationId = requestAnimationFrame(animate)
      return () => cancelAnimationFrame(animationId)
    }
  }, [isInView, end, duration])

  return (
    <Typography
      ref={ref}
      variant="h3"
      fontWeight={700}
      color="primary.main"
    >
      {count.toLocaleString()}{suffix}
    </Typography>
  )
}

const StatsSection: React.FC = () => {
  const stats = [
    { label: 'Projects Completed', value: 150, suffix: '+' },
    { label: 'Happy Clients', value: 98, suffix: '%' },
    { label: 'Team Members', value: 25, suffix: '+' },
    { label: 'Years Experience', value: 5, suffix: '+' },
  ]

  return (
    <Box
      id="stats"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(135deg, #1976d2 0%, #90caf9 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundImage: 'url(/assets/stats.png)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'right center',
          opacity: 0.1,
          zIndex: 0,
        }}
      />

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Box textAlign="center" mb={8}>
            <Typography
              variant="h2"
              sx={{
                mb: 2,
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                color: 'white',
              }}
            >
              Our Impact
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                maxWidth: 600, 
                mx: 'auto',
                color: 'rgba(255, 255, 255, 0.9)',
              }}
            >
              Numbers that speak for our commitment to excellence
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.1)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'translateY(-10px)',
                    },
                  }}
                >
                  <CardContent sx={{ p: { xs: 2, md: 4 } }}>
                    <Counter 
                      end={stat.value} 
                      suffix={stat.suffix}
                    />
                    <Typography
                      variant="h6"
                      sx={{
                        mt: 2,
                        color: 'white',
                        fontWeight: 500,
                        fontSize: { xs: '0.9rem', md: '1.25rem' },
                      }}
                    >
                      {stat.label}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>

        {/* Additional visual element */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              mt: 8,
              textAlign: 'center',
              p: 4,
              borderRadius: 3,
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <Typography
              variant="h5"
              sx={{ mb: 2, color: 'white', fontWeight: 600 }}
            >
              Ready to be part of our success story?
            </Typography>
            <Typography
              sx={{ color: 'rgba(255, 255, 255, 0.9)' }}
            >
              Join hundreds of satisfied clients who trust us with their digital transformation
            </Typography>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default StatsSection 