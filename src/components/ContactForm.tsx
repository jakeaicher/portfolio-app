"use client"
import React from "react"

const ContactForm = () => {
    

    return (
        
        <form className={'w-full h-full block p-10 bottom-0 overflow-hidden'}>

            <div
            className={'relative w-1/2 pr-10 border-r-2'}
            >

                <label className={'text-left font-[Roboto] block mt-2'}>Name:</label>
                <input 
                className={'w-full border-2 rounded-sm px-1 py-0.5'}
                type="text" 
                required
                ></input>

                <label className={'text-left font-[Roboto] block mt-2'}>Email:</label>
                <input 
                className={'w-full border-2 rounded-sm px-1 py-0.5'}
                type="text" 
                required
                ></input>

                <label className={'text-left font-[Roboto] block mt-2'}>Inquiry Type:</label>
                <select
                className={'w-full border-2 rounded-sm px-1 py-0.5'}
                >
                    <option>Work With Me</option>
                    <option>Hire Me</option>
                    <option>Question</option>
                    <option>Other</option>
                </select>

            </div>

            <label className={'text-left font-[Roboto] block mt-2'}>Message:</label>
            <textarea 
            className={'w-full h-full border-2 rounded-sm px-1 py-0.5'}
            required
            rows={5}
            cols={50}
            ></textarea>

        </form>

    )

}

export default ContactForm