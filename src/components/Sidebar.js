
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";


const Sidebar = ()=>{
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
 
    if(!isMenuOpen) return null
    
    return(
        <div className="px-4 w-60 shadow-lg py-6">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li>Short</li>
            <li>Subscripion</li>
          </ul>
        </div>
    )
}
export default Sidebar;