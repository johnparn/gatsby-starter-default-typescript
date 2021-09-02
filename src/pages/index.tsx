import * as React from "react"
import { Link, PageProps } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

type ButtonProps = {
  label: string
  onClick?: VoidFunction
}

const Button = ({ label, onClick }: ButtonProps): React.ReactElement => {
  let [counter, setCounter] = React.useState(0);
  return (<button onClick={() => {
    setCounter(counter + 1);
    if (typeof onClick === 'function') onClick();
  }}>{label} {counter}</button>);
};

const IndexPage: React.FC = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Button label="Click me" onClick={() => console.log('Clicked')} />
    </p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </p>
  </Layout>
)

export default IndexPage
