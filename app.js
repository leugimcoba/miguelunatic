import {createImage} from "./img.js"
import {createInfo} from "./info.js"


let container = document.getElementById("container")

const data = {
    titleOne: 'Dobberman',
    titleTwo: 'The Mafia Dog  ',
    paragraphOne: 'he Doberman Pinscher (Doberman) is a powerful and muscular member of the Working Group developed for police and military work and to be a protector and companion in the home. The breed originated in Germany and quickly gained popularity in other countries for its courage, intelligence, and loyalty..',
    paragraphTwo:'Loyal Guardians: Dobermans are renowned for their unwavering loyalty to their owners. They form strong bonds and will go to great lengths to protect their loved ones. Intelligence: These dogs are exceptionally intelligent, ranking among the smartest breeds',
    buttonTwo: 'About Us',
    buttonThree:'Visit Us',
    buttonFour: 'Comments!!',
    myImage: 'cye2fvpjqprb1.jpg '
  };

  const{titleOne,titleTwo ,paragraphOne, paragraphTwo, buttonOne,buttonTwo,buttonThree, buttonFour ,myImage} = data


  container.append(createInfo(titleOne, titleTwo, paragraphOne, paragraphTwo, buttonOne, buttonTwo, buttonThree, buttonFour,myImage))
  container.append(createImage(myImage))
