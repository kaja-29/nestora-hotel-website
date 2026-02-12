document.addEventListener("DOMContentLoaded", () => {

    const droper = document.querySelector('.droper');
    const hamber = document.querySelector('.hamber');
    const reversehamber = document.querySelector('.reverse-hamber');
    const li = document.querySelectorAll("li");

    hamber.addEventListener("click", () => {
        droper.classList.toggle("right-0");
    })

    reversehamber.addEventListener("click", () => {
        droper.classList.toggle("right-0")
    })

    li.forEach(list => {
        list.addEventListener("click", () => {
            droper.classList.remove("right-0")
        })
    })

    // pop up form code 

    const orderbtn = document.querySelectorAll(".orderbtn");

    const overlay = document.createElement("div");
    overlay.classList.add("h-full", "w-full", "backdrop-blur-sm", "fixed", "inset-0", "bg-black/50", "z-40");

    const div = document.createElement("div");
    div.classList.add("h-fit", "w-[95%]", "opacity-0", "scale-95", "translate-y-10", "transistion-all", "duration-300", "ease-out", "rounded-2xl", "mx-auto", "my-auto", "py-5", "px-10", "bg-white", "fixed", "inset-0", "z-50", "flex", "flex-col", "item-center", "justify-center");

    const h2 = document.createElement("h2");
    h2.innerText = "Reserve Your Stay"
    h2.classList.add("text-center", "text-2xl", "md:text-3xl", "font-bold", "text-cyan-700", "mb-6");

    const cross = document.createElement("i");
    cross.classList = "fa-solid fa-xmark";
    cross.classList.add("cross", "absolute", "right-5", "top-5", "text-cyan-600/80", "text-xl")

    const formi = document.createElement("form");
    formi.classList.add("formm", "grid", "grid-cols-1", "md:grid-cols-2", "gap-5");

    const Name = document.createElement("input");
    Name.type = "text";
    Name.placeholder = "Full Name";
    Name.classList.add("Name", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const email = document.createElement("input");
    email.type = "email";
    email.placeholder = "Email";
    email.classList.add("email", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const label1 = document.createElement("label");
    label1.innerText = "Check-in";
    label1.classList.add("z-20", "text-sm", "text-black/50", "absolute", "top-50.5", "left-13", "md:top-14.5", "lg:top-34.5", "w-15", "bg-white")

    const checkin = document.createElement("input");
    checkin.type = "date";
    checkin.classList.add("checkin", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const guests = document.createElement("input");
    guests.type = "number";
    guests.placeholder = "Guests";
    guests.classList.add("guests", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const label2 = document.createElement("label");
    label2.innerText = "Check-out";
    label2.classList.add("z-20", "text-sm", "text-black/50", "absolute", "top-85.5", "md:top-14.5", "left-13", "lg:top-52", "w-18", "bg-white")

    const checkout = document.createElement("input");
    checkout.type = "date";
    checkout.classList.add("checkout", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const contact = document.createElement("input");
    contact.type = "number";
    contact.placeholder = "Contact";
    contact.classList.add("contact", "w-full", "p-3", "rounded-xl", "border", "border-cyan-200", "focus:outline-none", "focus:ring-2", "focus:ring-cyan-400");

    const submit = document.createElement("button");
    submit.type = "submit";
    submit.innerText = "Submit";
    submit.classList.add("md:col-span-2", "bg-cyan-600", "text-white", "py-3", "rounded-xl", "font-semibold", "hover:bg-cyan-700");

    orderbtn.forEach(order => {
        order.addEventListener("click", () => {
            document.body.appendChild(overlay);
            document.body.appendChild(div);
            div.appendChild(h2);
            div.appendChild(cross);
            div.appendChild(formi);
            formi.appendChild(Name);
            formi.appendChild(email);
            formi.appendChild(label1);
            formi.appendChild(checkin);
            formi.appendChild(guests);
            formi.appendChild(label2);
            formi.appendChild(checkout);
            formi.appendChild(contact);
            formi.appendChild(submit);

            requestAnimationFrame(() => {
                div.classList.remove("opacity-0", "scale-95", "translate-y-10");
                div.classList.add("opacity-100", "scale-100", "translate-y-0");
            });
        })
    })

    function closepop() {
        div.classList.remove("opacity-100", "scale-100", "translate-y-0");
        div.classList.add("opacity-0", "scale-95", "translate-y-10");

        setTimeout(() => {
            div.remove();
            overlay.remove();
        }, 300);
    }

    formi.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.querySelector(".Name").value.trim();
        const email = document.querySelector(".email").value.trim();
        const checkin = document.querySelector(".checkin").value.trim();
        const guests = document.querySelector(".guests").value.trim();
        const checkout = document.querySelector(".checkout").value.trim();
        const contact = document.querySelector(".contact").value.trim();

        if (name === '' || email === '' || checkin === '' || guests === '' || checkout === '' || contact === '') {
            alert("kindly fill the Entire Details");
            return;
        }

        else { alert("Thank you for Reserving your stay! Our team will contact you shortly to confirm your booking"); }

        let user = { name, email, checkin, guests, checkout, contact };

        let reservation = JSON.parse(localStorage.getItem("reservation")) || []; reservation.push(user);

        localStorage.setItem("reservation", JSON.stringify(reservation));

        formi.reset();
        closepop();
    });

    cross.addEventListener("click", () => {
        closepop();
    })

    overlay.addEventListener("click", () => {
        closepop();
    })




    // -------- imagesscrolling-----//
    let slidepostion = 0;
    let textposition = 0;
    let invalid = null;
    const slider = document.querySelectorAll(".slide-item");
    const totalslider = slider.length;
    const prevbtn = document.querySelector(".prevbtn");
    const nxtbtn = document.querySelector(".nxtbtn");
    const dotcontainer = document.querySelector(".dot-container");
    const dots = document.querySelectorAll(".dot");
    const textitem = document.querySelectorAll(".text-item");
    const totaltext = textitem.length;




    dots[slidepostion].classList.add("bg-white");

    dots.forEach((dot, index) => {
        dot.addEventListener("click", function () {
            slidepostion = index;
            updateposition();
        });
    });

    function updateposition() {
        slider.forEach((slide, index) => {
            slide.classList.toggle("opacity-100", index === slidepostion);
            slide.classList.toggle("opacity-0", index !== slidepostion);
        });


        dots.forEach(dot => {
            dot.classList.remove("bg-white");
        });

        dots[slidepostion].classList.add("bg-white");
    }

    function updatepositiontext() {
        textitem.forEach((text, index) => {
            text.classList.toggle("opacity-100", index === textposition);
            text.classList.toggle("opacity-0", index !== textposition);
        })
    };

    updatepositiontext();



    function previouslide() {
        if (slidepostion === 0) {
            slidepostion = totalslider - 1
        }
        else {
            slidepostion--
        }
        updateposition();
    }

    function nextslide() {
        if (slidepostion === totalslider - 1) {
            slidepostion = 0
        }
        else {
            slidepostion++
        }
        updateposition();
    }

    prevbtn.addEventListener("click", function () {
        previouslide();
    })

    nxtbtn.addEventListener("click", function () {
        nextslide();
    })

    setInterval(() => {
        if (slidepostion === totalslider - 1) {
            slidepostion = 0;
        }
        else {
            slidepostion++
        }
        updateposition();
    }, 3000)

    function setautoslide() {
        if (invalid) return;
        invalid = setInterval(() => {
            textposition = (textposition + 1) % totaltext;
            updatepositiontext()
        }, 3000);
    }

    function stopslide() {
        clearInterval(invalid);
        invalid = null;
    }
    setautoslide();

    // Section spy scroll ---------------

    const section = document.querySelectorAll('section');
    const navlink = document.querySelectorAll('nav ul li a');

    window.addEventListener("scroll", () => {
        let current = " ";
        section.forEach(sec => {
            const top = window.scrollY;
            const offset = sec.offsetTop - 80;
            const height = sec.offsetHeight;
            const id = sec.getAttribute("id");

            if (top >= offset && top < offset + height) {
                current = id;
            }
        })

        navlink.forEach(nav => {
            nav.classList.remove("border-b-2");
            if (nav.getAttribute("href") === "#" + current) {
                nav.classList.add("border-b-2");
            }
        })
    })

    // All page animating when first time page scroll and visit

    const observer = new IntersectionObserver((entires) => {
        entires.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.remove("opacity-0", "translate-y-10")

                entry.target.classList.add("opacity-100", "translate-y-0")

                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    })



    const scrollani = document.querySelectorAll(".scroll-ani");
    scrollani.forEach(el => observer.observe(el));

});
