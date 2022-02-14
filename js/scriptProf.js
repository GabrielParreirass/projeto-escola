function pegarDataProf() {
    let email = localStorage.getItem('email')

    db.collection('turmaA').where('email', '==', email).get().then(snapshot => {
        snapshot.forEach((doc) => {
            let profid = doc.id
            let prof = doc.data()
            let txt = document.getElementById('welcome')
            txt.innerHTML = 'Bem vindo(a) Professor(a), ' + prof.nome
            getAlunos(profid)


        });

    })
}

pegarDataProf()

function pararDeMostrar() {
    let aluno = document.getElementById('quadroAluno')
    let notas = document.getElementById('quadroNotas')
    let adv = document.getElementById('quadroAdv')
    let falt = document.getElementById('quadroFaltas')
    aluno.style.display = 'none'
    notas.style.display = 'none'
    adv.style.display = 'none'
    falt.style.display = 'none'
}

function mostrarNotas1() {
    let notas = document.getElementById('quadroNotas')
    notas.style.display = 'flex'
}

function mostrarAlunos() {
    let aluno = document.getElementById('quadroAluno')
    aluno.style.display = 'flex'
}

function mostrarAdv() {
    let adv = document.getElementById('quadroAdv')
    adv.style.display = 'flex'
}

function mostrarFalta(){
    let falt = document.getElementById('quadroFaltas')
    falt.style.display = 'flex'
}


let alunos2 = []
let alunoid2 = []

function getAlunos(profid) {
    let email = localStorage.getItem('email')
    db.collection('turmaA').where('email', '!=', email).get().then(snapshot => {
        snapshot.forEach((doc) => {
            let aluno = doc.data().nome
            let alunoid = doc.id
            alunoid2.push(alunoid)
            alunos2.push(aluno)
        })
        addAlunos(alunos2, alunoid2)
    })
}

function addAlunos(alunos, alunoid2) {
    let campo1 = document.getElementById('campo1')

    let i = 0
    for (i in alunos) {
        let list = document.getElementById('ul')
        var li = document.createElement('li');
        var newText = document.createTextNode(`${alunos[i]} // ${alunoid2[i]}`);
        li.appendChild(newText);

        list.appendChild(li)
    }
    console.log(alunoid2)
}



function getMateria() {

    let alunoId = document.getElementById('idaluno').value


    for (i of alunoid2) {
        if (i == alunoId) {
            let idx = (alunoid2.indexOf(i))
            getNotas(idx)
        } else {
            console.log('')
        }

    }
}


function getMateriaf() {

    let alunoId = document.getElementById('idalunof').value


    for (i of alunoid2) {
        if (i == alunoId) {
            let idx = (alunoid2.indexOf(i))
            getFaltas(idx)
        } else {
            console.log('')
        }

    }
}


function getNotas(idx) {
    let ref = db.collection('turmaA').doc(alunoid2[idx])
    ref.get().then((doc) => {
        let aluno = doc.data()
        let nMat = aluno.notas.matematica
        let nPort = aluno.notas.portugues
        let nGeo = aluno.notas.geografia
        let nHist = aluno.notas.historia
        let nCie = aluno.notas.ciencias
        mostrarNotas(nMat, nPort, nGeo, nHist, nCie)

    })
}


function mostrarNotas(nMat, nPort, nGeo, nHist, nCie) {

    let notas1 = document.getElementById('n1')
    let notas2 = document.getElementById('n2')
    let notas3 = document.getElementById('n3')
    var selected_option = $('#materias option:selected').text()

    console.log(selected_option)

    if (selected_option == 'matematica') {
        notas1.value = nMat.nota1;
        notas2.value = nMat.nota2;
        notas3.value = nMat.nota3;
    }

    else if (selected_option == 'portugues') {
        notas1.value = nPort.nota1;
        notas2.value = nPort.nota2;
        notas3.value = nPort.nota3;
    }
    else if (selected_option == 'geografia') {
        notas1.value = nGeo.nota1;
        notas2.value = nGeo.nota2;
        notas3.value = nGeo.nota3;
    }
    else if (selected_option == 'historia') {
        notas1.value = nHist.nota1;
        notas2.value = nHist.nota2;
        notas3.value = nHist.nota3;
    }
    else if (selected_option == 'ciencias') {
        notas1.value = nCie.nota1;
        notas2.value = nCie.nota2;
        notas3.value = nCie.nota3;
    }
}


// function attNotas(){
//     let notas1 = document.getElementById('n1')
//     let notas2 = document.getElementById('n2')
//     let notas3 = document.getElementById('n3')
//     var materia = $('#materias option:selected').text()
//     let alunoId = document.getElementById('idaluno').value

//     // db.collection('turmaA').doc('xfXs41coyjjQm6gz1Iit').get().then((doc)=>{
//     //     console.log(doc.data().notas)
//     // })





// }


function teste() {

    let materia = $('#materias option:selected').text()
    let id = document.getElementById('idaluno').value

    if (materia == 'matematica') {
        let notas1m = document.getElementById('n1').value
        let notas2m = document.getElementById('n2').value
        let notas3m = document.getElementById('n3').value
        db.collection('turmaA').doc(id).set({
            notas: {
                matematica: {
                    nota1: notas1m,
                    nota2: notas2m,
                    nota3: notas3m,
                },
            }
        }, { merge: true })
        window.alert('Notas alteradas com sucesso!')
    }

    else if (materia == 'portugues') {
        let notas1p = document.getElementById('n1').value
        let notas2p = document.getElementById('n2').value
        let notas3p = document.getElementById('n3').value


        db.collection('turmaA').doc(id).set({
            notas: {
                portugues: {
                    nota1: notas1p,
                    nota2: notas2p,
                    nota3: notas3p,
                },
            }

        }, { merge: true })
        window.alert('Notas alteradas com sucesso!')
    }

    else if (materia == 'ciencias') {
        let notas1c = document.getElementById('n1').value
        let notas2c = document.getElementById('n2').value
        let notas3c = document.getElementById('n3').value
        db.collection('turmaA').doc(id).set({
            notas: {
                ciencias: {
                    nota1: notas1c,
                    nota2: notas2c,
                    nota3: notas3c,
                },
            }
        }, { merge: true })
        window.alert('Notas alteradas com sucesso!')
    }

    else if (materia == 'geografia') {
        let notas1g = document.getElementById('n1').value
        let notas2g = document.getElementById('n2').value
        let notas3g = document.getElementById('n3').value
        db.collection('turmaA').doc(id).set({
            notas: {
                geografia: {
                    nota1: notas1g,
                    nota2: notas2g,
                    nota3: notas3g,
                },
            }

        }, { merge: true })
        window.alert('Notas alteradas com sucesso!')
    }

    else if (materia == 'historia') {
        let notas1h = document.getElementById('n1').value
        let notas2h = document.getElementById('n2').value
        let notas3h = document.getElementById('n3').value
        db.collection('turmaA').doc(id).set({
            notas: {
                historia: {
                    nota1: notas1h,
                    nota2: notas2h,
                    nota3: notas3h,
                },
            }
        }, { merge: true })
        window.alert('Notas alteradas com sucesso!')
    }
}


function getAdv(idAluno) {
    let ref = db.collection('turmaA').doc(idAluno)
    ref.get().then((doc) => {
        console.log(doc.id)
        let aluno = doc.data()
        let adv = aluno.advertencias
        addAdv(adv)
    })
}

function addAdv(adv) {
    let campo1 = document.getElementById('campo11')

    let i = 0

    for (i of adv) {
        let list = document.getElementById('ul2')
        var li = document.createElement('li');
        var newText = document.createTextNode(i);
        li.appendChild(newText);

        list.appendChild(li)
    }
    console.log(campo1)
}



function aumentarInput() {
    let foco = document.getElementById('taAdv');
    foco.style.height = '200px'
    foco.style.width = '200px'
}

function diminuirInput() {
    let foco = document.getElementById('taAdv')

    foco.style.height = '20px'
    foco.style.width = '200px'
}


var foco = document.getElementById('taAdv');

foco.addEventListener('focus', function () {
    aumentarInput()

});

foco.addEventListener('blur', function () {
    diminuirInput()

});

function attAdv() {
    let id = document.getElementById('idaluno2').value
    $("#ul2").empty()
    getAdv(id)
}


function AddNewAdv() {
    let id = document.getElementById('idaluno2').value
    let ta = document.getElementById('taAdv')

    let newAdv = $('#taAdv').val()
    db.collection('turmaA').doc(id).update({
        advertencias: firebase.firestore.FieldValue.arrayUnion(newAdv)
    })

    window.alert('Advertencia enviada com sucesso!')
}

function sair() {
    window.location.href = "../index.html"
}


function getFaltas(idx) {
    let ref = db.collection('turmaA').doc(alunoid2[idx])
    ref.get().then((doc) => {
        let aluno = doc.data()
        let fMat = aluno.faltas.matematica
        let fPort = aluno.faltas.portugues
        let fGeo = aluno.faltas.geografia
        let fHist = aluno.faltas.historia
        let fCie = aluno.faltas.ciencias
        mostrarFaltas(fMat, fPort, fGeo, fHist, fCie)

    })
}


function mostrarFaltas(fMat, fPort, fGeo, fHist, fCie) {

    console.log(fMat)

    let faltas1 = document.getElementById('f1')
    let faltas2 = document.getElementById('f2')
    let faltas3 = document.getElementById('f3')
    let selected_option = $('#materiasf option:selected').text()


    if (selected_option == 'matematica') {
        faltas1.value = fMat.faltas1;
        faltas2.value = fMat.faltas2;
        faltas3.value = fMat.faltas3;
    }

    else if (selected_option == 'portugues') {
        faltas1.value = fPort.faltas1;
        faltas2.value = fPort.faltas2;
        faltas3.value = fPort.faltas3;
    }
    else if (selected_option == 'geografia') {
        faltas1.value = fGeo.faltas1;
        faltas2.value = fGeo.faltas2;
        faltas3.value = fGeo.faltas3;
    }
    else if (selected_option == 'historia') {
        faltas1.value = fHist.faltas1;
        faltas2.value = fHist.faltas2;
        faltas3.value = fHist.faltas3;
    }
    else if (selected_option == 'ciencias') {
        faltas1.value = fCie.faltas1;
        faltas2.value = fCie.faltas2;
        faltas3.value = fCie.faltas3;
    }
}