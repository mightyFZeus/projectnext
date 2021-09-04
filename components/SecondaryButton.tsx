import React from "react"

interface Props {
	buttonText: string
	buttonColor: "primary" | "secondary" | "other"
	url: string
}

const SecondaryButton: React.FC<Props> = ({ buttonText, url }: Props) => {
	return (
		<a
			target="_blank"
			rel="me nofollow noopener noreferrer"
			href={url}
			className="appearance-none bg-white py-3 xl:py-4 w-32 xl:w-40 px-3 xl:px-6 text-sm font-medium text-secondary-default hover:text-secondary-default focus:border-secondary-default rounded-lg shadow-secondary border border-gray-100 hover:border-secondary-default  focus:outline-none inline-flex align-middle justify-center items-center transition ease-in-out duration-500"
		>
			{buttonText}
		</a>
	)
}

export default SecondaryButton
