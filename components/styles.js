import React from 'react'

const Styles = (props) => (
  <div>
      <style jsx global>{`
        body {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        .hero {
          width: 100%;
          color: #333;
        }
        .title {
          margin: 0;
          width: 100%;
          padding-top: 80px;
          line-height: 1.15;
          font-size: 48px;
          text-align: center;
        }
        .row {
          max-width: 880px;
          margin: 80px auto 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-around;
        }
        .back {
          padding: 18px 18px 24px;
          width: 100px;
          display: block;
          margin: 0 auto;
          text-align: center;
          text-decoration: none;
          color: #434343;
        }
        .card {
          padding: 18px 18px 24px;
          width: 220px;
          text-align: center;
          text-decoration: none;
          color: #434343;
          border: 1px solid #9b9b9b;
        }
        .card h3 {
          margin: 0;
          color: #067df7;
          font-size: 18px;
        }
      `}</style>
  </div>
)

export default Styles
