import "firebase/auth"
import 'firebase/analytics'
const React = require("react")
const Layout = require("./src/components/layout").default

export function wrapPageElement({ element, props }) {
  return <Layout>{element}</Layout>;
}