"use client"
import { useScrollPercent } from "@/hooks/useScrollPercent";
import exp from "constants";
import ContactForm from "@/components/ContactForm";
import { useEffect, useState } from "react";
import { start } from "repl";

interface triggerClassResults{
    trigger: string,
    card: string,
}

interface PostCardProps{
    start?: number,
    half?: number,
    end?: number,
}

type FormCardState = 'collapsed' | 'expanded' | 'sent';

type ScrollState = 'start' | 'half' | 'end';
;

const Postcard = ({start=0, half=50, end=90}:PostCardProps) => {
    let scrollPercent = useScrollPercent().scrollPercentage
    let overlay = true; //temporarily disables overlay for WIP
    const [PostcardState, setPostcardState] = useState<FormCardState>('collapsed')
    const [scrollState, setScrollState] = useState<ScrollState>('start');
    const [classes, setClasses] = useState<triggerClassResults>({trigger: '', card: ''});

    const [formStatus, setFormStatus] = useState<string | null>(null);

    useEffect(() => {

        if(scrollPercent < half){ //scroll is below 50%
            setScrollState('start')
        } 

        if(scrollPercent > half){ //scroll is above 50%
            setScrollState('half')
        } 

        if(scrollPercent > end){ //scroll is above 90%
            setScrollState('end')
        } 
        
    }, [scrollPercent])

    useEffect(() => {
        if(formStatus === 'success') {
            setPostcardState('sent')
        }
    },[formStatus])

    useEffect(() => {

        setClasses(triggerClass(PostcardState,scrollState))

    }, [PostcardState, scrollState])

    const pointDown = () => {
        setPostcardState('expanded')
    }

    const handleFormSubmit = (result : string | null) => {
        setFormStatus(result); 
    }

    const triggerClass = (state: FormCardState, scrollState: ScrollState): triggerClassResults => {
        let triggerClasses = ''
        let CardClasses = ''
        
        switch(state){
            case "collapsed":
                if(scrollState === 'start'){
                    triggerClasses = '-bottom-[101vh] bg-logo-blue/0' 
                    CardClasses = 'top-0 rotate-x-0'
                } else if (scrollState === 'half'){
                    triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                    CardClasses = 'top-1/2 group-hover:top-0'
                } else {
                    triggerClasses = '-bottom-[90vh] bg-logo-blue/0'
                    CardClasses = 'top-0 group-hover:-top-10'
                } 
                break;
            case "expanded":
                triggerClasses = 'bottom-0 bg-logo-blue/90'
                CardClasses = 'top-1/2 -translate-y-1/2'
                break;
            
            case 'sent':
                triggerClasses = 'top-0 bg-logo-blue/0'
                CardClasses = 'top-0 -translate-y-full'
                break;
            default:
                break;

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

            <div className={`fixed w-full h-full flex flex-wrap bg-logo-blue perspective-distant ${classes.trigger} z-10 group justify-center transition-all duration-500`}
            
           
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

                <div className={`relative w-1/2 h-1/2 shadow transition-all transform-3d duration-500 ${classes.card} ${PostcardState === 'expanded' ? "-rotate-x-180" : ''}`}
                
                onPointerDown={pointDown}
                >

                    {/* CARD FRONT */}
                    <div className={`absolute w-full h-full bg-[#f2e2b7] rotate-x-0 rounded-md overflow-hidden backface-hidden`}
                    style={{
                    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.2)",
                    }}
                    > 
                    </div>
                    
                    {/* CARD BACK */}
                    <div className={`absolute w-full h-full bg-stone-100 rounded-md backface-hidden rotate-x-180`}
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