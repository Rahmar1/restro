import React, { Fragment } from "react";
import Header from "./Header";
import './Home.css';
import '../../style.css';
import food from "../../images/food.jpg";
import food2 from "../../images/2.png";
import Data from "../../Data";
import { Carousel } from "react-bootstrap";
import person1 from '../../images/1.jpg';
import person2 from '../../images/2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";


const Home = () => {
    const Dataitems = Data.map((item) => {
        return (
            <div className="col-md-4">
                <div className="box">
                    <img src={item.img} />
                    <h5>{item.titel}</h5>
                    <span>{item.time}</span>
                    <h6>{item.price}</h6>
                </div>
                <button className="order"><a href="#">Order Now</a> </button>
            </div>
        )
    });
    return (
        <Fragment>
            <Header />
            <section className="numbers">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                            <h2>+5111</h2>
                            <h6>SAVINGS</h6>
                        </div>
                        <div className="col-md-3 ">
                            <h2>+5111</h2>
                            <h6>PHOTOS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>+5111</h2>
                            <h6>ROCKETS</h6>
                        </div>
                        <div className="col-md-3">
                            <h2>+5111</h2>
                            <h6>GLOBES</h6>
                        </div>

                    </div>

                </div>

            </section>
            <section className="start" id="about">
                <div className="container" >
                    <div className="row">
                        <div className="col-md-6">
                            <img className="food" src={food} title="food" />
                        </div>
                        <div className="col-md-6">
                            <h2>We pride ourselves on making real food from the best ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus</p>
                            <button><a href="#">Learn More</a> </button>
                        </div>
                    </div>
                </div>

            </section>
            <section className="two">
                <div className="container">
                    <div
                        className="row">
                        <div className="col-md-6">
                            <h2>We make everything by hand with the best possible ingredients.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
                            <ul>
                                <li>Etiam sed dolor ac diam volutpat.</li>
                                <li>Erat volutpat aliquet imperdiet.</li>
                                <li>purus a odio finibus bibendum.</li>
                            </ul>
                            <button><a href="#">Learn More</a> </button>
                        </div>

                        <div className="col-md-6">
                            <img className="food2" src={food2} title="food2" />
                        </div>
                    </div>

                </div>

            </section>
            <section className="three">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>When a man's stomach is full it makes no<br />
                                difference whether he is rich or poor.</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio<br />
                                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

                            </p>
                            <a href="#"> <FontAwesomeIcon icon={faCaretUp} className="icon2" /> Watch Our Work</a>
                        </div>
                    </div>
                </div>
            </section>
            <section className="sales" id="ex">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Explore Our Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div className="row">
                        {Dataitems}
                    </div>
                </div>
            </section>
            <section className="slider" id="review">

                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-12">
                            <h2>Testimonials</h2>
                        </div>
                        <div className="col-md-12 col-lg-12">
                            <Carousel data-bs-theme="dark" className="carousel">
                                <Carousel.Item>
                                    <img src={person1} />
                                    <Carousel.Caption>
                                        <h5>Ui/Ux</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit. </p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img src={person2} />
                                    <Carousel.Caption>
                                        <h5>Front End</h5>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet,<br /> consectetur adipiscing elit.</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                            </Carousel>
                        </div>
                    </div>
                </div>

            </section>
            <section className="QA" id="faq">
                <div className="container">
                    <div className="row">
                        <h2>Frequently Asked Questions</h2>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5> ~Is Foodera Bread really baked fresh each day?</h5>
                            <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</h6>
                        </div>
                        <div className="col-md-6">
                            <h5>~ Do you bake breads containing animal fats or products?</h5>
                            <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</h6>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <h5> ~ Can I order your products online?</h5>
                            <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</h6>
                        </div>
                        <div className="col-md-6">
                            <h5>~ When are you opening a shop near me?</h5>
                            <h6>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</h6>
                        </div>
                    </div>
                </div>
            </section>
           
    
        </Fragment>

    )
}

export default Home;