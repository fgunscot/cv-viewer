import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MailIcon } from '@heroicons/react/solid'
import { CalendarIcon, LocationMarkerIcon } from '@heroicons/react/outline'
import { useState } from 'react'

const myLoader = ({width, quality }) => {
  return `https://picsum.photos/200`
}

const words = ['Flutter', 'pub', 'JavaScript', 'node js', 'npm', 'go', 'HTML', 'React', 'Vuejs', 'CSS','Scss', 'Sass','CSS post-processing','firebase', 'sql', 'docker', 'Google Cloud Platform']

const ListItem = ({word}) => {
  return (
    <div className='px-4 py-1 mr-2 mt-2 bg-gray-300 rounded-xl'>{word}</div>
  )
}

const DisplayPillsArr = () => {
  const pills = words.map((word, index) => <ListItem key={index} word={word}/>)
  return (
    <div className='flex flex-wrap'>
      {pills}
    </div>
  )
}

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  return (
    <div className='bg-gray-200 py-2 sm:py-8'>
      <div className='bg-white mx-2 sm:m-auto sm:w-11/12 md:w-10/12 lg:w-8/12 xl:7/12 shadow-md rounded-xl'>
        <div className={`rounded-t-xl ${styles.headerBg}`}>
          <div className='flex p-4 pl-6 py-8'>
            <div className='flex-shrink pr-12 border-r'>
              <h2 className="text-3xl text-white whitespace-nowrap">Ross Stapleton</h2>
              <h2 className='text-md text-white '>Front-end Engineer</h2>
            </div>
              <p className='text-sm text-white pl-12'>Multi-skilled engineer, with a keen eye for detail and good design. Predominantly working with frontend technologies while intent on learning the software that suits the solution. I am a Diligent team member, and reliable when working independently. Great at working with direction and pertinent when called for input.  </p>
          </div>
        </div>
        <div className={`py-3 px-6 grid grid-cols-2 ${styles.socialsBg}`}>
          <button  className='w-min m-auto'
          onClick={() => {navigator.clipboard.writeText('fgunscot@gmail.com')}}>
            <div className='flex items-center pb-3 group w-min m-auto'>
              <MailIcon className='h-5 w-5 text-white mr-4'/>
              <h2 className="text-sm text-white group-hover:underline">fgunscot@gmail.com</h2>
              <h2 className='bg-white transition-opacity opacity-0 group-hover:opacity-100 duration-500 fixed z-10 shadow-md rounded-lg p-3 px-6 translate-x-2 -translate-y-10 pointer-events-none'>Click to Copy Address.</h2>
            </div>
          </button>
          <Link href={'https://github.com/fgunscot/'}>
            <a target="_blank" className='w-min m-auto'>
              <div className='flex items-center pb-3 group'>
                <div className='h-5 w-5 text-white mr-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
                </div>
                <h2 className="text-sm text-white group-hover:underline">github.com/fgunscot/</h2>
              </div>  
            </a>
          </Link>
          <Link href={'https://github.com/fgunscot/'}>
            <a target="_blank" className='w-min m-auto'>
              <div className='flex items-center group'>
                <div className='h-5 w-5 text-white mr-4 '>
                <svg fill="#000000" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px"><path d="M3.5 12.5L6.5 15.5 19 3 13 3zM19 12L13 12 8 17 13 22 19 22 14 17z"/></svg>
                </div>
                <h2 className="text-sm text-white group-hover:underline whitespace-nowrap">Flutter/Firebase marketplace App</h2>
              </div>  
            </a>
          </Link>
        </div>
        <div className='px-6 py-4'>
          <h2 className={`text-xl underline ${styles.textDarkBlue}`}>AREAS OF EXPERTISE</h2>
          <DisplayPillsArr />

          <h2 className={`text-xl underline pt-6 ${styles.textDarkBlue}`}>PROFESSIONAL EXPERIENCE</h2>
          <h2 className='text-xl pt-1'>Front-end Developer</h2>
          <h2 className='text-lg font-bold text-gray-600'>Maritime company</h2>
          <div className='flex text-gray-500'>
            <CalendarIcon className='h-5 w-5  mr-4 '/>
            <p className='pr-12'>January 2020 - September 2020</p>
            <LocationMarkerIcon className='h-5 w-5  mr-4 '/>
            <p>London, UK</p>
          </div>
          <div className='pl-8'>
            <ul>
              <li>Building a suite of specialized maritime software used in-house as their main system and also distributed to other maritime companies. </li>
              <li>Using a JavaScript framework called aurelia, which is similar to angular. </li>
              <li>Working closely with the designer to assume all whitespace is used effectively. </li>
              <li>Working with the lead backend developer to expose the correct endpoints, and ensure the correct information is supplied and received via data transfer objects.</li>
              <li>engaging with documentation that was generated by the swagger generation tool. </li>
            </ul>
          </div>

          <h2 className='text-xl pt-3'>Software Consultant</h2>
          <h2 className='text-lg font-bold text-gray-600'>Sparta Global Consultants</h2>
          <div className='flex text-gray-500'>
            <CalendarIcon className='h-5 w-5  mr-4 '/>
            <p className='pr-12'>October 2019 - July 2021</p>
            <LocationMarkerIcon className='h-5 w-5  mr-4 '/>
            <p>London, UK</p>
          </div>
          <div className='pl-8'>
            <ul>
              <li>Sparta Global is a consultants company that offers training and assessments to assure their employees are of a good standard that will be able to accel and adapted to the employer's needs. </li>
              <li>I spent my time at Sparta training in the C# track as I'd worked with C# using unity, this was extremely beneficial as it help translate what I had learnt from games design to be more appropriate within a business environment. </li>
              <li>Reading and Writing to an SQL database was an important lesson that gave me a better understanding of the end to end process.</li>
              <li>Understanding the underlining infrastructure our code was being run on, ie writing in the asp.net framework is then being compiled by the dot net runtime and so on. This was insightful and helped frame anything new that id learned within the rest of a component tree. </li>
              <li>I had been studying web development before attending this train so this consolidated anything I'd already learnt, setting up node.js, bootstrapping a framework, and consuming REST APIs. </li>
            </ul>
          </div>

          <h2 className={`text-xl underline pt-6 ${styles.textDarkBlue}`}>RECENT DEVELOPMENT</h2>
          <h2 className='text-xl pt-1'>Flutter and firebase App</h2>
          <h2 className='text-lg font-bold text-gray-600'>Fullstack Chat App</h2>
          <div className='pl-8'>
            <ul>
              <li>Using resources from flutter documentation to build up a set of flexible skills that are applicable in a professional environment. </li>
              <li>Getting to grips with an Object-Oriented frontend software, and experimenting with programming patterns such as MVVM, and MVC. </li>
              <li>I drew parallels between flutter and next.js both being a complete frontend solutions, where most of the components necessary are included within the framework. </li>
              <li>Also the first time I've used Firebase, backend as a service and I'm very impressed with the convenience of setting up the service. Authentication and interaction with the database are safe and accessible. Although I felt that more complexity could cause maintainability problems. </li>
              <li>I've started by learning provider which is a flutter state management library, that is flexible and drastically reduces boilerplate. I plan to remake this app using various other state management libraries flutter offers such as bloc. </li>
            </ul>
          </div>

          <h2 className='text-xl pt-3'>Flutter, GCP and Go App</h2>
          <h2 className='text-lg font-bold text-gray-600'>Fullstack Marketplace App</h2>
          <div className='pl-8'>
            <ul>
              <li>Having now familiarized myself with flutter and settled on a base architecture that can be expanded, I've decided to start work on a full product. </li>
              <li>Initially, I had planned to use the firebase BaaS for this project, but it failed to meet one of the requirements needed on the payment system so I've opted to use google cloud platform written in golang to run the backend whilst maintaining firebase authentication. </li>
              <li>As this project is a full solution I will be maintaining a high test coverage, I have already familiarized myself with flutters testing and mocking frameworks and intend to use TDD to achieve a well-tested end product.</li>
            </ul>
          </div>

          <h2 className='text-xl pt-3'>Godot Android Game</h2>
          <h2 className='text-lg font-bold text-gray-600'>Tappy Miner Android game</h2>
          <div className='pl-8'>
            <ul>
              <li>As I have an education in games design, I have produced a variety of games some of which I've released as a complete products. The most recent of these is tappy miner which I released to the google play store at the end of 2021. </li>
              <li>Although not necessarily performing well in terms of downloads the skills and processes needed to take a product to market are invaluable. </li>
              <li>Polishing and refactoring code that is hard to maintain or prone to have bugs, and recognizing this within my codebase. </li>
              <li>Adding external Apis and libraries to fulfil requirements, such as leader boards, in-app purchases and ad networks. </li>
              <li>Building the app using an SDK, then signing an app with a project key to fulfil requirements when deploying the application. </li>
              <li>Deploying and hosting the application to one of the mobile app marketplaces. </li>
            </ul>
          </div>

          <h2 className={`text-xl underline pt-6 ${styles.textDarkBlue}`}>EDUCATION</h2>
          <h2 className='text-xl pt-1'>Games Design - Bachelor of Arts - 2.1</h2>
          <h2 className='text-lg font-bold text-gray-600'>University of the Arts London</h2>
          <div className='flex text-gray-500'>
            <CalendarIcon className='h-5 w-5  mr-4 '/>
            <p className='pr-12'>January 2020 - September 2020</p>
            <LocationMarkerIcon className='h-5 w-5  mr-4 '/>
            <p>London, UK</p>
          </div>
          <div className='pl-8'>
            <ul>
              <li>Studying games design was a great practical introduction to programming, although predominately focus on design the course provided me with a high-level overview and a chance to familiarise myself with logic code. </li>
              <li>Working through the design cycle, starting with a design and ending with a playable product help reinforce key concepts. </li>
              <li>This course introduces me to 2 programming languages which is beneficial as I'm more comfortable changing languages and able to recognise how they differ and adjust to these changes. </li>
              <li>Working with an engine like unity was also beneficial, as it relies on inheritance that is exposed to the user, therefore, introducing these lessons to the user. </li>
              <li>Producing games frequently was also a huge benefit when learning to program as I'd found various solutions to different problems that i had faced. </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
