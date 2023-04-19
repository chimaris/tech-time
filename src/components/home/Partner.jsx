import zoom from '../../assets/zoom.svg'
import stripe from '../../assets/stripe.svg'
import monday from '../../assets/monday.svg'
import slack from '../../assets/slack.svg'
import dropbox from '../../assets/dropbox.svg'

const Partner = () => {
  return (
    <div className='flex justify-around w-full bg-[#CCDBF0] py-[64px] gap-10 px-[308px]'>
        <img src={zoom} alt="zoom" width='100%'  />
        <img src={stripe} alt="stripe" width='100%'  />
        <img src={monday} alt="monday" width='100%'  />
        <img src={slack} alt="slack" width='100%'  />
        <img src={dropbox} alt="dropbox" width='100%'  />
    </div>
  )
}

export default Partner