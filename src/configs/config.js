export const allowedFileFormats = {
    "application/pdf": [],
    "application/msword": [],
    "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
        [],
};

// export const serverUri = "http://127.0.0.1:8000";
export const serverUri = "http://172.16.4.163:8000"

export const resumeId = 9;

export const psRecommendation = {
    "id": 2,
    "rec_data": {
        "personal_statement": [
            "As an electronics and communication engineering graduate with experience in artificial intelligence and machine learning, I have developed strong programming skills in Python and understanding of various technologies including OOPs and HTML. My past roles as an AI intern and ML intern have allowed me to work with Git, Flask, and Heroku to deploy web applications and APIs. I am excited to bring my skills and passion for programming to a role as a web developer with expertise in Python, HTML, CSS, and JS.",
            "With a strong background in computer vision and deep learning, I am confident in my ability to design and develop high-performing websites. My experience with Pandas, Numpy, Keras, and Tensorflow will enable me to excel in integrating machine learning models into web applications. I have previously developed and deployed projects on Heroku and Git that have been praised by clients for their accuracy and efficiency. I am eager to leverage these skills and work as a Python, HTML, CSS and JS web developer.",
            "As a certified machine learning professional with strong proficiency in programming languages such as C, Python and Java, I am equipped with the tools necessary to develop dynamic and visually stunning websites. My skillset includes utilizing libraries/frameworks like Pandas, Scikit, and Keras, and deploying the applications with Git, Flask, and Heroku. Having published research papers and blogs, I am confident in my ability to deliver high-quality work as a web developer with expertise in Python, HTML, CSS and JS.",
            "With hands-on experience in developing highly accurate machine learning models, I am confident in my ability to excel as a web developer specializing in Python, HTML, CSS, and JS. My extensive knowledge in machine learning algorithms and techniques such as CNN, RNN, and LSTM, as well as experience with technologies like Git, Flask, and Heroku, allows me to build high-performance and scalable web applications. I believe that my experience in machine learning and web development can make me an asset in any team or organization.",
            "As a highly skilled and results-oriented individual, I am confident in my ability to exceed expectations as a web developer with expertise in Python, HTML, CSS, and JS. My experience with developing projects from data collection and annotations to model selection and training, combined with my proficiency in technologies such as Git, Flask, and Heroku, allows me to create dynamic and visually appealing web applications while incorporating complex machine-learning models. I am excited to bring my expertise and passion to any organization looking to excel in web development.",
            "Having completed my B.Tech degree in Electronics and Communication Engineering and acquired experience in machine learning and deep learning, I am confident in my ability to develop creative and innovative solutions as a web developer. My proficiency in programming languages like Python and C, as well as skills in machine learning algorithms and DSA, make me an ideal fit for a role requiring expertise in Python, HTML, CSS, and JS. My experience with Git, Flask, and Heroku, will enable me to design, develop and deploy high-performing web applications that are both efficient and user-friendly."
        ]
    },
    "resume": 9
};

export const responseObj = {
    "id": 10,
    "resume": 13,
    "data": {
        "personal_statement": {
            "description": ""
        },
        "personal_information": {
            "name": "Mohammad Taha Ali",
            "title": "",
            "email": "mohammadtahaali11@gmail.com",
            "github": "www.github.com/mdtaha11",
            "linkedin": "www.linkedin.com/in/mohammadtahaali"
        },
        "education": [
            {
                "degree": "B.Tech, Electronics and Communication Engineering",
                "university_name": "Galgotias College of Engineering and Technology",
                "start_date": "Jul 2018",
                "end_date": "Jun 2022"
            },
            {
                "degree": "Higher Secondary (ISC)",
                "university_name": "St. John’s School D.L.W, Varanasi",
                "start_date": "Apr 2016",
                "end_date": "Mar 2017"
            },
            {
                "degree": "High School (ICSE)",
                "university_name": "St. John’s School D.L.W, Varanasi",
                "start_date": "Apr 2014",
                "end_date": "Mar 2015"
            }
        ],
        "work_experience": [
            {
                "job_title": "Artificial Intelligence Intern",
                "company": "Flipper Code Pvt Ltd.",
                "start_date": "Sept 2021",
                "end_date": "Feb 2022",
                "descriptions": [
                    "Created projects as per client requirements based on machine, deep learning and computer vision.",
                    "Deployed the projects to web applications and APIs using Git, Flask & Heroku.",
                    "Published blogs for the major projects worked on during the internship period."
                ],
                "uuid": "47e31353b8464722909dad34efe2e878"
            },
            {
                "job_title": "Machine Learning Intern",
                "company": "Grroom",
                "start_date": "Jun 2021",
                "end_date": "Jul 2021",
                "descriptions": [
                    "Machine learning research works- web scraping, data preparation model selection, model training and improving scores.",
                    "Data collection and annotations for various image processing and computer vision tasks."
                ],
                "uuid": "d67ecb87490c43ef9dfb9d72d23a330f"
            }
        ],
        "project_experience": [
            {
                "project_name": "Hybrid Deep Neural Network for COVID-19 Detection through X-ray Images",
                "project_description": [
                    "Image processing techniques CLAHE, BM3D applied to the dataset containing COVID, non-COVID and normal X-ray images.",
                    "Trained on a concatenated Xception and ResNet50v2 model, along with CNN, to perform 3-class classification with an accuracy and recall score of 97.8% and 99% respectively."
                ],
                "tools/technologies": [
                    "Python",
                    "Deep Learning",
                    "CNN",
                    "CLAHE",
                    "Transfer Learning",
                    "OpenCV"
                ],
                "uuid": "3e92ff026a4247e09d34ecfa2276c315"
            },
            {
                "project_name": "Crime Prediction, Analysis and Criminal Tracking",
                "project_description": [
                    "The project detects crime in CCTV videos with the help of RNN, LSTM and InceptionV3.",
                    "Faces detected in the frames are stored in the database for recognition to reduce manual work which is time-taking."
                ],
                "tools/technologies": [
                    "RNN",
                    "LSTM",
                    "CNN",
                    "OpenCV",
                    "Data Visualization"
                ],
                "uuid": "c84aeccacb5f42b4abb9deb1bd58c578"
            },
            {
                "project_name": "Multiclass Classification on Highly Imbalanced Dataset",
                "project_description": [
                    "Removing outliers using inter-quartile range (IQR), SMOTE-Tomek links for handling imbalanced dataset, feature selection using correlation map, random forest classifier for classification.",
                    "Accuracy achieved was 89%."
                ],
                "tools/technologies": [
                    "LOF",
                    "Correlation Map",
                    "SMOTE",
                    "Machine Learning",
                    "Random Forest Classifier"
                ],
                "uuid": "f45f7f1018b448efb9d94e9cbd436917"
            }
        ],
        "skills": [
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
            "Postman API"
        ],
        "certifications": [
            {
                "certification_name": "Machine Learning Course",
                "certification_link": "https://www.coursera.org/account/accomplishments/certificate/7a3lpnb748za",
                "issued_organization": "Coursera",
                "certification_description": ""
            },
            {
                "certification_name": "HCIA-AI",
                "certification_link": "",
                "issued_organization": "Huawei",
                "certification_description": ""
            }
        ],
        "trainings": []
    }
}