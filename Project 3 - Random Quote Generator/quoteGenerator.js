const button=document.querySelector('#new-quote')
const quote=document.querySelector('.quote')
const person=document.querySelector('.person')

const quotes = [{
    quote:'"The way to get started is to quit talking and begin doing"',
    person:'Walt Disney'
},{
    quote:'"Your time is limited, so do not waste it living someone else life. Do not be trapped by dogma – which is living with the results of other peoples thinking"',
    person:'Steve Jobs'
},{
    quote:'"If life were predictable it would cease to be life, and be without flavor"',
    person:'Eleanor Roosevelt'
},{
    quote:'"Life is what happens when you are busy making other plans"',
    person:'John Lennon'
},{
    quote:'"Spread love everywhere you go. Let no one ever come to you without leaving happier"',
    person:'Mother Teresa'
},{
    quote:'"When you reach the end of your rope, tie a knot in it and hang on"',
    person:'Franklin D. Roosevelt'
},{
    quote:'"Always remember that you are absolutely unique. Just like everyone else"',
    person:'Margaret Mead'
},{
    quote:'"The future belongs to those who believe in the beauty of their dreams"',
    person:'Eleanor Roosevelt'
}]

button.addEventListener('click',()=>{
    let random = Math.floor(Math.random()*quotes.length)

    quote.innerText=quotes[random].quote
    person.innerText=quotes[random].person
})