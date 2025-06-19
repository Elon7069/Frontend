'use client'

import React from 'react'
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Stack,
} from '@mui/material'
import {
  Code,
  Design,
  Analytics,
  Support,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const ServicesSection: React.FC = () => {
  const services = [
    {
      icon: <Code />,
      title: 'Web Development',
      description: 'Custom web applications built with modern frameworks',
      features: ['React & Next.js', 'TypeScript', 'API Integration', 'Performance Optimization'],
    },
    {
      icon: <Design />,
      title: 'UI/UX Design',
      description: 'Beautiful and intuitive user interfaces',
      features: ['Material Design', 'Responsive Layout', 'User Research', 'Prototyping'],
    },
    {
      icon: <Analytics />,
      title: 'Analytics & SEO',
      description: 'Data-driven insights and search optimization',
      features: ['Google Analytics', 'SEO Optimization', 'Performance Tracking', 'A/B Testing'],
    },
    {
      icon: <Support />,
      title: 'Support & Maintenance',
      description: '24/7 support and continuous improvements',
      features: ['Bug Fixes', 'Security Updates', 'Performance Monitoring', 'Feature Updates'],
    },
  ]

  return (
    <Box
      id="services"
      sx={{
        position: 'relative',
        py: { xs: 8, md: 12 },
        overflow: 'hidden',
      }}
    >
      {/* Video Background */}
      <Box
        component="video"
        autoPlay
        loop
        muted
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          zIndex: -2,
          opacity: 0.3,
        }}
      >
        <source src="/assets/features-services.mp4" type="video/mp4" />
      </Box>

      {/* Overlay */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'background.default',
          opacity: 0.8,
          zIndex: -1,
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
              }}
            >
              Our Services
            </Typography>
            <Typography
              variant="h6"
              color="text.secondary"
              sx={{ maxWidth: 600, mx: 'auto' }}
            >
              Comprehensive solutions for your digital needs
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card
                  sx={{
                    height: '100%',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                      transform: 'scale(1.02)',
                    },
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Stack spacing={3}>
                      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                        <Box
                          sx={{
                            p: 2,
                            borderRadius: 2,
                            backgroundColor: 'primary.main',
                            color: 'primary.contrastText',
                          }}
                        >
                          {service.icon}
                        </Box>
                        <Typography variant="h5" fontWeight={600}>
                          {service.title}
                        </Typography>
                      </Box>

                      <Typography color="text.secondary" variant="body1">
                        {service.description}
                      </Typography>

                      <Box>
                        <Typography variant="subtitle2" fontWeight={600} mb={1}>
                          What's included:
                        </Typography>
                        <Stack spacing={1}>
                          {service.features.map((feature, idx) => (
                            <Typography
                              key={idx}
                              variant="body2"
                              color="text.secondary"
                              sx={{ pl: 2, position: 'relative' }}
                            >
                              <Box
                                component="span"
                                sx={{
                                  position: 'absolute',
                                  left: 0,
                                  top: '50%',
                                  transform: 'translateY(-50%)',
                                  width: 4,
                                  height: 4,
                                  borderRadius: '50%',
                                  backgroundColor: 'primary.main',
                                }}
                              />
                              {feature}
                            </Typography>
                          ))}
                        </Stack>
                      </Box>

                      <Button
                        variant="outlined"
                        sx={{
                          alignSelf: 'flex-start',
                          mt: 'auto',
                        }}
                      >
                        Learn More
                      </Button>
                    </Stack>
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

export default ServicesSection 