import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const data = useSelector((state) => state?.apiResponse?.response);
  return (
    <>
      <div classNameName="resume-block" id="resume">
        <div className="resume-template">
          {/* Personal Information */}
          <div className="frame-parent">
            <div className="frame-group">
              <div className="aashish-shakaya-parent">
                <b className="aashish-shakaya">
                  {data?.personal_information?.name}
                </b>
                <div className="nlp-engineer">
                  {data?.personal_information?.role}
                </div>
              </div>
              <div className="emailfusemachinescom-parent">
                <div className="emailfusemachinescom">
                  <a
                    className="emailfusemachinescom"
                    href={`mailto:${data?.personal_information?.email}`}
                    target="_blank"
                  >
                    {data?.personal_information?.email}
                  </a>
                </div>
                <div className="div">|</div>
                <div className="emailfusemachinescom">
                  <a
                    className="emailfusemachinescom"
                    href={`https://${data?.personal_information?.linkedin}`}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div className="div">|</div>
                <div className="emailfusemachinescom">
                  <a
                    className="emailfusemachinescom"
                    href={`https://${data?.personal_information?.github}`}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div className="as-a-natural-language-processi-wrapper">
              <div className="as-a-natural">
                {data?.personal_statement.description??""}
              </div>
            </div>
          </div>

          {/* Project experience */}
          {data?.project_experience?.length > 0 && (
            <div className="title-parent">
              <b className="title">Project Experience</b>
              {data?.project_experience?.map((project) => (
                <div className="subtitle-parent">
                  <b className="aashish-shakaya">{project.project_name}</b>
                  <div className="developed-natural-language-container">
                    <ul className="developed-natural-language-pro">
                      {project.project_description?.map((description) => (
                        <li className="developed-natural-language">
                          {description}
                        </li>
                      ))}

                      <li className="developed-natural-language">
                        <u>Technologies Used:</u>
                        <ul>
                          {project["tools/technologies"]?.map((tool) => (
                            <li className="developed-natural-language">{tool}</li>
                          ))}
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {data?.certifications?.length > 0 && (
            <div className="title-group">
              <b className="title">Certifications</b>
              <div className="link1-link-2-wrapper">
                <div className="link1-link-2-container">
                  <ul className="developed-natural-language-pro">
                    {data?.certifications?.map((certificate) => (
                      <li>
                        <a
                          classNameName="certificate-link"
                          href={certificate.certification_link}
                          target="_blank"
                        >
                          {certificate.certification_name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Work experience */}
          {data?.work_experience?.length > 0 && (
            <div className="title-container">
              <b className="title">Work experience</b>

              {data?.work_experience?.map((experience) => (
                <div className="subtitle-parent">
                  <b className="subtitle2">
                    {experience.job_title}, {experience.company}
                  </b>
                  <div className="aashish-shakaya">
                    {experience.start_date} - {experience.end_date}
                  </div>
                  <div className="optimized-and-fine-tuned-container1">
                    <ul className="developed-natural-language-pro">
                      {experience.descriptions?.map((description) => (
                        <li className="developed-natural-language">
                          {description}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {data?.skills?.length > 0 && (
            <div className="title-parent1">
              <b className="title">Skills</b>
              <div className="skill-lists">
                <div className="natural-language-processing-container">
                  <ul className="developed-natural-language-pro">
                    {data?.skills?.map((skill) => (
                      <li className="developed-natural-language">
                        <b className="natural-language-processing">{skill}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Trannings */}
          {data?.trainings.length > 0 && (
            <div className="title-parent2">
              <b className="title">Trannings</b>
              <div className="link1-link-2-wrapper">
                <div className="link1-link-2-container">
                  <ul className="developed-natural-language-pro">
                    {data?.trainings?.map((training) => (
                      <li className="developed-natural-language">
                        {training.title}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Education */}
          {data?.education?.length > 0 && (
            <div className="title-parent3">
              <b className="title">Education</b>
              {data?.education?.map((education) => (
                <div className="subtitle-parent1">
                  <b className="subtitle2">{education.degree}</b>
                  <div className="aashish-shakaya">{education.university_name}</div>
                  <div className="aashish-shakaya">
                    {education.start_date} - {education.end_date}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div className="logo-rev-1-parent">
            <img className="logo-rev-1-icon" alt="" src="/fusemachine-logo.svg" />

            <div className="wwwfusemachinescom">www.fusemachines.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
