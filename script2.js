document.addEventListener('DOMContentLoaded', function () {


    function applyChanges() {
        
        var firstpassword = document.getElementById("firstpassword").value;
        var secondpassword = document.getElementById("secondpassword").value;
    

        if (firstpassword.length < 8){

            alert("The length of your first password has to be 8 letters or more!")
        }

        else if (secondpassword.length< 8){

            alert("The length of your second password has to be 8 letters or more!")
        }

        else if (firstpassword != secondpassword){

            alert("The passwords do not match.")
        }
        else{

            alert("The passwords match!")
        }
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.id === 'applyButton') {
            applyChanges();
        }

    });
});