window.addEventListener("DOMContentLoaded", () => {
    function s(id) {
        return document.getElementById(`${id}`)
    }
    s('calculate').addEventListener('click', calculate)
    function calculate() {
        var invested = s('invested').value
        var returned = s('returned').value
        var time = s('time').value

        var numbers = /^[0-9]+$/
        if (invested.match(numbers) && returned.match(numbers) && time.match(numbers)) {
            invested = parseFloat(invested)
            returned = parseFloat(returned)
            time = parseInt(time)
            let gain = returned - invested
            let roi = ((gain / invested) * 100).toFixed(2)
            let cagr = ((((returned / invested) ** (1 / time)) - 1) * 100).toFixed(2)
            s('result').style.display = "block"
            document.querySelectorAll('.result-span')[0].innerHTML = ` ₹${gain}`
            document.querySelectorAll('.result-span')[1].innerHTML = ` ${roi}%`
            document.querySelectorAll('.result-span')[2].innerHTML = ` ${cagr}%`


        } else {
            alert("Please input proper values!!")
        }

    }

})