import React from "react";
import Layout from "@theme/Layout";
import TableClans from "@site/src/components/Tables/_clans.mdx";

export default function Hello() {
  return (
    <Layout title="Hello" description="Hello React Page">
      <h1>Tabelas</h1>
      <h2>Tabelas dos Clãs</h2>
      <TableClans />
    </Layout>
  );
}
