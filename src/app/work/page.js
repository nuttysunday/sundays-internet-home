import { Timeline, TimelineContent, TimelineItem, TimelinePoint } from 'keep-react'

export const TimelineComponent = () => {
  return (
    <Timeline>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">Feb 2024 - Present, Raleigh, NC, USA</p>
          <h1 className="text-sm text-slate-200">Software Developer (Graduate Research Assistant), Wilson College of Textiles, NCSU</h1>
          <p >
            Deployed and developed a full-stack application for Certi Tester on a Raspberry Pi using Docker, hosted on the NC State network. Created a web app with Flask, allowing users to upload experiment results via text files. Established a pipeline for data cleaning, processing, and analysis. Designed a database schema with MySQL and visualized the results on a dashboard using React and Material UI. Developed RESTful API endpoints and added features for test selection and comparison plots using plotly.
          </p>
        </TimelineContent >
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">Jan 2022 -  Feb 2022, Mumbai, India  </p>
          <h1 className="text-sm text-slate-200">Software Developer, Freelancing</h1>
          <p >
            My role in the project involved collecting data, mapping parameters, processing and cleaning the data. I also trained a neural network using Tensorflow's LSTM model. To account for the highly imbalanced data, I utilized the notion of upsampling and also tuned the hyperparameters.
          </p>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelinePoint />
        <TimelineContent>
          <p className="text-sm opacity-60 leading-4 text-slate-200">July 2021- Dec 2022, Hyderabad, India</p>
          <h1 className="text-sm text-slate-200">Software Developer Intern, Ledger Forces Private Limited</h1>
          <p >
            Completed and presented data analytics as required for various charts, and OHLC data for the crypto market.
            Created a Web application using streamlit, for understanding the real-time momentum of the 10 crypto coins.
            Used BinanceAPI to get real-time data, cleansed the data, and designed database schema using PostgreSQL.
            Trained a custom deep neural network (RNN+LSTM) on Google Colab to predict real-time price movement for the crypto market.
          </p>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  )
}

export default TimelineComponent;