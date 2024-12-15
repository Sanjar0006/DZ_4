// 1)
let counter = 0;

function increment(){
    counter++;
    document.getElementById('counter').textContent = counter;
    if(counter > 0){
        document.getElementById('counter').style.color = 'green';
    }
}

function decrement(){
    if (counter > 0) {
        counter --;
        document.getElementById('counter').textContent = counter;
        if (counter === 0){
            document.getElementById('counter').style.color = 'black';
        } else {
            document.getElementById('counter').style.color = "red"
        }
    }
}






const tracker = document.getElementById("cursor-tracker")

    tracker.addEventListener("mousemove", (e) =>{
       const x = event.clientX - tracker.offsetLeft;
       const y = event.clientY - tracker.offsetTop;
            console.log(`X: ${x}, Y: ${y}`);
    },
);







// 3)

function changeLight() {
    const color = prompt("Введите цвет (Красный, Желтый или Зеленый):").toLowerCase();
    const trafficLight = document.querySelector('.traffic-light');

    trafficLight.querySelectorAll('.light').forEach(light => {
        light.style.display = 'none';
    });

    switch (color) {
        case 'красный':
            trafficLight.querySelector('.red').style.display = 'block';
            alert('STOP');
            break;
        case 'желтый':
            trafficLight.querySelector('.yellow').style.display = 'block';
            alert('Внимание!');
            break;
        case 'зеленый':
            trafficLight.querySelector('.green').style.display = 'block';
            alert('GO');
            break;
        default:
            alert('Некорректный цвет');
    }
}





