// Load variables from `.env` as soon as possible
require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'development'}`
})

const path = require(`path`)
const clientConfig = require('./client-config')

// const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  siteMetadata: {
    siteNav: [
      {
        title: 'Prospective Families',
        slug: '/prospective-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'The CAC Experience',
                slug: '/the-canadian-adventure-camp-experience/',
                children: []
              },
              {
                title: 'General Camp Program',
                slug: '/programs/general-camp-program/',
                children: []
              },
              {
                title: 'Specialty Programs',
                slug: '/programs/specialty-summer-camp-programs/',
                children: [
                  {
                    title: 'Gymnastics Program',
                    slug: '/programs/specialty-gymnastics-program/',
                    children: []
                  },
                  {
                    title: 'Trampoline Program',
                    slug: '/programs/trampoline-specialty-program/',
                    children: []
                  },
                  {
                    title: 'Aerials (Silks & Hoops)',
                    slug: '/programs/aerials-specialty-program/',
                    children: []
                  },
                  {
                    title: 'Water-ski & Wake-board',
                    slug: '/programs/water-ski-and-wake-boarding-specialty-programs/',
                    children: []
                  }
                ]
              },
              {
                title: 'Accommodation & Facilities',
                slug: '/accommodation-and-facilities/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Health & Safety',
                slug: '/health-and-safety/',
                children: []
              },
              {
                title: 'International Campers',
                slug: '/international-campers/',
                children: []
              },
              {
                title: 'FAQs',
                slug: '/faqs/',
                children: []
              },
              {
                title: 'Testimonials',
                slug: '/testimonials/',
                children: []
              },
              {
                title: 'Dates & Rates',
                slug: '/dates-and-rates/',
                children: []
              },
              {
                title: 'Request Info',
                slug: '/request-info/',
                children: []
              },
              {
                title: 'Enroll Now',
                slug: '/enroll-now/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'About CAC',
        slug: '/about-us/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'History and Goal',
                slug: '/our-summer-camp-history-and-goal/',
                children: []
              },
              {
                title: 'Great Leadership',
                slug: '/great-leadership/',
                children: []
              },
              {
                title: 'Location',
                slug: '/private-island-camp-location-ontario/',
                children: []
              },
              {
                title: 'Food & Sample Menu',
                slug: '/food-and-sample-menu/',
                children: []
              }
            ]
          },
          {
            title: 'column 2',
            children: [
              {
                title: 'Memberships & Partnerships',
                slug: '/memeberships-partnerships/',
                children: []
              },
              {
                title: 'Alumni',
                slug: '/alumni/',
                children: []
              },
              {
                title: 'Photo Gallery',
                slug: '/photo-gallery/',
                children: []
              },
              {
                title: 'Videos',
                slug: '/videos/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Current Families',
        slug: '/current-families/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'What to Bring to Camp',
                slug: '/what-to-bring-to-camp/',
                children: []
              },
              {
                title: 'Parent\'s Guide',
                slug: '/download-parent-guide/',
                children: []
              },
              {
                title: 'Getting to Camp',
                slug: '/transportation/',
                children: [
                  {
                    title: 'Travel by Bus',
                    slug: '/transportation/travel-by-bus/',
                    children: []
                  },
                  {
                    title: 'Travel by Car',
                    slug: '/transportation/travel-by-car/',
                    children: []
                  },
                  {
                    title: 'International Travel',
                    slug: '/transportation/international-campers/',
                    children: []
                  }
                ]
              },
              {
                title: 'Stay in touch with your camper',
                slug: '/stay-in-touch-with-your-camper/',
                children: [
                  {
                    title: 'Visitor\'s Days',
                    slug: '/visitor-days/',
                    children: []
                  },
                  {
                    title: 'Places to Stay',
                    slug: '/places-to-stay-when-visiting/',
                    children: []
                  }
                ]
              },
              {
                title: 'Camp Pictures',
                slug: '/camp-pictures/',
                children: []
              },
              {
                title: 'Camp Video',
                slug: '/camp-video/',
                children: []
              },
              {
                title: 'Parent Log-in',
                slug: '/parent-log-in/',
                children: []
              }

            ]
          },
          {
            title: 'column 2',
            children: []
          }
        ]
      },
      {
        title: 'Contact Us',
        slug: '/contact-us/',
        children: []
      },
      {
        title: 'NCCP & Adult Camp',
        slug: '/nccp-courses-and-adult-camp/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Adult Camp',
                slug: '/adult-summer-camp/',
                children: []
              },
              {
                title: 'N.C.C.P. Courses',
                slug: '/nccp-courses/',
                children: []
              }
            ]
          }
        ]
      },
      {
        title: 'Staff',
        slug: '/staff/',
        children: [
          {
            title: 'column 1',
            children: [
              {
                title: 'Available Positions',
                slug: '/staff/available-positions/',
                children: []
              },
              {
                title: 'Staff Application',
                slug: '/staff/staff-application/',
                children: []
              },
              {
                title: 'Community Initiatives',
                slug: '/staff/community-initiatives/',
                children: []
              }
            ]
          }
        ]
      }
    ]
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images')
      }
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: false // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-plugin-theme-ui',
    'gatsby-theme-style-guide',
    'gatsby-plugin-emotion',
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-sanity',
      options: {
        ...clientConfig.sanity,
        token: process.env.SANITY_READ_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto Slab`,
          `Work Sans`
          // `Open Sans:400,400i,700` // you can also specify font weights and styles
        ],
        display: 'block'
      }
    }
  ]
}
