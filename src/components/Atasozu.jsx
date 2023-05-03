import { createSignal } from "solid-js"
import Button from "./Button"
import Modal from "./Modal"

const Atasozu = ({ title, description }) => {
  const [isVisible, setIsVisible] = createSignal(false)
  return (
    <div>
      <Button label={title} onClick={() => setIsVisible(prev => !prev)} />
      <Modal title={title}  close={setIsVisible} toggleHandler={isVisible} hasText text={description} />
    </div>
  )
}

export default Atasozu