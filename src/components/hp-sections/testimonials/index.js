/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {useStaticQuery, graphql} from 'gatsby'
import Slider from 'react-slick'
// import BackgroundImage from 'gatsby-background-image'

import TestimonialItem from './testimonial-item'

// styles
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

function NextArrow (props) {
  const {className, onClick} = props
  return (
    <div
      className={className}
      // style={{...style}}
      onClick={onClick}
      sx={{
        left: '-2rem',
        '&::before': {
          color: 'primary',
          fontSize: '2rem'
        }
      }}
    />
  )
}

function PrevArrow (props) {
  const {className, onClick} = props
  return (
    <div
      // style={{...style}}
      className={className}
      sx={{
        right: '-1rem',
        '&::before': {
          fontSize: '2rem',
          color: 'primaryDark'
        }
      }}
      onClick={onClick}
    />
  )
}

const TestimonialsSection = () => {
  const {testimonialsBgImage} = useStaticQuery(
    graphql`
    query {
      testimonialsBgImage: file(relativePath: { eq: "swim-lessons.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
    `
  )

  const slickSettings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: false,
    dots: true,
    arrows: true,
    swipeToSlide: true,
    prevArrow: <NextArrow />,
    nextArrow: <PrevArrow />,
    // fade: true,
    // adaptiveHeight: true
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
          // initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul style={{
          position: 'relative', top: '50px', padding: '0'
        }}> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div
        sx={{
          width: '1.5rem',
          height: '1.5rem',
          fontSize: '1rem',
          lineHeight: '1.5rem',
          bg: 'primary',
          color: 'light',
          borderRadius: '100%',
          '.slick-active & ': {
            bg: 'accent',
            color: 'light',
            boxShadow: '0 0 6px #008080'
          }
        }}
      >
        {i + 1}
      </div>
    )
  }
  return (
    // REPLACE WITH BackgroundImage
    <div tag='section' quality='90'
    // fluid={testimonialsBgImage.childImageSharp.fluid}
      sx={{
        variant: 'sections.hpSection',
        py: [5, 5, 5, 6],
        pb: [6, 5, 5, 6],
        // background: `url(${SectionBg}) repeat-x bottom left`,
        backgroundColor: 'gray.3',
        backgroundPosition: 'bottom center',
        marginBottom: '-3rem',
        position: 'relative',
        zIndex: '2'
      }}>
      <Styled.h1 as='h2' sx={{textAlign: 'center', color: 'gray.7'}}>What families say</Styled.h1>
      <Container sx={{maxWidth: '6xl', px: ['2.8rem', 5, 0]}}>
        <Slider {...slickSettings}>
          {testimonialsContentTemp.map(testimonial => <TestimonialItem {...testimonial} key={testimonial.name} />)}
        </Slider>
      </Container>
    </div>
  )
}

const testimonialsContentTemp = [
  {
    name: 'Emily Cooper',
    text: 'When I’m at camp I’m so busy making friends, doing activities, singing on benches at shabbat, roasting marshmallows, and being a part of the countless other special things we do. When the 8 weeks are over and I have my first moment to reflect on the summer, I realize that all throughout each of those special days I was actually growing as a person and becoming a more genuine, thoughtful version of myself.'
  },
  {
    name: 'Henry Brown',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Isabel Braverman',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Breezie Miller',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Hilary Rappaport ',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Aaron Cohen',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Jess Tyler',
    text: 'Truly a magical place that fills me with more happiness than anywhere else in the world!'
  },
  {
    name: 'Erin Bellucci',
    text: 'When I’m at camp I’m so busy making friends, doing activities, singing on benches at shabbat, roasting marshmallows, and being a part of the countless other special things we do. When the 8 weeks are over and I have my first moment to reflect on the summer, I realize that all throughout each of those special days I was actually growing as a person and becoming a more genuine, thoughtful version of myself.'
  }
]

export default TestimonialsSection
