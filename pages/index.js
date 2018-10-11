import React from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Styles from '../components/styles'

const Home = () => (
  <div>
    <Head title="Home" />
    <Styles />

    <div className="hero">
      <h1 className="title">Welcome to Next!</h1>

      <div className="row">
        <Link href="event">
          <a className="card">
            <h3>Event &rarr;</h3>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default Home
