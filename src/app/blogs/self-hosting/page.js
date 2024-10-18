// src/app/blogs/self-hosting/page.js
import { Box } from "@mui/material";

const SelfHostingPage = () => {
  const shivam = "text-sky-400 text-left md:text-justify"; // className name variable

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
        overflowX: "hidden",
      }}
    >
      <p className={`${shivam} text-2xl font-bold`}>Self-hosting</p>
      <p className={shivam}>
        I am a <em>Full Stack Developer</em>, but still learning stuff and I
        consider myself very naive, so please take this with a grain of salt.
      </p>

      <p className={`${shivam}`}>
        Developing a web app is fun, writing UI, endpoints, designing database
        schemas is very interesting and can be very enjoyable and a great
        learning experience. But after you are done developing it locally how
        would you showcase this to the internet or put it into an actual
        production environment. I am obviously talking about very small systems
        here less than 1k requests a day, where scalability is often not an
        issue.
      </p>

      <hr
        style={{
          height: "3px",
          backgroundColor: "white",
          border: "none",
          filter: "blur(2px)",
        }}
      />

      <ol>
        <li className={`${shivam} mb-2`}>
          1. Virtual Private Server (VPS)
          <br />
          <em style={{ marginLeft: "2rem" }}>
            DigitalOcean Droplet, AWS EC2, Google Cloud Compute Engine
          </em>
        </li>
        <li className={`${shivam} mb-2`}>
          2. Self-hosting on your old computer
          <br />
          <em style={{ marginLeft: "2rem" }}>Raspberry Pi</em>
        </li>
        <li className={`${shivam} mb-2`}>
          3. Using out-of-the-box services
          <br />
          <em style={{ marginLeft: "2rem" }}>Vercel, Supabase</em>
        </li>
      </ol>

      <hr
        style={{
          height: "3px",
          backgroundColor: "white",
          border: "none",
          filter: "blur(2px)",
        }}
      />

      <div className="flex flex-col items-center">
        <img
          src="/images/production.svg"
          alt="Description of image"
          className="rounded-sm w-full "
        />
        <p className={`${shivam} mt-2 text-white`}>
          Understanding the pipeline
        </p>
      </div>
      <p className={`${shivam} text-2xl font-bold`}>
        Common steps for method 1 and 2:-
      </p>

      <p className={`${shivam} text-xl font-bold`}>1. Cloudflare Tunnel</p>
      <p className={`${shivam}`}>
        Instead of directly exposing the IP address of your wifi or of your VPS,
        I recommend to use a cloudflare tunnel, as it hides your IP address, and
        protects for Ddos and dos attack out of the box, also gives features
        like Geo fencing if necessary. And it is a free service, not necessary
        to purchase domain names from them.
      </p>

      <p className={`${shivam} text-xl font-bold`}>2. Docker</p>
      <p className={`${shivam}`}>
        In methods 1 and 2, you need to dockerize your stuff which is easy for
        management, and push your code. Because, there could be a simple
        dependency issue, for eg, you are using the mysql-connector library for
        your endpoints to interact with your database. But let’s say this
        library is not supported for a particular Linux Distro, this could
        result in changing the code and could be very annoying.
      </p>
      <p className={`${shivam}`}>
        Or let’s say you need to use mysql server, if you don’t use docker you
        will need to download it, install it, configure it etc, but with docker
        just pull mysql image, spin up the container and you have it ready.
      </p>
      <p className={`${shivam}`}>
        So using docker, is like having a “small exact copy of a virtual
        machine” everywhere, and having that docker container (“Virtual
        machine”) run everywhere.
      </p>
      <p className={`${shivam}`}>
        Another benefit is support of docker-compose, which can easily help you
        manage multiple docker containers, and how they would interact with each
        in its docker network.
      </p>
      <p className={`${shivam}`}>
        Make sure when you build the docker images, build and run them as the
        least privileged user, so the intruder cannot exit your docker
        container, or execute shell scripts inside the docker container
        terminal.
      </p>

      <p className={`${shivam} text-xl font-bold`}>3. Docker watchtower</p>
      <p className={`${shivam}`}></p>
      <p className={`${shivam}`}>
        Once you build and push the images to docker hub, they need to be
        updated right on the server? So docker watchtower comes into play here.
        Docker watchtower automatically pulls the images from dockerhub, and
        rebuilds them automatically.
      </p>
      <p className={`${shivam}`}>
        And as we are using docker-compose, we can also smoothly integrate
        docker watchtower in our containers. Make sure your repository on docker
        hub is public so watchtower can pull the images.
      </p>

      <p className={`${shivam} text-xl font-bold`}>
        4. Connecting Docker watchtower and Cloudflare with your Docker app in
        docker-compose file
      </p>

      <p className={`${shivam}`}>Directory Strucuture:-</p>
      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg">
        <code className={`${shivam} `}>
          {`/
├── cloudflared/
│   ├── config.yml
│   ├── credentials.json
├── docker-compose.yml
`}
        </code>
      </pre>

      <p className={`${shivam}`}>credentials.json:-</p>
      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${shivam} whitespace-pre-wrap`}>
          {`{
 tunnel: xyz
 credentials-file: /etc/cloudflared/credentials.json
 ingress:
   - hostname: shivam.foo  // domain name 
  // service name and the port of the container which is being exposed
     service:  http://portfolio:8000   
  - hostname: books.shivam.foo  // domain name 
     service:  http://books:8001
  - service: http_status:404
 
}`}
        </code>
      </pre>

      <p className={`${shivam}`}>config.yml:-</p>
      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${shivam} whitespace-pre-wrap`}>
          {`{
  "AccountTag": "abc",
  "TunnelSecret": "bigpass",
  "TunnelID": "xyz"
}`}
        </code>
      </pre>

      <div className="bg-white/80 p-2 rounded-lg shadow-md border-l-4 border-blue-500">
        <h1 className="text-xl font-semibold text-blue-500">Important:</h1>
        <p className="text-base text-gray-800">
          - You need to have the domain names in the DNS record on cloudflare to
          connect it with your tunnel.
        </p>
        <p className="text-base text-gray-800">
          - Don’t share these credentials with anyone or they could spoof your
          tunnel.
        </p>
      </div>

      <a
        href=" https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Traditional way of setting up cloudflare
      </a>

      <p className={`${shivam}`}>
        I prefer to run cloudflare inside the docker container, for easier
        management and no need to do any external setup on the host machine.
      </p>

      <p className={`${shivam}`}>
        Docker-compose file part of Cloudflare and Watchtower:-
      </p>

      <a
        href="https://github.com/nuttysunday/sundays-internet-home/self-hosting-blogs-file/docker-compose.yml"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 underline"
      >
        Docker-compose file
      </a>

      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${shivam} whitespace-pre-wrap`}>
          {`
cloudflared:
  image: cloudflare/cloudflared:latest
  container_name: cloudflared
  volumes:
    - ./cloudflared/credentials.json:/etc/cloudflared/credentials.json:ro
    - ./cloudflared/config.yml:/etc/cloudflared/config.yml:ro
  command: tunnel --config /etc/cloudflared/config.yml run
  restart: always
  deploy:
    resources:
      limits:
        cpus: '0.3'
        memory: 256M
  cap_drop:
    - ALL
  read_only: true
  depends_on:
    - portfolio
  labels:
    com.centurylinklabs.watchtower.enable: "true"
  networks:
    - isolated_network

watchtower:
  image: containrrr/watchtower:latest
  container_name: watchtower
  volumes:
    - /var/run/docker.sock:/var/run/docker.sock
  restart: always
  deploy:
    resources:
      limits:
        cpus: '0.3'
        memory: 256M
  environment:
    - WATCHTOWER_LABEL_ENABLE=true
    - WATCHTOWER_POLL_INTERVAL=60
  command: --cleanup portfolio cloudflared
  networks:
    - isolated_network
`}
        </code>
      </pre>

      <p className={`${shivam} text-xl font-bold`}>
        5. Spinning up the containers.
      </p>
      <p className={`${shivam}`}>Step1:- Get inside the remote server</p>
      <p className={`${shivam}`}>
        To transfer the files from host to server you can use scp command:-
      </p>

      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${shivam} whitespace-pre-wrap`}>
          {` scp -r /local/directory username@remote_host:/path/to/remote/destination/`}
        </code>
      </pre>

      <p className={`${shivam} text-xl font-bold`}>
        Have your pi up and running with:-
      </p>

      <ol className={`${shivam} list-decimal list-inside`}>
        <li>Raspberry Pi OS installed</li>
        <li>Docker and Docker Compose installed</li>
        <li>Remote Desktop enabled</li>
      </ol>

      <div className="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/pi.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[400px]"
        />
        <p className={`${shivam} mt-4 text-white`}>PI in Action</p>
      </div>

      <p className={`${shivam}`}>After having files on the server:-</p>
      <div className="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div className="flex flex-col items-center mb-8 lg:mb-0">
          <img
            src="/images/ssh_pi.jpg"
            alt="Description of image"
            className="rounded-lg w-full max-w-[400px]"
          />
          <p className={`${shivam} mt-4 text-white`}>SSH Into PI</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="/images/ssh_gc.png"
            alt="Description of image"
            className="rounded-lg max-w-[400px]"
          />
          <p className={`${shivam} mt-4 text-white`}>SSH Into Google Cloud</p>
        </div>
      </div>

      <p className={`${shivam}`}>Spinning up the containers:-</p>
      <p className={`${shivam}`}>
        {" "}
        This will build the service and could be accessed anywhere on the
        internet.
      </p>

      <pre className="bg-blue-950/90 p-4 rounded-2xl shadow-lg">
        <code className={`${shivam} `}>{`docker-compose up –build -d`}</code>
      </pre>

      <p className={`${shivam} text-2xl font-bold`}>
        Extra security steps for pi (method 2):-
      </p>

      <p className={`${shivam} text-xl font-bold`}>1. OpenVPN:-</p>
      <p className={`${shivam}`}>
        Using openvpn protocol and service of your choice (mine is Surfshark),
        connect to the nearest remote server, so we have added protection layer
        for the request to bypass.
      </p>

      <p className={`${shivam} text-xl font-bold`}>
        2. Firewall configurations:-
      </p>
      <p className={`${shivam}`}>
        Having strict firewall configuration, restrict all the ports on your pi,
        and only open the required ports as needed.
      </p>

      <p className={`${shivam}`}>
        Ufw rules:- Only allowing incoming ports for:- ssh, internet and rdp
        (remote desktop) Outgoing ports for:- VPN, internet, and to router only,
        not other devices. You can verify up, you should be able to ping pi from
        any other machine on the network, but vice-versa not possible.
      </p>

      <div className="flex flex-col items-center">
        <img
          src="/images/firewall_config.jpg"
          alt="Description of image"
          className="rounded-lg w-full max-w-[400px]"
        />
        <p className={`${shivam} mt-4 text-white`}>
          Firewall Configuration on Pi
        </p>
      </div>

      <p className={`${shivam}`}>
        Different subnet:- If your router allows, just create a different guest
        network so your pi and other devices are totally on different networks
        and cannot talk to each other.
      </p>

      <p className={`${shivam} text-xl font-bold`}>3. Additional Steps:-</p>
      <p className={`${shivam}`}>
        When you build your next js app using github actions it takes up a lot
        of time, This action, built the Next js app, created its image and
        pushed to dockerhub.
      </p>
      <div className="flex flex-col items-center">
        <img
          src="/images/ci_cd_15.png"
          alt="Description of image"
          className="rounded-lg w-full"
        />
        <p className={`${shivam} mt-2 text-white`}>
          Time for github actions to build the next js app, build and push the
          image on dockerhube.
        </p>
      </div>
      <p className={`${shivam}`}>
        So i decide to use git pre-commit hooks, what this does it, builds the
        Next js locally, creates docker image, spins up the container, and if
        you like it and everything looks fine, you enter “Y”, then it cleans up
        the container, and add the build files and pushed it github, and the
        github actions builds the container, and pushes to docker hub without
        building next js app.
      </p>
      <p className={`${shivam}`}>Reducing the build time to &lt;1min. </p>
      <div className="flex flex-col items-center">
        <img
          src="/images/ci_cd_1.png"
          alt="Description of image"
          className="rounded-lg w-full"
        />
        <p className={`${shivam} mt-2 text-white`}>
          Reduced time after locally building the next js app.
        </p>
      </div>

      <p className={`${shivam} mt-2 text-white`}>
        Here is the .git hooks precommit file: (Runs after you enter commit)
        <a
          href="https://github.com/nuttysunday/sundays-internet-home/self-hosting-blogs-file/pre_commit_script.sh"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 underline"
        >
          View the shell script
        </a>
      </p>

      <p className={`${shivam} text-2xl font-bold`}>Method 3:-</p>

      <p className={`${shivam}`}>
        1. No need to dockerize, no need to download mysql server or anything,
        directly use vercel, which simply lets you deploy your NextJS app on it,
        as it handles all the configuration underhood and you need not worry
        about anything. Using vercel saves you a lot of time, and you need not
        need to even create an account on Amazon and get your EC2 instance, or
        dockerize any shit in the first place.
      </p>
      <p className={`${shivam}`}>
        2. Using supabase for databases, this is like already having a mysql
        server setup in the cloud for you, without you needing to do anything.
      </p>
    </Box>
  );
};

export default SelfHostingPage;
