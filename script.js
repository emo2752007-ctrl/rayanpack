// 1. تغيير الهيدر عند السكرول
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});

// 2. تفعيل الروابط أثناء السكرول (Highlight active section)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navigation a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove("active");
                document.querySelector(".navigation a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};

// 3. تأثير ظهور العناصر عند التمرير (Scroll Reveal)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show-animate');
        }
    });
});

const animateElements = document.querySelectorAll('.product-card, .company-card, .about-text');
animateElements.forEach((el) => observer.observe(el));






const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    const response = await fetch("رابطك_الخاص_من_فورم_سبري", {
        method: "POST",
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("شكراً لك! تم إرسال رسالتك بنجاح.");
        form.reset();
    } else {
        alert("حدث خطأ، حاول مرة أخرى.");
    }
});





const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault(); // نمنع الصفحة من عمل Reload
    
    const formData = new FormData(form);
    const response = await fetch(form.action, {
        method: form.method,
        body: formData,
        headers: { 'Accept': 'application/json' }
    });

    if (response.ok) {
        alert("شكراً لك يا إبراهيم، تم إرسال رسالتك بنجاح!");
        form.reset(); // تفريغ الخانات بعد الإرسال
    } else {
        alert("عذراً، حدث خطأ ما. يرجى المحاولة لاحقاً.");
    }
});