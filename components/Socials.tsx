import React from 'react';
import Link from 'next/link';
import {FaGithub} from 'react-icons/fa';



const Socials = () => {

    return (
        <section id='socials' className="fixed xl:bottom-4 xl:left-4 2xl:bottom-10 2xl:left-10 hidden lg:flex flex-col gap-3 z-20">
          
                    <Link href={"https://github.com/jhkette"} target="_blank" rel="noreferrer" className="grid place-items-center p-3 hover:animate-bounce rounded-full bg-blue-700 text-white">
                       <FaGithub/>
                        {/* <Icon /> */}
                    </Link>
            
        </section>
    )
}

export default Socials