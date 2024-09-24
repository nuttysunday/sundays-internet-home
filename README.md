WIll need to see about rendering stuff# sundays-internet-home


#loading animation
#work on some prerendering logic?
#using text data in json instead
#linking out

export default function Home() {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Technologies I have used:</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Languages</h2>
          <p>Python, JavaScript, SQL, HTML/CSS</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Frameworks & API</h2>
          <p>NextJS, React, Material UI, TailwindCSS, NodeJS, ExpressJS, Flask, RestAPI, Axios, FetchAPI, Postman</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Database, Cloud & Tools</h2>
          <p>MySQL, MongoDB, Google Cloud, Docker, GitHub Actions, Vite, Webpack, npm, git</p>
        </div>
        <div className="bg-gray-800 text-white p-4 rounded-lg shadow-md">
          <h2 className="font-semibold">Data Science Tools</h2>
          <p>TensorFlow, scikit-learn, OpenCV, NumPy, pandas, Plotly, Seaborn, Matplotlib, Streamlit, Mediapipe</p>
        </div>
      </div>
    </div>
  );
}

github pipeline