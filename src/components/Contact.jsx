const Contact = () => {
    return(
        <div className="contact-container m-4 p-6 ">
                <h1 className="mt-[1rem] mb-[5rem] p-3 font-bold text-5xl">Contact Me</h1>
            <form className="m-4 p-6 max-w-[40rem] mx-auto flex flex-col gap-3 border border-[#FFE4C4] rounded-lg" action="">
                <p className="mb-[2rem] font-bold text-3xl">Contact Form</p>
                {/* name field */}
                <label htmlFor="name">Name:</label>
                <input className="m-4 p-3 border border-grey rounded-lg hover:outline-[#FFE4C4]" type="text"  placeholder="your name here..." id="name"/>
                {/* email field */}
                <label htmlFor="email" >Email:</label>
                <input className="m-4 p-3 border border-grey rounded-lg hover:outline-[#FFE4C4]" type="email"  placeholder="your email here..." id="email"/>
                {/* message field */}
                <label htmlFor="msg" >Message:</label>
                <input  className="m-4 p-3 border border-grey rounded-lg hover:outline-[#937c60]" type="text" placeholder="your message here..." id="msg"/>
                {/* button */}
                <button className="m-4 p-3 w-[10rem] translate-x-[120%] bg-[#FFE4C4] text-black border border-grey rounded-lg text-md font-semibold hover:outline-[#FFE4C4] hover:cursor-pointer">Submit</button>
            </form>
        </div>
    )
}
export default Contact