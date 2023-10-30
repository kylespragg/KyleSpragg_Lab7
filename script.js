document.addEventListener('DOMContentLoaded', function () {


    const rborderInput = document.getElementById('rborder');
    const gborderInput = document.getElementById('gborder');
    const bborderInput = document.getElementById('bborder');
    const bordersizeInput = document.getElementById('bordersize');
    const rbackgroundInput = document.getElementById('rbackground');
    const gbackgroundInput = document.getElementById('gbackground');
    const bbackgroundInput = document.getElementById('bbackground');

    const myDiv = document.getElementById('myDiv');

    function applyChanges() {
        const rborder = rborderInput.value;
        const gborder = gborderInput.value;
        const bborder = bborderInput.value;
        const bordersize = bordersizeInput.value;
        const rbackground = rbackgroundInput.value;
        const gbackground = gbackgroundInput.value;
        const bbackground = bbackgroundInput.value;

        myDiv.style.border = `${bordersize}px outset rgb(${rborder},${gborder},${bborder})`;
        myDiv.style.backgroundColor = `rgb(${rbackground},${gbackground},${bbackground})`;
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'applyButton') {
            applyChanges();
        }
    });
});
