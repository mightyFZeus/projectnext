import React from "react"
import Image from "next/image"
import Link from "next/link"
import { navigationItems } from "../utils/homeConstants"
import SmallButton from "./SmallButton"
import logo from '../public/brand/logo-black.webp'
import SecondaryButton from "./SecondaryButton"
// import { Fade, Slide } from "react-reveal"
import { useState } from "react"

const NavigationBar = (): JSX.Element => {
	const [showMenu, setShowMenu] = useState(false)

	const toggleMenu = () => {
		setShowMenu(!showMenu)
	}

	return (
		<nav className="h-16 xl:h-20 w-full fixed inset-0 z-20 bg-primary-default backdrop-filter backdrop-blur-md bg-opacity-90">
			<div className="sm:max-w-lg lg:max-w-4xl xl:max-w-xxl h-16 xl:h-20 mx-auto my-auto px-6 xl:px-32 py-2 flex align-middle justify-between">
				<div className="hidden lg:inline-block my-auto">
					<Link href="/">
						<a className="flex align-middle justify-center">
							<Image
								src={logo}
								alt="paycheep-logo"
								width={132}
								height={42}
							/>
						</a>
					</Link>
				</div>

				<div className="inline-block lg:hidden my-auto">
					<Link href="/">
						<a className="flex align-middle justify-center">
							<Image
								src="/favicon.webp"
								alt="paycheep-logo"
								width={42}
								height={42}
							/>
						</a>
					</Link>
				</div>

				<div className="my-auto hidden xl:flex align-middle justify-between">
					<div className="my-auto flex align-middle justify-between">
						{navigationItems.map((item) => (
							<Link key={item} href={`/${item.split(" ").join("-")}`}>
								<a className="mx-3 p-3 text-white hover:text-secondary-default transition ease-in-out duration-500 text-sm capitalize whitespace-nowrap">
									{item}
								</a>
							</Link>
						))}
					</div>
					<div className="px-3" />
					<SmallButton
						buttonColor="primary"
						buttonText="Get Started"
						url="https://app.paycheep.com.ng/signup"
					/>
				</div>

				<button
					onClick={toggleMenu}
					className="py-2 appearance-none rounded-full relative focus:outline-none cursor-default inline-block xl:hidden my-auto"
				>
					<div className="border-b-1.5 pt-1.5 mb-1.5 w-10 border-white" />
					<div className="border-b-1.5 pt-1.5 mb-1.5 w-7 border-black ml-auto" />
				</button>

				{/* <Fade when={showMenu} bottom duration={500}> */}
					<div
						className={
							showMenu
								? "xl:hidden bg-white fixed inset-0 flex flex-col align-middle justify-center w-screen h-screen"
								: "hidden"
						}
					>
						<div className="absolute top-0 right-0 w-full h-32 my-auto flex align-middle justify-center">
							<button
								onClick={toggleMenu}
								className="p-4 appearance-none focus:outline-none rounded-full cursor-default bg-gray-100 hover:bg-gray-300 transition ease-in-out duration-500 text-gray-500 my-auto mx-auto relative"
							>
								<svg
									className="h-8 w-8"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={1}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						{/* <Slide bottom duration={500}> */}
							<div className="flex mx-12 align-middle flex-col justify-center">
								{navigationItems.map((item) => (
									<Link key={item} href={`/${item.split(" ").join("-")}`}>
										<a className="mx-6 my-1 p-3 text-gray-500 hover:text-secondary-default duration-500 text-center text-lg font-bold capitalize">
											{item}
										</a>
									</Link>
								))}
							</div>
						{/* </Slide> */}

						{/* <Slide bottom duration={500}> */}
							<div className="absolute bottom-0 right-0 w-full h-32 my-auto flex align-middle justify-center">
								<div className="my-auto flex align-middle justify-between">
									<SmallButton
										buttonColor="primary"
										buttonText="Get Started"
										url="https://app.paycheep.com.ng/signup"
									/>
									<div className="px-5" />
									<SecondaryButton
										buttonText="Sign In"
										buttonColor="secondary"
										url="https://app.paycheep.com.ng/signin"
									/>
								</div>
							</div>
						{/* </Slide> */}
					</div>
				{/* </Fade> */}
			</div>
		</nav>
	)
}

export default NavigationBar
