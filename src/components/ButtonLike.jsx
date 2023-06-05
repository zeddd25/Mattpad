import { AiFillDislike, AiFillLike } from "react-icons/ai"

const ButtonLike = () => {
  return (
    <>
    <div className="flex justify-center gap-4 space-x-1">
    <button className="flex items-center justify-center w-9 h-9 rounded-md border-2 border-black text-black">
      <AiFillLike />
    </button>
    <button className="flex items-center justify-center w-9 h-9 rounded-md border-2 border-black text-black">
      <AiFillDislike />
    </button>
    </div>
    <div className="flex justify-center gap-6">
    <span className="text-gray-700">25K</span>
    <span className="text-gray-700">15K</span>
    </div>
  </>
  )
}

export default ButtonLike