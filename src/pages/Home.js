import { React, useRef } from "react";
import "./Home.css";
import Footer from "../components/Footer/Footer";
import { toast } from "react-toastify";
import Slider from "../components/Slider/Slider";
import Navbar from "../components/Navbar/Navbar";

function Home() {
  const inputRef = useRef();

  const notify = (e) => {
    inputRef.current.value = "";
    e.preventDefault();
    toast.success("Your response has been recorded!", {
      position: toast.POSITION.TOP_CENTER,
    });
  };

  return (
    <div className="home">
      <Navbar />
      <div className="background-ellipse"></div>
      <div className="background-ellipse-2"></div>
      <div className="background-lines"></div>

      {/* HOME TOP */}

      <section id="home-top" className="home-top">
        <div className="home-back"></div>
        <div className="home-top-1">One dashboard for your</div>
        <div className="home-top-2">
          <div className="home-top-1">SaaS Subscriptions</div>
        </div>
        <div className="home-top-5">Know your SaaS Billing and Costs</div>
        <div className="home-top-6">Register now for early access</div>
        <form onSubmit={notify} className="home-page-email" aos-data="fade-up">
          <input
            ref={inputRef}
            type="email"
            name="E mail"
            className="home-top-input"
            placeholder="E-mail"
            required
          />
          <button className="home-top-btn">Register</button>
        </form>
      </section>

      {/* FEATURES */}

      <section id="home-desc" className="home-desc">
        <div className="home-desc-heading">Features</div>
        <p className="home-desc-text">
          SaaSDen not only makes it simpler to manage your subscriptions, but
          also provides valuable insights that can help you save money and get
          the most out of your software applications
        </p>
        <div className="home-desc-card-container">
          <div className="home-desc card">
            <div className="home-card-img">
              <i className="fas fa-toggle-on fa-2x"></i>
            </div>
            <div className="home-card-heading">Subscription Dashboard</div>
            <div className="home-card-text">
              With a subscription tracking dashboard, View all of your active
              subscriptions in one place
            </div>
          </div>
          <div className="home-desc card">
            <div className="home-card-img-one">
              <i className="fas fa-clock fa-2x"></i>
            </div>
            <div className="home-card-heading">Managing Subscription</div>
            <div className="home-card-text">
              Simply tap the "stop" button to cancel a subscription, and tap the
              "renew" button to restart it.
            </div>
          </div>
          <div className="home-desc card">
            <div className="home-card-img-two">
              <i className="far fa-chart-bar fa-2x"></i>
            </div>
            <div className="home-card-heading">Analytics</div>
            <div className="home-card-text">
              Get real-time usage insights for all of your teams.
            </div>
          </div>
          <div className="home-desc card">
            <div className="home-card-img-three">
              <i className="fas fa-bolt fa-2x"></i>
            </div>
            <div className="home-card-heading">Integrations</div>
            <div className="home-card-text">Coming Soon</div>
          </div>
        </div>
      </section>

      {/* PRICING AND PLANS SECTION */}

      <section id="home-plans" className="home-plans">
        <div className="plans heading">Pricing & Plans</div>
        <div className="plans-sub-heading">
          <div>Coming&nbsp;</div>
          <div className="blue">soon</div>
        </div>
        <img
          className="plans-blur-pic"
          src={require("../components/images/blur.png")}
          alt=""
        ></img>
      </section>

      {/* ABOUT US SECTION */}

      <section id="about-us" className="about-us">
        <div className="about-us-top">
          <div className="heading">ABOUT US</div>
          <div className="desc">
            SaaSDen gives its customers the ability to optimize their SaaS stack
            through an easy-to-use management dashboard. It is a cloud-based
            tool that enables customers to gather analytics and insights about
            their best performing SaaS products. Customers can track their
            software subscriptions, renew them and reduce waste by viewing
            realtime spend analytics. Our integrations help in managing users
            and licenses etc. helping our customers effectively manage their
            SaaS.
          </div>
        </div>
        {/* <ImageSlider slides={SliderData} /> */}
        <Slider />
      </section>
      {/* TODO: PUT FOOTER HERE */}
      <Footer />
    </div>
  );
}

export default Home;
