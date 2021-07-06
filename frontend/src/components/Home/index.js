import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setStories } from "../../reducers/story";
import health from "./health.jpg";
import health2 from "./health2.png";
import win from "./win.png";
import food from "./food.png";
import checklist from "./checklist.png";
import rules from "./rules.png";
import { scroller } from "react-scroll";
import "./home.css";
import happy from "./happy.jpg";
import { Slide } from "react-slideshow-image";
import slider1 from "./slider/slider1.jpg"
import slider2 from "./slider/slider2.jpg"
import slider3 from "./slider/slider3.jpg"
import slider4 from "./slider/slider4.jpg"
import slider5 from "./slider/slider5.jpg"
import slider6 from "./slider/slider6.jpg"
import slider7 from "./slider/slider7.jpg"



export default function Home({ homePageSection, setHomePageSection }) {
  const sliderArray =[1,2,3,4,5,6,7]
  const dispatch = useDispatch();

  useEffect(() => {
    if (homePageSection !== "") {
      console.log(homePageSection);
      scroller.scrollTo(homePageSection, { smooth: true });
      setHomePageSection(" ");
    }
  }, [homePageSection]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/stories`)
      .then((result) => {
        dispatch(setStories(result.data));
        localStorage.setItem("stories", JSON.stringify(result.data));
      })
      .catch((err) => {
        dispatch(setStories("some thing bad"));
      });
  }, []);



  const state = useSelector((state) => {
    return {
      stories: state.storiesReducer.stories,
    };
  });

  return (
    <div className="home">
      <section className="About" title="About">
        <img className="img" src={health} alt="healthy life" />
        <div className="paragraph">
          <span className="welcome">WELCOME TO HEALTHCARE</span>
          <h3 className="h3">
            Hello! Health Care is a natural way of improving your health
          </h3>
          <p className="p">
            A small river named Duden flows by their place and supplies it with
            the necessary regelialia. It is a paradisematic country, in which
            roasted parts of sentences fly into your mouth. Even the
            all-powerful Pointing has no control about the blind texts it is an
            almost unorthographic life One day however a small line of blind
            text by the name of Lorem Ipsum decided to leave for the far World
            of Grammar.
          </p>
          <img
            className="img2"
            src={health2}
            alt="healthy life"
            width="250rem"
            heigh="100rem"
          />
        </div>
      </section>

      <section title="ourServices" id="services">
        <div className="line">
          <span className="welcome">OUR SERVICES</span>
          <h3 className="h3">How it works?</h3>
        </div>
        <div className="allServices">
          <div className="once">
            <img src={rules} className="serviceImg" />
            <h4>Follow the program</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={checklist} className="serviceImg" />
            <h4>Work for result</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={food} className="serviceImg" />
            <h4>Eat healthy food</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="once">
            {" "}
            <img src={win} className="serviceImg" />
            <h4>Enjoy your life</h4>
            <p className="servicesParagraph">
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </div>
      </section>

      <section className="stories" title="stories" id="stories">
        <span className="welcome">STORIES</span>
        <h3 className="h3">Successfull Stories</h3>
        <div className="storyCard">
          {state.stories &&
            state.stories.map((story, index) => {
              return (
                <ul key={index} className="ul">
                  {" "}
                  <img className="happyMan" src={happy} alt="happy" />
                  {/* <img src="story.img" alt="happy" />  */}
                  <li className="description">{story.description}</li>
                  <div className="name">
                    <li>{story.firstName}</li>
                    <li>{story.lastName}</li>
                  </div>
                </ul>
              );
            })}
        </div>
      </section>

      {/* footer */}
      <link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <link
        href="http://fonts.googleapis.com/css?family=Cookie"
        rel="stylesheet"
        type="text/css"
      ></link>

      <footer class="footer-distributed" id="contact">
        <div class="footer-left">
          <h3>
            Health<span>Care</span>
          </h3>

          <p class="footer-links">
            <a href="/">Home</a>·<a href="/doctor"> Our nutrition</a>·
            <a href="/success">Stories</a>·<a href="#">About</a>·
            <a href="/logIn">logIn</a>
          </p>

          <p class="footer-company-name">The A_TEAM &copy; 2021</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p>
              <span>JORDAN</span> AMMAN
            </p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+962787878787</p>
          </div>

          <div>
            <i class="fa fa-envelope"></i>
            <p>
              <a href="">Test</a>
            </p>
          </div>
        </div>

        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the website</span>
            physicians featured are in private practice and, as independent
            practitioners, are not agents or employees of our.
          </p>

          <div class="footer-icons">
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-github"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
