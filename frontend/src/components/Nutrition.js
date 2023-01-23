import React from "react";

function Nutrition() {
  return (
    <div>
        <div className="nutrition-banner">
          <img src="assets/img/nutrition-banner.png" alt="Nutrition banner" />
          <div className="container">
            <h1>Get Tailored Nutrition Recommendations</h1>
            <p>Our experts will help you reach your health and wellness goals with personalized nutrition plans and products.</p>
            <a href="#" className="btn btn-primary">Learn More</a>
          </div>
        </div>
        {/* Nutrition overview */}
        <div className="nutrition-overview">
          <div className="container">
            <h2>How Our Nutrition Services Work</h2>
            <p>Our team of nutrition experts will create a personalized plan based on your goals, dietary preferences, and health needs. You'll get access to a wide range of nutrition products and resources, including meal plans, recipes, and supplement recommendations.</p>
            <h2>Benefits of Our Nutrition Services</h2>
            <ul>
              <li>Tailored to your specific needs and goals</li>
              <li>Easy-to-follow meal plans and recipes</li>
              <li>Expert guidance and support from our team</li>
              <li>High-quality, carefully selected products</li>
            </ul>
          </div>
        </div>
        {/* Product listings */}
        <div className="product-listings">
          <div className="container">
            <h2>Our Nutrition Products</h2>
            <div className="row">
              <div className="col-md-4">
                <div className="card">
                  <img src="assets/img/product-1.png" alt="Product 1" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Product 1</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod bibendum urna, eu consectetur mauris scelerisque non. Proin euismod lacus sit amet diam vehicula, a facilisis tortor aliquet.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="assets/img/product-2.png" alt="Product 2" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Product 2</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod bibendum urna, eu consectetur mauris scelerisque non. Proin euismod lacus sit amet diam vehicula, a facilisis tortor aliquet.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <img src="assets/img/product-3.png" alt="Product 3" className="card-img-top" />
                  <div className="card-body">
                    <h3 className="card-title">Product 2</h3>
                    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam euismod bibendum urna, eu consectetur mauris scelerisque non. Proin euismod lacus sit amet diam vehicula, a facilisis tortor aliquet.</p>
                    <a href="#" className="btn btn-primary">Learn More</a>
                  </div>
                </div>
              </div>
            </div></div></div></div>
    );
}

export default Nutrition;   