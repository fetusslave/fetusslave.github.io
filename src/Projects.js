import { Content } from './Content';

function Project({ name, used, description, imgSrc }) {
    let usedString;
    if (used.length > 0) {
        usedString = used[0]+used.slice(1, used.length).map((e) => " • "+e);
    }
    return (
        <div className="card mb-3 project-card" style={{maxWidth: '100%', minHeight: '180px'}}>
        <div className="row no-gutters">
            <div className="col-md-4 w-100 img-col">
            <img src={`images/${imgSrc}`} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <small className="text-highlight" style={{wordSpacing: "5px"}}>
                        {usedString}
                    </small>
                </p>
                <p className="card-text">{description}</p>
            </div>
            </div>
        </div>
        </div>
    );
}

export default function Projects() {
    return (<>
        <div id="projects">
            <h1>Projects</h1>
            <div className="container projects">
                <Project name="title" used={["JavaScript", "React"]} description="aa
                aaaaaaaaaaaaaaaaaaaaaaaaa aa aaaaaaaaaaaaaaaa
                aaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aa aaaaaaaaaaaaaaaa
                aaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaaaaaaaa
                aaaaaaaaaaaaaaaa
                aaaaaaaaa" imgSrc="background.png" />
                <Project name="aaaaa" used={["a", "aaaaa"]} description="aaaaa" imgSrc="background2.jpg" />
            </div>
        </div>
        <br />
    </>);
}