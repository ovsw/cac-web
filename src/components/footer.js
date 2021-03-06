/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Styled, Container} from 'theme-ui'
import {useStaticQuery, graphql, Link} from 'gatsby'
import Img from 'gatsby-image'
import div from 'gatsby-background-image'
import {Box, Flex} from '@theme-ui/components'

// components
import SocialLinks from './socialLinks'

const Footer = () => {
  const {footerBgImage, acaLogoImage} = useStaticQuery(
    graphql`
    query {
      footerBgImage: file(relativePath: { eq: "swim-lessons.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024, quality: 80) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      acaLogoImage: file(relativePath: { eq: "oca-accredited-member.jpg" }) {
        childImageSharp {
          fixed(width: 192, quality: 90) {
            ...GatsbyImageSharpFixed_noBase64
          }
        }
      }
    }
    `
  )
  return (
    <div fadeIn={false} as='ThemeFooter' fluid={footerBgImage.childImageSharp.fluid} sx={{
      display: 'block',
      // background: `url('${FooterBg}') no-repeat top center`,
      backgroundPosition: 'top center',
      backgroundSize: 'cover',
      backgroundColor: 'primaryDark',
      color: 'gray.4'}}>
      <Container>
        <Flex sx={{flexWrap: 'wrap', pt: [4, 4, 5, 6], pb: [3, 3, 3, 5]}}>
          <Box sx={{width: ['full', '1/2'], px: [0, 4], py: [4, 0], textAlign: ['center', 'right'], borderRight: ['none', '1px solid lightgray']}}>
            <div className='vcard'>
              <div className='org'><Styled.h3 as='h3' sx={{mt: 0, color: 'light'}}>Canadian Adventure Camp</Styled.h3></div>
              <div className='tel'>
                Call Now: <a sx={{variant: 'links.footerLinks'}} href='tel:1-800-966-1406'>1 (800) 966-1406</a>
              </div>
              <a className='email' sx={{variant: 'links.footerLinks'}} href='mailto:info@canadianadventurecamp.com'>info@canadianadventurecamp.com</a>
              <div className='adr' sx={{mt: 4, color: 'gray.4'}}>
                <div className='street-address'>15 Idleswift Drive</div>
                <span className='locality'>Thornhill</span>,{' '}
                <span className='region'>Ontario</span>{' '}
                <span className='postal-code'>L4J 1K9</span>,{' '}
                <span className='country-name'>Canada</span>
              </div>

            </div>
          </Box>
          <Box sx={{width: ['full', '1/2'], px: 4, textAlign: 'center'}}>
            <SocialLinks />
            <Img fixed={acaLogoImage.childImageSharp.fixed} sx={{maxWidth: 'full', width: '48'}} />
          </Box>
        </Flex>
        <p sx={{
          textAlign: 'center',
          color: 'gray.5',
          a: {
            color: 'light'
          }
        }}>
          <Link to='/staff/'>Staff</Link> |{' '}
          <Link to='/terms-and-conditions/'>Terms &amp; Conditions</Link> |{' '}
          <Link to='/privacy-policy/'>Privacy Policy</Link> |{' '}
          <Link to='/ada-compliance/'>ADA Compliance</Link> |{' '}
          <Link to='/contact/'>Contact</Link>
        </p>
      </Container>
      <div sx={{textAlign: 'center', p: 3, fontSize: 1, color: 'muted', bg: 'rgba(0,0,0,0.5)'}}>
        &copy; {new Date().getFullYear()}, Canadian Adventure Camp
          |
        Website by <a href='https://ovswebsites.com' sx={{color: '#f36'}}>OVS Websites</a>
      </div>
    </div>
  )
}

export default Footer
