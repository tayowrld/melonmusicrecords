let quotes = [
    'Дыни е**т год 100% инфа', 
    'Не приходи ко мне на студию со своим fake дерьмом', 
    'Мы летали высоко но теперь больнее падать',
    'С пацами прыгнул в аквариум',
    'Я курю много - у меня астма, улица - врач дала лекарство',
    'Я касаюсь гильзы сухими губами'
];

let quotes_stroke = document.getElementById('quotes_stroke');
let quotes_stroke_current = '';
let j = 0;

for (i=0; i<quotes.length; i+=1){
    quotes_stroke_current = quotes_stroke_current + quotes[i] + '  ㅤㅤㅤ ';
    j+=1;
    console.log(i);
    console.log(j);
    if (j == quotes.length){
        quotes_stroke.innerHTML = quotes_stroke_current;
    }
}