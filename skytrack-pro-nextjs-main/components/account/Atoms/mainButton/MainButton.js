
import Style from './mainbutton.module.css'
function MainButton({children}) {
  return (
    <div>
        <button className={Style.btn}>{children}</button>
    </div>
  )
}

export default MainButton