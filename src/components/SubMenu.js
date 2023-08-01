import { Link } from 'react-router-dom';

const SubMenu = ({submenuItems, menu}) => {
  return (
    <>
      {submenuItems.map((item) => (item.added ? <div key={item.id} className="subNav-item"><Link to={item.path} className="d-flex align-items-end" onClick={menu}><span>{item.text}</span></Link></div> : null))}
    </>
  )
}

export default SubMenu
