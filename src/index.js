import { Chart } from "./chart";
import { connect } from "mqtt";

const client = connect("ws://127.0.0.1:1884", {
    
})

client.on('connect', function () {
    client.subscribe('org/eu/jsw3286/mqtt/hrm')
})

document.addEventListener('DOMContentLoaded', () => {
    const chart = new Chart("#chart")
    const hr = document.getElementById("hr")
    const h1 = document.getElementById("heartrate")
    const heart = document.getElementById('heart')

    client.on('message', function (topic, message) {
        const d = JSON.parse(message.toString())
        console.log(d)
        hr.innerText = d.b
        chart.update(d.b)

        h1.classList.toggle('accuracy-0', d.a <= 0);
        h1.classList.toggle('accuracy-1', d.a === 1);
        h1.classList.toggle('accuracy-2', d.a === 2);
        h1.classList.toggle('accuracy-3', d.a === 3);
    
        heart.classList.toggle('heart-toggled')
    })
})
