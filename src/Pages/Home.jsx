import React from 'react'
import Layout from '../Layout'
import main from '../images/main.png'
import delivery from '../images/delivery.jpeg'
import healthy from '../images/healthy.jpeg'
import cooking from '../images/cooking.webp'
import menu1 from '../images/menu_1.png'
import menu2 from '../images/menu_2.webp'
import menu3 from '../images/menu_3.webp'


export default function Home() {
  return (
  <Layout>
    <section className="mt-4">
      <div className="container">
      <div className="row align-items-center">
        <div className="col-sm-6">
          <h1>Best Food For You</h1>
          <p className="mt-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            <br/>
             Fuga, amet sit deserunt laborum sed odio ex repudiandae fugiat modi explicabo similique sunt odit,
             <br/>
            fugit delectus expedita unde natus maiores qui?
          </p>
          <button className="btn btn-success rounded-4 m-2">Order Now</button>
          <button className="btn btn-primary rounded-4">Contact Us</button>
        </div>
        <div className="col-sm-6 d-none d-sm-flex">
          <img src={main} alt="Main Menu "/>
        </div>
      </div>
      <div className="row justify-content-center my-5">
        <div className="w-auto">
          <div className="border-bottom border-2 border-success text-center">
            <h2>Extraordinary Taste and Experience</h2>
          </div>
        </div>
      </div>
      <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
        <div className="col-sm-6">
          <h3>We Make Sure Your Food Arrive on Time</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere laboriosam eveniet reprehenderit distinctio molestiae molestias voluptas architecto quod alias culpa possimus iure provident dolores nihil, unde labore totam! Cumque.</p>
          <button className="btn btn-success rounded-4">Read More</button>
        </div>
        <div className="col-sm-6">
          <div className="ps-sm-5">
            <img src={delivery} alt="delivery" className="w-100 rounded-4"/>
          </div>
        </div>
      </div>
      <div className="row align-items-sm-center flex-column flex-sm-row my-5">
        <div className="col-sm-6">
          <div className="pe-sm-5">
            <img src={cooking} alt="cooking" className="w-100 rounded-4" height="288px"/>
          </div>
        </div>
        <div className="col-sm-6">
          <h3>High Quality Food Material</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere laboriosam eveniet reprehenderit distinctio molestiae molestias voluptas architecto quod alias culpa possimus iure provident dolores nihil, unde labore totam! Cumque.</p>
          <button className="btn btn-success rounded-4">Read More</button>
        </div>
        <div className="row align-items-sm-center flex-column-reverse flex-sm-row my-5">
          <div className="col-sm-6">
            <h3>Customize Your Own Bowl</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam facere laboriosam eveniet reprehenderit distinctio molestiae molestias voluptas architecto quod alias culpa possimus iure provident dolores nihil, unde labore totam! Cumque.</p>
            <button className="btn btn-success rounded-4">Read More</button>
          </div>
          <div className="col-sm-6">
            <div className="ps-sm-5">
              <img src={healthy} alt="healthy" className="w-100 rounded-4"/>
            </div>
          </div>
        </div>
        <div className="row justify-content-center my-5">
          <div className="w-auto">
            <div className="border-bottom border-2 border-success text-center">
              <h2>Our Signature Menu</h2>
            </div>
          </div>
        </div>
        <div className="row flex-sm-row flex-column justify-content-center">
          <div className="col-sm-3 d-flex flex-column align-items-center ">
            <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
              <img src={menu1} alt="Menu 1" className="w-75"/>
            </div>
            <h5 className="mt-2">Salmon Salad With Veggies</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Sunt, exercitationem ipsum iure tempora ex ducimus voluptas, saepe.
              </p>
          </div>
          <div className="col-sm-3 d-flex flex-column align-items-center ">
            <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
              <img src={menu2} alt="Menu 2" className="w-75"/>
            </div>
            <h5 className="mt-2">Fried Salmon With Brocolli</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Sunt, exercitationem ipsum iure tempora ex ducimus voluptas, saepe.
              </p>
          </div>        
          <div className="col-sm-3 d-flex flex-column align-items-center ">
            <div className="rounded-4 bg-success d-flex justify-content-center align-items-center py-5">
              <img src={menu3} alt="Menu 3" className="w-75"/>
            </div>
            <h5 className="mt-2">Salmon With BBQ Sauce</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
               Sunt, exercitationem ipsum iure tempora ex ducimus voluptas, saepe.
              </p>
          </div>                 
        </div>
      </div>
      </div>
    </section>
    <section id="subscribe">
      <div className="h-100 d-flex justify-content-center align-items-center">
        <div className="row div-subs rounded-5 py-3 px-sm-5 align-items-center flex-column flex-sm-row">
          <div className="col-sm-6 text-white">
            <h5>Subscribe To Our Promo</h5>
            <span>Lorem ipsum dolor sit amet.</span>
          </div>
          <div className="col-sm-6 align-items-center">
            <div className="input-group align-items-center">
              <input type="text" className="form-control" placeholder="Input Your e-mail" aria-label="Recipient's username" aria-describedby="button-addon2"/>
              <button className="btn btn-secondary" type="button" id="button-addon2">Discover Here</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
  );
}
