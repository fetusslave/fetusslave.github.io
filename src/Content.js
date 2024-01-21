export function MainContainer({ children }) {
    return (
        <div className="container-fluid min-vh-100 main-container">
            {children}
        </div>
    );
}

export function TextContent({ children }) {
    return (
    <div className="container content-container">
        {children}
    </div>
    );
}

export function CardContent({ children }) {
    return (
    <TextContent>
        <div className="row justify-content-center">
        <div className="card form-card col-lg-4 col-md-8 col-sm-12">
            {children}
        </div>
        </div>
    </TextContent>
    );
}
