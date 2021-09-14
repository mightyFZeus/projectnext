import React from 'react'

interface IProps {
    buttonText: string
    url:string
    buttonColor: 'primary' | 'secondary' | 'other'
}

const PrimaryButton:React.FC<IProps> = ({ buttonColor, buttonText, url} :IProps) => {
    return (
        <a
        target='_blank'
        rel="me nofollow noopener noreferrer"
        href={url}
        className='bg-blue-700 py-3 px-4 shadow text-white font-bold rounded-lg hover:bg-white hover:text-blue hover:border-solid hover:border-blue-700'
        >
            
           {buttonText} 
        </a>
    )
}

export default PrimaryButton
