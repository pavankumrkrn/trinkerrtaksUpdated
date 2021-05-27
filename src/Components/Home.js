import React from 'react'
import { images } from '../shared/images'
import './home.css'
import Timer from './Timer';

const Home = () => {
    const [imgs, setImages] = React.useState([...images].reverse());
    const update = () => {
        console.log("change picture");
        imgs.shift();
        setImages(imgs.map((i, index) => {
            return (index !== imgs.length - 1) ? i : null
        }).filter(i => i !== null));
    }
    return (
        <div className="home">
            <div className="mt-5">
                <div className="row justify-content-center">
                    <div className="col-sm-5 text-center">
                        <button className="btn btn-primary btn-lg">Rating History</button>
                    </div>
                    <div className="col-sm-4 m-auto text-center">
                        <Timer update={update} />
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 img">
                    {imgs.map((i, index) => {
                        return (
                            <div className="card img-card" key={index}>
                                <div className="card-text p-3">
                                    <p className="text-center h3">{i.name}</p>
                                </div>
                                <img src={i.url} alt="" className="card-img-top" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
