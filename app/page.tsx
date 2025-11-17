// import Image from "next/image";
import Header from "./components/header";
import {
  PhoneIcon
} from '@heroicons/react/24/outline'
import {
  AtSymbolIcon
} from '@heroicons/react/24/solid'
import React from "react";

const firstApp = [
  'autojet-login.jpeg',
  'autojet-history-trans.jpeg',
  'autojet-create-trans.jpeg',
  'autojet-create-product.jpeg',
];

const secondApp = [
  'ebelanja-1.jpeg',
  'ebelanja-2.jpeg',
  'ebelanja-3.jpeg',
  'ebelanja-3.jpeg',
];

const thirdApp = [
  'ur-1.jpeg',
  'ur-2.jpeg',
  'ur-3.jpeg',
  'ur-3.jpeg',
];

export default function Home() {

  return (
    <div className="">
      <Header />
      <div
        id="main-content"
        className="h-full overflow-y-scroll bg-cover bg-fixed lg:bg-center bg-no-repeat">
        <div className="lg:mt-140 mt-70" id="main-cv-porfolio" >
          <div className="bg-white p-4 sm:p-8 min-h-[1000px]" >
            <Introduction />
            <hr className="mt-20" />
            <div className="pt-20" id="last-education" >
              <h1 className="font-bold text-4xl mb-10">Last Education</h1>
              <h1 className="font-bold text-lg">SMK Negeri 2 Pengasih (2013 -2016)</h1>
            </div>
            <hr className="mt-20" />
            <div className="pt-20" id="sertification" >
              <h1 className="font-bold text-4xl mb-10">Sertification</h1>
              <h1 className="font-bold text-lg">Bootcamp DumbWays (DES 2019 - FEB 2020)</h1>
              <p className="text-base" >I learned many things in DumbWays Bootcamp and learned many skills like React JS, Node JS, Express JS, Sequelize JS, Axios, React Native etc.</p>
            </div>
            <hr className="mt-20" />
            <Experiences />
            <hr className="mt-20" />
            <div className="pt-20" id="skills">
              <h1 className="font-bold text-4xl mb-10">Skills</h1>
              <div className="grid grid-flow-col grid-rows-3 gap-4 mt-5" >
                <div className="row-span-6">
                  <ul >
                    <li>&#9679; React Native</li>
                    <li>&#9679; React JS</li>
                    <li>&#9679; Node JS</li>
                    <li>&#9679; Express JS</li>
                    <li>&#9679; PHP</li>
                    <li>&#9679; Laravel</li>
                  </ul>
                </div>
                <div className="row-span-6">
                  <ul >
                    <li>&#9679; Golang</li>
                    <li>&#9679; CSS</li>
                    <li>&#9679; Docker</li>
                    <li>&#9679; Kubernetes</li>
                    <li>&#9679; Flutter</li>
                    <li>&#9679; SQLite</li>
                  </ul>
                </div>
              </div>
            </div>
            <hr className="mt-20" />
            <Portfolio />
          </div>
        </div>
      </div>
    </div>
  );
}


function Introduction() {
  return (<div id="introduction" className="pt-5">
    <h1 className="font-bold text-4xl mb-10">My CV and Portfolio</h1>
    <div className="grid lg:grid-flow-col grid-rows-3 gap-4" >
      <div className="lg:row-span-3 row-span-6">
        <img
          className="dark:invert"
          src="./me.jpeg"
          width={400}
          height={400}
          alt="me"
        />
      </div>
      <div className="lg:row-span-3 row-span-6">
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
  </div>)
}

function Experiences() {
  return (<div className="pt-20" id="experiences" >
    <h1 className="font-bold text-4xl mb-10">Experiences</h1>
    <div className="grid lg:grid-flow-col grid-rows-3 gap-4" >
      <div className="row-span-6">
        <img
          className="dark:invert"
          src="./illustrations/111804082_10030731.jpg"
          width={800}
          height={400}
          alt="me"
        />
        <a href="https://www.freepik.com/free-vector/hand-drawn-busy-office-template_111804082.htm#fromView=search&page=1&position=4&uuid=aef84f87-09e3-4060-93fe-ab062e748e27&query=working">Image by pikisuperstar on Freepik</a>
      </div>
      <div className="row-span-6">
        <h1 className="font-bold text-xl" >PT. RAHMAT TUHAN LESTARI (FEB 2020 - DES 2020)</h1>
        <p>PT. Rahmat Tuhan Lestari was the first company where I
          worked as Software Developer, which in the end I had to be laid off due to the reduction in employees due to the corona virus pandemic, besides my first work experience here, I also learned a lot about the world of IT, such as
          connect the mobile application to the printer, create
          react native apps to apk format, practice UI and UX in real apps, and many more.</p>
      </div>
    </div>
    <div className="grid lg:grid-flow-col grid-rows-3 gap-4 mt-5" >
      <div className="row-span-6 lg:order-1 order-2">
        <h1 className="font-bold text-xl" >PT. BELANJA PASTI INDONESIA (JAN 2021 - SEP 2024)</h1>
        <p>PT. Belanja Pasti Indonesia is the second company I work for, at the second company where I work I learn more things so that it adds to my programming skills including laravel, socket.io, golang, ios development, and many more.</p>
      </div>
      <div className="row-span-6 lg:order-2 order-1">
        <img
          className="dark:invert"
          src="./illustrations/3644996.jpg"
          width={800}
          height={400}
          alt="me"
        />
        <a href="https://www.freepik.com/free-vector/telecommuting-concept-illustration_7607107.htm#fromView=search&page=1&position=0&uuid=aef84f87-09e3-4060-93fe-ab062e748e27&query=working">Image by pikisuperstar on Freepik</a>
      </div>
    </div>
    <div className="grid lg:grid-flow-col grid-rows-3 gap-4 mt-5" >
      <div className="row-span-6">
        <img
          className="dark:invert"
          src="./illustrations/8401.jpg"
          width={800}
          height={400}
          alt="me"
        />
        <a href="https://www.freepik.com/free-vector/happy-freelancer-with-computer-home-young-man-sitting-armchair-using-laptop-chatting-online-smiling-vector-illustration-distance-work-online-learning-freelance_10172825.htm#fromView=search&page=1&position=15&uuid=aef84f87-09e3-4060-93fe-ab062e748e27&query=working">Image by pch.vector on Freepik</a>
      </div>
      <div className="row-span-6">
        <h1 className="font-bold text-xl" >PT. STAFBOOK TEKNOLOGI ASIA (NOV 2024 - NOV 2025)</h1>
        <p>PT. Stafbook Teknologi Asia is the third company I work for, at the company I participate in developing client application project and also gain more knowledges and experiences.</p>
      </div>
    </div>
  </div>)
}

function Portfolio() {
  return (
    <div className="pt-20" id="portfolio">
      <h1 className="font-bold text-4xl mb-10">Portfolio</h1>
      <h1 className="font-bold text-2xl mb-5 mt-10">Autojet Sparepart</h1>
      <div className="grid lg:grid-flow-col grid-rows-3 gap-4" >
        <div className="row-span-3">
          <div className="flex flex-col justify-center items-center" >
            <div className="carousel rounded-box lg:w-50 w-30">
              {firstApp.map((item, index) => {
                return (<div id={"autojet-" + index} className="carousel-item w-full" key={index}>
                  <img src={"./portfolio/" + item} className="w-full" alt="..." />
                </div>)
              })}
            </div>
            <div className="flex w-100 justify-center gap-2 py-2">
              {firstApp.map((item, index) => {
                return <a href={"#autojet-" + index} className="btn btn-xs" key={index} >{index + 1}</a>
              })}
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <h1 className="font-bold text-lg mb-2">DESCRIPTION</h1>
          <p className="text-base" >This is a cashier app for automotive products, we can create a transaction, add product, add warehouse, add supplier, etc.</p>
          <h1 className="font-bold text-lg mb-2 mt-4">STACKS USED</h1>
          <p className="text-base" >Flutter as Front-End, Laravel 8 as Rest API Server, and MySQL as DBMS</p>
          <h1 className="font-bold text-lg mb-2 mt-4">GITHUB LINK</h1>
          <p className="text-base" >Front-End Github Link: <span><a href="https://github.com/aminsum9/autojet-sparepart-app"target="_blank"  >https://github.com/aminsum9/autojet-sparepart-app</a></span></p>
          <p className="text-base" >Server Github Link: <span><a href="https://github.com/aminsum9/autojet-sparepart-server" target="_blank">https://github.com/aminsum9/autojet-sparepart-server</a></span></p>
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-5 mt-10">eBelanja App</h1>
      <div className="grid lg:grid-flow-col grid-rows-3 gap-4" >
        <div className="row-span-3 lg:order-1 order-2">
          <h1 className="font-bold text-lg mb-2">DESCRIPTION</h1>
          <p className="text-base" >This is an e-commerce mobile application for buying and selling products from partners and buying available PPOB products such as credit, data packages, electricity tokens, and so on. I myself took part in developing several features such as printers, chat, notifications, and so on. I also develop this app on iOS Platform.</p>
          <h1 className="font-bold text-lg mb-2 mt-4">STACKS USED</h1>
          <p className="text-base" >Redux & React Native for Front End, Laravel Server as REST API server, MySQL for DBMS. the latest development uses socket.io as a chat feature, golang as an API server, and mongoDB as a DBMS</p>
          <h1 className="font-bold text-lg mb-2 mt-4">PLAYSTORE LINK</h1>
          <p className="text-base" >Play Store Link:  <span><a href="https://play.google.com/store/apps/details?id=com.appebelanja" target="_blank" >https://play.google.com/store/apps/details?id=com.appebelanja</a></span></p>
        </div>
        <div className="row-span-3 lg:order-2 order-1">
          <div className="flex flex-col justify-center items-center" >
            <div className="carousel rounded-box lg:w-50 w-30">
              {secondApp.map((item, index) => {
                return (<div id={"ebelanja-" + index} className="carousel-item w-full" key={index}>
                  <img src={"./portfolio/" + item} className="w-full" alt="..." />
                </div>)
              })}
            </div>
            <div className="flex w-100 justify-center gap-2 py-2">
              {secondApp.map((item, index) => {
                return <a href={"#ebelanja-" + index} className="btn btn-xs" key={index} >{index + 1}</a>
              })}
            </div>
          </div>
        </div>
      </div>
      <h1 className="font-bold text-2xl mb-5 mt-10">UR Easy & Quick Order</h1>
      <div className="grid lg:grid-flow-col grid-rows-3 gap-4" >
        <div className="row-span-3">
          <div className="flex flex-col justify-center items-center" >
            <div className="carousel rounded-box lg:w-50 w-30">
              {thirdApp.map((item, index) => {
                return (<div id={"ur-" + index} className="carousel-item w-full" key={index}>
                  <img src={"./portfolio/" + item} className="w-full" alt="..." />
                </div>)
              })}
            </div>
            <div className="flex w-100 justify-center gap-2 py-2">
              {thirdApp.map((item, index) => {
                return <a href={"#ur-" + index} className="btn btn-xs" key={index} >{index + 1}</a>
              })}
            </div>
          </div>
        </div>
        <div className="row-span-3">
          <h1 className="font-bold text-lg mb-2">DESCRIPTION</h1>
          <p className="text-base" >This is a mobile application to make it easier for users to order food, drinks, queues, and travel tickets. I have participated in developing this application by adding some features like loyalty, maps, help pages, and others.</p>
          <h1 className="font-bold text-lg mb-2 mt-4">STACKS USED</h1>
          <p className="text-base" >React Native and Redux for Front-End, PHP Native for Back-End, and MySQL for DBMS.</p>
          <h1 className="font-bold text-lg mb-2 mt-4">PLAYSTORE LINK</h1>
          <p className="text-base" >PlayStore Link: <span><a href="https://play.google.com/store/apps/details?id=com.urhub.android.app" target="_blank" >https://play.google.com/store/apps/details?id=com.urhub.android.app</a></span></p>
        </div>
      </div>
    </div>
  )
}