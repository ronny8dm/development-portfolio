import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import About from '../About'
import { Mail, MapPin } from 'lucide-react'

const DATA = {
    name: "Rhonny",
    description: "I'm a computer science grad from London, UK. Currently looking for my next challenge in the tech industry.",
    avatarUrl: "img/profilepic.jpg",
    initials: "DM",
}

function Hero() {
  return (
    <section id="hero" className='w-full max-w-2xl mx-auto'>
        <div className=" w-full  space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <h2
                
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                
                
              >{`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}</h2>
              <p
                className="max-w-[600px] md:text-xl"
                
                
              >{DATA.description}</p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                    <MapPin className='w-4 h-4 text-muted-foreground'/>
                <span className="text-muted-foreground text-sm">London, UK</span>
                    </div>
                <div className="flex items-center gap-1">
                    <Mail
 className="w-4 h-4 text-muted-foreground" />
                <span className="text-muted-foreground text-sm">ronnydiaz23@gmail.com</span>
              
                    </div>
                </div>

            </div>
            <div >
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <About/>
        </div>
      </section>
  )
}

export default Hero