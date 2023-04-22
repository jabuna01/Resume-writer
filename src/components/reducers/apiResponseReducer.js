import { createSlice } from "@reduxjs/toolkit";

export const apiResponseReducer = createSlice({
  name: "apiResponse",
  initialState: {
    response: {
      personal_statement: {
        description: `As a Natural Language Processing (NLP) Engineer with four
        years of experience, I am passionate about developing
        innovative solutions that improve the way we interact with
        technology. My love for NLP technology has driven me to push
        boundaries and explore the limitless possibilities of
        machine learning and artificial intelligence.`,
      },
      personal_information: {
        name: "Mohammad Taha Ali",
        title: "",
        email: "mohammadtahaali11@gmail.com",
        github: "www.github.com/mdtaha11",
        linkedin: "www.linkedin.com/in/mohammadtahaali",
      },
      education: [
        {
          degree: "B.Tech, Electronics and Communication Engineering",
          university_name: "Galgotias College of Engineering and Technology",
          start_date: "Jul 2018",
          end_date: "Jun 2022",
        },
        {
          degree: "Higher Secondary (ISC)",
          university_name: "St. John’s School D.L.W, Varanasi",
          start_date: "Apr 2016",
          end_date: "Mar 2017",
        },
        {
          degree: "High School (ICSE)",
          university_name: "St. John’s School D.L.W, Varanasi",
          start_date: "Apr 2014",
          end_date: "Mar 2015",
        },
      ],
      work_experience: [
        {
          job_title: "Artificial Intelligence Intern",
          company: "Flipper Code Pvt Ltd.",
          start_date: "Sept 2021",
          end_date: "Feb 2022",
          descriptions: [
            "Created projects as per client requirements based on machine, deep learning and computer vision.",
            "Deployed the projects to web applications and APIs using Git, Flask & Heroku.",
            "Published blogs for the major projects worked on during the internship period.",
          ],
          uuid: "47e31353b8464722909dad34efe2e878",
        },
        {
          job_title: "Machine Learning Intern",
          company: "Grroom",
          start_date: "Jun 2021",
          end_date: "Jul 2021",
          descriptions: [
            "Machine learning research works- web scraping, data preparation model selection, model training and improving scores.",
            "Data collection and annotations for various image processing and computer vision tasks.",
          ],
          uuid: "d67ecb87490c43ef9dfb9d72d23a330f",
        },
      ],
      project_experience: [
        {
          project_name:
            "Hybrid Deep Neural Network for COVID-19 Detection through X-ray Images",
          project_description: [
            "Image processing techniques CLAHE, BM3D applied to the dataset containing COVID, non-COVID and normal X-ray images.",
            "Trained on a concatenated Xception and ResNet50v2 model, along with CNN, to perform 3-class classification with an accuracy and recall score of 97.8% and 99% respectively.",
          ],
          "tools/technologies": [
            "Python",
            "Deep Learning",
            "CNN",
            "CLAHE",
            "Transfer Learning",
            "OpenCV",
          ],
          uuid: "3e92ff026a4247e09d34ecfa2276c315",
        },
        {
          project_name: "Crime Prediction, Analysis and Criminal Tracking",
          project_description: [
            "The project detects crime in CCTV videos with the help of RNN, LSTM and InceptionV3.",
            "Faces detected in the frames are stored in the database for recognition to reduce manual work which is time-taking.",
          ],
          "tools/technologies": [
            "RNN",
            "LSTM",
            "CNN",
            "OpenCV",
            "Data Visualization",
          ],
          uuid: "c84aeccacb5f42b4abb9deb1bd58c578",
        },
        {
          project_name:
            "Multiclass Classification on Highly Imbalanced Dataset",
          project_description: [
            "Removing outliers using inter-quartile range (IQR), SMOTE-Tomek links for handling imbalanced dataset, feature selection using correlation map, random forest classifier for classification.",
            "Accuracy achieved was 89%.",
          ],
          "tools/technologies": [
            "LOF",
            "Correlation Map",
            "SMOTE",
            "Machine Learning",
            "Random Forest Classifier",
          ],
          uuid: "f45f7f1018b448efb9d94e9cbd436917",
        },
      ],
      skills: [
        "Python",
        "Java",
        "C",
        "DSA",
        "Machine Learning",
        "Deep Learning",
        "Computer Vision",
        "OOPS",
        "HTML",
        "Pandas",
        "NumPy",
        "Scikit",
        "Keras",
        "TensorFlow",
        "Flask",
        "Git",
        "Heroku",
        "Postman API",
      ],
      certifications: [
        {
          certification_name: "Machine Learning Course",
          certification_link:
            "https://www.coursera.org/account/accomplishments/certificate/7a3lpnb748za",
          issued_organization: "Coursera",
          certification_description: "",
        },
        {
          certification_name: "HCIA-AI",
          certification_link: "",
          issued_organization: "Huawei",
          certification_description: "",
        },
      ],
      trainings: [],
    },
  },
});

export const {
  setResponse,
  updatePersonalInfo,
  updatePersonalStatement,
  updateProjectsExperience,
  updateCertifications,
  updateWorkExperience,
  updateSkills,
  updateTrainings,
  updateEducation,
} = apiResponseReducer.actions;
export default apiResponseReducer.reducer;
