import about from '../../images/about.svg'
import developer from '../../images/developer.svg'
import email from '../../images/email.svg'

export const homeObjOne = {
    id: 'about',
    lightBg: true,
    lightText: true,
    lightTextDesc: true,
    topLine: 'About me',
    headline: 'Skills',
    description: 'Lorem ipsum blablabla',
    imgStart: true,
    img: about,
    alt: 'about',
    dark: false,
    primary: false,
    darkText: false
}

export const homeObjTwo = {
    id: 'projects',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'List Project',
    description: 'Lorem ipsum blablabla',
    imgStart: true,
    img: developer,
    alt: 'Developer',
    dark: false,
    primary: false,
    darkText: true
}

export const homeObjThree = {
    id: 'contact',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Contact',
    headline: 'Send mail',
    description: 'Lorem ipsum blablabla',
    imgStart: true,
    img: email,
    alt: 'Email',
    dark: false,
    primary: false,
    darkText: true
}