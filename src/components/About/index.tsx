import Markdown from "react-markdown";

const DATA = {
    summary: `I'm passionate about building software that makes a difference. With a background in front-end development, I specialize in creating intuitive user interfaces and seamless user experiences. My journey in tech has been driven by a love for problem-solving and a desire to continuously learn and grow. currently mastering .NET and Laravel to expand my skill set and tackle more complex challenges. I thrive in collaborative environments where I can share knowledge and learn from others. In my free time, I enjoy participating in hackathons, contributing to open-source projects, and staying active in the tech community.`
};  

function About() {
    return (
        <section id="about" className="space-y-4">
            <h2 className="text-xl font-bold">About</h2>
            <div className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                <Markdown>{DATA.summary}</Markdown>
            </div>
        </section>
    )
}

export default About