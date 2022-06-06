import React from "react";
import './Home.css'
import "../../common/header/Header"
import Header from "../../common/header/Header.js";
import SingleLineImageList from "./movieList";
import moviesData from "../../common/moviesData";
import TitlebarImageList from './leftImageList'
import SimpleCard from "./filters";
class Home extends React.Component {

    constructor(props) {
        super(props);

        this.state = { data: moviesData };
    }

    render() {
        return (

            <div>
                <Header />
                <span className="heading">Upcoming Movies</span>
                <SingleLineImageList moviesData={this.state.data} />

                <div className="flex-container">
                    <div className="left">
                        <TitlebarImageList moviesData={this.state.data} />
                    </div>
                    <div className="right">
                        <SimpleCard />
                    </div>
                </div>

            </div>
        );

    }
}


export default Home;