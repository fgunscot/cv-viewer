import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { MailIcon } from '@heroicons/react/solid'
import { useState } from 'react'

const myLoader = ({width, quality }) => {
  return `https://picsum.photos/200`
}

const words = ['jello', 'poop', 'lame','jello']

const ListItem = ({word}) => {
  return (
    <div className='px-2 mr-2 mt-2 bg-blue-200 rounded-md'>{word}</div>
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
    <div className='bg-gray-200  py-8'>
      <div className='bg-white m-auto sm:w-11/12 shadow-md rounded-xl'>
        <div className={`rounded-t-xl ${styles.headerBg}`}>
          <div className='flex p-6 pb-4'>
            <div className='flex-shrink pr-4'>
              <h2 className="text-3xl text-white pr-4">Ross Stapleton</h2>
              <h2 className='text-md text-white '>Front-end Engeneer</h2>
              <p className='text-sm pt-2 text-white'>Amet Lorem excepteur duis officia ipsum veniam aliqua dolore deserunt eiusmod cupidatat. Deserunt mollit do officia aute. Reprehenderit deserunt ipsum voluptate sunt ipsum. Laboris voluptate amet cillum consectetur ullamco tempor proident. Ex do aliquip commodo sit Lorem ut est deserunt.</p>
            </div>
            <div className='flex rounded-xl border-4 border-gray-200'>
              <Image
                className='rounded-lg'
                loader={myLoader}
                src='https://picsum.photos/800'
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
        <div className={`py-3 px-6 grid grid-cols-2 ${styles.socialsBg}`}>
          <button 
          className=''
          onClick={() => {navigator.clipboard.writeText('fgunscot@gmail.com')}}>
            <div className='flex items-center pb-3 group'>
              <MailIcon className='h-5 w-5 text-white mr-4'/>
              <h2 className="text-sm text-white">fgunscot@gmail.com</h2>
              <h2 className='bg-white transition-opacity opacity-0 group-hover:opacity-100 duration-500 fixed z-10 shadow-md rounded-lg p-3 px-6 translate-x-2 -translate-y-10 pointer-events-none'>Click to Copy Address.</h2>
            </div>
          </button>
          <Link href={'https://github.com/fgunscot/'}>
            <a target="_blank">
              <div className='flex items-center pb-3'>
                <div className='h-5 w-5 text-white mr-4 '>
                <svg xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24"><path d="M12,2.2467A10.00042,10.00042,0,0,0,8.83752,21.73419c.5.08752.6875-.21247.6875-.475,0-.23749-.01251-1.025-.01251-1.86249C7,19.85919,6.35,18.78423,6.15,18.22173A3.636,3.636,0,0,0,5.125,16.8092c-.35-.1875-.85-.65-.01251-.66248A2.00117,2.00117,0,0,1,6.65,17.17169a2.13742,2.13742,0,0,0,2.91248.825A2.10376,2.10376,0,0,1,10.2,16.65923c-2.225-.25-4.55-1.11254-4.55-4.9375a3.89187,3.89187,0,0,1,1.025-2.6875,3.59373,3.59373,0,0,1,.1-2.65s.83747-.26251,2.75,1.025a9.42747,9.42747,0,0,1,5,0c1.91248-1.3,2.75-1.025,2.75-1.025a3.59323,3.59323,0,0,1,.1,2.65,3.869,3.869,0,0,1,1.025,2.6875c0,3.83747-2.33752,4.6875-4.5625,4.9375a2.36814,2.36814,0,0,1,.675,1.85c0,1.33752-.01251,2.41248-.01251,2.75,0,.26251.1875.575.6875.475A10.0053,10.0053,0,0,0,12,2.2467Z"/></svg>
                </div>
                <h2 className="text-sm text-white">github.com/fgunscot/</h2>
              </div>  
            </a>
          </Link>
        </div>
        <div className='px-6 py-4'>
          <h2 className={`text-xl font-bold underline ${styles.textDarkBlue}`}>AREAS OF EXPERTISE</h2>
            <DisplayPillsArr />
          <h2 className="text-3xl font-bold underline">Ross Stapleton</h2>
          <h2 className="text-3xl font-bold underline">Ross Stapleton</h2>
        </div>
      </div>
    </div>
  )
}
