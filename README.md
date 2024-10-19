# Self Hosting- Sunday's Internet Home

| **Description**   | **Link**                                                                                         |
|-------------------|--------------------------------------------------------------------------------------------------|
| **Live Link**     | [shivam.foo](https://shivam.foo)                                                                |
| **GitHub**        | [nuttysunday/sundays-internet-home](https://github.com/nuttysunday/sundays-internet-home)       |
| **Blog Link**     | [shivam.foo/blogs/self-hosting](https://shivam.foo/blogs/self-hosting)                          |
| **Video Link**    | [Youtube Video](https://youtu.be/_IoQ6Dux8g8?si=CqIbvoVEVakvuekcg)                                     |
| **LinkedIn**      | [Linkdin Profile](https://www.linkedin.com/in/shivam-ghodke/)                                             |
| **Resume**        | [resume](https://drive.google.com/file/d/1oiRDiDfy_RhmdgZE0C0CVOubbTuOliY5/view)              |
| **Twitter**       | [twitter account](https://x.com/sundaycide)                                                                |




## Overview

Welcome to my self-hosted internet home! The website you are viewing was initially hosted on a Raspberry Pi and is now deployed on Google Cloud Compute Engine. I've implemented a complete CI/CD pipeline to reflect real-time changes to the website. While the development side of this project wasn't my primary focus, I'm particularly proud of the self-hosting and the automation pipeline.

This README will guide you through the technical aspects, tools used, and how to set up the project on your own infrastructure.

---

## Video Overview

You can watch an overview of the project here:

[![Self Hosting Video](https://img.youtube.com/vi/_IoQ6Dux8g8/0.jpg)](https://youtu.be/_IoQ6Dux8g8?si=CqIbvoVEVakvuekc)

**Video Link**: [link](https://youtu.be/_IoQ6Dux8g8?si=CqIbvoVEVakvuekcg)


## Features

- **CI/CD Pipeline**: Automated deployment and updates of the website in real-time.
- **SSH Setup & VPN**: Secured access through SSH and OpenVPN to manage the server remotely.
- **Docker & Watchtower**: Docker containers for all services, with Docker Watchtower to handle automatic updates of the containers.
- **Custom Mail Server**: Setup using ImprovMX for custom email handling. You can contact me via mail at `mail@shivam.foo`.
- **Firewall & Security**: Configured a firewall to ensure secure access to my self-hosted applications.

---

## Tech Stack

- **Frontend**: Next.js (React)
- **Styling**: Material UI, TailwindCSS
- **Containerization**: Docker
- **CI/CD**: Cloudflare Tunnel, Docker Watchtower, Shell Scripting, Github Actions, Docker Watchtower
- **Cloud Hosting**: Google Cloud Compute Engine (previously hosted on a Raspberry Pi)
- **VPN**: OpenVPN for secure remote access
- **Mail**: ImprovMX for custom domain email
- **Security**: SSH setup, firewall configuration
