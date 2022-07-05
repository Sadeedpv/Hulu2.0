import React from 'react'
import Image from 'next/image'
import HeaderItem from './HeaderItem'
import {HomeIcon,
BadgeCheckIcon,
CollectionIcon,
LightningBoltIcon,
SearchIcon,
UserIcon} from '@heroicons/react/outline'


const Header = () => {
  return (
    <header className='flex flex-col sm:flex-row m-4 lg:justify-between items:center'>
        <div className='flex flex-grow justify-evenly max-w-2xl mt-4'>
            <HeaderItem title='Home' Icon={HomeIcon}/>
            <HeaderItem title='Trending' Icon={LightningBoltIcon}/>
            <HeaderItem title='Verified' Icon={BadgeCheckIcon}/>
            <HeaderItem title='Collections' Icon={CollectionIcon}/>
            <HeaderItem title='Search' Icon={SearchIcon}/>
            <HeaderItem title='Account' Icon={UserIcon}/>
        </div>
        <Image className='object-contain lg:mr-4 -mt-4 ' src='http://assets.stickpng.com/images/58480a75cef1014c0b5e491b.png'  width={150} height={70} alt='logo'/>

    </header>
  )
}

export default Header