import SmartToyIcon from "@mui/icons-material/SmartToy";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import BackHandIcon from "@mui/icons-material/BackHand";
import CoronavirusIcon from "@mui/icons-material/Coronavirus";
import FlipIcon from "@mui/icons-material/Flip";
import SensorOccupiedIcon from "@mui/icons-material/SensorOccupied";
import SportsTennisIcon from "@mui/icons-material/SportsTennis";
import EdgesensorHighIcon from "@mui/icons-material/EdgesensorHigh";

//https://github.com/PiyushCC/ai-image-enhancer-web-app

const LinuxIcon = (props) => (
  <img
    src="/linux.svg"
    alt="Custom Icon"
    {...props}
    style={{ width: "72px", height: "72px" }}
  />
);

const projects = [
  {
    title: "Python Package for MCC Linux Drivers [Contribution to Open Source]",
    githubLink: "https://github.com/nuttysunday/Linux_Drivers",
    date: "2024",
    logo: <LinuxIcon />,
    description: {
      introduction:
        "This is still an ongoing project, this is my first open source project contribution",
    },
    techStack: "Python, Pypi",
  },
  {
    title: "Certi Tester Full Stack Web App",
    githubLink: "https://github.com/wjasper/certi-tester-deployment",
    date: "2024",
    logo: <EdgesensorHighIcon />,
    description: {
      introduction: "Update soon...",
    },
    techStack:
      "Python, Flask, MySQL, Javascript, React, MaterialUI, Raspberry Pi, Docker, CI/CD Pipeline, Socket Programming [real-time data], Threading",
  },
  {
    title: "Minimalistic News",
    link: "https://news.shivam.foo",
    date: "2024",
    logo: <NewspaperIcon />,
    description: {
      introduction:
        "Minimalistic News was created to provide a quick and straightforward way to access the latest news headlines. With filtering options based on country, category, and language, it offers a clean and clutter-free experience without annoying ads. I was exploring NextJS and learned its cool features like Server-side Rendering and Caching, how it caches the requeste and doesn't query to the database/external API, however for fresh updates, I am clearing the cache every 12 hours.",
    },
    techStack:
      "NextJS (React), Deployed on Vercel, Material UI, TailwindCSS, NewsAPI",
    githubLink: "https://github.com/nuttysunday/news",
  },
  {
    title: "Projected Ball Distance",
    githubLink: "https://github.com/wjasper/PingPongTracker",
    date: "2024",
    logo: <SportsTennisIcon />,
    description: {
      introduction: "Update soon...",
    },
    techStack: "Python, OpenCV",
  },

  {
    title: "Protocol-Based Deep Intrusion Detection for DoS and DDoS Attacks",
    githubLink:
      "https://github.com/nuttysunday/Protocol-Based-Deep-Intrusion-Detection-for-DoS-Normal-and-DDoS-Attacks",
    date: "May 2022",
    logo: <SensorOccupiedIcon />,
    description: {
      introduction:
        "This is actually very cool project, and my first project as a freelancer, I am very proud that it has 20 stars on Github. This is my biggest money earned at that point, (around 200 bucks for 10 hours of work). This was super motivating for me. It is acutally based on the research paper, Protocol Based Deep Intrusion Detection for DoS Normal and DDoS Attacks. So what i did was collected the data, map the parameters [trust me it was difficult], process the data, and clean it. Trained a neural network (LSTM) using Tensorflow of the notion of upsampling, because the data was highly imbalance. ",
        image: [
          { src: "/images/p_1.png", caption: "This is the screenshot from the paper used, of how to manage imbalance of data." },
          { src: "/images/p_2.png", caption: "This is the architecture of the complete model pipeline." }
        ],
    },
    techStack:
      "Python, TensorFlow, LSTM, Deep Learning, Pandas, Numpy, Matplotlib, Sklearn",
    specialInfo :[
     { text: "It has 20 Stars on Github" },
     { text: "Sole repository for the paper mentiond on paper with code", link:"https://paperswithcode.com/paper/protocol-based-deep-intrusion-detection-for"},
     { text: "Based on a paper", link:"https://ieeexplore.ieee.org/stamp/stamp.jsp?tp=&arnumber=9656911"}
    ],
  
    },

  {
    title: "Image Colorization",
    date: "Sept 2021",
    logo: <FlipIcon />,
    description: {
      introduction:"This was my undergrad project, my work was mainly related to the backend, and I trained and exported the deep learning model, I used Google Collab for the first time, and was pretty impressed with how fast GPUs it has, it was pretty cool, the model used to take input as Black and White image and spit out coloured image. Developed a neural network model inspired by the research paper titled Let There Be Color! Using the TensorFlow framework. The project involved meticulous data cleansing and preprocessing. I subsequently, trained the neural network model, enabling it to transform grayscale images into vividly coloured representations.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/TuPTcf4F_EE?si=xSbXSscLsUtWalxW",
        image: [
          { src: "/images/ic_1.jpg", caption: "This is the screenshot of the actual output of my model." },
          { src: "/images/ic_2.png", caption: "This is the architecture used from the paper: 'Let there be Color!'" }
        ],
    },
    githubLink:
      "https://colab.research.google.com/drive/1LHuboysL-nvAOni9WLAMekQEWJyjYQqX?usp=sharing",
    techStack: "Python, TensorFlow, Google Colab, CNN, Neural Networks",
    specialInfo :[
      { text: "Based on a paper", link:"https://iizuka.cs.tsukuba.ac.jp/projects/colorization/en/"},
      { text: "Used Google Colab for training model"},
     ],
  },
  {
    title: "Healthcare Chatbot",
    githubLink: "https://github.com/nuttysunday/healthcare_chatbot",
    date: "March 2022",
    logo: <SmartToyIcon />,
    description: {
      introduction:"I believe this to be an okayish project, not super proud of it, but it's alright. Created a healthcare chatbot which was proficient in engaging in human-like dialogues through the application of Natural Language Processing (NLP) techniques, demonstrating a remarkable 92% accuracy in disease prediction when provided with symptoms as input",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/GEdzmrP38Ec?si=KpTOYmQQiP0cFAj6",
    },
    techStack:
      "Python, TensorFlow, NLP, Sklearn, Seaborn, Numpy, Pandas, Streamlit",
  },
  {
    title: "Hand Gesture Recognition",
    githubLink: "https://github.com/nuttysunday/Hand-Gesture-Recognition",
    date: "May 2021",
    logo: <BackHandIcon />,
    description: {
      introduction: "This was my undergrad project, I was still very new to programming, and as you can see in the video demonstration I looked very serious (frustrated), as I was not used to getting annoyed by the bugs as I am now. I also remember my friend Akash helped me fix one bug, lol. I also posted this on Reddit and got a lot of upvotes, hehe. Developed this project using OpenCV and Mediapipe, users can control video playback, including play/pause functionality, as well as adjust the volume of videos being played on their system.",
      youTubeEmbedSrc:
        "https://www.youtube.com/embed/GPhvTHByZdo?si=gVNtKda2kGTpFo-3",
    },
    techStack: "Python, OpenCV, Mediapipe, Pycaw, VLC",
  },
  {
    title: "Machine Learning and Data Analysis on Covid-19",
    githubLink: "https://github.com/nuttysunday/Covid19-Prediction",
    date: "Dec 2020",
    logo: <CoronavirusIcon />,
    description: {
      introduction: "This project is very close to my heart, as it was the first one I did on my own, got out of tutorial hell, and I am still very proud of it, one cool thing about it is I sold this to a YouTuber for ($50 bucks), so it was my life's first earning. The project used Matplotlib and Seaborn to create visually compelling representations of COVID-19 data, and machine learning (polynomial regression) to predict the number of cases over a certain period, felt like a magician who could predict the future lol.",youTubeEmbedSrc:
        "https://www.youtube.com/embed/ue7DTDzMCMo?si=wOvbmLQLhZhEvVp1",
    },
    techStack:
      "Python, Pandas, Numpy, Matplotlib, Seaborn, Plotly, Polynomial regression, Machine Learning, Jupyter Notebook",
  },
];

export default projects;