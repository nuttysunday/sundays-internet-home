/* eslint-disable react/no-unescaped-entities */

export default function Home() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-2 md:px-8"> {/* Adjusted padding */}
      <h1 className="underline">Technologies I've used:</h1>
      <div className="space-y-4">
        <div className="p-2"> {/* Reduced padding */}
          <h2 className="font-semibold">Languages:</h2>
          <p className="text-gray-100">Python, JavaScript, SQL, HTML/CSS</p>
        </div>
        <div className="p-2"> {/* Reduced padding */}
          <h2 className="font-semibold">Frameworks & API:</h2>
          <p className="text-gray-100">NextJS, React, Material UI, TailwindCSS, NodeJS, ExpressJS, Flask, RestAPI, Axios, FetchAPI, Postman</p>
        </div>
        <div className="p-2"> {/* Reduced padding */}
          <h2 className="font-semibold">Database, Cloud & Tools:</h2>
          <p className="text-gray-100">MySQL, MongoDB, Google Cloud, Docker, GitHub Actions, Vite, Webpack, npm, git, CI/CD pipeline</p>
        </div>
        <div className="p-2"> {/* Reduced padding */}
          <h2 className="font-semibold">Self-hosting:</h2>
          <p className="text-gray-100">Raspberry Pi, Cloudflare Tunnel, Debian OS, Firewall Configurations, Docker Watchtower, Shell scripting, OpenVPN & SMTP protocols, remote desktop/SSH setups (XRDP Protocol)</p>
        </div>
        <div className="p-2"> {/* Reduced padding */}
          <h2 className="font-semibold">Data Science Tools:</h2>
          <p className="text-gray-100">TensorFlow, scikit-learn, OpenCV, NumPy, pandas, Plotly, Seaborn, Matplotlib, Streamlit, Mediapipe</p>
        </div>
      </div>
    </div>
  );
}
