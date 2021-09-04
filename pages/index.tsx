import { homeSectionOne, homeSectionTwo } from "../utils/homeConstants"
import Image from 'next/image'
import womanSitting from '../public/assets/woman_sit.webp'
import delivery from '../public/assets/delivery.webp'
import iphone from '../public/assets/phone_first.webp'
import iphonetwo from '../public/assets/phone_second.webp'
import worriedBro from '../public/assets/bro.webp'
import header from '../public/assets/Header_illustration.webp'
import NavigationBar from '../components/NavigationBar'


const index = () => {
  
 
    const {
      mainheading,
      subMainHeading,
      mainHeadingTwo,
      subMainHeadingTwo,
      subMainHeadingTwoButtonText,
      mainHeadingThree,
      subMainHeadingThree,
      dashboardText,
    } = homeSectionOne

    const {
      headingOne,
      subHeadingOne,
      headingTwo,
      subHeadingTwo,
      headingThree,
      subHeadingThree,
      storeText,
    } = homeSectionTwo
    return (
      <div className="">
        <NavigationBar />
        <div className="  py-32 flex flex-col lg:flex-row pb-0 px-4 bg-primary-default bg-gradient-to-t from-purple-400  to-primary-default lg:rounded-b-base lg:px-32 ">
          <div className="mb-8 ">
            <h1 className=" lg:text-left   text-2xl  text-white font-bold mt-6 lg:text-4xl   lg:leading-base ">
              {mainheading}
            </h1>
            <p className="text-white  lg:w-3/4 text-justify  mt-4 text-sm  font-light">
              {subMainHeading}
            </p>
            <button className="bg-white ml-4 lg:ml-0 text-black py-3 px-6 mt-4 rounded-full">
              Get Started
            </button>
          </div>
          <div className="xl:mr-50 px-10 mb-0">
            <Image src={header} height={1200} width={1200} />
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-20">
          <h1 className="text-primary-default font-extrabold text-xl lg:text-3xl">
            {mainHeadingTwo}
          </h1>
          <p className=" w-9/12 font-light text-justify mt-5 lg:text-center">
            {subMainHeadingTwo}
          </p>
          <p className="text-primary-default mt-4 tex-left lg:text-center">
            {subMainHeadingTwoButtonText}
          </p>
        </div>
  
        <div className="flex flex-col mt-28 md:flex-row">
          <Image src={iphone} height={1200} width={1200} />
          <div>
            <h1 className="text-primary-default text-justify font-bold text-2xl px-10  lg:mt-24 mb-8 xl:w-1/2">
              {mainHeadingThree}
            </h1>
            <p className="px-10 text-justify">{subMainHeadingThree}</p>
            <button className="bg-primary-default text-white ml-10  py-3 px-6 mt-4 ">
              Learn more
            </button>
          </div>
        </div>
        <div className="bg-primary-default flex flex-col md:flex-row justify-center items-center gap-20 mt-24 p-10">
          <div className="">
            {dashboardText.map((item) => (
              <div
              key={item.text}
                style={{ width: "fit-content" }}
                className="flex gap-4 shadow-2xl  self-end bg-white mb-6 text-left p-3 rounded-full text-primary-default"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-sm">{item.text}</p>
              </div>
            ))}
          </div>
          <div>
            <Image src={iphonetwo} height={500} width={300} />
          </div>
        </div>

        <div className=" flex flex-col md:flex-row justify-center items-center gap-20  lg:mt-24 p-10 lg:px-32">
				<div className="shadow-2xl bg-white rounded-3xl">
					<Image src={worriedBro} height={900} width={900} />
				</div>
				<div>
					<h1 className="text-primary-default text-2xl mb-8 font-bold">
						{headingOne}
					</h1>
					<p className="xl:w-3/4 font-light">{subHeadingOne}</p>
					<div className="flex gap-2 mt-6">
						<p className=" text-primary-default font-light">{storeText}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-primary-default"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>
			</div>

			<div className=" flex flex-col md:flex-row justify-center items-center  lg:mt-24 p-10 lg:px-32">
				<div>
					<h1 className="text-primary-default text-2xl mb-8 font-bold">
						{headingTwo}
					</h1>
					<p className="xl:w-3/4 font-light">{subHeadingTwo}</p>
					<div className="flex gap-2 mt-6">
						<p className=" text-primary-default font-light">{storeText}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-primary-default"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>
				<div className="shadow-2xl bg-white rounded-3xl">
					<Image src={delivery} height={900} width={900} />
				</div>
			</div>

			<div className=" flex flex-col md:flex-row justify-center items-center gap-20  lg:mt-24 p-10 lg:px-32">
				<div className="shadow-2xl order-last lg:order-first bg-white rounded-3xl">
					<Image src={womanSitting} height={900} width={900} />
				</div>
				<div className="order-first lg:order-last">
					<h1 className="text-primary-default text-xl mb-8 font-bold">
						{headingThree}
					</h1>
					<p className="xl:w-3/4 font-light">{subHeadingThree}</p>
					<div className="flex gap-2 mt-6">
						<p className=" text-primary-default font-light">{storeText}</p>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 text-primary-default"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth={2}
								d="M13 7l5 5m0 0l-5 5m5-5H6"
							/>
						</svg>
					</div>
				</div>
			</div>
      </div>
    )
  
}

export default index
