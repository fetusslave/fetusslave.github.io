import { Content } from './Content';

function Project({ name, used, description, imgSrc }) {
    return (
        <div className="card mb-3 project-card" style={{maxWidth: '100%', minHeight: '180px'}}>
        <div className="row no-gutters">
            <div className="col-md-3 w-100 img-col">
                <img src={`images/${imgSrc}`} className="card-img" alt="..." />
            </div>
            <div className="col-md-8">
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">
                    <small className="text-highlight" style={{wordSpacing: "5px"}}>
                        {used.reduce((acc, e) => acc+" • "+e)}
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
    const projects = [
        {name: "3D Renderer", used: ["Python"], description: "A real-time 3D renderer built using Pygame. It renders 3D models from Wavefront OBJ files, supporting mesh translation and rotation. Uses simple diffuse lighting and allows for the use of multiple light sources.", image: "projects/3D_renderer.png"},
        {name: "24 Points Discord Bot", used: ["Python", "Docker", "AWS"], description: "Discord bot that allows users to compete in solving randomly generated 24 points questions. Includes a solver which lists all possible solutions for a given question. Deployed on AWS EC2.", image: "projects/24_bot.png"},
        {name: "Virtual Avatar", used: ["Python", "OpenCV"], description: "Uses OpenCV and MediaPipe Holistic Landmarker to convert webcam video into a full body, moving virtual avatar. Allows output to a virtual camera, so the virtual avatar can be used in streaming or video calls.", image: "projects/virtual_avatar.png"}
    ];
    return (<>
        <div id="projects">
            <h1>Projects</h1>
            <div className="container projects">
                {projects.map((p) => {
                    return <Project name={p.name} used={p.used} description={p.description} imgSrc={p.image} />
                })}
            </div>
        </div>
        <br />
    </>);
}