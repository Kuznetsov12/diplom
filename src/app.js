import { footerTab } from "./components/constFooter/footer";
import { Input } from "./components/findLoop/input";
import { sort } from "./components/sortCards/sort";
// Поисковая строка
const findLoop = document.getElementById('findLoop');

findLoop.innerHTML = `${Input}`

// Скелет сортировки
const sortHTML = document.getElementById('sort')

sortHTML.innerHTML = `${sort}`

const footer = document.getElementById('constBotTab')

footer.innerHTML = `${footerTab}`


const dropDownMenu = () =>{
    let dropMenuJS = document.getElementById('dropContent')
    dropMenuJS.classList.toggle('active');
    returnFunction()
}


const radioBtn = () => {
    let radioButtons = document.getElementsByName('sortType');
    radioButtons.forEach(item =>{
        if(item.checked){
            item.parentNode.querySelector('.circle-stroke').classList.add('active');
            sortCards(item.id)
        }
        else{
            item.parentNode.querySelector('.circle-stroke').classList.remove('active');
        }
    })
}

let cardContainer;

const cards_data = [
    {
        id: 1,
        price: 20000,
        title: 'Рекорд-лейбл для молодых и талантливых музыкантов'
    },
    {
        id: 2,
        price: 12000,
        title: 'Оригинальные ремиксы популярных треков.'
    },
    {
        id: 3,
        price: 18000,
        title: 'Звуковые эффекты для аудио и видеопроектов.'
    },
    {
        id: 4,
        price: 35000,
        title: 'Видеопроектор игрышных технологий.'
    },
    {
        id: 5,
        price: 40000,
        title: 'Монтаж course'
    },
    {
        id: 6,
        price: 5000,
        title: 'Оценю ваш трек'
    }
]

const setCards = (cardsArray) =>{
    let cardsContainer = document.querySelector('.cards');
    let cardContent = ''
    cardsArray.forEach(item =>{
        let card = `
        <div class="card" id='card${item.id}'>
        <div class="title">
          <p>${item.title}</p>
        </div>
          <h3 id="price">${item.price}₸</h3>
        <button class='cardbtn' id="btncard${item.id}"><h4>В корзину</h4></button>
    </div>`
        cardContent += card
    })
    cardsContainer.innerHTML = cardContent
    addtoCartId(cardsArray);
    let searchInput = document.getElementById('find');
    searchInput.addEventListener('input', searchCards);
}

function searchCards() {
    //нашел лупу финд
    let input = document.getElementById('find');

    console.log(input)
    // переменная которая содержит значение введенные пользователем и добавляем в нижний регистр чтобы сравнить
    let findelement = input.value.toLowerCase();
    let cards = document.getElementsByClassName('card');
    // цикл перебора карточек на всей странице 
    for (let i = 0; i < cards.length; i++) {
        let card = cards[i];
        let title = card.querySelector('.title p'); 
        let titleText = title.textContent || title.innerText;
        // условие проверки содержимого текста который должен быть в карточке
        if (titleText.toLowerCase().indexOf(findelement) > -1) {
            // если содержит заголовок то карточка видна
            card.style.display = '';
            // иначе идешь нахуй
        } else {
            card.style.display = 'none';
        }
    }
}


let basketOrder = [];
let orders = [];

const addToBasket = (price , title ) =>{
    basketOrder = [...basketOrder, {title, price}]
}

const addtoCartId = (cardsArray) =>{
    cardsArray.forEach(item =>{
        const addToCartButton  =document.getElementById(`btncard${item.id}`)
        addToCartButton.onclick = () => {
            addToBasket(item.price, item.title)
        }
    })
    
}

setCards(cards_data)

const sortCards = (sortType) =>{
    let cards = []
    cards.push(...cards_data)
    switch(sortType){
        case 'up':
        cards.sort((a,b) =>{
            return a.price - b.price;
        })
        break;
        case 'down':
            cards.sort((a,b) =>{
                return b.price - a.price;
            })
        break;
        default:
            break;
    }
    
    setCards(cards)
        
}


const changeTab = (tab) =>{
    switch(tab) {
        case 'store': {
            mainContent()
            break;
        }
        case 'basket': {
            basketContent()
            break;
        }
        case 'order': {
            orderContent();
            break;
        }
        case 'profile': {
            profileContent();
            break;
        }
        default: 
            break;
        
    }

}
    const wrapperElement = document.querySelector('.wrapper');
    const defaultContent = wrapperElement.innerHTML;

    const mainContent = () => {

    }
    const profileContent =() =>{
        wrapperElement.innerHTML = '';

        wrapperElement.innerHTML = `<div class="cardContainer">
        </div>`

        document.querySelector('.cardContainer').innerHTML += `
        <div class="info">
        <div class="name">
          <p>Имя</p>
          <div class="editname">
            <input type="text" placeholder="Введите имя">
            <svg class='iconverify' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M17.204 10.7959L19 8.99994C19.5452 8.45469 19.8179 8.18207 19.9636 7.88797C20.2409 7.32842 20.2409 6.67146 19.9636 6.11191C19.8179 5.81782 19.5452 5.54519 19 4.99994C18.4547 4.45469 18.1821 4.18207 17.888 4.03633C17.3285 3.75905 16.6715 3.75905 16.112 4.03633C15.8179 4.18207 15.5452 4.45469 15 4.99994L13.1813 6.8186C14.1452 8.4692 15.5313 9.84476 17.204 10.7959ZM11.7269 8.27305L4.85636 15.1436C4.4313 15.5686 4.21877 15.7812 4.07904 16.0422C3.93931 16.3033 3.88036 16.5981 3.76247 17.1875L3.14707 20.2645C3.08055 20.5971 3.04729 20.7634 3.1419 20.858C3.23651 20.9526 3.40281 20.9194 3.73542 20.8529L6.8124 20.2375C7.40185 20.1196 7.69658 20.0606 7.95768 19.9209C8.21877 19.7812 8.43131 19.5686 8.85637 19.1436L15.7458 12.2542C14.1241 11.2385 12.7524 9.87622 11.7269 8.27305Z" fill="#333333"/>
              </svg>
          </div>
        </div>
        <div class="email">
        <div class='mail'>
            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0 10C0 4.47715 4.47715 0 10 0H50V50H10C4.47715 50 0 45.5228 0 40V10Z" fill="#333333"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.7524 21.1453C13.75 21.4875 13.75 21.855 13.75 22.25V27.75C13.75 30.5784 13.75 31.9926 14.6287 32.8713C15.5074 33.75 16.9216 33.75 19.75 33.75H30.25C33.0784 33.75 34.4926 33.75 35.3713 32.8713C36.25 31.9926 36.25 30.5784 36.25 27.75V22.25C36.25 21.855 36.25 21.4875 36.2476 21.1453L25.9713 26.8544C25.3672 27.1899 24.6328 27.1899 24.0287 26.8544L13.7524 21.1453ZM13.8537 19.0051C13.984 19.0187 14.1138 19.0582 14.2356 19.1258L25 25.106L35.7644 19.1258C35.8862 19.0582 36.016 19.0187 36.1463 19.0051C36.0386 18.1631 35.819 17.5764 35.3713 17.1287C34.4926 16.25 33.0784 16.25 30.25 16.25H19.75C16.9216 16.25 15.5074 16.25 14.6287 17.1287C14.181 17.5764 13.9614 18.1631 13.8537 19.0051Z" fill="#FAFAFA"/>
              </svg>
              <input type="email" name="" id="" placeholder="Введите email">
              </div>
              <div class="mailinput">
                
                <svg class='iconverify' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.204 10.7959L19 8.99994C19.5452 8.45469 19.8179 8.18207 19.9636 7.88797C20.2409 7.32842 20.2409 6.67146 19.9636 6.11191C19.8179 5.81782 19.5452 5.54519 19 4.99994C18.4547 4.45469 18.1821 4.18207 17.888 4.03633C17.3285 3.75905 16.6715 3.75905 16.112 4.03633C15.8179 4.18207 15.5452 4.45469 15 4.99994L13.1813 6.8186C14.1452 8.4692 15.5313 9.84476 17.204 10.7959ZM11.7269 8.27305L4.85636 15.1436C4.4313 15.5686 4.21877 15.7812 4.07904 16.0422C3.93931 16.3033 3.88036 16.5981 3.76247 17.1875L3.14707 20.2645C3.08055 20.5971 3.04729 20.7634 3.1419 20.858C3.23651 20.9526 3.40281 20.9194 3.73542 20.8529L6.8124 20.2375C7.40185 20.1196 7.69658 20.0606 7.95768 19.9209C8.21877 19.7812 8.43131 19.5686 8.85637 19.1436L15.7458 12.2542C14.1241 11.2385 12.7524 9.87622 11.7269 8.27305Z" fill="#333333"/>
                  </svg>   
                     
              </div>
        </div>
        <div class="telegram">
        <div class='tgicon'>
          <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 10C0 4.47715 4.47715 0 10 0H50V50H10C4.47715 50 0 45.5228 0 40V10Z" fill="#333333"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6893 25.8965L18.1921 24.3975C15.8389 23.6131 14.6623 23.2209 14.6623 22.5001C14.6623 21.7793 15.8389 21.3871 18.1921 20.6027L31.2053 16.265C32.8611 15.7131 33.689 15.4371 34.126 15.8741C34.563 16.3111 34.287 17.139 33.7351 18.7948L29.3974 31.808L29.3974 31.808C28.613 34.1612 28.2208 35.3378 27.5 35.3378C26.7792 35.3378 26.387 34.1612 25.6026 31.808L24.1036 27.3108L29.4571 21.9572C29.8476 21.5667 29.8476 20.9335 29.4571 20.543C29.0666 20.1525 28.4334 20.1525 28.0429 20.543L22.6893 25.8965Z" fill="#FAFAFA"/>
            </svg>
            <input type="text" name="" id="" placeholder="Введите телеграм"> 
            </div>       
            <div class="tginput">
              <svg class='iconverify' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M17.204 10.7959L19 8.99994C19.5452 8.45469 19.8179 8.18207 19.9636 7.88797C20.2409 7.32842 20.2409 6.67146 19.9636 6.11191C19.8179 5.81782 19.5452 5.54519 19 4.99994C18.4547 4.45469 18.1821 4.18207 17.888 4.03633C17.3285 3.75905 16.6715 3.75905 16.112 4.03633C15.8179 4.18207 15.5452 4.45469 15 4.99994L13.1813 6.8186C14.1452 8.4692 15.5313 9.84476 17.204 10.7959ZM11.7269 8.27305L4.85636 15.1436C4.4313 15.5686 4.21877 15.7812 4.07904 16.0422C3.93931 16.3033 3.88036 16.5981 3.76247 17.1875L3.14707 20.2645C3.08055 20.5971 3.04729 20.7634 3.1419 20.858C3.23651 20.9526 3.40281 20.9194 3.73542 20.8529L6.8124 20.2375C7.40185 20.1196 7.69658 20.0606 7.95768 19.9209C8.21877 19.7812 8.43131 19.5686 8.85637 19.1436L15.7458 12.2542C14.1241 11.2385 12.7524 9.87622 11.7269 8.27305Z" fill="#333333"/>
                </svg>     

         
            </div>
      </div>
      </div>
      <div class="logout">
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.7124 4.80176L24.7352 2.75531C27.9558 2.24922 29.5661 1.99618 30.6164 2.8943C31.6667 3.79242 31.6667 5.42247 31.6667 8.68258V17.9994H22.4946L26.5617 12.9155L23.4383 10.4167L16.7716 18.75L15.7721 19.9994L16.7716 21.2488L23.4383 29.5821L26.5617 27.0834L22.4946 21.9994H31.6667V31.3163C31.6667 34.5764 31.6667 36.2064 30.6164 37.1045C29.5661 38.0027 27.9558 37.7496 24.7352 37.2435L11.7124 35.1971C10.0996 34.9437 9.29328 34.8169 8.81331 34.2556C8.33333 33.6944 8.33333 32.8781 8.33333 31.2456V8.75327C8.33333 7.12075 8.33333 6.30449 8.81331 5.7432C9.29328 5.18191 10.0996 5.05519 11.7124 4.80176Z" fill="#333333"/>
        </svg>
        <p>Выход</p>      
    </div>
        `
        let iconVerify = document.querySelectorAll('.info .iconverify');

            iconVerify.forEach(icon => {
            icon.addEventListener('click', toggleSVG);
            });

            function toggleSVG(icon) {
            const clickIcon = icon.currentTarget;
            const ifActive = clickIcon.classList.contains('activeicon');
            const previousSVG = clickIcon.getAttribute('oldsvg');
            
            if (ifActive) {
                clickIcon.innerHTML = previousSVG;
                clickIcon.classList.remove('activeicon');
            } else {
                const currentSVG = clickIcon.innerHTML;
                clickIcon.setAttribute('oldsvg', currentSVG);
                clickIcon.innerHTML = `<svg class='activeicon' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="5" fill="#00CA69"/>
                <path d="M5 14L9 17L18 6" stroke="#FAFAFA" stroke-width="2"/>
                </svg>`;
                clickIcon.classList.add('activeicon');
            }
}

        
          
    }
const basketContent = () => {
        wrapperElement.innerHTML = '';

        wrapperElement.innerHTML = `<div class="cardContainer">
        </div>`

        let basketsum = 0;


        basketOrder.forEach(item => {  
            document.querySelector('.cardContainer').innerHTML += `
            <div class="cardbasket">
                <div class="title">
                <p>${item.title}</p>
                </div>
                <div class='price'>
                <p> ${item.price}₸</p>
                </div>
                
            </div>
            
            `
            basketsum += item.price;

        })
        document.querySelector('.cardContainer').innerHTML += `<div class="totalprice">`
        document.querySelector('.cardContainer').innerHTML +=`<button class='btnbasket' id="buyBtn">
        <p>Оформить заказ</p>
        </button>`
        const totalPriceContainer = document.querySelector('.totalprice');
        totalPriceContainer.textContent = `Total: ${basketsum}`

         
        document.getElementById('buyBtn').onclick = buyOrder

    };

    const orderContent = () => {
        wrapperElement.innerHTML = `
            <div class="cardContainer">
            </div>
        `;
    
        const cardContainer = document.querySelector('.cardContainer');
    
        orders.forEach(item => {
            const card = document.createElement('div');
            card.classList.add('cardsorder');
    
            const idElement = document.createElement('div');
            idElement.classList.add('id');
            idElement.innerHTML = `<p>Заказ:</p> <p> ${item.id}</p>`;
            card.appendChild(idElement);
    
            const titleElement = document.createElement('div');
            titleElement.classList.add('titleorder');
            const titleHeader = document.createElement('p');
            titleHeader.innerHTML = 'Товар:';
            titleElement.appendChild(titleHeader);
            
            const productList = document.createElement('ul');
            item.products.forEach((product, index) => {
                const listItem = document.createElement('li');
                listItem.textContent = `${index + 1 }. ${product}`; 
                productList.appendChild(listItem); 
            });
            
            titleElement.appendChild(productList); 
    
            card.appendChild(titleElement);
    
            const priceElement = document.createElement('div');
            priceElement.classList.add('priceorder');
            const price = document.createElement('p');
            const nameprice = document.createElement('p');
            nameprice.innerHTML = 'Цена:';
            priceElement.appendChild(nameprice);
            price.textContent = `${item.sum}`; 
            priceElement.appendChild(price);
            card.appendChild(priceElement);
    
            cardContainer.appendChild(card);
        });
    };
    
   
    const buyOrder = () => {
        let sum = 0;

        basketOrder.forEach(item => {
            sum += item.price;
        })

        orders = [...orders, 
            {
                id: orders.length + 1, 
                products: basketOrder.map(item => item.title),
                sum: sum,
                isStatus:  orders.length > 2 ? true : false
            }]

            basketOrder = [];

            changeTab('order')
    }

    const returnContent = () => {
        wrapperElement.innerHTML = defaultContent;
        setCards(cards_data);
        returnFunction();
    };
   
    const changeContentButton = document.querySelector('.bottomtabs');

    changeContentButton.querySelectorAll('.icon').forEach(tab => {
        tab.onclick = () => {
            changeTab(tab.classList[0])
        }
    })
    
    const defaultContentButton = document.querySelector('.store.icon');

    defaultContentButton.addEventListener('click', returnContent);

    const returnFunction = () => {
        let dropMenuSvg = document.querySelector('.sort-title svg');
        if(dropMenuSvg){
            dropMenuSvg.addEventListener('click', dropDownMenu);
            let radioButtonEvent = document.getElementsByName('sortType');
            radioButtonEvent.forEach(item => {
            item.addEventListener('change', radioBtn);
        });
        }
    };

    returnFunction();




