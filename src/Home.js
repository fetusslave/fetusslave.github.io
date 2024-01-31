import { MainContainer, Content } from './Content';
import Projects from './Projects';
import Contact from './Contact';
import Header from './Header';

export default function Home() {
    return (
    <>
    <Header />
    <MainContainer>
        <div className="row no-gutter">
            <div className="col">
            <Content>
                <About />
                <Projects />
                <Contact />
            </Content>
            </div>
        </div>
    </MainContainer>
    </>
    );
}

function About() {
    return (
    <>
    <div id="about">
        <h1>Hello, I'm Hui</h1>
        <p>I'm a second year University student studying Computer Science.</p>
        <div>
            <Social imgSrc="github_icon.png" link="https://github.com/fetusslave" />
            <Social imgSrc="linkedin_icon.png" link="https://linkedin.com/in/hui-teo-a35a7a23a" />
        </div>
    </div>
    <br />
    </>
    );
}

function Social({ imgSrc, link }) {
    return (
        <a href={link}>
            <img className="social-icon" src={`images/${imgSrc}`} alt={imgSrc} />
        </a>
    )
}
