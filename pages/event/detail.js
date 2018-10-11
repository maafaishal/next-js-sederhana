import React from 'react'
import Link from 'next/link'
import Head from '../../components/head'
import Styles from '../../components/styles'

const EventDetail = () => (
  <div>
    <Head title="Event Detail Page" />
    <Styles />

    <div className="hero">
      <h1 className="title">Event Detail Page!</h1>
      <Link href="/event">
        <a className="back">
          <h3>&#8701; Back</h3>
        </a>
      </Link>
    </div>
  </div>
)

export default EventDetail
