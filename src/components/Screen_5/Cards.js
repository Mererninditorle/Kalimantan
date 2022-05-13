let cards = [
    {img: "https://images.unsplash.com/photo-1603731569270-acf8458913f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW5kb25lc2lhbiUyMG1hbnxlbnwwfHwwfHw%3D&w=1000&q=80", name: "Jerry Sanfield", designation: "Tour Guide"},
    {img: "https://i.pinimg.com/originals/6f/a1/89/6fa189f9aca1a3bfc87284d71f455ca7.jpg", name: "Minke", designation: "Local Resident"},
    {img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt4gun8t14TxizCBYsKbLE4fytfz7UdCabptbA0o2c2Fizp9c7hXRKSbgzg90iWJe3OXA&usqp=CAU", name: "Jimmy O Yang", designation: "Researcher"},
    {img: "https://a0.muscache.com/pictures/3e319a0f-1557-4e06-aaf3-ee830b27088e.jpg", name: "Bo Bumham", designation: "Photographer & Videographer"}
]


function Cards() {
    return(
        <div className="card_wrapper_5">
            {cards.map((cards) => 
                <div className="card_5">
                    <img src={cards.img} height="300"/>
                    <div className="card_main_5">
                        <div className="card_header_5">{cards.name}</div>
                        <div className="card_text_5">{cards.designation}</div>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Cards;