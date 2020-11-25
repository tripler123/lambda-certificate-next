import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/router";

import BasicLayout from "../../Layouts/BasicLayout/BasicLayout.jsx";
import Seo from "../../components/Seo";
import CertificateDetails from '../../components/Certificate/CertificateDetails.jsx'

import { getCertificate, getAllCertificates } from "../../api/certificate";


export default function Code() {
  //TODO Comentado para intentar utilizar getServerSideProps (No funciona con el next export)
  const [certificate, setCertificate] = useState(null);
  const {query} = useRouter();

  useEffect(() => {
    (async () => {
      if (query.code) {
      const response = await getCertificate(query.code);
      setCertificate(response);
      }
    })();
  }, [query]);


  if (!certificate) return null;

  return (
    <BasicLayout>
      <Seo
        title="Revit API | Certificado"
        description="Certificado de cursos de Revit API para automatización de procesos"
      />
      <CertificateDetails certificate={certificate} />
    </BasicLayout>
  );
}

//TODO Segun la pagina para versiones de 9.4 hacia delante ya no es recomendable usar.
// Code.getInitialProps = async (ctx) => {
//   if (ctx.query) {
//     const response = await getCertificate(ctx.query.code);
//     return {
//       certificate: response,
//     };
//   }
//   return {}
// };

// export async function getServerSideProps(context) {
//   const { params } = context;
//   const response = await getCertificate(params.code);

//   return {
//     props: {
//       certificate: response,
//       fallback: false,
//     },
//   };
// }
