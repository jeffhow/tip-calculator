document.querySelector('#calc').addEventListener('click', calcTip);

function calcTip() {
    let bill = parseFloat(document.querySelector('#bill').value);

    let tip = 0;





    document.querySelector('#tip').innerHTML = tip;
    document.querySelector('#total').innerHTML = bill+tip;
}