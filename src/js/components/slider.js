
class Slider {
    staticCards = [];
    step = 0;
    slideWidth = 250;
    constructor(cards,timeSwitch){
        this.cards = cards; 
        this.timeSwitch = timeSwitch;
        this.step = cards.length - 1;
        this.cards[0].parentElement.onresize =()=>{ 
            this.resize();
        }  
        cards.forEach(element => {
            this.staticCards.push(element);
        });
        this.resize();
        // if(this.cards.length > 0){
        // ///// ширина контейнера карточок
        // this.totalWidth = this.cards[0].parentElement.getBoundingClientRect().width
        // if(this.totalWidth< this.cards[0].getBoundingClientRect().width * this.cards.length){
        //     console.log("outline");

        // }
        // ///// ширина карточки
        // this.cardWidth = this.totalWidth/cards.length
        // ///// позиціонує карточки з ліва на право
        // this.cards.forEach((element,index) =>  {
        //     element.style.left = index*this.cardWidth +"px";

        // });
        // }
    }

    nextSlide = function (slideCount,forwardDirection){ 
    /////////////////// кількість слайдів яка має перелистуватись,напрямок вперед
        
    ///////////////////// визначає ту карточку яка виходить за межі контейнера
        this.cards.forEach(element => {
            
            let cardLeft = Number.parseInt(getComputedStyle(element).left);
           if(((cardLeft >= this.totalWidth)&&(forwardDirection)) ){

            // if( !this.lostSlide || cardLeft > Number.parseInt(getComputedStyle(this.lostSlide).left)){

                this.lostSlide = element;
            // }


           }
        });
        
        ///// створюємо фантомний слайд - це копія карточки  яка остання в масиві 
        if(forwardDirection){
            console.log(this.step);
            this.step++;
            if(this.step >= this.staticCards.length){
                this.step = 0;
                
            }

            this.fantomSlide = this.cards[this.cards.length - 1].cloneNode(true);
            //// якщо у нас є слайд який виходить за межі, то у цьому випадку 
            if(this.lostSlide){
                //// Фантомний слайд визначається як передостання карточка в масиві
                this.fantomSlide = this.staticCards[this.step].cloneNode(true);
                
                this.lostSlide.remove();
                // console.dir(fantomSlide);
            } 
            
        }else{
            this.step--;
            if(this.step < 0 ){
                this.step = this.staticCards.length -1;
            }
            this.fantomSlide = this.cards[0].cloneNode(true);
            if(this.lostSlide){
                //// Фантомний слайд визначається як друга карточка в масиві
                this.fantomSlide = this.cards[1].cloneNode(true);
                this.lostSlide.remove();
                // console.dir(fantomSlide);
            } 
        }
        
    
        
        // cards[0].parentElement.appendChild(fantomSlide);
        //// визначити ім'я класу фантомного слайду
        let className ="." + this.fantomSlide.className;
        if(forwardDirection){
            /// фантомний слайд розташовується лівіше на ширину картки
            this.fantomSlide.style.left = -this.cardWidth + "px";
            //// додаємо у батьківський контейнер слайдеру, фантомний слайд перед, першим елементом
            this.cards[0].parentElement.insertBefore(this.fantomSlide,document.querySelector(className));
            
        }else{
            this.fantomSlide.style.left = this.totalWidth + "px";
            this.cards[0].parentElement.appendChild(this.fantomSlide);
        }
        ///// перевизнааєм змінну cards
        this.cards = document.querySelectorAll(className);

        this.cards.forEach((card,index )=> {
            /// кожну карточку зміщуємо на її ширину лівіше
            // card.style.left = (this.cardWidth - 250) +"px";
            if(forwardDirection){
                card.style.left = Number.parseInt(getComputedStyle(card).left) + this.cardWidth + "px";
            }else{
                card.style.left = Number.parseInt(getComputedStyle(card).left) - this.cardWidth + "px";
            }
            // card.style.left = index * this.cardWidth + "px";
        });
    
        
    } 
    timer = setInterval(() => {
        this.nextSlide(1,true);
    }, 5000);
    

    resize = function (){

        if(this.cards.length > 0){
            ///// кількість карточок в адаптиві 
            let adaptiveCards = 4;
            
            let outline = false;
            ///// ширина контейнера карточок
            this.totalWidth = this.cards[0].parentElement.getBoundingClientRect().width
            if(this.totalWidth< this.cards[0].getBoundingClientRect().width * this.cards.length){
                console.log("outline");
                outline = true;
                console.log(this.totalWidth/this.cards[0].getBoundingClientRect().width);
                adaptiveCards =Math.floor(this.totalWidth/this.cards[0].getBoundingClientRect().width);

            }
            ///// ширина карточки
        
            if(!outline){
                this.cardWidth = this.totalWidth/this.cards.length;
                let cardPadding = this.totalWidth - (this.slideWidth* this.cards.length);
                cardPadding /=this.cards.length -1 ;
                console.log("card padding: "+cardPadding);
                // this.cardWidth = this.totalWidth/adaptiveCards;2
                this.cardWidth = this.slideWidth + cardPadding;
            }else{
                if(adaptiveCards>1){
                    let cardPadding = this.totalWidth - (this.slideWidth* adaptiveCards);
                    cardPadding /=adaptiveCards -1 ;
                    console.log("card padding: "+cardPadding);
                    // this.cardWidth = this.totalWidth/adaptiveCards;2
                    this.cardWidth = this.slideWidth + cardPadding;
                    
                }else{
                    this.cardWidth = this.totalWidth;
                }
            }
            console.log("total Width:" + this.totalWidth);
            console.log("card Width:" + this.cardWidth);
           

            ///// позиціонує карточки з ліва на право
            this.cards.forEach((element,index) =>  {
                element.style.left = index*this.cardWidth +"px";
    
            });
            }
    } 
    

    

}   
class SliderEmpoyes extends Slider{
        constructor(cards,timer,arrowLeft,arrowRight){
        super(cards,timer)

        arrowLeft.onclick  = ()=>{
            this.nextSlide(3,true);
        let className ="." + this.fantomSlide.className;
        this.cards[0].parentElement.insertBefore(this.fantomSlide,document.querySelector(className));
        this.fantomSlide.style.left = -this.cardWidth + "px";
        this.cards = document.querySelectorAll(className);

        this.cards.forEach(card => {
            // card.style.left = (this.cardWidth - 250) +"px";
            card.style.left = Number.parseInt(getComputedStyle(card).left) + this.cardWidth + "px";
        });
        }
        arrowRight.onclick = ()=>{
            this.nextSlide(3,false);
        }
        this.arrowLeft = arrowLeft;
        this.arrowRight = arrowRight;
    }
}
        setArrows = function(arrowLeft,arrowRight){
    //     this.arrowLeft = arrowLeft;
    //     this.arrowRight = arrowRight;
    //     this.arrowLeft.onclick = function(){
    //         this.nextSlide(3,true);
    //     }
    //     this.arrowRight.onclick = function(){
    //         this.nextSlide(3,false);
    //     }
    
};

class brandSliders extends Slider{
    constructor(cards,timer,quote,author,dots){
        super(cards,timer);
        this.quote = quote;
        this.author = author;
        this.dots = dots;
        this.activeSlide = 0;
        this.slideWidth = 220;
        clearInterval(this.timer);
    }
    
    timer = setInterval(() =>{

        let quoteText = this.fantomSlide.lastElementChild.innerHTML;
        let authorText = this.fantomSlide.lastElementChild.previousElementSibling.innerHTML;
        this.quote.innerText = quoteText;
    this.author.innerText = authorText;
    this.activeSlide++;
    if(this.activeSlide >= this.cards.length){
        this.activeSlide = 0;
    }
    switch (this.activeSlide) {
        case 0:
            this.dots.firstElementChild.style.backgroundColor = "brown";
            break;
        case (this.cards.length - 1):
            this.dots.lastElementChild.style.backgroundColor = "brown";
            break;

    
        default:
            this.dots.lastElementChild.previousElementSibling.style.backgroundColor = "brown";
            break;
    }
    this.nextSlide(1,true)
    },5000)     
    

}
 

let blocks = document.querySelectorAll(".block"); 
let quoteText = document.querySelector(".quoteText");
let authorText = document.querySelector(".quoteAuthor");
let switcher = document.querySelector(".switcher");
let brands = new brandSliders(blocks,5000,quoteText,authorText,switcher);


let photo = document.querySelectorAll(".photo");
let arrowLeft = document.querySelector(".arrowLeft");  
let arrowRight = document.querySelector(".arrowRight");  

// empoyes.setArrows(arrowLeft,arrowRight);
let empoyes = new SliderEmpoyes(photo,3000,arrowLeft,arrowRight);
window.onresize = () =>{
    empoyes.resize();
    brands.resize();
}