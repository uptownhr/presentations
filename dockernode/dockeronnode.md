#glendora javascript meetup

Wifi: liferay-lax-guest / portal4all

Slide: http://172.16.25.38:1948/express.md

---

#Docker on Node
##with James Lee

Twitter [@jleebiz](http://www.twitter.com/jleebiz)

---

#Docker?
- Is a company
- Opensource
- Container technology stack

----

#Containers?
Virtualization built into the linux kernel

----

##Virtual Machine?
![VM vs Container](https://sc-cdn.scaleengine.net/i/d349227a9bde61c763ef34d022bd9738.png)

----

##How is this different
- Baremetal Performance
- Multiple flavors of linux
- Containerized processes

----

##What you can't do

- Run windows/osx or other environments

---

#DEMO

- [Cloud9 Editor](https://github.com/c9/core/)
- [uptownhr/resume](https://github.com/uptownhr/resume)
- [Nginx Proxy](https://github.com/jwilder/nginx-proxy)

----

##Docker Toolbox
- Windows and OSX
- Minimal Virtualbox Image
- Mounts home directory
- Installs all docker toolset

[https://www.docker.com/products/docker-toolbox](https://www.docker.com/products/docker-toolbox)

----

##Clound 9 Editor

```bash
# cd into project directory
> cd presentations directory
> docker run -d -p 1234:80 -v \
$(pwd):/workspace kdelfour/cloud9-docker
```

----

## uptownhr/resume
```bash
#git clone
> git clone https://github.com/uptownhr/resume.git
> cd resume
> docker-compose up
```

----

##Jwilder Nginx Proxy
```bash
> docker run -d -p 80:80 -v /var/run/docker.sock:/tmp/docker.sock:ro jwilder/nginx-proxy
```

----

#Documentations
- [Docker Engine](https://docs.docker.com/engine/reference/builder/)
- [Dockerfile](https://docs.docker.com/engine/reference/builder/)
- [Docker Compose](https://docs.docker.com/compose/compose-file/)
- [Docker Hub](https://hub.docker.com/)

---

#Presentation
[https://github.com/uptownhr/presentations](https://github.com/uptownhr/presentations)

---

#Coming Next
##ReactJS

[https://github.com/facebook/react](https://github.com/facebook/react)


