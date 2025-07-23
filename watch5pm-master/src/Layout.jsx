// import Footer from "./components/Footer";
// import Header from "./components/Header";
// import TopMenu from "./components/TopMenu";
// import { Outlet } from "react-router-dom";

// const Layout=()=>{
//     return(
//         <>
//         <div id="topHeader"> 
//         <Header/>
//         <TopMenu/>
//         </div>
//          <Outlet/>
//           <Footer/>
//         </>
//     )
// }

// export default Layout;
import Footer from "./components/Footer";
import Header from "./components/Header";
import TopMenu from "./components/TopMenu";
import { Outlet } from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <div id="topHeader"> 
        <Header/>
        <TopMenu/>
        </div>
         <Outlet/>
          <Footer/>
        </>
    )
}

export default Layout;