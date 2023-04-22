import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Landing = () => {
  const data = useSelector((state) => state?.apiResponse?.response);
  return (
    <>
      <div className="resume-block">
        <div class="resume-template">
          {/* Personal Information */}
          <div class="frame-parent">
            <div class="frame-group">
              <div class="aashish-shakaya-parent">
                <b class="aashish-shakaya">
                  {data?.personal_information?.name}
                </b>
                <div class="nlp-engineer">
                  {data?.personal_information?.role}
                </div>
              </div>
              <div class="emailfusemachinescom-parent">
                <div class="emailfusemachinescom">
                  <a
                    class="emailfusemachinescom"
                    href={`mailto:${data?.personal_information?.email}`}
                    target="_blank"
                  >
                    {data?.personal_information?.email}
                  </a>
                </div>
                <div class="div">|</div>
                <div class="emailfusemachinescom">
                  <a
                    class="emailfusemachinescom"
                    href={`https://${data?.personal_information?.linkedin}`}
                    target="_blank"
                  >
                    LinkedIn
                  </a>
                </div>
                <div class="div">|</div>
                <div class="emailfusemachinescom">
                  <a
                    class="emailfusemachinescom"
                    href={`https://${data?.personal_information?.github}`}
                    target="_blank"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
            <div class="as-a-natural-language-processi-wrapper">
              <div class="as-a-natural">
                {data?.personal_statement.description??""}
              </div>
            </div>
          </div>

          {/* Project experience */}
          {data?.project_experience?.length > 0 && (
            <div class="title-parent">
              <b class="title">Project Experience</b>
              {data?.project_experience?.map((project) => (
                <div class="subtitle-parent">
                  <b class="aashish-shakaya">{project.project_name}</b>
                  <div class="developed-natural-language-container">
                    <ul class="developed-natural-language-pro">
                      {project.project_description?.map((description) => (
                        <li class="developed-natural-language">
                          {description}
                        </li>
                      ))}

                      <li class="developed-natural-language">
                        <u>Technologies Used:</u>
                        <ul>
                          {project["tools/technologies"]?.map((tool) => (
                            <li class="developed-natural-language">{tool}</li>
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
            <div class="title-group">
              <b class="title">Certifications</b>
              <div class="link1-link-2-wrapper">
                <div class="link1-link-2-container">
                  <ul class="developed-natural-language-pro">
                    {data?.certifications?.map((certificate) => (
                      <li>
                        <a
                          className="certificate-link"
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
            <div class="title-container">
              <b class="title">Work experience</b>

              {data?.work_experience?.map((experience) => (
                <div class="subtitle-parent">
                  <b class="subtitle2">
                    {experience.job_title}, {experience.company}
                  </b>
                  <div class="aashish-shakaya">
                    {experience.start_date} - {experience.end_date}
                  </div>
                  <div class="optimized-and-fine-tuned-container1">
                    <ul class="developed-natural-language-pro">
                      {experience.descriptions?.map((description) => (
                        <li class="developed-natural-language">
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
            <div class="title-parent1">
              <b class="title">Skills</b>
              <div class="skill-lists">
                <div class="natural-language-processing-container">
                  <ul class="developed-natural-language-pro">
                    {data?.skills?.map((skill) => (
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">{skill}</b>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* Trannings */}
          {data?.trainings.length > 0 && (
            <div class="title-parent2">
              <b class="title">Trannings</b>
              <div class="link1-link-2-wrapper">
                <div class="link1-link-2-container">
                  <ul class="developed-natural-language-pro">
                    {data?.trainings?.map((training) => (
                      <li class="developed-natural-language">
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
            <div class="title-parent3">
              <b class="title">Education</b>
              {data?.education?.map((education) => (
                <div class="subtitle-parent1">
                  <b class="subtitle2">{education.degree}</b>
                  <div class="aashish-shakaya">{education.university_name}</div>
                  <div class="aashish-shakaya">
                    {education.start_date} - {education.end_date}
                  </div>
                </div>
              ))}
            </div>
          )}
          <div class="logo-rev-1-parent">
            <img class="logo-rev-1-icon" alt="" src="/fusemachine-logo.svg" />

            <div class="wwwfusemachinescom">www.fusemachines.com</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
