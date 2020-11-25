import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

import BasicLayout from "../../Layouts/BasicLayout/BasicLayout.jsx";
import Seo from '../../components/Seo'
import { getCertificate, getAllCertificates } from "../../api/certificate";
import moment from "moment";
import "moment/locale/es";

export default function Code({certificate}) {

  //TODO Comentado para intentar utilizar getServerSideProps (No funciona con el next export)

  // const [certificate, setCertificate] = useState(null);
  // const { query } = useRouter();

  // useEffect(() => {
  //   (async () => {
  //     if (query.code) {
  //       const response = await getCertificate(query.code);
  //       setCertificate(response);
  //     }
  //   })();
  // }, [query]);

  if (!certificate) return null;

  return (
    <BasicLayout>
      <Seo title="Revit API | Certificado" description="Certificado de cursos de Revit API para automatización de procesos"/>
      <div className="certificate">
        <div className="certificate__left">
          <img
            className="certificate__left--image"
            src={certificate.image.url}
            alt="Certificado del Curso"
          />
          <p>
            El anterior certificado garantiza que{" "}
            <strong>{certificate.student.name}</strong> ha completado con éxito
            el curso <strong>{certificate.course.name}</strong> a fecha de{" "}
            <strong>
              {moment(certificate.course.date).format("MMMM YYYY")}
            </strong>{" "}
            , habiendo sido impartido por teacher en{" "}
            <strong>Lambda Ingeniería & Innovación.</strong> El certificado
            indica que se ha completado la totalidad del curso, según lo
            validado por el estudiante. La duración del curso representa el
            total de horas de vídeo del curso en el momento de finalización más
            reciente.
          </p>
        </div>
        <div className="certificate__right">
          <img
            className="certificate__righ--image"
            src={certificate.course.poster.url}
            alt="Imagen del curso"
          />
          <p className="certificate__right--course-name">
            {" "}
            {certificate.course.name}
          </p>
          <p className="certificate__right--teacher-name">
            {certificate.course.teacher}
          </p>
          <a
            target="_blank"
            href={certificate.pdf}
            className="certificate__right--button"
          >
            <i className="fa fa-download"></i>
            Descargar
          </a>

          <div className="certificate__right--social-media">
            <a
              className="resp-sharing-button__link"
              href="https://facebook.com/sharer/sharer.php?u=http://certificate.lambda.com.pe/{{certificate_id}}"
              target="_blank"
              rel="noopener"
              aria-label="Facebook"
            >
              <div className="resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                  </svg>
                </div>
                Facebook
              </div>
            </a>

            <a
              className="resp-sharing-button__link"
              href="https://www.linkedin.com/shareArticle?mini=true&amp;url=http://certificate.lambda.com.pe/{{certificate_id}}"
              target="_blank"
              rel="noopener"
              aria-label="LinkedIn"
            >
              <div className="resp-sharing-button resp-sharing-button--linkedin resp-sharing-button--medium">
                <div
                  aria-hidden="true"
                  className="resp-sharing-button__icon resp-sharing-button__icon--solid"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                  </svg>
                </div>
                LinkedIn
              </div>
            </a>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
}

export async function getServerSideProps(ctx) {
  const response = await getCertificate(ctx.query.code);

  return {
    props: {
      certificate: response
    },
  }
}


