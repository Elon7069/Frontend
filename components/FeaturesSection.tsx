'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  IconButton,
} from '@mui/material'
import {
  Bolt,
  Security,
  Speed,
  Palette,
  Cloud,
  Mobile,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const FeaturesSection: React.FC = () => {
  const features = [
    {
      icon: <Bolt />,
      title: 'Lightning Fast',
      description: 'Built with Next.js 14 for optimal performance and speed',
    },
    {
      icon: <Security />,
      title: 'Secure by Design',
      description: 'Enterprise-grade security with best practices built-in',
    },
    {
      icon: <Speed />,
      title: 'High Performance',
      description: 'Optimized for speed with server-side rendering',
    },
    {
      icon: <Palette />,
      title: 'Beautiful UI',
      description: 'Modern Material-UI components with stunning animations',
    },
    {
      icon: <Cloud />,
      title: 'Cloud Ready',
      description: 'Deploy anywhere with seamless cloud integration',
    },
    {
      icon: <Mobile />,
      title: 'Mobile First',
      description: 'Responsive design that works perfectly on all devices',
    },
  ]

  return (
    <Box
      id="features"
      sx={{
        py: { xs: 8, md: 12 },
        backgroundColor: 'background.default',
      }}
    >
      <Container maxWidth="lg">
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
                background: 'linear-gradient(45deg, #1976d2, #90caf9)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Powerful Features
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Everything you need to build modern, scalable applications
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card
                  sx={{
                    height: '100%',
                    textAlign: 'center',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      boxShadow: (theme) =>
                        theme.palette.mode === 'light'
                          ? '0 8px 25px rgba(0,0,0,0.15)'
                          : '0 8px 25px rgba(255,255,255,0.15)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <IconButton
                      sx={{
                        mb: 2,
                        backgroundColor: 'primary.main',
                        color: 'primary.contrastText',
                        '&:hover': {
                          backgroundColor: 'primary.dark',
                        },
                      }}
                    >
                      {feature.icon}
                    </IconButton>
                    <Typography variant="h5" fontWeight={600} mb={2}>
                      {feature.title}
                    </Typography>
                    <Typography color="text.secondary">
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}

export default FeaturesSection 