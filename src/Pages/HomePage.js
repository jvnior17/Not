// import react from "react";
import { Landing } from "./LandingPage";
import { Products } from "./ProductsPage";
import { Navbar } from "../Components/Navbar";

export const HomePage = () => {
return (
<div className="HomePage">
<Navbar />
<Landing />
<Products /> 
{/* <Products />
<Team />
<Testimonial/>
<ContactView /> */}
</div>
)
};



