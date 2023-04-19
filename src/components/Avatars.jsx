import avatar1 from '../assets/avatar1.svg'
import avatar2 from '../assets/avatar2.svg'
import avatar3 from '../assets/avatar3.svg'
import avatar4 from '../assets/avatar4.svg'
import avatar5 from '../assets/avatar5.svg'

const images = [
    {id : 1, img : {avatar1}},
    {id : 2, img : {avatar2}},
    {id : 3, img : {avatar3}},
    {id : 4, img : {avatar4}},
    {id : 5, img : {avatar5}}
]
const Avatars = () => {

    return (
      <div className="flex flex-row items-center">
        {images.map(({ id, image }) => (
          <img
            src={image}
            alt="avatar-name"
            key={id}
            className="object-contain mb-3 rounded-full w-10 h-10 ml-[-10px] border-2 border-[#fff]"
          />
        ))}
  
        
      </div>
    );
  };
  
  export default Avatars;