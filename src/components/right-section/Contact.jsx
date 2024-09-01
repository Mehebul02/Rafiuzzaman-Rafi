import { MdPermDeviceInformation } from "react-icons/md";

const Contact = () => {
    return (
        // <div>
        //     <h1 className="text-4xl text-white font-poppins my-20">Contact With Me</h1>
        // </div>
        <div>
        <div className="bg-gray-300 w-full p-10 rounded-tl-xl rounded-br-xl my-10">
  <h1 className="text-3xl font-montserrat font-semibold flex items-center gap-2">
  Contact With Me <MdPermDeviceInformation  className="animate-pulse text-[#5C8CC6]" />{" "}
  </h1>
  <div className="divider"></div>
  {/* input type  */}
  <div className="   rounded-xl  ">
          <div className="flex gap-4">
            {/* name  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text-lg font-montserrat font-semibold">
                  Name
                </span>
              </div>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered w-full "
              />
            </label>
            {/* Phone  */}
            <label className="form-control w-full ">
              <div className="label">
                <span className="label-text-lg font-montserrat font-semibold">
                  Phone
                </span>
              </div>
              <input
                type="number"
                placeholder="Phone"
                className="input input-bordered w-full "
              />
            </label>
          </div>
          {/* Email  */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Email
              </span>
            </div>
            <input
              type="email"
              placeholder="Email"
              className="input input-bordered w-full "
            />
          </label>
          {/* Subject  */}
          <label className="form-control w-full ">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Subject
              </span>
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="input input-bordered w-full "
            />
          </label>
          {/* text area  */}
          <label className="form-control">
            <div className="label">
              <span className="label-text-lg font-montserrat font-semibold">
                Your Message
              </span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Message...."
            ></textarea>
          </label>
          <div className="mt-6 ">
            <button className="flex mx-auto justify-center items-center gap-3 text-xl text-white bg-[#ffa41c]    shadow-lg   font-montserrat font-bold py-2 px-4 rounded transition duration-300 transform hover:-translate-y-1">
              Send Message
            </button>
          </div>
        </div>
</div>
  </div>
    );
};

export default Contact;