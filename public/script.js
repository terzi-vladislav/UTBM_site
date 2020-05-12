let mac_button = document.getElementById("mac_download");
let win_button = document.getElementById("win_download");

// let modal = document.getElementById('mac_instructions');
// modal.style.display = "none";

mac_button.onclick = () => {
    // show_mac_manual();
    download("MacOSBuild.zip");
    firebase.analytics().logEvent('Download_for_mac');
}

win_button.onclick = () => {
    download("WindowsBuild.zip");
    firebase.analytics().logEvent('Download_for_windows');
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
    if (filename === "MacOSBuild.zip") {
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

    firebase.database().ref('subscription-entries').push(emailObject)
        .then(() => {
            let email = document.getElementById("inputEmail");
            email.value = "";
            show_success();
        }, function(error) {
            let email = document.getElementById("inputEmail");
            email.value = "";
            email.placeholder = error;
        });
}

// let subscribeButton = document.getElementById("subscribe");

// subscribeButton.addEventListener('click',
//     () => {
//         let email = document.getElementById("inputEmail").value;
//         let error = document.getElementById("inputEmail").validationMessage;
//         if (!error) {
//             writeUserData(email);
//         } else {
//             let email = document.getElementById("inputEmail");
//             email.value = "";
//             email.placeholder = error;
//         }
//     });

// let modal1 = document.getElementById('success');
// modal1.style.display = "none";

function show_success() {
    let modal = document.getElementById('success');
    modal.style.display = "flex";

    let span = document.getElementById('success_close');

    span.onclick = () => {
        modal.style.display = "none";
    }
}

// let report_button = document.getElementById("bug_button");

// let modal3 = document.getElementById('report');
// modal3.style.display = "none";

// report_button.onclick = () => {
//     show_bug_report();
// }

function show_bug_report() {
    let modal = document.getElementById('report');
    modal.style.display = "flex";

    let span = document.getElementById('report_close');

    span.onclick = () => {
        modal.style.display = "none";
    }
}

function report(text) {
    let reportObject = {
        report: text
    };

    firebase.database().ref('reports').push(reportObject)
        .then(() => {
            let report = document.getElementById('problem');
            report.value = "";
            let modal = document.getElementById('report');
            modal.style.display = "none";
            show_success();
        }, function(error) {
            let report = document.getElementById('report');
            report.value = "";
            report.placeholder = error;
        });
}

// let issueButton = document.getElementById('report_issue');
//
// issueButton.addEventListener('click',
//     () => {
//         let text = document.getElementById('problem').value;
//         report(text);
//     });