import Style from './rightimage.module.css'

function RightImage({children}) {
  return (
    <div>
        <div className={Style.lay}>
           {children}
        </div>
    </div>
  )
}

export default RightImage