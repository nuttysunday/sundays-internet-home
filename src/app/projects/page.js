export default function Projects() {
  const projects = [
    {
      title: "Healthcare Chatbot (05/2022): Created an advanced healthcare chatbot proficient in engaging in human-like dialogues through the application of Natural Language Processing (NLP) techniques, demonstrating a remarkable 92% accuracy in disease prediction when provided with symptoms as input.",
      videoLink: "https://drive.google.com/file/d/1zWrdWFAaQm38tT1EBCBgKdF6SwRbuUO7/preview",
    },
    {
      title: "Image Colorization (10/2021): Developed a neural network model inspired by the research paper titled Let There Be Color! using the TensorFlow framework. The project involved meticulous data cleansing and preprocessing. Subsequently, trained the neural network model, enabling it to perform the transformation of grayscale images into vividly colored representations.",
      videoLink: "https://drive.google.com/file/d/1cNGXz9N1Ak1dMZVqn65RyD6JcWLyQOFj/preview",
    },
    {
      title: "Hand Gesture Recognition (05/2021): Developed this project using OpenCV and Mediapipe, users can control video playback, including play/pause functionality, as well as adjust the volume of videos being played on their system.",
      videoLink: "https://drive.google.com/file/d/15YVr_-sqVV54MKKm3Py71euHl05ZqJWy/preview",
    },
    {
      title: "Data Science and Machine Learning on Covid19 Data Visualization (12/2020): The project used Matplotlib and Seaborn to create visually compelling representations of COVID-19 data, and machine learning (polynomial regression) to predict the number of cases over a certain time period.",
      videoLink: "https://drive.google.com/file/d/1JS48hgomtaBbm24MmNJH2ivcg89ujjKn/preview",
    },
  ];

  return (
    <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
      {projects.map((project, index) => (
        <div key={index} style={{ flex: "0 0 calc(50% - 20px)", marginBottom: "40px", marginRight: "20px" }}>
          <h3>{project.title}</h3>
          {project.videoLink && (
            <div style={{ marginTop: "10px" }}>
              <iframe
                width="320"
                height="180"
                src={project.videoLink}
                title="Project Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
