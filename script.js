// Сайт розроблено студентом Буглаком Данилом , група ФІТ2-11

document.addEventListener('DOMContentLoaded', function() {

    const tours = [
        {
            id: 1,
            title: "Відпочинок у Карпатах",
            description: "Чудовий тур у серці Карпат з проживанням у дерев'яному котеджі та екскурсіями горами.",
            price: 4500,
            image: "images/tour1.jpg"
        },
        {
            id: 2,
            title: "Морська подорож до Одеси",
            description: "Відпочинок на узбережжі Чорного моря з екскурсіями старим містом та дегустацією місцевої кухні.",
            price: 6000,
            image: "images/tour2.jpg"
        },
        {
            id: 3,
            title: "Екскурсія Львовом",
            description: "Романтичний тур старовинним Львовом з відвідуванням кав'ярень, музеїв та театрів.",
            price: 3500,
            image: "images/tour3.jpg"
        },
        {
            id: 4,
            title: "Сафарі в Асканії-Новій",
            description: "Унікальна можливість побачити африканських тварин у природному середовищі українського степу.",
            price: 4000,
            image: "images/tour4.jpg"
        },
        {
            id: 5,
            title: "Круїз Дніпром",
            description: "Незвичайний тур рікою Дніпро з відвідуванням історичних місць та островів.",
            price: 5500,
            image: "images/tour5.jpg"
        },
        {
            id: 6,
            title: "Винний тур по Закарпаттю",
            description: "Дегустація найкращих вин Закарпаття з відвідуванням винних підвалів та маєтків.",
            price: 5000,
            image: "images/tour6.jpg"
        }
    ];

    
    const toursContainer = document.getElementById('tours-container');
    
    tours.forEach(tour => {
        const tourCard = document.createElement('div');
        tourCard.className = 'tour-card';
        tourCard.innerHTML = `
            <div class="tour-image">
                <img src="${tour.image}" alt="${tour.title}">
            </div>
            <div class="tour-info">
                <h3>${tour.title}</h3>
                <p class="tour-description">${tour.description}</p>
                <span class="tour-price">${tour.price} грн</span>
                <button class="btn book-btn" data-id="${tour.id}">Забронювати</button>
            </div>
        `;
        toursContainer.appendChild(tourCard);
    });

   
    const modal = document.getElementById('booking-modal');
    const closeBtn = document.querySelector('.close');
    const bookBtns = document.querySelectorAll('.book-btn');
    const tourIdInput = document.getElementById('tour-id');
    const tourTitle = document.getElementById('modal-tour-title');
    const tourPrice = document.getElementById('tour-price');
    const peopleCount = document.getElementById('people-count');
    const bookingForm = document.getElementById('booking-form');

    
    bookBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const tourId = parseInt(this.getAttribute('data-id'));
            const tour = tours.find(t => t.id === tourId);
            
            if (tour) {
                tourIdInput.value = tour.id;
                tourTitle.textContent = `Бронювання туру "${tour.title}"`;
                tourPrice.textContent = tour.price;
                modal.style.display = 'block';
            }
        });
    });

 
    closeBtn.addEventListener('click', function() {
        modal.style.display = 'none';
    });

  
    window.addEventListener('click', function(e) {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });

 
    peopleCount.addEventListener('input', function() {
        const tourId = parseInt(tourIdInput.value);
        const tour = tours.find(t => t.id === tourId);
        const count = parseInt(this.value) || 1;
        
        if (tour) {
            tourPrice.textContent = tour.price * count;
        }
    });

  
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const tourId = parseInt(tourIdInput.value);
        const date = document.getElementById('tour-date').value;
        const count = parseInt(peopleCount.value);
        const tour = tours.find(t => t.id === tourId);
        
        if (tour && date) {
            const totalPrice = tour.price * count;
            
            alert(`Дякуємо за бронювання!\nТур: ${tour.title}\nДата: ${date}\nКількість осіб: ${count}\nЗагальна вартість: ${totalPrice} грн`);
            
            // Reset form
            bookingForm.reset();
            modal.style.display = 'none';
        } else {
            alert('Будь ласка, заповніть всі поля форми');
        }
    });

    // Smooth scrolling for navigation
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});