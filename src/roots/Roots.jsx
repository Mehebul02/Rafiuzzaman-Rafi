import LeftPart from "../components/left-section/LeftPart";
import RightSection from "../components/right-section/RightSection";
import Container from "../shared/Container";

const Roots = () => {
    return (
         <div className=" min-h-screen">
       <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
             {/* Left Part   */}
           <div>
            <LeftPart/>

           </div>
          {/* Right part  */}
          <div className="lg:mt-12">
            <RightSection/>

          </div>
          </div>
       </Container>
        </div>
    );
};

export default Roots;