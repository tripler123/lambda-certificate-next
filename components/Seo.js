import React from 'react'
import Head from 'next/head'

const Seo = ({title, description}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="description" content={description} />
    </Head>
  )
}

Seo.defaultProps = {
  title: "Certificados de Lambda",
  description: "Los certificados de la mejor empresa BIM en Perú"
}

export default Seo
