const OpenLink = ({ redirectURL, logoImage }) => {
    return (
        <>
            <span><a href={redirectURL} target="_blank">
                <img src={logoImage} className="logo" alt="Vite logo"/>
            </a>
            </span>
            
        </>
    );
};

export default OpenLink;