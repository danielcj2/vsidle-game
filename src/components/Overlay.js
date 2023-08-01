const Overlay = ({overlay, menu}) => {
  return (
    <div className={overlay ? "overlay d-block" : "overlay"} onClick={menu}>
    </div>
  )
}

export default Overlay


