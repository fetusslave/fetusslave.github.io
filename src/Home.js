import { MainContainer, Content } from './Content';
import Projects from './Projects';
import Contact from './Contact';

export default function Home() {
    return (
    <>
    <MainContainer>
        <div className="row no-gutter">
            <div class="col">
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
        <h1>Hello, I'm fetusslave</h1>
        <div>
            <Social imgSrc="github_icon.png" link="https://github.com/fetusslave" />
            <Social imgSrc="linkedin_icon.png" link="/" />
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
