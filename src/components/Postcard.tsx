"use client"
import { useScrollPercent } from "@/hooks/useScrollPercent";
import exp from "constants";
import ContactForm from "@/components/ContactForm";
import { useEffect, useState } from "react";

interface triggerClassResults{
    trigger: string,
    card: string,
}

type FormCardState = 'collapsed' | 'expanded';

const Postcard = () => {
    let b = useScrollPercent().scrollPercentage
    let overlay = true; //temporarily disables overlay for WIP
    const [expanded, setExpanded] = useState<boolean>(false);
    const [PostcardState, setPostcardState] = useState<FormCardState>('collapsed')
    const [scrollHalf, setScrollHalf] = useState<boolean>(false);
    const [scrollFull, setScrollFull] = useState<boolean>(false);
    const [classes, setClasses] = useState<triggerClassResults>({trigger: '', card: ''});

    const [formStatus, setFormStatus] = useState<string | null>(null);

    useEffect(() => {
        console.log(b)
        if(b > 50){ //the scroll is above 50%
            setScrollHalf(true)
        } else {
            setScrollHalf(false)
        }

        if(b > 90){ //the scroll is above 90%
            setScrollFull(true)
        } else {
            setScrollFull(false)
        }
        
    }, [b])

    useEffect(() => {

        setClasses(triggerClass(PostcardState,b))

    }, [PostcardState, scrollHalf, scrollFull])

    const pointDown = () => {
        setPostcardState('expanded')
    }

    const handleFormSubmit = (result : string | null) => {
        setFormStatus(result);
    }

    const triggerClass = (state: FormCardState, b: number): triggerClassResults => {
        let triggerClasses = ''
        let CardClasses = ''
        
        if (state === 'expanded'){
            triggerClasses = 'bottom-0 bg-logo-blue/90'
            CardClasses = 'top-1/2 -translate-y-1/2'
        } else {
            if(b < 50){
                triggerClasses = '-bottom-[101vh] bg-logo-blue/0' 
                CardClasses = 'top-0 rotate-x-0'
            } else if (b < 90){
                triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                CardClasses = 'top-1/2 group-hover:top-0'
            } else {
                triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                CardClasses = 'top-0 group-hover:-top-10'
            } 
        }

        return {
            trigger: triggerClasses,
            card: CardClasses,
        }

    }

    return (
        <>
            {/* BACKGROUND OVERLAY - for when the contact form is expanded */}
            {/* <div className={`fixed w-full h-full bg-logo-blue z-50 ${expanded ? "block bg-opacity-90" : "hidden bg-opacity-0"} transition-all`}
            
            >
            </div> */}

            {/* TRIGGER ZONE - for triggering the expansion and hover effects */}

            <div className={`fixed w-full h-full flex flex-wrap bg-logo-blue flip-card ${classes.trigger} z-10 group justify-center transition-all duration-500`}
            
           
            onPointerDown={() => {PostcardState === 'expanded' ? setPostcardState('collapsed') : null}}
            >
                {/* ON SEND MESSAGE */}
                
                <div className={'fixed w-full h-full flex justify-center items-center'}
                >
                    <div className={'font-[Roboto]'}
                    >
                        {formStatus == 'success' ? "Sent!" : "Not Sent:)"}
                    </div>
                </div>

                <div className={`relative w-1/2 h-1/2 shadow flip-card-inner ${classes.card} ${PostcardState === 'expanded' ? "flip" : ''}`}
                
                onPointerDown={pointDown}
                >

                    {/* CARD FRONT */}
                    <div className={`absolute w-full h-full bg-[#f2e2b7] rotate-x-0 rounded-md overflow-hidden flip-card-front`}
                    style={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                    }}
                    > 
                    </div>
                    
                    {/* CARD BACK */}
                    <div className={`absolute w-full h-full bg-stone-100 rounded-md flip-card-back`}
                    style={{
                    boxShadow: "0 25px 50px 12px rgba(0,0,0,0.2)",
                    }}
                    onPointerDown={(e) => {e.stopPropagation()}}
                    > 
                        <ContactForm onSubmitResult={handleFormSubmit}></ContactForm>
                        
                    </div>
                
                </div>

                



            </div>

            

        </>
        


    )
}

export default Postcard