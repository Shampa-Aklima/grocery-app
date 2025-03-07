
import { Smartphone } from "lucide-react"

const DownloadApp=()=> {
  return (
    <div className="flex flex-col w-full h-[300px]  text-gray-400 ">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex justify-between items-center gap-3 text-gray-400 space-y-3 border-2 border-gray-100 p-4"
        >
          <Smartphone className="w-8 h-8" />
          <span className="text-xm">Download the Bacola App to
          your Phone.</span>
        </div>
      ))}
    </div>
  )
}
export default DownloadApp