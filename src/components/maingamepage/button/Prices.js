import React from 'react'

function Prices() {

    const prices = [{
        'PriceId1': '199',
        'PriceId2': '299',
        'PriceId3': '399',
        'PriceId4': '499',
        'PriceId5': '599',
        'PriceId6': '699',
        'PriceId7': '799',
    }]

    return (
        <div>

            {prices.map(price => {
                return <p key={price.PriceId7}>Price {price.PriceId1}</p>
            })}

        </div>
    )
}

export default Prices
