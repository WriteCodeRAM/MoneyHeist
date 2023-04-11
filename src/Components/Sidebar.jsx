import { Link } from "react-router-dom"

const Sidebar = () => {
    return (
        
        <div className="sidebar-container">
            
            <ul className="sidebar-ul">
                <li><h3><Link to="/home">Home</Link></h3></li>
                <li><h3> <Link to="/new-member">New Member</Link></h3></li>
                <li><h3><Link to="/crew"> Crew Overview</Link></h3></li>
            </ul>
        </div>
    )
}

export default Sidebar 