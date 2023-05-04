import { useParams } from "@solidjs/router"
import unslug from "unslug"

const Atasozu = () => {
  const params = useParams()
  return (
    <div class='items-center justify-center flex text-7xl'>
      {unslug(params.slug)}
    </div>
  )
}

export default Atasozu