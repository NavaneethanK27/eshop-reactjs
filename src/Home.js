import React from "react";
import "./Home.css";
import Product from "./Product";

function Home(){
    return (
        <div className="home">
           <div className="home_container">
              <img src="https://media.istockphoto.com/id/1675579652/photo/stylish-japanese-young-woman-interacting-with-augmented-reality-platform-in-a-technologically.jpg?s=1024x1024&w=is&k=20&c=Vvp4d5aBO9EEFrBe_Ml4FewZ9xj8epjLlLdBfrj6zZk=" alt="" className="home__image" />

              <div className="home_row">
                <Product 
                  id="1" 
                  title="Wireless Headphones" 
                  price={79.99} 
                  rating={4}
                  image="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&h=500&fit=crop"
                />
                <Product 
                  id="2" 
                  title="Smart Watch" 
                  price={199.99} 
                  rating={5}
                  image="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&h=500&fit=crop"
                />
              </div>

              <div className="home_row">
                <Product 
                  id="3" 
                  title="USB-C Cable" 
                  price={15.99} 
                  rating={4}
                  image="https://images.unsplash.com/photo-1625948515291-69613efd103f?w=500&h=500&fit=crop"
                />
                <Product 
                  id="4" 
                  title="Phone Stand" 
                  price={24.99} 
                  rating={3}
                  image="https://images.unsplash.com/photo-1605558139383-b5a9f8b8e1b2?w=500&h=500&fit=crop"
                />
                <Product 
                  id="5" 
                  title="Portable Charger" 
                  price={49.99} 
                  rating={5}
                  image="https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&h=500&fit=crop"
                />
              </div>

              <div className="home_row">
                  <Product 
                    id="6" 
                    title="Mechanical Keyboard" 
                    price={129.99} 
                    rating={5}
                    image="https://images.unsplash.com/photo-1587829191301-be84b4be24d3?w=500&h=500&fit=crop"
                  />
              </div>
           </div>
        </div>
    )
}

export default Home;