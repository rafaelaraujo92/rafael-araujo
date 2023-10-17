/* let htmlBar = document.getElementById('html-skill');
let cssBar = document.getElementById('css-skill');
let jsBar = document.getElementById('js-skill');
let csharpBar = document.getElementById('csharp-skill');
let reactBar = document.getElementById('react-skill');
let pythonBar = document.getElementById('python-skill');
let sqlBar = document.getElementById('sql-skill');

htmlBar.animate([
    {width: '0%'}, {width: '60%'}
    ], {duration: 2000});
htmlBar.style.width = "60%";
*/

let bars = document.querySelectorAll("div[id$='skill']");

bars.forEach((node) =>{

    let widthval = null;

    console.log(node.attributes.id.nodeValue)

    switch(node.attributes.id.nodeValue){

        case "html-skill":
            widthval = "60%"
            break;

        case "css-skill":
            widthval = "60%"
            break;

        case "js-skill":
            widthval = "60%"
            break;

        case "js-skill":
            widthval = "60%"
            break;

        case "csharp-skill":
            widthval = "60%"
            break;
        
        case "react-skill":
            widthval = "30%"
            break;

        case "python-skill":
            widthval = "30%"
            break;

        case "sql-skill":
            widthval = "60%"
            break;

        default:
            widthval = "0%"

    }

    node.animate([
        {width: '0%'}, {width: widthval}
        ], {duration: 800});
    node.style.width = widthval
})

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let arrowLeft = document.querySelector('.left');
let arrowRight = document.querySelector('.right');
let slider = document.querySelector('#conteudo-portfolio');

slider.addEventListener('mouseover', (e) =>{
    arrowLeft.style.filter = 'opacity(0.8)';
    arrowRight.style.filter = 'opacity(0.8)';
})

slider.addEventListener('mouseleave', (e) =>{
    arrowLeft.style.filter = 'opacity(0)';
    arrowRight.style.filter = 'opacity(0)';
})


arrowRight.addEventListener('click', (e) => {
    e.preventDefault();
    slider.scrollLeft += 200;
    
})

arrowLeft.addEventListener('click', (e) => {
    e.preventDefault();

    slider.scrollLeft -= 200;
})

arrowRight.addEventListener('mouseover', (e) => {
    arrowLeft.style.filter = 'opacity(0.8)';
    arrowRight.style.filter = 'opacity(1)';
    
})

arrowLeft.addEventListener('mouseover', (e) => {
    arrowLeft.style.filter = 'opacity(1)';
    arrowRight.style.filter = 'opacity(0.8)';
})



console.log(bars)
