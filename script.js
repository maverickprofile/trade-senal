function toggleNav() {
    document.getElementById("nav-content").classList.toggle("active");
}


document.querySelectorAll(".faq-question").forEach(question => {
    question.addEventListener("click", function () {
        let answer = this.nextElementSibling;
        let icon = this.querySelector(".faq-icon");

        if (answer.style.display === "block") {
            answer.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        } else {
            answer.style.display = "block";
            icon.style.transform = "rotate(90deg)";
        }
    });
});



    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: true,
        // },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            }
        }
    });
