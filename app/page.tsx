// import Image from "next/image";
import Header from "./components/header";
import {
  PhoneIcon
} from '@heroicons/react/24/outline'
import {
  AtSymbolIcon
} from '@heroicons/react/24/solid'

export default function Home() {
  return (
    <div className="">
      <Header />
      <div
        id="main-content"
        className="h-full overflow-y-scroll bg-cover bg-fixed bg-center bg-no-repeat">
        <div className="mt-140">
          <div className="bg-white p-4 sm:p-8 min-h-[1000px]">
            <div id="introduction" className="pt-5">
              <h1 className="font-bold text-4xl mb-10">My CV and Portfolio</h1>
              <div className="grid grid-flow-col grid-rows-3 gap-4" >
                <div className="row-span-3">
                  <img
                    className="dark:invert"
                    src="./me.jpeg"
                    width={400}
                    height={400}
                    alt="me"
                  />
                </div>
                <div className="row-span-3">
                  <h1 className="font-bold text-lg">About Me</h1>
                  <p className="text-base" >I am a person who loves the world of technology, especially the world of application programming. I have enough experiences in creating and developing applications such as mobile, web, and desktop applications, which with my skills and experience may be suitable for your company's needs.</p>
                  <h1 className="font-bold text-lg mt-10">My Accounts And Contacts</h1>
                  <ul className="mt-3" >
                    <li className="flex row" ><PhoneIcon width={20} color="green" /><p className="ml-2" >+6285743989094 (WhatsApp)</p></li>
                    <li className="flex row" ><PhoneIcon width={20} color="green" /><p className="ml-2" >+6285743989094 (Telp.)</p></li>
                    <li className="flex row" ><img src="./github-mark.svg" width={25} height={15} /><p className="ml-2" >https://github.com/aminsum9</p></li>
                    <li className="flex row" ><img src="./gitlab-logo.jpeg" width={25} height={15} /><p className="ml-2" >https://gitlab.com/AminS</p></li>
                    <li className="flex row" ><AtSymbolIcon width={25} color="purple" /><p className="ml-2" >aminsum9@gmail.com</p></li>
                    <li className="flex row" ><img src="./LI-In-Bug.png" width={25} height={15} /><p className="ml-2" >https://www.linkedin.com/in/amin-subagiyo</p></li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mt-20" />
            <div className="pt-20" id="last-education" >
              <h1 className="font-bold text-4xl mb-10">Last Education</h1>
              <h1 className="font-bold text-lg">SMK Negeri 2 Pengasih (2013 -2016)</h1>
            </div>
            <hr className="mt-20" />
            <div className="pt-20" id="sertification" >
              <h1 className="font-bold text-4xl mb-10">Sertification</h1>
              <h1 className="font-bold text-lg">Bootcamp DumbWays (2019 -2020)</h1>
              <p className="text-base" >I learned many things in DumbWays Bootcamp and learned many skills like React JS, Node JS, Express JS, Sequelize JS, Axios, React Native etc.</p>
            </div>
            <hr className="mt-20" />
            <div className="pt-20" id="experiences" >
              <h1 className="font-bold text-4xl mb-10">Experiences</h1>
              <div className="grid grid-flow-col grid-rows-3 gap-4" >
                <div className="row-span-6">
                   <p>{'-'.repeat(45)} ilustration {'-'.repeat(45)}</p>
                </div>
                <div className="row-span-6">
                  <h1 className="font-bold text-xl" >PT. RAHMAT TUHAN LESTARI (FEB 2020 - DES 2020)</h1>
                  <p>PT. Rahmat Tuhan Lestari was the first company where I
                    worked as Software Developer, which in the end I had to be laid off due to the reduction in employees due to the corona virus pandemic, besides my first work experience here, I also learned a lot about the world of IT, such as
                    connect the mobile application to the printer, create
                    react native apps to apk format, practice UI and UX in real apps, and many more.</p>
                </div>
              </div>
              <div className="grid grid-flow-col grid-rows-3 gap-4 mt-5" >
                <div className="row-span-6">
                  <h1 className="font-bold text-xl" >PT. BELANJA PASTI INDONESIA (JAN 2021 - SEP 2024)</h1>
                  <p>PT. Belanja Pasti Indonesia is the second company I work for, at the second company where I work I learn more things so that it adds to my programming skills including laravel, socket.io, golang, ios development, and many more.</p>
                </div>
                <div className="row-span-6">
                  <p>{'-'.repeat(45)} ilustration {'-'.repeat(45)}</p>
                </div>
              </div>
              <div className="grid grid-flow-col grid-rows-3 gap-4 mt-5" >
                <div className="row-span-6">
                  <p>{'-'.repeat(45)} ilustration {'-'.repeat(45)}</p>
                </div>
                <div className="row-span-6">
                  <h1 className="font-bold text-xl" >PT. STAFBOOK TEKNOLOGI ASIA (NOV 2024 - NOV 2025)</h1>
                  <p>PT. Stafbook Teknologi Asia is the third company I work for, at the company I participate in developing client application project and also gain more knowledges and experiences.</p>
                </div>
              </div>
            </div>
            <hr className="mt-20" />
            <div className="pt-20" id="skills">
              <h1 className="font-bold text-4xl mb-10">Skills</h1>
              <ul >
                <li>&#9679; React Native</li>
                <li>&#9679; React JS</li>
                <li>&#9679; Node JS</li>
                <li>&#9679; Express JS</li>
                <li>&#9679; PHP</li>
                <li>&#9679; Laravel</li>
                <li>&#9679; Golang</li>
                <li>&#9679; CSS</li>
                <li>&#9679; Docker</li>
                <li>&#9679; Kubernetes</li>
                <li>&#9679; Flutter</li>
                <li>&#9679; SQLite</li>
              </ul>
            </div>
            <div className="mb-60" >

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
