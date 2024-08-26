import { TypeAnimation } from 'react-type-animation';
const TypeAnimations = () => {
    return (
        <div>
        <TypeAnimation
                      sequence={[
                        500,
                        " Data", 
                        500,
                        " Data Analyst",
                        500,
                        " Data",
                        500,

                        "",
                        500,
                      ]}
                      style={{ fontSize: "" }}
                      repeat={Infinity}
                    />

        </div>
    );
};

export default TypeAnimations;