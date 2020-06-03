import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Footer1 from "../components/Footers/Footer1/Footer1";

const FootersPage = () => (
  <Layout>
    <SEO title="Footers" />
    <div className="spacer"></div>
    <Footer1 />
    <div className="spacer"></div>
  </Layout>
);

export default FootersPage;
