// src/app/blogs/self-hosting/page.js
import { Box } from "@mui/material";

const SelfHostingPage = () => {
  const textClassName = "text-sky-400"; // Class name variable

  return (
    <Box
      sx={{
        display: "flex",
        gap: "2rem",
        flexDirection: "column",
      }}
    >
      <p class={`${textClassName} text-2xl font-bold text-justify`}>
        Self-hosting
      </p>
      <p class={textClassName}>
        I am a <em>Full Stack Developer</em>, but still learning stuff and I
        consider myself very naive, so please take this with a grain of salt.
      </p>

      <p class={`${textClassName} text-justify`}>
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
        <li class={`${textClassName} mb-2`}>
          1. Virtual Private Server (VPS)
          <br />
          <em style={{ marginLeft: "2rem" }}>
            DigitalOcean Droplet, AWS EC2, Google Cloud Compute Engine
          </em>
        </li>
        <li class={`${textClassName} mb-2`}>
          2. Self-hosting on your old computer
          <br />
          <em style={{ marginLeft: "2rem" }}>Raspberry Pi</em>
        </li>
        <li class={`${textClassName} mb-2`}>
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

      <div class="flex flex-col items-center">
        <img
          src="/images/production.svg"
          alt="Description of image"
          class="rounded-sm w-full "
        />
        <p class={`${textClassName} text-justify mt-2 text-white`}>
          Understanding the pipeline
        </p>
      </div>
      <p class={`${textClassName} text-2xl font-bold text-justify`}>
        Common steps for method 1 and 2:-
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        1. Cloudflare Tunnel
      </p>
      <p class={`${textClassName} text-justify`}>
        Instead of directly exposing the IP address of your wifi or of your VPS,
        I recommend to use a cloudflare tunnel, as it hides your IP address, and
        protects for Ddos and dos attack out of the box, also gives features
        like Geo fencing if necessary. And it is a free service, not necessary
        to purchase domain names from them.
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>2. Docker</p>
      <p class={`${textClassName} text-justify`}>
        In methods 1 and 2, you need to dockerize your stuff which is easy for
        management, and push your code. Because, there could be a simple
        dependency issue, for eg, you are using the mysql-connector library for
        your endpoints to interact with your database. But let’s say this
        library is not supported for a particular Linux Distro, this could
        result in changing the code and could be very annoying.
      </p>
      <p class={`${textClassName} text-justify`}>
        Or let’s say you need to use mysql server, if you don’t use docker you
        will need to download it, install it, configure it etc, but with docker
        just pull mysql image, spin up the container and you have it ready.
      </p>
      <p class={`${textClassName} text-justify`}>
        So using docker, is like having a “small exact copy of a virtual
        machine” everywhere, and having that docker container (“Virtual
        machine”) run everywhere.
      </p>
      <p class={`${textClassName} text-justify`}>
        Another benefit is support of docker-compose, which can easily help you
        manage multiple docker containers, and how they would interact with each
        in its docker network.
      </p>
      <p class={`${textClassName} text-justify`}>
        Make sure when you build the docker images, build and run them as the
        least privileged user, so the intruder cannot exit your docker
        container, or execute shell scripts inside the docker container
        terminal.
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        3. Docker watchtower
      </p>
      <p class={`${textClassName} text-justify`}></p>
      <p class={`${textClassName} text-justify`}>
        Once you build and push the images to docker hub, they need to be
        updated right on the server? So docker watchtower comes into play here.
        Docker watchtower automatically pulls the images from dockerhub, and
        rebuilds them automatically.
      </p>
      <p class={`${textClassName} text-justify`}>
        And as we are using docker-compose, we can also smoothly integrate
        docker watchtower in our containers. Make sure your repository on docker
        hub is public so watchtower can pull the images.
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        4. Connecting Docker watchtower and Cloudflare with your Docker app in
        docker-compose file
      </p>

      <p class={`${textClassName} text-justify`}>Directory Strucuture:-</p>
      <pre class="bg-blue-950/90 p-4 rounded-3xl shadow-lg">
        <code class={`${textClassName}  text-justify`}>
          {`/
├── cloudflared/
│   ├── config.yml
│   ├── credentials.json
├── docker-compose.yml
`}
        </code>
      </pre>

      <p class={`${textClassName} text-justify`}>credentials.json:-</p>
      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${textClassName} whitespace-pre-wrap`}>
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

      <p class={`${textClassName} text-justify`}>config.yml:-</p>
      <pre className="bg-blue-950/90 p-4 rounded-3xl shadow-lg overflow-x-auto">
        <code className={`${textClassName} whitespace-pre-wrap`}>
          {`{
  "AccountTag": "abc",
  "TunnelSecret": "bigpass",
  "TunnelID": "xyz"
}`}
        </code>
      </pre>

      <div class="bg-white/80 p-2 rounded-lg shadow-md border-l-4 border-blue-500">
        <h1 class="text-xl font-semibold text-blue-500">Important:</h1>
        <p class="text-base text-gray-800">
          - You need to have the domain names in the DNS record on cloudflare to
          connect it with your tunnel.
        </p>
        <p class="text-base text-gray-800">
          - Don’t share these credentials with anyone or they could spoof your
          tunnel.
        </p>
      </div>

      <p class={`${textClassName} text-justify`}>
        Instead of doing this on host machine:-
        https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/
      </p>

      <p class={`${textClassName} text-justify`}>
        I prefer to run cloudflare inside the docker container, for easier
        management and no need to do any external setup on the host machine.
      </p>

      <p className={`${textClassName} text-justify`}>
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
        <code className={`${textClassName} whitespace-pre-wrap`}>
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

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        5. Spinning up the containers.
      </p>
      <p class={`${textClassName} text-justify`}>
        Step1:- Get inside the remote server
      </p>
      <p class={`${textClassName} text-justify`}>
        To transfer the files from host to server you can use scp command:- scp
        -r /local/directory username@remote_host:/path/to/remote/destination/
      </p>
      <p class={`${textClassName} text-xl font-bold text-justify`}>
        Have your pi up and running with:-
      </p>

      <ol class={`${textClassName} list-decimal list-inside text-justify`}>
        <li>Raspberry Pi OS installed</li>
        <li>Docker and Docker Compose installed</li>
        <li>Remote Desktop enabled</li>
      </ol>

      <div class="flex flex-col items-center mb-8 lg:mb-0">
        <img
          src="/images/pi.jpg"
          alt="Description of image"
          class="rounded-lg w-full max-w-[400px]"
        />
        <p class={`${textClassName} text-justify mt-4 text-white`}>
          PI in Action
        </p>
      </div>

      <p class={`${textClassName} text-justify`}>
        After having files on the server:-
      </p>
      <div class="flex flex-col lg:flex-row lg:justify-center lg:space-x-8 items-center">
        <div class="flex flex-col items-center mb-8 lg:mb-0">
          <img
            src="/images/ssh_pi.jpg"
            alt="Description of image"
            class="rounded-lg w-full max-w-[400px]"
          />
          <p class={`${textClassName} text-justify mt-4 text-white`}>
            SSH Into PI
          </p>
        </div>

        <div class="flex flex-col items-center">
          <img
            src="/images/ssh_gc.png"
            alt="Description of image"
            class="rounded-lg max-w-[400px]"
          />
          <p class={`${textClassName} text-justify mt-4 text-white`}>
            SSH Into Google Cloud
          </p>
        </div>
      </div>

      <p class={`${textClassName} text-justify`}>
        Spinning up the containers:-
      </p>
      <p class={`${textClassName} text-justify`}>
        {" "}
        This will build the service and could be accessed anywhere on the
        internet.
      </p>

      <pre class="bg-blue-950/90 p-4 rounded-2xl shadow-lg">
        <code class={`${textClassName}  text-justify`}>
          {`docker-compose up –build -d`}
        </code>
      </pre>

      <p class={`${textClassName} text-2xl font-bold text-justify`}>
        Extra security steps for pi (method 2):-
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        1. OpenVPN:-
      </p>
      <p class={`${textClassName} text-justify`}>
        Using openvpn protocol and service of your choice (mine is Surfshark),
        connect to the nearest remote server, so we have added protection layer
        for the request to bypass.
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        2. Firewall configurations:-
      </p>
      <p class={`${textClassName} text-justify`}>
        Having strict firewall configuration, restrict all the ports on your pi,
        and only open the required ports as needed.
      </p>

      <p class={`${textClassName} text-justify`}>
        Ufw rules:- Only allowing incoming ports for:- ssh, internet and rdp
        (remote desktop) Outgoing ports for:- VPN, internet, and to router only,
        not other devices. You can verify up, you should be able to ping pi from
        any other machine on the network, but vice-versa not possible.
      </p>

      <div class="flex flex-col items-center">
        <img
          src="/images/firewall_config.jpg"
          alt="Description of image"
          class="rounded-lg w-full max-w-[400px]"
        />
        <p class={`${textClassName} text-justify mt-4 text-white`}>
          Firewall Configuration on Pi
        </p>
      </div>

      <p class={`${textClassName} text-justify`}>
        Different subnet:- If your router allows, just create a different guest
        network so your pi and other devices are totally on different networks
        and cannot talk to each other.
      </p>

      <p class={`${textClassName} text-xl font-bold text-justify`}>
        3. Additional Steps:-
      </p>
      <p class={`${textClassName} text-justify`}>
        When you build your next js app using github actions it takes up a lot
        of time, This action, built the Next js app, created its image and
        pushed to dockerhub.
      </p>
      <div class="flex flex-col items-center">
        <img
          src="/images/ci_cd_15.png"
          alt="Description of image"
          class="rounded-lg w-full"
        />
        <p class={`${textClassName} text-justify mt-2 text-white`}>
          Time for github actions to build the next js app, build and push the
          image on dockerhube.
        </p>
      </div>
      <p class={`${textClassName} text-justify`}>
        So i decide to use git pre-commit hooks, what this does it, builds the
        Next js locally, creates docker image, spins up the container, and if
        you like it and everything looks fine, you enter “Y”, then it cleans up
        the container, and add the build files and pushed it github, and the
        github actions builds the container, and pushes to docker hub without
        building next js app.
      </p>
      <p class={`${textClassName} text-justify`}>
        Reducing the build time to &lt;1min.{" "}
      </p>
      <div class="flex flex-col items-center">
        <img
          src="/images/ci_cd_1.png"
          alt="Description of image"
          class="rounded-lg w-full"
        />
        <p class={`${textClassName} text-justify mt-2 text-white`}>
          Reduced time after locally building the next js app.
        </p>
      </div>

      <p className={`${textClassName} text-justify mt-2 text-white`}>
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

      <p class={`${textClassName} text-2xl font-bold text-justify`}>
        Method 3:-
      </p>

      <p class={`${textClassName} text-justify`}>
        1. No need to dockerize, no need to download mysql server or anything,
        directly use vercel, which simply lets you deploy your NextJS app on it,
        as it handles all the configuration underhood and you need not worry
        about anything. Using vercel saves you a lot of time, and you need not
        need to even create an account on Amazon and get your EC2 instance, or
        dockerize any shit in the first place.
      </p>
      <p class={`${textClassName} text-justify`}>
        2. Using supabase for databases, this is like already having a mysql
        server setup in the cloud for you, without you needing to do anything.
      </p>
    </Box>
  );
};

export default SelfHostingPage;
