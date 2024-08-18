import LeftPart from "../components/left-section/LeftPart";
import Container from "../shared/Container";

const Roots = () => {
    return (
         <div className=" min-h-screen">
       <Container>
          <div className="flex justify-between items-center gap-10 ">
             {/* Left Part   */}
           <div>
            <LeftPart/>

           </div>
          {/* Right part  */}
          <div>

          </div>
          </div>
       </Container>
        </div>
    );
};

export default Roots;