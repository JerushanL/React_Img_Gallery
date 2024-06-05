function ImageBox(props){
    return (
        <div className="imagebox">
            <img src={props.image} alt="dogimage" className="image"/>
            <h2>{props.name}</h2>
        </div>
    )
}

export default ImageBox;