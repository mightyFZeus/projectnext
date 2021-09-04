import React from "react"

interface Props {
	buttonText: string
	buttonColor: "primary" | "secondary" | "other"
	url: string
}

const SmallButton: React.FC<Props> = ({
	buttonText,
	buttonColor,
	url,
}: Props) => {
	return (
		<a
			target="_blank"
			rel="me nofollow noopener noreferrer"
			href={url}
			className={
				buttonColor === "primary"
					? "appearance-none w-32 px-3 xl:py-2 py-4 bg-primary-default text-sm text-white font-normal rounded-lg border hover:bg-transparent hover:text-primary-default hover:border-primary-default focus:outline-none focus:ring-1 focus:ring-primary-default focus:ring-offset-2 focus:ring-opacity-80 inline-flex align-middle justify-center items-center transition duration-500"
					: "appearance-none w-32 px-3 xl:py-2 py-4 bg-secondary-default text-sm text-white font-normal rounded-lg border hover:bg-transparent hover:text-secondary-default hover:border-secondary-default focus:outline-none focus:ring-1 focus:ring-secondary-default focus:ring-offset-2 focus:ring-opacity-80 inline-flex align-middle justify-center items-center transition duration-500"
			}
		>
			{buttonText}
		</a>
	)
}

export default SmallButton
