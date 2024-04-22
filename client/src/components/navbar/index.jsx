import { Link } from "react-router-dom";

function Navbar() {
return(
<div class="shadow bg-white">
  <div class="h-16 mx-auto px-5 flex items-center justify-between">
      <Link to='./'><p class="text-2xl hover:text-cyan-500 transition-colors cursor-pointer">Calenvent</p></Link>
      
      <ul class="flex items-center gap-5">
        <li><Link  to= './login'class="hover:text-cyan-500 transition-colors" href="">Log in</Link></li>
        <li><Link to='./Signup' class="hover:text-cyan-500 transition-colors" href="">Sign up</Link></li>
      </ul>
  </div>
</div>
)
}


export default Navbar