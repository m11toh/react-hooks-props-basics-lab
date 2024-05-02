import user from "../data/user"

const Links = () => {
    return(
        <div>
            <h3>Links</h3>
            <a href="#github">{user.links.github}</a>
            <a href="#limkedin">{user.links.linkedin}</a>

        </div>
    )
    


}
export default Links