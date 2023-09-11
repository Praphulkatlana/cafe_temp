import './Header.scss'
const Header = () => {
  return (
    <header>
        <div className="logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQO_rlAHiv8LaaDjVyfY2hrHL2KdrL5-JtKYDqG3wtt&s" alt="logo"/>
        </div>
        <div className="navlink">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <li>Contact</li>
            </ul>

        </div>
        <div className="account">
            <p>Signup</p>
        </div>

    </header>  
    )
}

export default Header