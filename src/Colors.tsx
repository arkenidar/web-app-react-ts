import { useState } from 'react'

function Colors() {

    const colorList = ["Red", "Green", "Blue", "Black", "White"];

    const [currentColor, setCurrentColor] = useState(colorList[0]);

    return (
        <div>
        <h1>Colors</h1>
        <div style={{ color: currentColor.toLowerCase() }}>
            <p>Selected Color: {currentColor}</p>
        </div>
        {colorList.map(color => (
            <p key={color}
             style={{ color: color.toLowerCase() }}
            onClick={() => setCurrentColor(color)}
            >{color}: #{color.toLowerCase()}</p>
        ))}
        </div>
    );
}

export default Colors;
