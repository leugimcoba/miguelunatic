import {func} from "./img.js"
import {func2} from "./info.js"
import {func3} from "./card.js"

let a = document.getElementById("sectionOne")

let Obj1 ={
    title: "HELLO THIS IS THE ANONYMOUS!",
    desc: "A hacker is an individual who uses computer, networking or other skills to overcome a technical problem. The term also may refer to anyone who uses their abilities to gain unauthorized access to systems or networks in order to commit crimes. We are Legion. We do not forgive. We do not forget. Expect us.",
    btn:"Contact Me",
    myImg: "../img/hacker.jpg"
}

let b = document.getElementById("sectionTwo")

let Obj2={
    title2: "Project Completed",
    img1: "../img/6.webp",
    desc1: "These online villains typically use cyber scams, spam email or instant messages and bogus websites to deliver dangerous malware to your computer and compromise your computer security. Computer hackers can also try to access your computer and private information directly if you are not protected by a firewall..",
    btn1: "LearnMore",
    img2: "../img/6.webp",
    desc2: "These online villains typically use cyber scams, spam email or instant messages and bogus websites to deliver dangerous malware to your computer and compromise your computer security. Computer hackers can also try to access your computer and private information directly if you are not protected by a firewall.",
    btn2: "Learn More",
    img3: "../img/6.webp",
    desc3: "These online villains typically use cyber scams, spam email or instant messages and bogus websites to deliver dangerous malware to your computer and compromise your computer security. Computer hackers can also try to access your computer and private information directly if you are not protected by a firewall.",
    btn3: "Learn More"
}

let {title, desc, btn, myImg} = Obj1
a.append(func2(title,desc,btn))
a.append(func(myImg))


let {title2, img1, desc1, btn1, img2, desc2, btn2, img3, desc3, btn3} = Obj2
b.append(func3(title2,img1,desc1,btn1,img2,desc2,btn2,img3,desc3,btn3)) 


