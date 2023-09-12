import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import Layout from '@theme/Layout'
import React from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

const Funding: React.FC = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title="Funding">
      <main className="container margin-vert--lg">
        <div className="text--center margin-bottom--lg">
          <h1>Funding AdMob Plus!</h1>
        </div>
        <div className="row margin-bottom--lg">
          <div className="post">
            <header className="postHeader">
              <h2>Supporting AdMob Plus</h2>
            </header>
            <p>
              AdMob Plus is an MIT-licensed open source project. It&apos;s an
              independent project maintained by{' '}
              <a href="https://github.com/ratson">@ratson</a>.
            </p>
            <p>Your support will fund him to</p>
            <ul>
              <li>
                Develop AdMob Plus with faster releases, more features, and
                higher quality.
              </li>
              <li>
                Allow more time to be invested in documentation, issue triage,
                and community support.
              </li>
              <li>Safeguard the future development of AdMob Plus.</li>
            </ul>
          </div>
        </div>
        <div className="row text--center margin-bottom--xl">
          <div className="col col--3 col--offset-2">
            <h2>Recurring</h2>
            <p>
              <a href="https://github.com/sponsors/ratson/">GitHub Sponsors</a>
            </p>
            <p>
              <a href="https://ratson.name/fund-admob-plus/">
                Stripe-powered Signup Page
              </a>
            </p>
          </div>
          <div className="col col--3 col--offset-1">
            <h2>One-Off</h2>
            <a href="https://www.paypal.me/ratsonal">
              <img alt="PayPal" src={useBaseUrl('img/paypal.svg')} />
            </a>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Funding
