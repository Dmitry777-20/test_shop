import React from 'react';
import Logo from './img/Logo.png';
import Loupe from './img/Loupe.png';
import Iphone from './img/iPhone.png';
import './App.css';
import Product from './Product/Product'
import rerender from './index'


let products = {
    bags: {
        bag1: {
            img: "/Layer_11.png",
            name: "Black Genuine Leather Bags",
            price: "$ 23.20"
        },
        bag2: {
            img: "/Layer_13.png",
            name: "Fashion Red Leather Bags",
            price: "$ 20.16"
        },
        bag3: {
            img: "/Layer_14.png",
            name: "Fashion Genuine Leather Bags",
            price: "$ 30.14"
        }


    },
    watchs: {
        watch1: {
            img: "/Layer_31.png",
            name: "Fashion Genuine Chain Watch",
            price: "$ 25.36"
        },
        watch2: {
            img: "/Layer_26.png",
            name: "Fashion Silver Chain Watch",
            price: "$ 35.24"
        },
        watch3: {
            img: "/Layer_28.png",
            name: "Fashion Genuine Leather Bags",
            price: "$ 30.14"
        },
        watch4: {
            img: "/Layer_22.png",
            name: "Fashion Genuine Leather Bags",
            price: "$ 30.14"
        },
        watch5: {
            img: "/Layer_23.png",
            name: "Fashion Genuine Leather Bags",
            price: "$ 30.14"
        },
        watch6: {
            img: "/Layer_30.png",
            name: "Fashion Genuine Leather Bags",
            price: "$ 30.14"
        }

    }
};


let bag1 = products.bags.bag1,
    bag2 = products.bags.bag2,
    bag3 = products.bags.bag3;

let watchs = products.watchs;



let watch1 = watchs.watch1,
    watch2 = watchs.watch2,
    watch3 = watchs.watch3,
    watch4 = watchs.watch4,
    watch5 = watchs.watch5,
    watch6 = watchs.watch6;

let arr = [];
for (let key in watchs) {
    arr.push(watchs[key]);
}

function handleClick() {



    for (let key in watchs) {
        watchs[key] = arr[(Math.floor(Math.random() * 6))]

    }
    watch1 = watchs.watch1;
    watch2 = watchs.watch2;
    watch3 = watchs.watch3;
    watch4 = watchs.watch4;
    watch5 = watchs.watch5;
    watch6 = watchs.watch6;

    rerender();

}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className="h">
                    <img className="Logo" src={Logo} alt={"logo"}/>
                    <div className="Button-header">
                        <div className="Search">
                            <img src={Loupe} alt={"Loupe"}/>
                            <div>Search</div>
                        </div>
                        <div className="Collection">Collection</div>
                    </div>
                </div>
            </header>
            <div className="Trendy-bags">
                <h1>Trendy Arrivals</h1>
                <div className="Product1">
                    <Product products={bag1}/>
                    <Product products={bag2}/>
                    <Product products={bag3}/>
                </div>
                <div className="Product2">
                    <Product products={bag1}/>
                    <Product products={bag2}/>
                    <Product products={bag3}/>
                </div>
            </div>
            <div className="Our-brands">
                <div className="Text">
                    <h1>Our Brands</h1>
                    <h3>Small Shoes 2017 new Arrivals mini<br/>
                        Messenger <span className="Color">Classic Shoes</span>
                    </h3>
                    <p>In porttitor elit ac mi placerat hendrerit.
                        Morbi accumsan, erat in ullamcor-<br/>per consectetur,
                        nisi erat efficitur eros, sagittis tristique odio turpis vitae dui.<br/>
                        Vestibulum gravida est ut erat pretium, non pretium diam feugiat.
                        Integer<br/> egestas suscipit lorem ac fermentum.
                        Integer at mauris vitae justo sagittis<br/> dapibus.
                        Pellentesque sit amet nisl vitae orci vehicula faucibus.
                        Fusce et lat,<br/> feugiat est. </p>
                </div>
                <div className="Iphone">
                    <img src={Iphone} alt={Iphone}/>
                </div>


            </div>
            <div className="Our-showcase">
                <h1>Our Showcase</h1>
                <div className="Menu">
                    <ul>
                        <li><button onClick={() => handleClick()}>Fashion</button></li>
                        <li><button onClick={() => handleClick()}>Furnitures</button></li>
                        <li><button onClick={() => handleClick()}>Watches</button></li>
                        <li><button onClick={() => handleClick()}>Mobile</button></li>
                        <li><button onClick={() => handleClick()}>Cloth</button></li>
                        <li><button onClick={() => handleClick()}>Toys</button></li>
                    </ul>
                </div>
                <div className="Product1">
                    <Product products={watch1}/>
                    <Product products={watch2}/>
                    <Product products={watch3}/>
                </div>
                <div className="Product2">
                    <Product products={watch4}/>
                    <Product products={watch5}/>
                    <Product products={watch6}/>
                </div>

            </div>
        </div>
    );
}

export default App;
