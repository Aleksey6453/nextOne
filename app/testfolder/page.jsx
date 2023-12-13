import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
// import One from 'public/one.jpg'

const page = () => {
  return (
    <div>
      <h1>Test Folder & Test Page</h1>
      <div>
      <h1>Choose the galery!</h1>
      <img src="/one.jpg" alt="img" className='ilustration'/>
      <img src="/two.jpg" alt="img" className='ilustration'/>
      <img src="https://24-info.lol/uploads/posts/2022-10/24-info.pro_foto-model-hana-haruna-2.jpg" alt="" className='ilustration'/>
      {/* <Image src='https://boombo.biz/en/uploads/posts/2022-09/1663455615_2-boombo-biz-p-ava-addams-huge-tits-chastnaya-erotika-2.jpg' 
             fill={true} 
             className='ilustration' /> */}
      {/* < Image src='/one.jpg' className='ilustration' width={100} height={410} alt='il'/>
      < Image src={One} /> */}
      {/* <Image src={'/one.jpg'} className='ilustration' width='100px' alt='il'/>
      <Image src={'/two.jpg'} className='ilustration' width='100px' alt='il'/>
      <Image src={'/three.jpg'} className='ilustration' width='100px' alt='il'/> */}
      <Link href='testholder/ilustrations'>
        <span>Ilustrations</span>
      </Link>
    </div>
    </div>
  )
}

export default page
