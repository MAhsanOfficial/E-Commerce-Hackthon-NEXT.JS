import Image from 'next/image';
import React from 'react'
import { FaRegStar } from 'react-icons/fa';
import { IoIosArrowForward } from "react-icons/io";

import { IoCheckmarkOutline } from "react-icons/io5";
import { RiAddLargeLine } from "react-icons/ri";
import { ImEqualizer2 } from "react-icons/im";
import { IoIosArrowDown } from "react-icons/io";
import { BsThreeDots } from "react-icons/bs";
import { AiFillCheckCircle } from 'react-icons/ai';







const ProductDetails = () => {
  return (
    <>    

     {/* <div className="w-[1240px] mt-[34px] ml-[100px] border-[1px] border-gray-300"></div><br />
    <div className='ml-[100px] gap-3 h-[22px] w-[259px] flex'>
      <p className='text-slate-500 w-[63px] h-[16px] gap-1 flex text-base leading-[21.6px]'>Home  <IoIosArrowForward className='mt-1 '/> </p>
      <p className='text-slate-500 w-[57px] h-[16px] gap-1 flex text-base leading-[21.6px]'>Shop  <IoIosArrowForward className='mt-1 '/> </p>
      <p className='text-slate-500 w-[52px] h-[16px] gap-1 flex text-base leading-[21.6px]'>Men  <IoIosArrowForward className='mt-1 '/> </p>
      <p className='text-black w-[52px] h-[22px] gap-1  text-base leading-[21.6px]'>T-shirt</p>
    </div>

  <br /><br />


    <div className="flex ">

        <div className="flex flex-col">
        <Image src={'/images/productdetail1.png'} alt='product detail 1' width={152} height={167} className='ml-[100px] rounded-[20px] border border-black w-[152px] h-[167px] '/> <br />
        <Image src={'/images/productdetail2.png'} alt='product detail 2' width={152} height={168} className='ml-[100px] flex rounded-[20px] border  w-[152px] h-[168px] '/>  <br />
        <Image src={'/images/productdetail3.png'} alt='product detail 3' width={152} height={167} className='ml-[100px] rounded-[20px] border  w-[152px] h-[167px] '/>
        </div>


        <Image src={'/images/productdetail1.png'} alt='product detail 3' width={444} height={530} className='rounded-[20px] border  w-[444px] h-[530px] ml-6'/>
        <div className="flex flex-col ml-9">
        <h1 className='text-[40px] font-bold leading-[48px] '>ONE LIFE GRAPHIC T-SHIRT</h1>

        
      
      
        <span className="flex w-[139px] h-[24.71px] gap-[7.1px]">
      <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]' />
      <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px] '/>
      <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]'/>
      <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px] '/>
      <span className='leading-[21.6px]'>4.5/<span className='text-gray-500'>5</span></span>
     </span>
     <div className='flex gap-3'>
    <h3 className='flex-col font-bold text-[32px]'>$260</h3>
    <h3 className='flex-col font-bold text-[32px] text-gray-500'>$300</h3>
    <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] mt-2 text-red-500 rounded-[62px]">-30%</span>
    </div>


     <p className='w-[590px] h-[33px] text-slate-500 leading-[22px]'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable
         fabric, it offers superior comfort and style.</p>
<br />
     <div className="w-[590px] border bg-slate-400"></div>
<br />
     <p className='text-gray-500'>Select Colors</p>


   <div className="h-[37px] w-[143px] gap-4 flex mt-4">
       <div className="w-[37px] h-[37px] rounded-[50%] bg-[#4F4631]"><IoCheckmarkOutline className='text-white relative top-[10px] left-[10px] '/> </div>
       <div className="w-[37px] h-[37px] rounded-[50%] bg-[#314F4A]"> </div>
       <div className="w-[37px] h-[37px] rounded-[50%] bg-[#31344F]"></div>
   </div>

<br />
   <div className="w-[590px] border bg-slate-400"></div>
<br />
<p className='text-gray-500'>Select Colors</p>
<br />
   <div className="w-[420px] h-[46px] gap-3 flex">
      <button className='w-[86px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>Small</button>
      <button className='w-[105px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>Medium</button>
      <button className='w-[89px] h-[46px] rounded-[62px] py-3 px-6 gap-3 text-white bg-[#000000] leading-[21.6px]'>Large</button>
      <button className='w-[104px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>XLarge</button>
   </div>

   <br />
   <div className="w-[590px] border bg-slate-400"></div>
<br />

<div className="flex gap-4">
  <div className="w-[170px] h-[52px] rounded-[62px] flex justify-between py-4 px-5 bg-[#F0F0F0]"><span>-</span><span>1</span><span><RiAddLargeLine /></span></div>
  <button className='w-[400px] h-[52px] rounded-[62px] pt-4 bg-black text-white pb-[23px] gap-3 font-medium leading-[21.6px]'>Add to Cart</button>
</div>
    </div>
    </div>

<br /><br /><br />
   <div className="flex">
    <h4 className=' h-[14px] ml-[240px] text-xl leading-[22px] text-gray-500'>Product Details</h4>
    <h4 className=' h-[14px] ml-[240px]  leading-[22px] font-medium text-xl'>Rating & Reviews</h4>
    <h4 className=' h-[14px] ml-[240px] text-xl leading-[22px] text-gray-500'>FAQs</h4>
<br />
<br />
   </div>
    <div className="w-[1280px] ml-[100px] border bg-gray-400"></div>
    <div className="w-[414px] ml-[513px] border-[2px] bg-[#000000]"></div> */}


<div className="w-full mt-[34px] ml-[5%] border-[1px] border-gray-300 max-w-screen-lg mx-auto"></div><br />
<div className='ml-[5%] gap-3 h-[22px] w-full sm:w-[259px] flex flex-wrap'>
  <p className='text-slate-500 text-sm sm:text-base w-fit h-[16px] gap-1 flex text-base leading-[21.6px]'>Home  <IoIosArrowForward className='mt-1 '/> </p>
  <p className='text-slate-500 w-fit h-[16px] gap-1 flex text-sm sm:text-base leading-[21.6px]'>Shop  <IoIosArrowForward className='mt-1 '/> </p>
  <p className='text-slate-500 w-fit h-[16px] gap-1 flex text-sm sm:text-base leading-[21.6px]'>Men  <IoIosArrowForward className='mt-1 '/> </p>
  <p className='text-black w-fit h-[22px] gap-1  text-sm sm:text-base leading-[21.6px]'>T-shirt</p>
</div>

<br /><br />

<div className="flex flex-wrap sm:flex-nowrap justify-center items-start">
    <div className="flex flex-col items-center">
        <Image src={'/images/productdetail1.png'} alt='product detail 1' width={152} height={167} className='rounded-[20px] border border-black w-[152px] h-[167px] mb-4 sm:mb-0' />
        <Image src={'/images/productdetail2.png'} alt='product detail 2' width={152} height={168} className='rounded-[20px] border w-[152px] h-[168px] mb-4 sm:mb-0' />
        <Image src={'/images/productdetail3.png'} alt='product detail 3' width={152} height={167} className='rounded-[20px] border w-[152px] h-[167px]' />
    </div>

    <div className="flex flex-col ml-0 sm:ml-6 w-full sm:w-[444px]">
        <Image src={'/images/productdetail1.png'} alt='product detail 3' width={444} height={530} className='rounded-[20px] border w-full h-[530px]' />
    </div>

    <div className="flex flex-col ml-0 sm:ml-9 w-full sm:w-[420px] mt-4 sm:mt-0">
        <h1 className='text-[32px] sm:text-[40px] font-bold leading-[48px] '>ONE LIFE GRAPHIC T-SHIRT</h1>

        <span className="flex w-[139px] h-[24.71px] gap-[7.1px]">
            <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]' />
            <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]' />
            <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]' />
            <FaRegStar className='text-[#FFC633] w-[24.71px] h-[24.71px]' />
            <span className='leading-[21.6px]'>4.5/<span className='text-gray-500'>5</span></span>
        </span>

        <div className='flex gap-3'>
            <h3 className='font-bold text-[28px] sm:text-[32px]'>$260</h3>
            <h3 className='font-bold text-[28px] sm:text-[32px] text-gray-500'>$300</h3>
            <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] mt-2 text-red-500 rounded-[62px]">-30%</span>
        </div>

        <p className='text-slate-500 text-sm sm:text-base leading-[22px] w-full sm:w-[590px]'>
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
        </p>
        <br />
        <div className="w-full sm:w-[590px] border bg-slate-400"></div>
        <br />
        <p className='text-gray-500'>Select Colors</p>

        <div className="h-[37px] w-full sm:w-[143px] gap-4 flex mt-4 justify-start sm:justify-start">
            <div className="w-[37px] h-[37px] rounded-[50%] bg-[#4F4631]"><IoCheckmarkOutline className='text-white relative top-[10px] left-[10px]'/> </div>
            <div className="w-[37px] h-[37px] rounded-[50%] bg-[#314F4A]"> </div>
            <div className="w-[37px] h-[37px] rounded-[50%] bg-[#31344F]"></div>
        </div>

        <br />
        <div className="w-full sm:w-[590px] border bg-slate-400"></div>
        <br />
        <p className='text-gray-500'>Select Size</p>
        <br />
        <div className="w-full sm:w-[420px] h-[46px] gap-3 flex justify-center sm:justify-start flex-wrap mt-4">
            <button className='w-[86px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>Small</button>
            <button className='w-[105px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>Medium</button>
            <button className='w-[89px] h-[46px] rounded-[62px] py-3 px-6 gap-3 text-white bg-[#000000] leading-[21.6px]'>Large</button>
            <button className='w-[104px] h-[46px] text-gray-500 rounded-[62px] py-3 px-6 gap-3 bg-[#F0F0F0] leading-[21.6px]'>XLarge</button>
        </div>

        <br />
        <div className="w-full sm:w-[590px] border bg-slate-400"></div>
        <br />

        <div className="flex gap-4 mt-4">
            <div className="w-[170px] h-[52px] rounded-[62px] flex justify-between py-4 px-5 bg-[#F0F0F0]"><span>-</span><span>1</span><span><RiAddLargeLine /></span></div>
            <button className='w-full sm:w-[400px] h-[52px] rounded-[62px] pt-4 bg-black text-white pb-[23px] gap-3 font-medium leading-[21.6px]'>Add to Cart</button>
        </div>
    </div>
</div>

<br /><br /><br />

<div className="flex flex-wrap justify-center gap-4">
    <h4 className='text-sm sm:text-xl text-gray-500'>Product Details</h4>
    <h4 className='text-sm sm:text-xl font-medium'>Rating & Reviews</h4>
    <h4 className='text-sm sm:text-xl text-gray-500'>FAQs</h4>
</div>

<br />

<div className="w-full sm:w-[1280px] ml-[5%] border bg-gray-400"></div>
<div className="w-full sm:w-[414px] ml-[50%] sm:ml-[40%] border-[2px] bg-[#000000]"></div>








<br />

<div className="flex">
   <h1 className='font-bold  text-2xl leading-[32.4px] ml-[100px]'>All Reviews <span className='text-base font-normal leading-[22px] text-gray-500'>(451)</span></h1>
   <div className=" h-12 ml-[636px]  gap-[10px] flex">
    <button className='w-12 h-12 rounded-[62px] bg-[#F0F0F0] flex justify-between py-4 px-5'><ImEqualizer2 height={20} width={20}/></button>
    <button className='w-[166px] h-12 rounded-[62px] bg-[#F0F0F0] flex justify-between font-medium leading-[21.6px] py-3 px-8'>Latest  <IoIosArrowDown className='text-2xl' />    </button>
    <button className='w-[186px] h-12 rounded-[62px] bg-[#000000] text-white flex justify-between font-medium leading-[21.6px] py-3 px-8'>  Write a Review </button>
   </div>
   </div>

  <br /><br />


<div className="flex flex-wrap justify-center gap-6 px-4">
  <div className="flex flex-wrap justify-between gap-6 w-full">
    {/* First Review Card */}
    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6 p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Samantha D.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
            "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 14, 2023</p>
        </div>
      </div>
    </div>

    {/* Second Review Card */}
    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6  p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Alex M.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
            "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 15, 2023</p>
        </div>
      </div>
    </div>

    {/* Third Review Card */}
    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6  p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Ethan R.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
            "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 16, 2023</p>
        </div>
      </div>
    </div>

  
    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6 p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Olivia P.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
            "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 17, 2023</p>
        </div>
      </div>
    </div>


    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6  p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Liam K.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
          "This t-shirt is a fusion of comfort and creativity. The fabric is soft, and the design speaks volumes about the designer's skill. It's like wearing a piece of art that reflects my passion for both design and fashion."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 18, 2023</p>
        </div>
      </div>
    </div>



    <div className="w-full sm:w-[45%] md:w-[45%] lg:w-[45%] xl:w-[45%] h-auto rounded-[20px] border py-7 px-6 md:px-8 gap-4 border-gray-500">
      <div className="w-full flex flex-col justify-between">
        <span className="flex justify-between items-center">
          <div className="flex gap-2">
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
            <FaRegStar className="text-[#FFC633] w-6 h-6" />
          </div>
          <BsThreeDots className="text-gray-600 w-6 h-6  p-1" />
        </span>

        <div className="gap-3 mt-4">
          <div className="flex items-center">
            <p className="font-bold text-xl leading-[22px]">Ava H.</p>
            <AiFillCheckCircle className="text-green-600 w-5 h-5 ml-2" />
          </div>
          <p className="text-gray-500 text-base leading-[22px] mt-2">
          "I'm not just wearing a t-shirt; I'm wearing a piece of design philosophy. The intricate details and thoughtful layout of the design make this shirt a conversation starter."
          </p>
          <p className="font-medium text-gray-500 mt-4">Posted on August 19, 2023</p>
        </div>
      </div>
    </div>
   <button className='w-[250px] h-[52px] ml-[585px] rounded-[62px] border border-gray-400  gap-3'>Load More Reviews</button>
  </div>
</div>

<br />


{/* 

<h1 className='font-bold text-5xl ml-[431px]'>YOU MIGHT ALSO LIKE</h1><br /><br />
<div className='flex ml-[100px] gap-4'>




<div className="h-[444px] w-[296px] ">
     <Image src={'/images/productdetail4.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px]'>Polo with Contrast Trims</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px]">
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <span>4.0/5</span>
     </span>
     <div className='flex gap-3'>
    <h3 className='flex-col text-2xl'>$212</h3>
    <h3 className='flex-col text-2xl text-gray-500'>$242</h3>
    <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
    </div>
    </div>


    
    <div className="h-[444px] w-[296px]">
     <Image src={'/images/productdetail5.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px]'>Gradient Graphic T-shirt</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px]">
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <span>3.5/5</span>
     </span>
    <h3 className='flex-col text-2xl'>$145</h3>

    </div>




    
    <div className="h-[444px] w-[296px]">
     <Image src={'/images/productdetail6.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px]'>Polo with Tipping Details</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px]">
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <span>4.5/5</span>
     </span>
    <h3 className='flex-col text-2xl'>$180</h3>
    </div>



    <div className="h-[444px] w-[296px]">
     <Image src={'/images/productdetail7.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px]'>Black Striped T-shirt</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px]">
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <FaRegStar className='text-[#FFC633] '/>
      <span>5.0/5</span>
     </span>
     <div className='flex gap-3'>
    <h3 className='flex-col text-2xl'>$120</h3>
    <h3 className='flex-col text-2xl text-gray-500'>$150</h3>
    <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
    </div>
    </div>



</div> */}






<h1 className='font-bold text-5xl ml-[431px] md:ml-0 md:text-4xl sm:text-3xl text-center'>YOU MIGHT ALSO LIKE</h1><br /><br />
<div className='flex flex-wrap justify-center md:justify-start gap-12 pl-[100px] md:ml-0'>

  <div className="h-[444px] w-[296px] md:w-[250px] sm:w-[200px]">
     <Image src={'/images/productdetail4.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px] text-center md:text-lg sm:text-md'>Polo with Contrast Trims</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>4.0/5</span>
     </span>
     <div className='flex gap-3 justify-center'>
        <h3 className='flex-col text-2xl'>$212</h3>
        <h3 className='flex-col text-2xl text-gray-500'>$242</h3>
        <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-20%</span>
     </div>
  </div>

  <div className="h-[444px] w-[296px] md:w-[250px] sm:w-[200px]">
     <Image src={'/images/productdetail5.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px] text-center md:text-lg sm:text-md'>Gradient Graphic T-shirt</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>3.5/5</span>
     </span>
     <h3 className='flex-col text-2xl text-center'>$145</h3>
  </div>

  <div className="h-[444px] w-[296px] md:w-[250px] sm:w-[200px]">
     <Image src={'/images/productdetail6.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px] text-center md:text-lg sm:text-md'>Polo with Tipping Details</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>4.5/5</span>
     </span>
     <h3 className='flex-col text-2xl text-center'>$180</h3>
  </div>

  <div className="h-[444px] w-[296px] md:w-[250px] sm:w-[200px]">
     <Image src={'/images/productdetail7.png'} alt='product1' width={295} height={298} className='rounded-[20px]'/>
     <br />
     <h4 className='font-bold text-xl leading-[27px] text-center md:text-lg sm:text-md'>Black Striped T-shirt</h4> 
     <span className="flex w-[150px] h-[19px] gap-[13px] justify-center">
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <FaRegStar className='text-[#FFC633]' />
      <span>5.0/5</span>
     </span>
     <div className='flex gap-3 justify-center'>
        <h3 className='flex-col text-2xl'>$120</h3>
        <h3 className='flex-col text-2xl text-gray-500'>$150</h3>
        <span className="bg-pink-300 w-[58px] h-7 py-[3px] px-[9px] text-red-500 rounded-[62px]">-30%</span>
     </div>
  </div>

</div>




<br /><br /><br />  <br /><br /><br /><br />
    </>
  )
}

export default ProductDetails