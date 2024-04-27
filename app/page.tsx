'use client'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Image from 'next/image'
import About from '@/components/About'
import WorkExperience from '@/components/WorkExperience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'


export default function Home() {
  return (
      <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll z-0" >
        <title>Amanuel</title>
        
        <Header/>

         {/* Hero */}
         <section id='Hero' className='snap-center'>
          <Hero/>

         </section>

          {/* About */}
          <section id='about' className='snap-center'>
            <About />
          </section>

           {/* Experience */}
           <section id='experience' className='snap-center'>
            <WorkExperience />
           </section>

            {/* Skills */}
            <section id='skills' className='snap-start'>
              <Skills />
            </section>

             {/* Projects */}
             <section id='projects' className='snap-center'>
              <Projects />
             </section>

              {/* Contact Me */}
              <section id='contact' className='snap-center' >
                <ContactMe />
              </section>
      </div>

      
  )
}
