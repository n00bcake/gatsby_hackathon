import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <h1>Hey ladies and gents and non-gender-binaries peeps.</h1>
    <p>My name is Willow. Great to meet you!</p>
    <p>Is there cheese?</p>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
