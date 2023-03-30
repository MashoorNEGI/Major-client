const Card = ({ imageSrc, title }) => {
    return (
        <div className="card">
            <img src={imageSrc} alt={title} className="card-image" />
            <div className="card-title">{title}</div>
        </div>
    );
};

export default Card