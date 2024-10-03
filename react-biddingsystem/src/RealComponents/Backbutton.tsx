
import { useNavigate } from 'react-router-dom';

export default function Backbutton() {
    const navigate = useNavigate();
  return (
    <button className="text-white  font-bold bg-[#FC9905] h-[40px] w-[70px] rotate-180 rounded-lg mr-[80px] mb-[20px]" onClick={()=> navigate(-1)}>➜</button>
  )
}
