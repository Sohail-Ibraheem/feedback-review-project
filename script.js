let rating = document.querySelectorAll('.rating');
let btn = document.getElementById('btn');
let container = document.getElementById('container');
let selectrating = '';
console.log(rating);
console.log(btn);
console.log(container)
rating.forEach((items) => {
    items.addEventListener('click',() => {
        removeFun();
        items.classList.add('active');
        selectrating = items.innerHTML;
    })
});

let removeFun = () => {
    rating.forEach((removiecls) => {
        removiecls.classList.remove('active')
    })
};
let submitFun = () => {
    if(selectrating !== ''){
        container.innerHTML = `
        <div class='feedback'>
        <h1>Welcome</h1>
        <div class='feedback_rating'>
        <p>feedback : <span>${selectrating}</span> </p>
        </div>
        <p>thanks for your feedback</p>
        </div>
        `
    }else{
        container.innerHTML = `
       
        `
    }
}
btn.addEventListener('click' , submitFun)
window.addEventListener('load' , () => {
    setTimeout(() => {
        alert('please give us feedback for our project thankyou'.toLocaleUpperCase());
    },2000)
})