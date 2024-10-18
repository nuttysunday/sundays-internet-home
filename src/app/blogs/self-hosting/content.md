# Self-Hosting 

I am a _Full Stack Developer_, but still learning stuff and I consider myself very naive, so please take this with a grain of salt.

Developing a web app is fun, writing UI, endpoints, designing database schemas is very interesting and can be very enjoyable and a great learning experience. But after you are done developing it locally how would you showcase this to the internet or  put it into an actual production environment. I am obviously talking about very small systems here <1k requests a day, where scalability is often not an issue. 


---

1. Virtual Private Server. 
*Examples: DigitalOcean Droplet, AWS EC2, Google Cloud Compute Engine*
2. Self hosting your old computer.
 *Examples: raspberry pi*
3. Using out of the box services. 
*Examples: Vercel, Supabase* 

---

## **Common Steps for Method 1 and 2**

### **1. Cloudflare Tunnel**
Instead of directly exposing the IP address of your wifi or of your VPS, I recommend to use a cloudflare tunnel, as it hides your IP address, and protects for Ddos and dos attack out of the box, also gives features like Geo fencing if necessary. And it is a free service, not necessary to purchase domain names from them.

#### **Example Configuration:**
- **credentials.json**:
```json
{
  "AccountTag": "abc",
  "TunnelSecret": "bigpass",
  "TunnelID": "xyz"
}
```

- **config.yml**:
```yaml
tunnel: xyz
credentials-file: /etc/cloudflared/credentials.json
ingress:
  - hostname: shivam.foo
    service: http://portfolio:8000   
  - hostname: books.shivam.foo
    service: http://books:8001
  - service: http_status:404
```

> **Note**: Make sure to have domain names listed in the DNS records on Cloudflare.

### **2. Docker**

In methods 1 and 2, you need to dockerize your stuff which is easy for management, and push your code. Because, there could be a simple dependency issue, for eg, you are using the mysql-connector library for your endpoints to interact with your database. But let’s say this library is not supported for a particular Linux Distro, this could result in changing the code and could be very annoying.

Or let’s say you need to use mysql server, if you don’t use docker you will need to download it, install it, configure it etc, but with docker just pull mysql image, spin up the container and you have it ready.

So using docker, is like having a “small exact copy of a virtual machine” everywhere, and having that docker container (“Virtual machine”) run everywhere. 

Another benefit is support of docker-compose, which can easily help you manage multiple docker containers, and how they would interact with each in its docker network.

Make sure when you build the docker images, build and run them as the least privileged user, so the intruder cannot exit your docker container, or execute shell scripts inside the docker container terminal.

Instead of doing this on host machine:-
https://developers.cloudflare.com/cloudflare-one/connections/connect-networks/get-started/

I also prefer to run cloudflare inside the docker container, for easier management and no need to do any external setup on the host machine.





### **4. Docker Watchtower**

Once you build and push the images to docker hub, they need to be updated right on the server? So docker watchtower comes into play here. Docker watchtower automatically pulls the images from dockerhub, and rebuilds them automatically. 

And as we are using docker-compose, we can also smoothly integrate docker watchtower in our containers. Make sure your repository on docker hub is public so watchtower can pull the images.

Getting up your app:-

Have your pi up and running with:
1. Raspberry Pi os installed
2. Docker and docker compose installed
3. Remote Desktop enabled.


> **Note**: Ensure your Docker Hub repository is public so that Watchtower can pull the images.

---

### **5. Deploying the Application**

To transfer the files from host to server you can use scp command:-

scp -r /local/directory username@remote_host:/path/to/remote/destination/

After having files on the server:-

ssh into the remote desktop:- (Pi)


ssh into google compute engine:-

Simply doing:- docker-compose up –build -d

This will build the service and could be accessed anywhere on the internet.  


---

## **Special Considerations for Method 2 (Self-hosting on Raspberry Pi)**

### **1. OpenVPN**
Using openvpn protocol and service of your choice (mine is Surfshark), connect to the nearest remote server, so we have added protection layer for the request to bypass.


### **2. Firewall Configuration (UFW Rules)**
Set strict firewall rules to secure your Raspberry Pi:
- Allow incoming traffic only on necessary ports (SSH, HTTP/HTTPS).
- Allow outgoing traffic only for VPN, internet access, and local router communication.

You can verify up, you should be able to ping pi from any other machine on the network, but vice-versa not possible.


### **3. Isolating the Pi on a Separate Subnet**
If possible, set up a separate guest network for the Pi to prevent it from interacting with other devices on your main network.

---

## **Optimizing Next.js Builds with Git Pre-Commit Hooks**

When you build your next js app using github actions it takes up a lot of time, 

This action, built the Next js app, created its image and pushed to dockerhub.



So i decide to use git pre-commit hooks, what this does it, builds the Next js locally, creates docker image, spins up the container, and if you like it and everything looks fine, you enter “Y”, then it cleans up the container, and add the build files and pushed it github, and the github actions builds the container, and pushes to docker hub without building next js app.

Reducing the build time to <1min.



Here is the .git hooks precommit file:-

(Runs after you enter commit)

https://docs.google.com/document/d/17RpP_tp1d5I681uoPfTGfXTvQf9wmJ3BZWdLqE_22k4/edit?tab=t.0




---

## **Method 3: Using Out-of-the-Box Services (Vercel and Supabase)**

1. No need to dockerize, no need to download mysql server or anything, directly use vercel, which simply lets you deploy your NextJS app on it, as it handles all the configuration underhood and you need not worry about anything. Using vercel saves you a lot of time, and you need not need to even create an account on Amazon and get your EC2 instance, or dockerize any shit in the first place.

2. Using supabase for databases, this is like already having a mysql server setup in the cloud for you, without you needing to do anything.
