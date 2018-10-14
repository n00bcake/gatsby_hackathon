import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const SecondPage = () => (
  <Layout>
    <h1>Wow, you clicked page 2. Wow</h1>
    <p>Sadly there's no cheese here.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
