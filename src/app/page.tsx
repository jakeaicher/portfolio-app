import Image from "next/image";
import BentoGrid from "@/components/BentoGrid";
import ScrollingMarquee from "@/components/ScrollingMarquee";
import { BentoGridElement } from "@/components/BentoGridElement";
import { CardImage } from "@/components/CardImage";
import { CardContentContainer } from "@/components/CardContentContainer";
import Postcard from "@/components/Postcard";


export default function Home() {
  return (
    <>
      <Postcard></Postcard>
      <div className="bento-grid:w-[1112px] m-auto mt-14">
        <BentoGrid spacing={30}>
          <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square"
            style={{
                gridArea: "1 / 1 / span 2/ span 2",
            }}
            >
              {/* Header Title Card */}
              
              <div className="w-full h-full p-20">
                
              <div className="w-full h-full flex flex-col justify-center gap-20">
                
                <div className="w-full">
                  <Image 
                  width={429}
                  height={187}
                  className=""
                  style={{width:"20rem", height:"auto"}}
                  src="/branding/logo/Stack_Cutout_Blue.png"
                  alt="t"
                  />
                </div>
                <div className="w-full">
                  {/* <h2 className="w-full  text-4xl font-[Roboto] font-medium text-slate-700">
                    Motion Designer
                  </h2> */}
                  <h2 className="font-[Roboto]">
                    <span className="text-4xl">I am a <span className="font-bold text-logo-blue">Motion Designer</span>,</span> 
                  </h2>
                  <p className="mt-4 font-[Roboto]">
                    creating ready-to-post 2D & 3D content from concept to sound design.<br></br> My specialty is creating unconventional visuals for fashion and furniture.
                  </p>
                </div>
              </div>
            </div>
            </div>

            {/* Hero Card */}

            <div className="w-auto h-auto relative rounded-xl cell-hover"
             style={{
                gridArea: "1 / 3 / span 2/ span 1",
            
            }}
            >
              <div className="w-full h-full absolute outline-2 outline-solid outline-[#e5e7eb] overflow-hidden rounded-xl"
              >
                <Image 
                width={810}
                height={810}
                className="hero_bg"
                style={{height: "100%", width:"auto", objectFit:"cover"}}
                src="/work/MindMaze/MindMaze_Cover_Background.png"
                alt="t"
                />
              </div>

              <div className="w-full h-full absolute"
              >
                <Image 
                width={810}
                height={810}
                className="hero_subject"
                style={{height: "100%", width:"100%", objectFit: "cover", overflow: "visible"}}
                src="/work/MindMaze/MindMaze_Cover_Character.png"
                alt="t"
                />
              </div>
              <div className="w-full h-full absolute">
                <Image 
                width={1024}
                height={1024}
                className="rotate-0 scale-100 hover:scale-150  hover:rotate-12 transition-transform"
                style={{width: "70%", height: "auto",position: "absolute", bottom: "-5%", left: "5%", overflow: "visible"}}
                src="/work/MindMaze/mind_maze_title.png"
                alt="t"
                />

              </div>
              

            </div>
            </BentoGrid>
        </div>
            {/* Section Heading */}

            <div className="w-full border-t-4 border-b-4 border-black">
              <ScrollingMarquee>
                <div className="flex items-center justify-evenly gap-5">
                  <div className="w-fit h-fit text-3xl font-bold font-[Roboto] float-left uppercase">Featured Projects</div>
                  <div className="w-2 h-2 bg-black rounded-full mr-6"></div>
                </div>
              </ScrollingMarquee>
            </div>

            {/* Featured Projects Grid */}

            <div className="bento-grid:w-[1112px] m-auto mt-14">
            <BentoGrid spacing={30}>
            {/* <div className="w-auto h-auto rounded-xl outline-2 outline-solid outline-[#e5e7eb] cell-hover"
            style={{
                    gridArea: "1 / 1 /span 2/ span 1",
                
                }}
            >
            </div> */}
            
            <BentoGridElement 
            row={1} 
            column={1} 
            cellHeight={2} 
            cellWidth={1} 
            className="rounded-xl border-solid border-2 cell-hover overflow-hidden"
            >
            <div className="w-full h-full">
              <img className="w-full h-full object-cover scale-[128%] hover:scale-100 transition-transform" src="/work/Pigeon/Bird.png" />
              
            </div>


            </BentoGridElement>

            {/* <div className="w-auto h-auto rounded-xl outline-2 outline-solid outline-[#e5e7eb] cell-hover"
                style={{
                    gridArea: "1 / 2 /span 1/ span 2",
                
                }}
            > 
            </div>
             */}

            <BentoGridElement 
            row={1} 
            column={2} 
            cellHeight={1} 
            cellWidth={2} 
            className="rounded-xl border-solid border-2 cell-hover"
            />

            {/* <div className="w-auto h-auto rounded-xl border-solid border-2 cell-hover"
            style={{
              gridArea: "2 / 2 /span 1/ span 1",
          
          }}
            >
                
            </div> */}

            <BentoGridElement 
            row={2} 
            column={2} 
            cellHeight={1} 
            cellWidth={1} 
            className="group rounded-xl border-solid border-2 cell-hover overflow-hidden"
            >
            
            <div className="w-full h-full absolute">
              <img className="w-full h-full object-cover overflow-visible scale-[100%] translate-x-[0px] translate-y-[0px] group-hover:scale-[128%] transition-transform" src="/work/Pigeon/Bird.png" />
              <div
              className="w-full h-0 absolute bottom-0 left-0 right-0 group-hover:h-full transition-[height] duration-500 bg-slate-100"
              >
                <div className="w-full h-full flex flex-col justify-evenly p-10">
                  <div className="font-[Roboto] font-bold text-2xl">
                    Sending My Resume via Carrier Pigeon
                  </div>
                  <div className="w-full h-1 scale-x-0 group-hover:scale-x-100 ease-in duration-500 transition-transform  bg-slate-200 rounded-full ">

                  </div>

                  <div className="font-[Roboto] text-xl">
                    Designing a shoe for MSCHF and sending it via carrier pigeon 
                  </div>


                </div>
              </div>
            </div>
            
            </BentoGridElement>

            <BentoGridElement 
            row={2} 
            column={3} 
            cellHeight={2} 
            cellWidth={1} 
            className="group rounded-xl border-solid border-2 cell-hover overflow-hidden"
            >
            
            <CardImage src="/work/Pigeon/Bird.png" imgScalePercentage={{initial:100,zoom:128}} imgTranslateOnHover={{x:'10', y:'-50'}} rotation={0} rotationOnHover={-10}/>
              <CardContentContainer background="#FFFFFF" xTransitionDir="left" yTransitionDir="none" half="verticle" swapEndPos={true}>
                <div className="w-full h-full flex flex-col justify-evenly p-10">
                  <div className="font-[Roboto] font-bold text-2xl">
                    Sending My Resume via Carrier Pigeon
                  </div>
                  <div className="w-full h-1 scale-x-0 group-hover:scale-x-100 ease-in duration-500 transition-transform  bg-slate-200 rounded-full ">

                  </div>

                  <div className="font-[Roboto] text-xl">
                    Designing a shoe for MSCHF and sending it via carrier pigeon 
                  </div>


                </div>
              </CardContentContainer>

            </BentoGridElement>

            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            <div className="w-auto h-auto rounded-xl border-solid border-2 aspect-square">

            </div>
            </BentoGrid>
            </div>

            {/* Section Heading */}

            <div className="w-full border-t-4 border-b-4 border-black">
              <ScrollingMarquee>
                <div className="flex items-center justify-evenly gap-5">
                  <div className="w-fit h-fit text-3xl font-bold font-[Roboto] float-left uppercase">About Me</div>
                  <div className="w-2 h-2 bg-black rounded-full mr-6"></div>
                </div>
              </ScrollingMarquee>
            </div>

            {/* ABOUT ME */}

            <div className="bento-grid:w-[1112px] m-auto mt-14">
              <div className="p-14 font-[Roboto]">
                My mission is to build things that spark curiosity and inspire new ways of seeing the world. It’s not enough to simply build what I imagined; I needed to share it in ways that are visually compelling and thought-provoking. My design process is an extension of this pursuit, always searching for ideas that stand apart, not just trendy, but meaningful. Whether through product design, visual storytelling, or interactive experiences, I aim to craft work that surprises, delights, and invites others to think differently.
              </div>

            </div>

            
    </>
    
  );
}
