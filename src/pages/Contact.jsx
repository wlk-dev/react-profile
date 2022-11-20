import profilePic from "../assets/imgs/profile.png"

export default function Contact() {
    return (
        <div style={{display: "flex", alignItems: "center", justifyContent: 'center', flexDirection : "column", marginTop: "10px"}}>
            <img src={profilePic} id='profile-pic' alt="A picture of a blonde haired man from ACCA-13." />

            
        </div>
    )
}