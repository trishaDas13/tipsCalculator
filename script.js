let percent = document.querySelectorAll('#rating option');
let billAmount = document.querySelector('.bill input'); 
let tipAmount = document.querySelectorAll('.tips input');
let people = document.querySelector('.share input');
let rating = document.querySelector('#rating');
let form = document.querySelector('form');
let tips = document.querySelector('.tips');
let button = document.querySelectorAll('.currency button');
let calc = document.querySelector('.calc');

//todo -------- Handling negetive numbers ---------
billAmount.addEventListener('keyup', (e) => {
    let val = e.target.value;
    if(val < 0){
        alert('Please enter a valid bill amoumt');
    }
});
people.addEventListener('keyup', (e) => {
    let val = e.target.value;
    if(val < 0){
        alert('Please enter a valid number.');
    }
});

//todo -------- Calculate amount ----------
calc.addEventListener('click', function(e){
    e.preventDefault();    

    let price = billAmount.value;
    let share = people.value;
    let value = rating.value;
    let ans = 0, total = 0;

    ans = parseFloat((price * value)/share);
    tips.style.display = 'inline';
    tipAmount[0].value = " ₹ " + ans;
    total = parseFloat((price/share) + ans);
    tipAmount[1].value = " ₹ " + total;
});

//todo -------- Currency conversion ----------

//* for Baht
button[0].addEventListener("click", (e) =>{
    e.preventDefault();   

    let price = billAmount.value;
    let share = people.value;
    let value = rating.value;
    let ans = 0, total = 0;

    ans = parseFloat((price * value)/share);
    tips.style.display = 'inline';
    tipAmount[0].value = " ฿ " + (ans * 0.04);
    total = parseFloat((price/share) + ans);
    tipAmount[1].value = " ฿ " + (total * 0.04);
});

//* for Dollar
button[1].addEventListener("click", (e) =>{
    e.preventDefault();   

    let price = billAmount.value;
    let share = people.value;
    let value = rating.value;
    let ans = 0, total = 0;

    ans = parseFloat((price * value)/share);
    tips.style.display = 'inline';
    tipAmount[0].value = " $ " + (ans * 0.012);
    total = parseFloat((price/share) + ans);
    tipAmount[1].value = " $ " + (total * 0.012);
});

//* for Euro
button[2].addEventListener("click", (e) =>{
    e.preventDefault();   

    let price = billAmount.value;
    let share = people.value;
    let value = rating.value;
    let ans = 0, total = 0;

    ans = parseFloat((price * value)/share);
    tips.style.display = 'inline';
    tipAmount[0].value = " € " + (ans * 0.011);
    total = parseFloat((price/share) + ans);
    tipAmount[1].value = " € " + (total * 0.011);
});

//* for Yen
button[3].addEventListener("click", (e) =>{
    e.preventDefault();   

    let price = billAmount.value;
    let share = people.value;
    let value = rating.value;
    let ans = 0, total = 0;

    ans = parseFloat((price * value)/share);
    tips.style.display = 'inline';
    tipAmount[0].value = " ¥ " + (ans * 0.56);
    total = parseFloat((price/share) + ans);
    tipAmount[1].value = " ¥ " + (total * 0.56);
});