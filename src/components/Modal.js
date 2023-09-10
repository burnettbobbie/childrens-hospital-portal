import ReactDOM from 'react-dom'

const modalRootEl = document.getElementById('root')
//open modal and it's contents on click
const Modal = ({
  children,
  open = false
}) => {
  if (!open) return null

  return ReactDOM.createPortal(children, modalRootEl)
}

export default Modal;