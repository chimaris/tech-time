import heroImage from '../../assets/heroImage.png'
import arrow from '../../assets/arrow_outward.svg'
import bulb from '../../assets/bulb.svg'
import vscode from '../../assets/vscode.svg'
import bigCircle from '../../assets/bigCircle.svg'
import triangle from '../../assets/triangle.svg'
import figma from '../../assets/figma.svg'
import smallCircle from '../../assets/smallCircle.svg'
import longArrow from '../../assets/longArrow.svg'
import zig from '../../assets/zig.svg'
import dot from '../../assets/dot.svg'
import wordpress from '../../assets/wordpress.svg'
import Avatars from '../Avatars'


const Hero = () => {
  return (
    <div className='flex mx-24'>
        <div className='w-[698px] pt-44 relative'>
            <h1 className="text-[54px] leading-[60px] font-bold font-['Clash Display'] tracking-tighter">Grow your skills to advance your career path </h1>
            <p className='text-[#E7E7E7] font-["Satoshi"] text-[13px] capitalize my-4 w-[68%]'>build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div>
                <button className='px-8 py-4 text-white border border-white mr-4'>
                    <span>Get Started Now </span><img src={arrow} alt="arrow" className='inline' />
                </button>
                <button className='px-8 py-4 bg-white text-blue-800'>Enroll Now</button>
            </div>
            <div className='flex gap-4 my-6 mx-3'>
                <Avatars/>
                <div className='flex flex-col items-center'>
                    <h2 className='text-2xl font-extrabold'>255k+</h2>
                    <p>Previews</p>
                </div>
            </div>
        </div>
        <div>
            <img src={smallCircle} alt="smallCircle" className='absolute top-72 left-[135px]' />
            <img src={dot} alt="dot" className='absolute top-64 left-[450px]' />
            <img src={zig} alt="zig" className='absolute top-[32rem] left-[0px]' />
            <img src={longArrow} alt="longArrow" className='absolute top-[552px] left-[504px]' />
            <img src={bulb} alt="bulb" className='absolute top-40 left-[550px]'/>
            <img src={vscode} alt="Vs code" className='absolute top-52 left-[1070px]' />
            <img src={bigCircle} alt="bigCircle" className='absolute top-[26rem] left-[680px]' />
            <img src={triangle} alt="triangle" className='absolute top-[28rem] left-[1130px]' />
            <img src={figma} alt="figma" className='absolute top-[552px] left-[627px]' />
            <img src={dot} alt="dot" className='absolute top-[760px] right-[600px]' />
            <img src={wordpress} alt="wordpress" className='absolute top-[750px] right-[85px]' />
            <img src={heroImage} alt="Hero Image" />
        </div>
    </div>
  )
}

export default Hero