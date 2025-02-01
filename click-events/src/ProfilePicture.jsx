
function ProfilePicture(){
    const handelclick = (e) => e.target.style.display = "none";
    

    return(<img  onClick={(e) => handelclick(e)} src="https://i.pinimg.com/736x/de/7a/1f/de7a1f043528e1e2df8327f2df81a8e6.jpg" alt="profile picture" width={150} height={150} />)
}
export default ProfilePicture