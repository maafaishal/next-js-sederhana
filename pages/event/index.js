import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Styles from '../../components/styles'

const Event = () => (
  <div>
    <Head title="Event Page" />
    <Styles />

    <div className="hero">
      <h1 className="title">Event Page!</h1>
      <Link href="/">
        <a className="back">
          <h3>&#8701; Back</h3>
        </a>
      </Link>

      <div className="row">
        <Link href="event/detail">
          <a className="card">
            <h3>View Detail</h3>
          </a>
        </Link>
      </div>
    </div>
  </div>
)

export default Event
