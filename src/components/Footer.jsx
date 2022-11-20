export default function Footer(props) {
    return (
        <div className="card-holder">
            <div className="contact-card">
                <a href="mailto:william.koelling@gmail.com">
                    <i className="fa fa-envelope" style={{ fontSize: "2.5vw" }}></i>
                    <label>Email Me</label>
                </a>
            </div>

            <div className="contact-card">
                <a href="https://github.com/wlk-dev" target="_blank">
                    <i className="fa fa-github" style={{ fontSize: "2.5vw" }}></i>
                    <label>My GitHub</label>
                </a>
            </div>

            <div className="contact-card">
                <a href="">
                    <i className="fa fa-linkedin-square" style={{ fontSize: "2.5vw" }}></i>
                    <label>LinkedIn</label>
                </a>
            </div>
        </div>
    )
}