/* eslint-disable react/no-unescaped-entities */


export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-6" >
      <h1 className="underline">Technologies I've used:</h1>
      <div className="space-y-4">
        <div className="p-4 ">
          <h2 className="font-semibold ">Languages:</h2>
          <p className="text-gray-100">Python, JavaScript, SQL, HTML/CSS</p>
        </div>
        <div className="p-4">
          <h2 className="font-semibold ">Frameworks & API:</h2>
          <p className="text-gray-100">NextJS, React, Material UI, TailwindCSS, NodeJS, ExpressJS, Flask, RestAPI, Axios, FetchAPI, Postman</p>
        </div>
        <div className="p-4">
          <h2 className="font-semibold ">Database, Cloud & Tools:</h2>
          <p className="text-gray-100">MySQL, MongoDB, Google Cloud, Docker, Raspberry Pi, GitHub Actions, Vite, Webpack, npm, git</p>
        </div>
        <div className="p-4">
          <h2 className="font-semibold ">Data Science Tools:</h2>
          <p className="text-gray-100">TensorFlow, scikit-learn, OpenCV, NumPy, pandas, Plotly, Seaborn, Matplotlib, Streamlit, Mediapipe</p>
        </div>
      </div>
    </div>
  );
}
