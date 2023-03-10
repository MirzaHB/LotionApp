// import SideBar from "./SideBar";
export default function Head(){
    return(
        <nav>
            <div>
            <button onClick = {sidebarToggle}>&#9776;</button></div>
            <div class="Header">
                <div>
                    <h1>Lotion</h1>
                </div>
                <div><p> Like Notion, but worse.</p></div>
            </div>
        </nav>
    );
}
var sidebarState = true
function sidebarToggle() {
    if (sidebarState === true) {
        document.getElementById("Sidebar").style.display = 'none';
        sidebarState = false;
    } else {
        document.getElementById("Sidebar").style.display = '';
        sidebarState = true;
    }
}
