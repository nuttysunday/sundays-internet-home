/* eslint-disable react/no-unescaped-entities */

import {
  Timeline,
  TimelineContent,
  TimelineItem,
  TimelinePoint,
} from "keep-react";

export const TimelineComponent = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">
            Feb 2024 - Present, Raleigh, NC, USA
          </p>
          <h1 className="text-sm text-slate-200">
            Software Developer (Graduate Research Assistant), Wilson College of
            Textiles, NCSU
          </h1>
          <p className="text-sm" style={{ marginLeft: "1rem" }}>
            <span className="text-slate-200 font-bold">
              Certi Tester Web Application:{" "}
            </span>
            Developed an industry-first, open-source web app for Certi Tester, deployed on a Raspberry Pi via Docker and hosted on a local network. Built RESTful API endpoints with Flask for real-time data acquisition, processing, and analysis. Designed the database schema using MySQL as the backend. Enabled users to directly control the filter media tests through the web browser, utilizing threading to manage and sync timers. Implemented a Flask Socket server to display data in real-time on the dashboard, with the ability to push results to the database. Designed an interactive dashboard using React, Material UI, and Plotly for intuitive experiment analysis and data visualization. Developed a CI/CD pipeline with GitHub Actions to automate image building and deployment to Docker Hub.
          </p>

          <p className="text-sm" style={{ marginLeft: "1rem" }}>
            <span className="text-slate-200 font-bold">
              Ping-pong ball tracker system:{" "}
            </span>
            Developed an open-source visualization system to track a fast-paced
            ping pong ball, leveraging OpenCV and Python. This system accurately
            predicted the landing distance of a ping pong ball launched from a
            catapult. By post-processing real-time video data captured by a
            Raspberry Pi camera, the system tracked the ball's trajectory and
            estimated its impact point.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">
            Jan 2022 - Feb 2022, Mumbai, India{" "}
          </p>
          <h1 className="text-sm text-slate-200">
            Software Developer, Freelancing
          </h1>
          <p className="text-sm" style={{ marginLeft: "1rem" }}>
            The role in the project involved collecting data, mapping
            parameters, processing and cleaning the data. A neural network was
            trained using TensorFlow's LSTM model, with upsampling applied to
            address the highly imbalanced data and hyperparameters tuned for
            optimization.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">
            July 2021- Dec 2022, Hyderabad, India
          </p>
          <h1 className="text-sm text-slate-200">
            Software Developer Intern, Ledger Forces Private Limited
          </h1>
          <p className="text-sm" style={{ marginLeft: "1rem" }}>
            Developed a Streamlit web application for real-time crypto market
            analysis, providing interactive visualizations of OHLC data and
            momentum indicators for the top 10 cryptocurrencies. Utilized the
            Binance API to obtain real-time data, cleansed it, and designed a
            PostgreSQL database schema. Trained a custom deep neural network
            (RNN+LSTM) on Google Colab to predict real-time price movements in
            the crypto market.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
};

export default TimelineComponent;
