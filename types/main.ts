type skill = {
    name: string,
    image: string,
    category: string
}

type project = {
    name: string,
    image: string,
    techstack: string,
    category: string,
    links: {
        visit: string,
        code: string,
        video: string
       
    }
}

type experience = {
    company: string,
    position: string,
    duration: string,
    desc: string[]
}

type education = {
    institute: string,
    degree: string,
    duration: string,
    // desc: string[]
}

type main = {
    name: string,
    titles: string[],
    heroImage: string,
    shortDesc: string,
    techStackImages: string[],
}

type about = {
    aboutImage: string,
    aboutImageCaption: string,
    title: string,
    about: string,
    resumeUrl: string,
    callUrl: string
}

type social = {
    name: string,
    icon: string,
    link: string
}



export type {  main, about, skill, project, experience, education, social };