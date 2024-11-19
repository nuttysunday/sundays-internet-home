// src/app/blogs/self-hosting/page.js
import { Box, Button } from "@mui/material";
import Link from "next/link";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

const SelfHostingPage = () => {
  const commonTextStyle = "text-orange-400 text-left md:text-justify";
  const tableStyle = `${commonTextStyle} border border-gray-400 px-4 py-2`;

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <Box>
        <Link href="/blogs" passHref>
          <ArrowBackIcon
            sx={{
              color: "white",
              cursor: "pointer",
              "&:hover": {
                color: "#fae263",
              },
              position: "absolute",
              left: "0rem",
              marginTop: "1rem",
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          />
        </Link>
        <div>
          <p
            className={`${commonTextStyle} text-2xl font-bold underline decoration-4`}
          >
            Cool kubernetes
          </p>
          <p className={`${commonTextStyle} italic opacity-90 text-sm`}>
            20th Nov 2024, 8 min read
          </p>
        </div>
      </Box>

      <a
        href="https://github.com/nuttysunday/cool-kubernetes"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white text-lg font-bold underline"
      >
        View on Github
      </a>

      <p className={commonTextStyle}>
        Implemented a single-node Kubernetes cluster locally using Docker
        Desktop and containerized an application built with Express.js and
        Node.js. Deployed the application using two distinct approaches:
        monolithic and microservices architectures. Conducted load testing with
        the Locust framework to evaluate pod auto-scaling behavior based on
        varying load levels. Demonstrated the advantages of the microservices
        approach, where only the specific service under high demand scaled up,
        eliminating the need to scale the entire application.{" "}
      </p>

      <p className={commonTextStyle}>
        Hi guys, hope you are doing well. I am learning and writing this article
        simultaneously, so please take this with a grain of salt.
      </p>

      <div className="flex items-center justify-center">
        <div className="w-300px sm:w-[1000px] h-[225px] sm:h-[500px] overflow-hidden rounded-2xl">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/ChnmwBABMaM?si=mKP5WTdV3Ut-BJpb"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>

      <div className="flex flex-col items-center">
        <p className={`${commonTextStyle} text-white`}>
          Youtube video showing the comparison of monolithic vs. microservices
          architecture, along with horizontal pod auto-scaling with load testing
          demo.
        </p>
      </div>

      <div>
        <ul className="text-orange-400">
          <li>
            <Link href="#motivation">
              <span>1. </span>
              <span className="underline">Motivation for project</span>
            </Link>
          </li>
          <li>
            <Link href="#tech-stack">
              <span>2. </span>
              <span className="underline">Tech stack</span>
            </Link>
          </li>

          <li>
            <Link href="#mono">
              <span>3. </span>
              <span className="underline">Monolithic architecture</span>
            </Link>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <Link href="#mono-setup">
                  <span>3.1 </span>
                  <span className="underline">Setup explaination</span>
                </Link>
              </li>
              <li>
                <Link href="#mono-before-test">
                  <span>3.2 </span>
                  <span className="underline">
                    Inital state: before loading test
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#mono-during-test">
                  <span>3.3 </span>
                  <span className="underline">
                    Stress state: during loading test
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#mono-after-test">
                  <span>3.4 </span>
                  <span className="underline">
                    Final state: after loading test
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="#micro">
              <span>4. </span>
              <span className="underline">Microservices architecture</span>
            </Link>
            <ul style={{ paddingLeft: "20px" }}>
              <li>
                <Link href="#micro-setup">
                  <span>4.1 </span>
                  <span className="underline">Setup explaination</span>
                </Link>
              </li>
              <li>
                <Link href="#micro-before-test">
                  <span>4.2 </span>
                  <span className="underline">
                    Inital state: before loading test
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#micro-during-test">
                  <span>4.3 </span>
                  <span className="underline">
                    Stress state: during loading test
                  </span>
                </Link>
              </li>
              <li>
                <Link href="#micro-after-test">
                  <span>4.4 </span>
                  <span className="underline">
                    Final state: after loading test
                  </span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            <Link href="#conclusion">
              <span>5. </span>
              <span className="underline">Monolithic vs Microservices</span>
            </Link>
          </li>
        </ul>
      </div>

      <p
        id="motivation"
        className={`${commonTextStyle} text-xl font-bold`}
      >
        1. Motivation for project:-
      </p>

      <p className={commonTextStyle}>
        A few days back I was watching the Olympics on Jio cinema, and I saw 4.5
        Crore live users, and in the evening it was around 20 lakh live users.
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            src="/images/cool-kubernetes/image31.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>Peak time</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/cool-kubernetes/image30.png"
            alt="Description of image"
            className="rounded-lg max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Late night time
          </p>
        </div>
      </div>

      <p className={commonTextStyle}>
        From this I got curious about how they might be scaling up or down
        depending upon the load, to optimize the service and cost-cutting, and
        then I read more about how it’s done using Kubernetes and docker.
      </p>

      <p
        id="tech-stack"
        className={`${commonTextStyle} text-xl font-bold`}
      >
        2. Tech stack:-
      </p>

      <table>
        <thead>
          <tr>
            <th className={tableStyle}>Technology</th>
            <th className={tableStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tableStyle}>Server application</td>
            <td className={tableStyle}>Javascript, NodeJS, Express</td>
          </tr>
          <tr>
            <td className={tableStyle}>Containerization</td>
            <td className={tableStyle}>Docker, Docker Image, Dockerhub</td>
          </tr>
          <tr>
            <td className={tableStyle}>Kubernetes Cluster</td>
            <td className={tableStyle}>
              Kubernetes in Docker Desktop [Create single node, local k8
              cluster]
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Load Testing</td>
            <td className={tableStyle}>Locust framework in Python</td>
          </tr>
          <tr>
            <td className={tableStyle}>k8 Services</td>
            <td className={tableStyle}>
              Loadbalancer, NodePort, Deployment, Pods, Horizontal Auto Scaling
            </td>
          </tr>
          <tr>
            <td className={tableStyle}> Kubernetes Dashboard </td>
            <td className={tableStyle}>
              keep track of pods and resource utilization{" "}
            </td>
          </tr>
          <tr>
            <td className={tableStyle}> kubectl </td>
            <td className={tableStyle}>
              command line tool to interact with k8 cluster{" "}
            </td>
          </tr>
        </tbody>
      </table>

      <table>
        <thead>
          <tr>
            <th className={tableStyle}>Term</th>
            <th className={tableStyle}>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tableStyle}>Docker</td>
            <td className={tableStyle}>
              A tool used to create and manage a container. Think of a container
              similar to a VM with everything needed for the code to run and
              it's isolated from the host machine.
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Docker Image</td>
            <td className={tableStyle}>
              After a container is created, we take a snapshot of the running
              instance of the container, known as a docker image, which is often
              uploaded to Dockerhub. The image can be used to create a running
              instance/docker container from it.
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Kubernetes</td>
            <td className={tableStyle}>
              A tool that pulls the image from Dockerhub and can create new
              containers or delete the running containers depending upon the
              load.
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Pods</td>
            <td className={tableStyle}>
             Smallest unit which can be deployed in k8. A pod can have multiple containers
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Cluster</td>
            <td className={tableStyle}>
            There is master node and multiple worker nodes. The master node is the brain, manages load between the workers. Cluster can have pods spread across multiple differnet nodes.
            </td>
          </tr>
          <tr>
            <td className={tableStyle}>Node</td>
            <td className={tableStyle}>
A simple VM or physical computer.            </td>
          </tr>
        </tbody>
      </table>


      <p className={commonTextStyle}>
       Heirarchy in easy term:
      </p>

      <p className={commonTextStyle}>
      Cluster &gt; Node &gt; Pod &gt; Container
</p>


      <p className={commonTextStyle}>
        To run Kubernetes locally we use the feature which is inbuilt docker
        desktop and can be enabled in the settings.
      </p>
      <p className={commonTextStyle}>
        To create load on an API endpoint we use a tool called locust. This
        shows us if the k8s is working properly and if scaling correctly.
      </p>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            src="/images/cool-kubernetes/image9.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[800px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Kubernetes Dashboard
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/cool-kubernetes/image21.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[800px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            Locust Framework
          </p>
        </div>
      </div>

      <p id="mono" className={`${commonTextStyle} text-xl font-bold`}>
        3. Monolithic architecture:-
      </p>

      <p id="mono-setup" className={`${commonTextStyle} text-lg font-bold`}>
        3.1. Setup explaination:-
      </p>

      <p className={commonTextStyle}>
        In this practice, what we do is put all the software in one single
        container, this is really easy to setup, but it has few drawbacks.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image34.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[600px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Packing the full application in single pod
        </p>
      </div>

      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            src="/images/cool-kubernetes/image32.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            We have 3 endpoints defined here and some dummy service which is
            triggered after a request is made to an endpoint.
          </p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/cool-kubernetes/image33.png"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${commonTextStyle} mt-4 text-white`}>
            This is the dockerfile. And we create a docker image of this
            software and push it to docker hub
          </p>
        </div>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image15.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Kubernetes configuration files
        </p>
      </div>

      <p className={commonTextStyle}>Kubernetes configuration files:</p>

      <ul className={`${commonTextStyle} list-disc pl-5`}>
        <li>
          <strong>deployment.yml:</strong> Defines the structure of an
          individual pod, including its port details, resource requirements, and
          limits.
        </li>
        <li>
          <strong>hpa.yml:</strong> Specifies the minimum number of replicas and
          provides scaling instructions based on usage.
        </li>
        <li>
          <strong>service.yml:</strong> Acts as a Load Balancer, distributing
          the load evenly to prevent overwhelming a single pod and improving
          performance.
        </li>
      </ul>

      <p className={commonTextStyle}>
        Now the problem with this is, if the load at a particular endpoint
        increases then multiple containers would spin up, even though traffic is
        only being directed at a specific endpoint.
      </p>

      <p id="mono-before-test" className={`${commonTextStyle} text-lg font-bold`}>
        3.2. Inital state: before loading test
      </p>

      <p className={commonTextStyle}>We have 3 replicas of our application</p>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image24.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Inital State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image23.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 terminal: Inital State
        </p>
      </div>

      <p id="mono-during-test" className={`${commonTextStyle} text-lg font-bold`}>
        3.3. Stress state: during loading test
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image14.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Starting Load Test
        </p>
      </div>

      <p className={commonTextStyle}>
        Even tho only the load is increasing at particular service amongst (/,
        /service_a, /service_b), our full application would be scaled up.
      </p>
      <p className={commonTextStyle}>Load at its peak (10k user per second)</p>

      <p className={commonTextStyle}>All 15 pods up and running.</p>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image27.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Stress State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image22.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Terminal: Stress State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image17.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Load balancer makes sure to distribute the load as you can see in the
          picture
        </p>
      </div>

      <p className={commonTextStyle}>
        This is very easy to set up, but however, comes with a big drawback and
        can be quite expensive in some cases.
      </p>

      <p id="mono-after-test" className={`${commonTextStyle} text-lg font-bold`}>
        3.4 Final state: after loading test
      </p>

      <p className={commonTextStyle}>Kubernetes scaling down the application</p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image5.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Final State
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image8.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Terminal: Final State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image21.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Excellant performance under high load, 0 failure rate
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image7.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Locust report result
        </p>
      </div>

      <p id="micro" className={`${commonTextStyle} text-xl font-bold`}>
        4. Microservices architecture:-
      </p>

      <p id="micro-setup" className={`${commonTextStyle} text-lg font-bold`}>
        4.1. Setup explaination:-
      </p>
      <p className={commonTextStyle}>
        Decoupling tightly packed services in the monolithic architecture and
        giving each its own express server, and packing it in its own pod.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image25.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[600px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Packing the microservices in its own pod
        </p>
      </div>

      <p className={commonTextStyle}>
        Also set up a proxy server which would redirect the request to correct
        pod service A or B. This proxy server also act as load balancer, that is
        distribute the load for service B amongst the pod B replicas improving
        performance
      </p>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image19.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Giving proxy server its own express server
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image26.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Service A and B its own express server
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image1.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Dockerzing all the express server and building its image and
          publishing on Dockerhub
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image29.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Hpa and proxy server which also acts as a loadbalancer
        </p>
      </div>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image4.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Deployment configuration for individual service
        </p>
      </div>

      <p className={commonTextStyle}>Kubernetes configuration files:</p>

      <ul className={`${commonTextStyle} list-disc pl-5`}>
        <li>
          <strong>deployment.yml:</strong> Indicating, pod size for each service.
        </li>
        <li>
          <strong>hpa.yml:</strong> Independent scaling criteria for individual
          service proxy-server-deployment.yml: Allocation sufficient resources
          to proxy server and making it load balancer type.
        </li>
      </ul>

      <p id="micro-before-test" className={`${commonTextStyle} text-lg font-bold`}>
        4.2.Inital state: before loading test:-
      </p>

      <p className={`${commonTextStyle}`}>
        Total 5 pods:- 1 replica of proxy server, 2 replica of pod of service A,
        2 replica of pod of service B
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image3.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Inital State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image35.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Terminal: Inital State
        </p>
      </div>

      <p id="micro-during-test" className={`${commonTextStyle} text-lg font-bold`}>
        4.3. Stress state: during loading test
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image6.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Starting loading test on http://localhost:80/service_b So this should
          spin up more replicas only of service b pods, unlike the full
          application in monolithic approach.
        </p>
      </div>

      <p className={`${commonTextStyle}`}>
        5 out of 5 replicas of service B have been spun, not of service A nor
        the full application or proxy server.
      </p>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image11.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Stress State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image18.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Terminal: Stress State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image20.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Load balance distributing the load
        </p>
      </div>

      <p id="micro-after-test" className={`${commonTextStyle} text-lg font-bold`}>
        4.4. Final state: after loading test
      </p>
      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image3.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Dashboard: Final State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image10.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          k8 Terminal: Final State
        </p>
      </div>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/cool-kubernetes/image2.png"
          alt="Description of image"
          className="rounded-lg w-full max-w-[800px]"
        />
        <p className={`${commonTextStyle} mt-4 text-white`}>
          Locust report result
        </p>
      </div>

      <p
        id="conclusion"
        className={`${commonTextStyle} text-xl font-bold`}
      >
        5. Monolithic vs Microservices:-
      </p>


      <p className={commonTextStyle}>
       I obviously know, how complicated an acutal application might be, specially when a database is involved, because of simultaneous disk I/O operations,
       resulting in data inconsistency, race conditions, when multiple services access same resouces, message queing, etc. But this was my attempt to explore k8.
      </p>

      <table>
        <thead>
          <tr>
            <th className={tableStyle}>Monolithic</th>
            <th className={tableStyle}>Microservices</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className={tableStyle}>All services tightly coupled</td>
            <td className={tableStyle}>Services loosely coupled</td>
          </tr>
          <tr>
            <td className={tableStyle}>Full application is packaged in a pod</td>
            <td className={tableStyle}>Each service gets its own pod</td>
          </tr>
          <tr>
            <td className={tableStyle}>Easy to implement</td>
            <td className={tableStyle}>Challenging to implement</td>
          </tr>
          <tr>
            <td className={tableStyle}>Even if load increases at a particular endpoint/service, full application is scaled up.</td>
            <td className={tableStyle}>Only the particular service is scaled up at which load is increasing</td>
          </tr>
          <tr>
            <td className={tableStyle}>Higher cost</td>
            <td className={tableStyle}>Lower cost</td>
          </tr>
        </tbody>
      </table>

      <p className={commonTextStyle}>
      Seeking full-time SWE roles starting May 2025, please contact me at sghodke@ncsu.edu if you have any leads.

      </p>
      
      <table>
  <thead>
    <tr>
      <th className={tableStyle}>Type</th>
      <th className={tableStyle}>Details</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={tableStyle}>Email</td>
      <td className={tableStyle}>
        <a href="mailto:sghodke@ncsu.edu">sghodke@ncsu.edu</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Github Repository</td>
      <td className={tableStyle}>
        <a href="https://github.com/nuttysunday/cool-kubernetes" target="_blank">https://github.com/nuttysunday/cool-kubernetes</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Website</td>
      <td className={tableStyle}>
        <a href="https://shivam.foo/" target="_blank">https://shivam.foo/</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Blog</td>
      <td className={tableStyle}>
        <a href="https://shivam.foo/blogs/cool-kubernetes" target="_blank">https://shivam.foo/blogs/cool-kubernetes</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Github Profile</td>
      <td className={tableStyle}>
        <a href="https://github.com/nuttysunday" target="_blank">https://github.com/nuttysunday</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Twitter Profile</td>
      <td className={tableStyle}>
        <a href="https://x.com/sundaycide" target="_blank">https://x.com/sundaycide</a>
      </td>
    </tr>
    <tr>
      <td className={tableStyle}>Resume</td>
      <td className={tableStyle}>
        <a href="https://drive.google.com/file/d/1OC_mcMHkBaDhWbKEMfsnLY-uBS8Xee7G/view" target="_blank">View Resume</a>
      </td>
    </tr>
  </tbody>
</table>

    </Box>
  );
};

export default SelfHostingPage;
