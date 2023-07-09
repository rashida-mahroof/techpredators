import Style from './dashtitle.module.css'

function DashTitle({children}) {
  return (
    <div>
        <p className={Style.subhed}>{children}</p>
    </div>
  )
}

export default DashTitle