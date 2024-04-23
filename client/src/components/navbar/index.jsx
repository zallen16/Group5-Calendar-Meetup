import { Link } from "react-router-dom";

function Navbar() {
return(
<div className="shadow bg-white">
  <div className="h-16 mx-auto px-5 flex items-center justify-between">
      <Link to='./'><p className="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Calenvent</p></Link>
      
      <ul className="flex items-center gap-5">
        <li><Link  to= './login'className="hover:text-cyan-500 transition-colors" href="">Log in</Link></li>
        <li><Link to='./Signup' className="hover:text-cyan-500 transition-colors" href="">Sign up</Link></li>
      </ul>
  </div>
</div>
)
}


export default Navbar