import Image from 'next/image'
import React from 'react'

type ShowLogo = {
    title : string ,
    srcImage : string,
    onlyTitle? : boolean,
    onlyImage? : boolean
}

function ShowLogo({title , srcImage , onlyTitle = false , onlyImage = false} : ShowLogo) {
  return (
    <div className='flex flex-row items-center gap-5'>
      {
        !onlyTitle && <Image alt={`لوگو | ${title}`} src={srcImage} width={1080} height={1080} 
        className='h-8 lg:h-10 w-auto' />
      }
      {
        !onlyImage && <h1 className='text-base sm:text-xl font-bold px-5 py-1 border-r-2 border-stone-400'>{title}</h1>
      }
    </div>
  )
}

export default ShowLogo