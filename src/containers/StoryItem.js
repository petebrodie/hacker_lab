const StoryItem = ({title, url}) => {
    return (
        <li>
            <h2>{title}</h2>
            <p>{url}</p>
        </li>
    );
}

export default StoryItem;