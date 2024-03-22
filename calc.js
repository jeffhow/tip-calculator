document.querySelector('#calc').addEventListener('click', calcTip);

function calcTip() {
    let bill = parseFloat(document.querySelector('#bill').value);

    let tip = 0;

    // calculate the tip based on the bill
    // bonus: add a dropdown for different percentages, 15%, 20%, 22%




    document.querySelector('#tip').innerHTML = tip;
    document.querySelector('#total').innerHTML = bill+tip;
}