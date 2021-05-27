import React from 'react'

const Main = () => {
    return (
        <div className="main">
            <p className="text-left h5 mb-5">Welcome username,</p>
            <div className="mb-5">
                <p>H, in this app you will be provided 5 images. You can rate them by swiping left or right. Swipe right if you like them and left if you don't.</p>
                <p>You will have 5 seconds to rate each image,</p>
                <p>A timer will be running for that.</p>
                <p>You can also view your rating history by navigating to<b> "Rating History".</b>  </p>
            </div>
            <button className="btn btn-success btn-outline-light btn-lg" type="button">START</button>
        </div>
    )
}

export default Main
