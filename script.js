window.addEventListener("DOMContentLoaded", () => {
    function s(id) {
        return document.getElementById(`${id}`)
    }
    s('calculate').addEventListener('click', calculate)
    function calculate() {
        var invested = s('invested').value
        var returned = s('returned').value
        var time = s('time').value

        roi = (((returned - invested) / invested) * 100).toFixed(2)
        s('result-p').innerHTML = `You got ${roi}% return`

    }

})