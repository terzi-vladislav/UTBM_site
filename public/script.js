let mac_button = document.getElementById("mac_download");
let win_button = document.getElementById("win_download");

let modal = document.getElementById('mac_instructions');
modal.style.display = "none";

mac_button.onclick = () => {
    show_mac_manual();
    download("MacOSBuild.zip");
}

win_button.onclick = () => {
    download("WindowsBuild.zip");
}

function show_mac_manual() {
    let modal = document.getElementById('mac_instructions');
    modal.style.display = "block";

    let span = document.getElementsByClassName("close")[0];

    span.onclick = () => {
        modal.style.display = "none";
    }
}

function download(filename) {
    let element = document.createElement('a');
    if (filename == "MacOSBuild.zip") {
        element.setAttribute('href', 'Versions/MacOSBuild.zip');
    } else {
        element.setAttribute('href', 'Versions/WindowsBuild.zip');
    }

    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}

function writeUserData(email) {
    let emailObject = {
        email: email
    };

    let emailValid = document.getElementById("subscribe")

    firebase.database().ref('subscription-entries').push(emailObject)
        .then(() => {
            let email = document.getElementById("inputEmail");
            email.value = "";
            console.log('success');
        }, function(error) {
            console.log('error' + error);
        });
}

let subscribeButton = document.getElementById("subscribe");

subscribeButton.addEventListener('click',
    () => {
        let email = document.getElementById("inputEmail").value;
        let error = document.getElementById("inputEmail").validationMessage;
        if (!error) {
            writeUserData(email);
        } else {
            console.log(error);
        }
    });

