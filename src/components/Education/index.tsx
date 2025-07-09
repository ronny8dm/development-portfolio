import {ResumeCard} from "../Resume-Card";


function Education() {

    const DATA = {
        education: [
     {
      school: "London Metropolitan University",
      href: "https://www.londonmet.ac.uk/",
      degree: "Firts Class Honours Degree in Computer Science",
      logoUrl: "/img/lodonmet.png",
      start: "2021",
      end: "2025",
    },
    
    
  ],
};

    return (
        <>
            <section id="work" className="w-full max-w-2xl mx-auto px-2 py-4">
                <div className="flex min-h-0 flex-col gap-y-3">
                <div >
                    <h2 className="text-xl font-bold">Education</h2>
                </div>
                {DATA.education.map((education, id) => (
                    <div
                    key={education.school}
                    >
                    <ResumeCard
                        key={education.school}
                        href={education.href}
                        logoUrl={education.logoUrl}
                        altText={education.school}
                        title={education.school}
                        subtitle={education.degree}
                        period={`${education.start} - ${education.end}`}
                    />
                    </div>
                ))}
                </div>
            </section>
        </>
    )
}

export default Education;