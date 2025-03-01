
import { Smartphone } from "lucide-react"

const DownloadApp=()=> {
  return (
    <div className="flex flex-col p-4">
      {[1, 2, 3].map((item) => (
        <div
          key={item}
          className="flex items-center space-x-3 border-1 text-gray-400 border-gray-500 p-5 "
        >
          <Smartphone className="w-5 h-5" />
          <span className="text-sm">Download the Revive App to your iPhone</span>
        </div>
      ))}
    </div>
  )
}
export default DownloadApp