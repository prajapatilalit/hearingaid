import React, {useEffect} from "react";
const Testimonial = () => {
    // const [items, setItems] = useState();
    const items = [
        { id: 0, name: 'Lalit Kumar', avtar:"./assets/img/menavtar2.png" ,review: 'My experience with EliteListen has been fantastic. The hearing aid is top-quality, offering clear sound and effective noise reduction. It’s comfortable and easy to use, and their customer service was incredibly helpful. Worth every penny!' },
        { id: 1, name: 'Mayak Rajverdhan', avtar:"./assets/img/menavtar3.png" ,review: 'I’m very pleased with my EliteListen hearing aid purchase. The device delivers clear sound and great noise cancellation, fitting comfortably all day. The customer service team was supportive and knowledgeable, making the entire process smooth and satisfying.' },
        { id: 2, name: 'Pallavi Mehra', avtar:"./assets/img/femaleavtar3.png",review: 'I recently bought a hearing aid from EliteListen and am thoroughly impressed. The sound clarity is excellent, and the noise cancellation works perfectly. The device is comfortable to wear, and the customer service was outstanding. Highly recommended!' }
    ]
    useEffect(() => {
        const owlCarousel = window.jQuery('.testimonial-carousel');
        owlCarousel.owlCarousel({
          // Owl Carousel options and settings
          autoplay: true,
          smartSpeed: 1000,
          items: 1,
          dots: false,
          loop: true,
          nav : true,
          navText : [
              '<i class="bi bi-arrow-left"></i>',
              '<i class="bi bi-arrow-right"></i>'
          ],

        });
    }, []);

    // Function to add a new item
    //   const addItem = () => {
    //     const newItem = { id: items.length, name: items.name, review: items.review };
    //     setItems([...items, newItem]);
    //  };

    // Function to remove an item by id
    //   const removeItem = (id) => {
    //     setItems(items.filter(item => item.id !== id));
    //  };


    return (
        <>
            <div id="testimonial" className="container-fluid bg-success bg-testimonial pb-5 mb-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-7">
                            <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                                {items.map(item=>(
                                    <div className="testimonial-item text-center text-white" key={item.name}>
                                        <img className="img-fluid mx-auto rounded mb-4" src={item.avtar} alt="" />
                                        <p className="fs-5">{item.review}</p>
                                        <hr className="mx-auto w-25" />
                                        <h4 className="text-white mb-0">{item.name}</h4>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial;