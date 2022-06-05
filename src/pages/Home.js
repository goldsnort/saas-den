import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="background-ellipse"></div>
      <div className="home-top">
        <div className="home-back"></div>
        <div className="home-top-1" data-aos="fade-right">
          No More Surprises
        </div>
        <div className="home-top-2">
          <div className="home-top-1">Know your SaaS Billing and Costs</div>
        </div>
        <div
          className="home-top-5"
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-duration="3500"
        >
          Optimize your SaaS Stack with SaaSDen
        </div>
        <div
          className="home-top-6"
          data-aos="fade-up"
          data-aos-delay="2000"
          data-aos-duration="3500"
        >
          Register now for early access
        </div>
        <form id="home-page-email" aos-data-once="false" aos-data="fade-up" aos>
          <input
            type="text"
            name="E mail"
            className="home-top-input"
            placeholder="E-mail"
          ></input>
          <button type="button" className="home-top-btn">
            Register
          </button>
        </form>
      </div>
      <div className="home-desc">
        <div className="home-desc-heading">Features</div>
        <p className="home-desc-text">
          SaaSDen not only makes it simpler to manage your subscriptions, but
          also provides valuable insights that can help you save money and get
          the most out of your software applications
        </p>
        <div className="home-desc-card-container">
          <div className="home-desc-card">
            <div className="home-card-img">
              <i className="fas fa-phone fa-2x"></i>
            </div>
            <div className="home-card-heading">Subscription Dashboard</div>
            <div className="home-card-text">
              With a subscription tracking dashboard, View all of your active
              subscriptions in one place
            </div>
          </div>
          <div className="home-desc-card">
            <div className="home-card-img-one">
              <i className="fas fa-clock fa-2x"></i>
            </div>
            <div className="home-card-heading">Managing Subscription</div>
            <div className="home-card-text">
              Simply tap the "stop" button to cancel a subscription, and tap the
              "renew" button to restart it.
            </div>
          </div>
          <div className="home-desc-card">
            <div className="home-card-img-two">
              <i className="fas fa-thumbs-up fa-2x"></i>
            </div>
            <div className="home-card-heading">Analytics</div>
            <div className="home-card-text">
              Get real-time usage insights for all of your teams.
            </div>
          </div>
          <div className="home-desc-card">
            <div className="home-card-img-three">
              <i className="fas fa-bolt fa-2x"></i>
            </div>
            <div className="home-card-heading">Integrations</div>
            <div className="home-card-text">Coming Soon</div>
          </div>
        </div>
      </div>
      <div className="home-plans">
        <div className="plans-heading">Pricing & Plans</div>
        <div className="plans-sub-heading">
          <div>Coming&nbsp;</div>
          <div className="blue">soon</div>
        </div>
        <img
          className="plans-blur-pic"
          src={require("../components/blur.png")}
        ></img>
      </div>
    </div>
  );
}

export default Home;
