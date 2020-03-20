/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx} from 'theme-ui'
import {useStaticQuery, graphql, Link} from 'gatsby'
// import {jsx, Container, Styled} from 'theme-ui'

// import headerBgImage from '../../../images/white-paper-bg3.jpg'

const MainLogo = () => {
  const {logoImage} = useStaticQuery(graphql`
  query{
    logoImage: file(relativePath: { eq: "canadian-adventure-camp-logo-retina.png" }) {
      childImageSharp {
        original{
          width
          height
          src
        }
        fixed(width: 90) {
          ...GatsbyImageSharpFixed_noBase64
          srcSet
          src
        }
      }
    }
  }
`)
  const mainLogoStyles = {
    // background: `url(${headerBgImage}) repeat bottom left`,
    position: 'absolute',
    textAlign: 'center',
    width: ['80px', null, null, '90px'],
    height: ['80px', null, null, '90px'],
    left: ['3px', '0'],
    right: '0',
    bottom: ['5px', '12px', '5px'],
    margin: '0 auto',
    zIndex: '1111'
  }
  return (
    <div sx={mainLogoStyles}>
      <Link to='/' title='Rambling Pines Day Camp'>
        <img src={logoImage.childImageSharp.fixed.src} alt='Rambling Pines Day Camp logo' sx={{maxWidth: ['80px', 'none']}} />
      </Link>
    </div>
  )
}

export default MainLogo
