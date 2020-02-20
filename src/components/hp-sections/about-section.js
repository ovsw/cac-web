/** @jsx jsx */
import React from 'react' // eslint-disable-line
import {jsx, Container, Styled} from 'theme-ui'
import {Link} from 'gatsby'
import {Box, Flex} from '@theme-ui/components'

import Column from './about-section-column'

const SectionThreeColumns = () => {
  return (
    <section sx={{variant: 'sections.hpSectionLight'}}>
      <Container sx={{px: 0}}>
        <Styled.h1 as='h2' sx={{textAlign: 'center'}}>The Canadian Adventure Camp Experience</Styled.h1>
        <div sx={{variant: 'styles', mt: 5, px: 2, textAlign: 'center', maxWidth: '3xl', mx: 'auto'}}>
          <p>We need to decide what text goes in here. It's going to be really important. For now, since we don't have anything, this is just placeholder text. </p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ut sagittis erat. Nulla vitae odio commodo nunc faucibus accumsan. Aenean sit amet ligula a ex tincidunt pharetra. </p>
          <p>Donec erat ante, consectetur at ultricies in, consectetur at sapien. Integer varius scelerisque commodo. Aenean at ligula sit amet arcu suscipit consequat a eget purus. Fusce fermentum massa condimentum ligula hendrerit auctor. Cras sollicitudin iaculis metus vehicula iaculis.</p>
        </div>
        {/* <Flex sx={{mt: 5, flexWrap: 'wrap'}}>
          {columnsContent.map(column => (
            <Box key={column.title} sx={{width: ['full', '1/2'], px: 3, display: 'flex'}}><Column {...column} /></Box>
          ))}
        </Flex> */}
      </Container>
    </section >
  )
}

const columnsContent = [
  {
    title: 'Our Mission',
    icon: 'teenagers',
    text: 'To provide a fun, safe and inclusive environment that builds self-esteem and encourages personal growth for children ages 5-15: explore and enhance Jewish identity and values, encourage healthy lifestyle choices, and lay the foundation for positive, lifelong friendships.'
  },
  {
    title: 'Our Vision',
    icon: 'starOfDavid',
    text: 'Camp Laurelwood is a vibrant, nurturing community rooted in Jewish values and traditions that inspire campers and staff to learn, grow and explore, creating lasting memories that strengthen the community.'
  }
  // {
  //   title: 'Our Approach',
  //   icon: 'leader',
  //   text: 'Inspire campers and staff to learn, grow and explore, creating lasting memories that strengthen the community.'
  // }
]

export default SectionThreeColumns
