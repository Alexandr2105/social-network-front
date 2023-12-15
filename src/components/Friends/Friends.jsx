import mod from "./Freinds.module.css"

export const Friends = (props) => {
    const friends = props.reducerPage.sidebar.map(value =>
        <div>
            <img src={value.avatar} alt="avatar"></img>
            <p>{value.name}</p>
        </div>
    )

    return (
        <div className={mod.friendsInfo}>
            {friends}
        </div>
    )
}