const WineList = ({ wines }) => {
    return (
        <div>
            {
                !wines || wines.length === 0
                    ? <p>No wines to list.</p>
                    : wines.map((index, wine) =>
                        <div>
                            <p key={index}>{wine.name}</p>
                        </div>
                    )
            }
        </div>
    )
}

export default WineList
