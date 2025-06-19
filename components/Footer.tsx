'use client'

import React from 'react'
import {
  Box,
  Container,
  Grid,
  Typography,
  IconButton,
  Link,
  Divider,
} from '@mui/material'
import {
  Code,
  LinkedIn,
  Twitter,
  GitHub,
  Email,
  Phone,
  LocationOn,
} from '@mui/icons-material'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Features', href: '#features' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#stats' },
    { label: 'Contact', href: '#contact' },
  ]

  const services = [
    'Web Development',
    'UI/UX Design',
    'Mobile Apps',
    'Digital Marketing',
    'SEO Optimization',
  ]

  const socialLinks = [
    { icon: <LinkedIn />, url: '#', label: 'LinkedIn' },
    { icon: <Twitter />, url: '#', label: 'Twitter' },
    { icon: <GitHub />, url: '#', label: 'GitHub' },
  ]

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'background.paper',
        py: 6,
        borderTop: 1,
        borderColor: 'divider',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Company Info */}
          <Grid item xs={12} md={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
                <Code color="primary" />
                <Typography variant="h5" fontWeight={700}>
                  HackLand
                </Typography>
              </Box>
              <Typography color="text.secondary" mb={3}>
                Building the future with innovative web solutions. 
                We create beautiful, functional, and scalable applications
                that help businesses grow.
              </Typography>
              <Box sx={{ display: 'flex', gap: 1 }}>
                {socialLinks.map((social, index) => (
                  <IconButton
                    key={index}
                    href={social.url}
                    size="small"
                    sx={{
                      color: 'text.secondary',
                      '&:hover': {
                        color: 'primary.main',
                        transform: 'translateY(-2px)',
                      },
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {social.icon}
                  </IconButton>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Quick Links */}
          <Grid item xs={12} sm={6} md={2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Quick Links
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {quickLinks.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    color="text.secondary"
                    underline="none"
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      },
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {link.label}
                  </Link>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Services */}
          <Grid item xs={12} sm={6} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Services
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                {services.map((service) => (
                  <Typography
                    key={service}
                    color="text.secondary"
                    sx={{
                      '&:hover': {
                        color: 'primary.main',
                      },
                      cursor: 'pointer',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service}
                  </Typography>
                ))}
              </Box>
            </motion.div>
          </Grid>

          {/* Contact Info */}
          <Grid item xs={12} md={3}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Typography variant="h6" fontWeight={600} mb={2}>
                Contact
              </Typography>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Email sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Typography color="text.secondary" variant="body2">
                    hello@hackland.com
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                  <Phone sx={{ fontSize: '1rem', color: 'text.secondary' }} />
                  <Typography color="text.secondary" variant="body2">
                    +1 (555) 123-4567
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                  <LocationOn sx={{ fontSize: '1rem', color: 'text.secondary', mt: 0.5 }} />
                  <Typography color="text.secondary" variant="body2">
                    123 Tech Street,
                    <br />
                    Silicon Valley, CA 94000
                  </Typography>
                </Box>
              </Box>
            </motion.div>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', sm: 'row' },
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <Typography color="text.secondary" variant="body2">
              © 2024 HackLand. All rights reserved. Built with Next.js & MUI using Cursor AI.
            </Typography>
            <Box sx={{ display: 'flex', gap: 3 }}>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                variant="body2"
                sx={{
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s ease',
                }}
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                color="text.secondary"
                underline="none"
                variant="body2"
                sx={{
                  '&:hover': { color: 'primary.main' },
                  transition: 'color 0.3s ease',
                }}
              >
                Terms of Service
              </Link>
            </Box>
          </Box>
        </motion.div>
      </Container>
    </Box>
  )
}

export default Footer 