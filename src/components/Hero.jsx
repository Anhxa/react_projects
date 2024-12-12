const Hero = () => {
    return (
        <main className="hero container">
        <div className="herocontent">
            <h1>YOUR FEET DERSERVE THE BEST</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid, similique voluptatibus iste aspernatur officiis, molestiae corrupti laudantium commodi consequatur illum id perspiciatis eius itaque. Distinctio nulla fugit atque porro vero!</p>
            <div className="herobutton">
                <button>Shop Now</button>
                <button>Category</button>
                <div className="brand-icons">
            <img src="/images/amazon.png" alt="amazon" />
            <img src="/images/flipkart.png" alt="flipkart" />
        </div>
            </div>
        </div>
        
        <div className="heroimage">
            <img src="/images/shoe_image.png" alt="shoes" />

        </div>
        </main>
    ) 

};

export default Hero;