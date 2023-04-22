import React from "react";
import {
  Row,
  Col,
  Form,
  Button,
  Dropdown,
  DropdownButton,
} from "react-bootstrap";

const Landing = () => {
  return (
    <>
      <div className="content-wrapper content">
        <div className="sider">
          <div className="sider-top">
            <img src="/logo small.svg" alt="brand" />
          </div>
          <div className="line" />
          <div className="sider-content">
            <ul className="tabs">
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Personal Information</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Personal Statement</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Projects Expereince</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Certifications</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Work Expereince</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Skills</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Trannings</div>
              </li>
              <li className="tabs-item">
                <div className="icon">
                  <div className="bullet">
                    <img src="/bullet.svg" alt="bullet" />
                  </div>
                  <div className="user">
                    <img src="/user.svg" alt="user-icon" />
                  </div>
                </div>
                <div className="label">Education</div>
              </li>
            </ul>
            <div className="user-profile">
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                class="rounded-circle"
                style={{ width: "36px" }}
                alt="Avatar"
              />
              <div className="name">Fatimah Camacho</div>
            </div>
          </div>
        </div>
        <div className="main-content">
          <div className="header-info">
            <div>
              <h2>Hi ! User Name</h2>
              <div className="text-muted small">
                Your resume has been parsed successfully.
              </div>
              <div className="mt-3">
                Also you can edit it with our featured AI that will make your CV
                even better. Try it !
              </div>
            </div>
            <div className="d-flex" style={{ height: "38px" }}>
              <Button variant="secondary" style={{ marginRight: "16px" }}>
                Edit
              </Button>
              <DropdownButton
                id="dropdown-basic-button"
                title="Download"
                variant="primary"
              >
                <Dropdown.Item href="#/action-1">pdf</Dropdown.Item>
                <Dropdown.Item href="#/action-2">docx</Dropdown.Item>
              </DropdownButton>
            </div>
          </div>
          <div className="resume-block">
            <div class="resume-template">
              <div class="frame-parent">
                <div class="frame-group">
                  <div class="aashish-shakaya-parent">
                    <b class="aashish-shakaya">Aashish Shakaya</b>
                    <div class="nlp-engineer">NLP Engineer</div>
                  </div>
                  <div class="emailfusemachinescom-parent">
                    <div class="emailfusemachinescom">
                      email@fusemachines.com
                    </div>
                    <div class="div">|</div>
                    <div class="emailfusemachinescom">LinkedIn</div>
                    <div class="div">|</div>
                    <div class="emailfusemachinescom">GitHub</div>
                  </div>
                </div>
                <div class="as-a-natural-language-processi-wrapper">
                  <div class="as-a-natural">
                    As a Natural Language Processing (NLP) Engineer with four
                    years of experience, I am passionate about developing
                    innovative solutions that improve the way we interact with
                    technology. My love for NLP technology has driven me to push
                    boundaries and explore the limitless possibilities of
                    machine learning and artificial intelligence.
                  </div>
                </div>
              </div>
              <div class="title-parent">
                <b class="title">Project Experience</b>
                <div class="subtitle-parent">
                  <b class="aashish-shakaya">Updating Fintechnews.com</b>
                  <div class="developed-natural-language-container">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">
                        Developed natural language processing (NLP) algorithms
                        and models for text classification, sentiment analysis,
                        and named entity recognition.
                      </li>
                      <li class="developed-natural-language">
                        Worked on building chatbots and virtual assistants using
                        NLP technologies, such as intent recognition and dialog
                        management.
                      </li>
                      <li>
                        Designed and implemented machine learning models for NLP
                        tasks, such as topic modeling, summarization, and
                        question answering.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="subtitle-parent">
                  <b class="aashish-shakaya">Updating Fintechnews.com</b>
                  <div class="developed-natural-language-container">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">
                        Optimized and fine-tuned NLP models for performance and
                        accuracy, using techniques such as hyperparameter tuning
                        and feature engineering.
                      </li>
                      <li>
                        Collaborated with cross-functional teams, such as data
                        scientists, software engineers, and product managers, to
                        integrate NLP models into applications and systems, such
                        as customer service platforms or e-commerce websites.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title-group">
                <b class="title">Certifications</b>
                <div class="link1-link-2-wrapper">
                  <div class="link1-link-2-container">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">Link1</li>
                      <li>Link 2</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title-container">
                <b class="title">Work experience</b>
                <div class="subtitle-parent">
                  <b class="subtitle2">Sr. NLP Engineer, ABC Company</b>
                  <div class="aashish-shakaya">2020 - Present</div>
                  <div class="optimized-and-fine-tuned-container1">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">
                        Optimized and fine-tuned NLP models for performance and
                        accuracy, using techniques such as hyperparameter tuning
                        and feature engineering.
                      </li>
                      <li>
                        Collaborated with cross-functional teams, such as data
                        scientists, software engineers, and product managers, to
                        integrate NLP models into applications and systems, such
                        as customer service platforms or e-commerce websites.
                      </li>
                    </ul>
                  </div>
                </div>
                <div class="subtitle-parent">
                  <b class="subtitle2">Sr. NLP Engineer, ABC Company</b>
                  <div class="aashish-shakaya">2020 - Present</div>
                  <div class="optimized-and-fine-tuned-container1">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">
                        Optimized and fine-tuned NLP models for performance and
                        accuracy, using techniques such as hyperparameter tuning
                        and feature engineering.
                      </li>
                      <li>
                        Collaborated with cross-functional teams, such as data
                        scientists, software engineers, and product managers, to
                        integrate NLP models into applications and systems, such
                        as customer service platforms or e-commerce websites.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title-parent1">
                <b class="title">Skills</b>
                <div class="skill-lists">
                  <div class="natural-language-processing-container">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">
                          Natural Language Processing (NLP) expertise:
                        </b>
                        <span>
                          Demonstrating a deep understanding of NLP models and
                          techniques, such as language modeling, sequence
                          labeling, sentiment analysis, and machine translation.
                        </span>
                      </li>
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">
                          Programming languages:
                        </b>
                        <span class="natural-language-processing">
                          Expertise in programming languages like Python, Java,
                          and C++, which are commonly used in NLP development.
                        </span>
                      </li>
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">
                          Data structures and algorithms:
                        </b>
                        <span class="natural-language-processing">
                          Strong understanding of data structures and algorithms
                          is crucial for designing efficient NLP systems.
                        </span>
                      </li>
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">
                          Machine learning:
                        </b>
                        <span class="natural-language-processing">
                          Familiarity with machine learning techniques,
                          including supervised, unsupervised, and
                          semi-supervised learning.
                        </span>
                      </li>
                      <li class="developed-natural-language">
                        <b class="natural-language-processing">
                          Deep learning:
                        </b>
                        <span class="natural-language-processing">
                          Experience in deep learning frameworks such as
                          TensorFlow, Keras, and PyTorch, which are commonly
                          used in NLP applications.
                        </span>
                      </li>
                      <li>
                        <b class="natural-language-processing">
                          Statistical analysis:
                        </b>
                        <span class="natural-language-processing">
                          Proficiency in statistical techniques for language
                          processing, such as regression, clustering, and
                          classification.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title-parent2">
                <b class="title">Trannings</b>
                <div class="link1-link-2-wrapper">
                  <div class="link1-link-2-container">
                    <ul class="developed-natural-language-pro">
                      <li class="developed-natural-language">Link1</li>
                      <li>Link 2</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="title-parent3">
                <b class="title">Education</b>
                <div class="subtitle-parent1">
                  <b class="subtitle2">Education Title</b>
                  <div class="aashish-shakaya">College name</div>
                  <div class="aashish-shakaya">2020 - Present</div>
                </div>
                <div class="subtitle-parent1">
                  <b class="subtitle2">Education Title</b>
                  <div class="aashish-shakaya">College name</div>
                  <div class="aashish-shakaya">2020 - Present</div>
                </div>
              </div>
              <div class="logo-rev-1-parent">
                <img
                  class="logo-rev-1-icon"
                  alt=""
                  src="/fusemachine-logo.svg"
                />

                <div class="wwwfusemachinescom">www.fusemachines.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
