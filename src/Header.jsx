import './index.css'


export default function Header(){

    function handleHover(){
        console.log("i am hover")
    }
    return (
        <>
       <nav className="navbar">
         <img src="./src/images/chef2.webp" className="img" onMouseOver={handleHover}></img>
        <h4 className="header">Chefexa</h4>
       </nav>
        </>
    )
}