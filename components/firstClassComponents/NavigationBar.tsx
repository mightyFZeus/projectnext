import React, {useState} from 'react'
import { NavigationItems } from '../../utils/constants'
import PrimaryButton from '../buttons/PrimaryButton'

const NavigationBar = () => {
    const [toggle, setToggle] = useState(false)

    const toggleMenu =() =>{
            setToggle(prevMenu => !prevMenu)
    }
    return (
       <div>
            <nav className='flex justify-between xl:px-32 px-4 py-6 bg-white'>
                <div className=''>
                    <p>MyHealth</p>
                </div> 
                        
                <div className=' hidden lg:flex gap-10   '>
                    {NavigationItems.map((item)=>(
                            <p className='capitalize'>{item}</p>
                        ))}
                    <PrimaryButton 
                        url='https://goal.com'
                        buttonColor='primary'
                        buttonText='Get Started'
                        
                    />
                </div>
                <button className='lg:hidden  ' onClick={toggleMenu}>
                    {toggle?
                        <p>cancel</p> : 
                        <div className='flex-col flex items-end'>
                            <div className='h-line w-10  bg-black' />
                            <div className='h-line w-8 mt-2 bg-black' />
                        </div> 
                }
                </button> 
            </nav>
            {
                toggle?
                    <div className='  flex flex-col gap-10 items-center mt-8   '>
                        {NavigationItems.map((item)=>(
                                <p className='capitalize'>{item}</p>
                            ))}
                        <PrimaryButton 
                            url='https://goal.com'
                            buttonColor='primary'
                            buttonText='Get Started'
                            
                        />
                    </div> :

                    null
            }
       </div>
    )
}

export default NavigationBar
