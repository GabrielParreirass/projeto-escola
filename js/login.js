const firebaseConfig = {
    apiKey: "AIzaSyC6ZmflnyQ2Mwst9ZTJD6UW14xDLE1lGIM",
    authDomain: "colegio-28e00.firebaseapp.com",
    projectId: "colegio-28e00",
    storageBucket: "colegio-28e00.appspot.com",
    messagingSenderId: "890179712870",
    appId: "1:890179712870:web:590c49d954eba794837aa7",
    measurementId: "G-8FFEHGEYPR"
};

firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const auth = firebase.auth()

function login(){
    let userEmail = document.getElementById('inpEmail').value
    let userPsswd = document.getElementById('inpPsswd').value

    console.log(userEmail)
    console.log(userPsswd)

    auth.signInWithEmailAndPassword(userEmail, userPsswd)
    .then(user=>{
        window.alert('Usuario autenticado! Efetuando login.')
        localStorage.setItem('email', userEmail)
        if (userEmail.indexOf("@prof") != -1){
            window.location.href = "pages/pgProf.html"
        }else{
            window.location.href = "pages/pgAluno.html"
        }

    }).catch(error=>{
        let x = document.getElementById('inpEmail')
        let y = document.getElementById('inpPsswd')
        
        x.value = ''
        y.value = ''
        console.log(error)
        window.alert('Dados incorretos! Tente Novamente')
    })
}









