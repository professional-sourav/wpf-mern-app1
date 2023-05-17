import ThemeSwitcher from './ThemeSwitcher'

const HeaderItems = () => {
  return (
    <div className="flex items-center gap-3 2xsm:gap-7">
      <ul className="flex items-center gap-2 2xsm:gap-4">        
        <li>
            <ThemeSwitcher />
        </li>
      </ul>      
    </div>
  )
}

export default HeaderItems