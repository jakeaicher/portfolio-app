"use client"
import React from "react"

const ContactForm = () => {
    

    return (
        <div className={'w-full h-full block p-10 bottom-0 relative box-border'}>
            <form className={'w-full h-full overflow-hidden flex flex-col'}>

                <div
                className={'relative w-2/3 h-fit pr-10 border-r-2 grow-1 flex flex-col gap-2'}
                >
                    <div className="w-full flex flex-row">
                        <label className={'text-left font-[Roboto] my-2 mr-2'}>Name:</label>
                        <input 
                        className={'w-full border-2 rounded-sm px-1 py-0.5'}
                        type="text"
                        name="name" 
                        required
                        ></input>
                    </div>

                    <div className="w-full flex flex-row">
                        <label className={'text-left font-[Roboto] block my-2 mr-2'}>Email:</label>
                        <input 
                        className={'w-full border-2 rounded-sm px-1 py-0.5'}
                        type="text" 
                        name="email" 
                        required
                        ></input>
                    </div>

                    <div className="w-full flex flex-row">
                        <label className={'text-left font-[Roboto] my-2 mr-2 text-nowrap'}>Inquiry Type:</label>
                        <select
                        className={'w-full border-2 rounded-sm px-1 py-0.5'}
                        name="inquiryType" 
                        >
                            <option>Work With Me</option>
                            <option>Hire Me</option>
                            <option>Question</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>

                <label className={'text-left font-[Roboto] block mt-2 mb-1'}>Message:</label>
                <textarea 
                className={'w-full h-full border-2 rounded-sm px-1 py-0.5 resize-none'}
                name="message"
                required
               
                ></textarea>

                <button className={'p-2 absolute block -bottom-13 right-5 bg-amber-300 rounded-sm'}
                >Submit</button>
            </form>
        </div>

    )

}

export default ContactForm