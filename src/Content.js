export function MainContainer({ children }) {
    return (
        <div className="container-fluid min-vh-100 main-container">
            {children}
        </div>
    );
}

export function Content({ children, id="" }) {
    return (
    <div className="container content-container">
        {children}
    </div>
    );
}

export function CardContent({ children }) {
    return (
    <div className="row justify-content-center">
    <div className="card form-card col-lg-4 col-md-8 col-sm-12">
        {children}
    </div>
    </div>
    );
}

export function Banner({ image }) {
    const style = {
        backgroundImage: `url(${image})`
    }
    return (
    <div className="banner" style={style}>
    <div><span className="banner-text">Hello, </span></div>
    <div><span className="banner-text">I'm fetusslave</span></div>
    </div>
    );
}
