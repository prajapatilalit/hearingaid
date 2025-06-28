import React, { useEffect } from "react";

const testimonials = [
  {
    id: 0,
    name: "Lalit Kumar",
    avatar: "./assets/img/menavtar2.png",
    review:
      "My experience with EliteListen has been fantastic. The hearing aid is top-quality, offering clear sound and effective noise reduction. It’s comfortable and easy to use, and their customer service was incredibly helpful. Worth every penny!",
  },
  {
    id: 1,
    name: "Mayak Rajverdhan",
    avatar: "./assets/img/menavtar3.png",
    review:
      "I’m very pleased with my EliteListen hearing aid purchase. The device delivers clear sound and great noise cancellation, fitting comfortably all day. The customer service team was supportive and knowledgeable, making the entire process smooth and satisfying.",
  },
  {
    id: 2,
    name: "Pallavi Mehra",
    avatar: "./assets/img/femaleavtar3.png",
    review:
      "I recently bought a hearing aid from EliteListen and am thoroughly impressed. The sound clarity is excellent, and the noise cancellation works perfectly. The device is comfortable to wear, and the customer service was outstanding. Highly recommended!",
  },
];

const TestimonialCard = ({ name, review, avatar }) => (
  <div className="testimonial-item text-center text-white">
    <img
      className="img-fluid mx-auto rounded mb-4"
      src={avatar}
      alt={`Avatar of ${name}`}
      width={100}
      height={100}
    />
    <p className="fs-5">{review}</p>
    <hr className="mx-auto w-25" />
    <h4 className="text-white mb-0">{name}</h4>
  </div>
);

const Testimonial = () => {
  useEffect(() => {
    const $ = window.jQuery;
    const $carousel = $(".testimonial-carousel");

    if ($carousel.hasClass("owl-loaded")) {
      $carousel.trigger("destroy.owl.carousel");
      $carousel.removeClass("owl-loaded").find(".owl-stage-outer").children().unwrap();
    }

    $carousel.owlCarousel({
      autoplay: true,
      smartSpeed: 1000,
      items: 1,
      dots: true,
      loop: true,
      nav: true,
      navText: [
        '<i class="bi bi-arrow-left"></i>',
        '<i class="bi bi-arrow-right"></i>',
      ],
      responsive: {
        0: { items: 1 },
        768: { items: 1 },
        992: { items: 1 },
      },
    });
  }, []);

  return (
    <div
      id="testimonial"
      className="container-fluid bg-success bg-testimonial pb-5 mb-5 wow fadeInUp"
      data-wow-delay="0.1s"
    >
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div
              className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn"
              data-wow-delay="0.6s"
            >
              {testimonials.map((item) => (
                <TestimonialCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
