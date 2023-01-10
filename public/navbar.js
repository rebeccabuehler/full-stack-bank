function NavBar(props) {
  const onLogOut = (()=> {
    props.setUser({});
    alert("You are now logged out");
  })
  props.user;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Trust Bank
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/createaccount">
              Create Account
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">
              Log In
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/deposit">
              Deposit
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/withdraw">
              Withdraw
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/balance">
              Balance
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alldata">
              AllData
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" onClick={onLogOut}>Log Out</Link>
          </li>  
        </ul>
      </div>
      {props.user && props.user.name}
    </nav>
  );
}
