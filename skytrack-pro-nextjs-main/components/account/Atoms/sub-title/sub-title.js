import Style from './subtitle.module.css'

function SubTitle({children}) {
  return (
    <div>
        <p className={Style.subhed}>{children}</p>
    </div>
  )
}

export default SubTitle