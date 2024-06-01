import React from 'react'
import ThreeStepForm from '../../Components/ThreeStepForm'

function SellCar() {
    return (
        <div>
            <div>
                <div>
                    <div>
                        <img src="https://preview.redd.it/uwtxq98plbhz.jpg?auto=webp&s=109cef60a6210956acd1c4e29d43bd355326878a"
                            alt="" className='relative h-96 w-full opacity-40' />
                        <h1 className='absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-pacifico text-slate-200'>
                            YOUR OLD CAR CAN EARN YOU A JACKPOT</h1>
                        <div className='w-full flex'>
                            <div className='w-1/2 pl-7'>
                                <h2 className='text-xl text-white  mb-3'>A TRUSTED OFFER THAT</h2>
                                <h1 className='text-3xl  text-white  mb-3'>TRULY VALUES YOUR CAR</h1>
                                <h4 className=' text-white text-sm md:text-lg  mb-3 hidden lg:flex' >Sell your car to us and get best instant price for it. Our scientific and data
                                    driven pricing method takes your cars
                                    condition and the market trends in account to offer you a price that truly values your car</h4>
                            </div>
                            <div className='w-1/2'>
                                <img src="https://wallpaperset.com/w/full/3/b/6/263742.jpg"
                                    alt="" className='' />
                            </div>

                        </div>
                    </div>

                    <ThreeStepForm className="w-[1000px]" />
                </div>
            </div>
        </div>
    )
}

export default SellCar
