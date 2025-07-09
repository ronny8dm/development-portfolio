import React from "react";
import {ResumeCard} from "../Resume-Card";


function Experience() {

    const DATA = {
        work: [
    {
      company: "Mylands",
      href: "https://mylands.com/",
      badges: [],
      location: "London, UK",
      title: "Frontend Web Developer",
      logoUrl: "/img/mylands.webp",
      start: "April 2023",
      end: "December 2023",
      description:
        [
            "Assisted in creating and maintaining visually appealing and responsive website designs using Shopify's Liquid markup language, JavaScript, and CSS. Optimized company website for performance and SEO",
                    "Implemented and configured a variety of Shopify apps and extensions to enhance site functionality",
                    "Collaborated with cross-functional teams to gather and analyze requirements, ensuring alignment with business goals",
                    "Participated in code reviews and provided constructive feedback to team members",
                    "Worked closely with the design team to implement user-friendly interfaces and enhance user experience",
                    "Assisted in troubleshooting and resolving technical issues related to website functionality and performance"
        ]
    },
    {
      company: "Roblanc ltd",
      badges: [],
      href: "https://shopify.com",
      location: "Remote",
      title: "Full-Stack Web Developer Self-Employed",
      logoUrl: "/shopify.svg",
      start: "May 2019",
      end: "August 2021",
      description:
        [
            "Assisted in creating and maintaining visually appealing and responsive website designs using Shopify's Liquid markup language, JavaScript, and CSS.",
        "Responsible for testing applications and looking for bugs & monitoring website performance",
        "Responsible for application code and UI/UX design",
        "Optimized company website for performance and SEO",
        "Implemented and configured a variety of Shopify apps and extensions to enhance site functionality.",
        "Collaborated with cross-functional teams to gather and analyze requirements, ensuring alignment with business goals",
        "Participated in code reviews and provided constructive feedback to team members",
        "Worked closely with the design team to implement user-friendly interfaces and enhance user experience",
        "Assisted in troubleshooting and resolving technical issues related to website functionality and performance"
        ]
    },
    
  ],
};

    return (
        <>
            <section id="work" className="w-full max-w-2xl mx-auto">
                <div className="flex min-h-0 flex-col gap-y-3">
                <div >
                    <h2 className="text-xl font-bold">Work Experience</h2>
                </div>
                {DATA.work.map((work, id) => (
                    <div
                    key={work.company}
                    >
                    <ResumeCard
                        key={work.company}
                        logoUrl={work.logoUrl}
                        altText={work.company}
                        title={work.company}
                        subtitle={work.title}
                        href={work.href}
                        badges={work.badges}
                        period={`${work.start} - ${work.end ?? "Present"}`}
                        description={work.description}
                    />
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Experience