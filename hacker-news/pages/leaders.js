
const leaders = () => {

    const names = [
        "tptacek",
        "jacquesm",
        "ingve",
        "danso",
        "pseudolus",
        "rbanffy",
        "tosh",
        "lxm",
        "Tomte",
        "patio11",
        "Animats",
        "ColinWright",
        "rayiner",
        "JumpCrisscross",
        "todsacerdoti",
        "dragonwriter",
        "ChuckMcM",
        "zdw",
        "luu",
        "TeMPOraL"
      ]


    return (
        <div>
        <h1>Leaders</h1>
        <ul>
            {names.map((name) => {
                return (
                    <li>{name}</li>
                )
            })}
        </ul>
        </div>
    )
}

export default leaders