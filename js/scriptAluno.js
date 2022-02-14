
let notas = []


function pegarData() {
    let email = localStorage.getItem('email')

    db.collection('turmaA').where('email', '==', email).get().then(snapshot => {
        snapshot.forEach((doc) => {
            let alunoid = doc.id
            let aluno = doc.data()
            let txt = document.getElementById('welcome')
            txt.innerHTML = 'Bem vindo(a) a Area do Aluno, ' + aluno.nome
            getNotas(alunoid)
            getAdv(alunoid)
            getFaltas(alunoid)
        });

    })
}

pegarData()


function mostrar() {
    let horario = document.getElementById('horario2')

    horario.style.display = 'flex'

}

function mostrarNotas() {
    let notas = document.getElementById('quadroNotas')
    notas.style.display = 'flex'
}

function mostrarFaltas(){
    let faltas = document.getElementById('quadroFaltas')
    faltas.style.display = 'flex'
}

function pararDeMostrar() {
    let horario = document.getElementById('horario2')
    let notas = document.getElementById('quadroNotas')
    let adv = document.getElementById('quadroAdv')
    let faltas = document.getElementById('quadroFaltas')
    faltas.style.display ='none'
    adv.style.display = 'none'
    horario.style.display = 'none'
    notas.style.display = 'none'
}

function mostrarAdv() {
    let adv = document.getElementById('quadroAdv')
    adv.style.display = 'flex'
}


function getNotas(idAluno) {
    let ref = db.collection('turmaA').doc(idAluno)
    ref.get().then((doc) => {
        let aluno = doc.data()
        let nMat = aluno.notas.matematica
        let nPort = aluno.notas.portugues
        let nGeo = aluno.notas.geografia
        let nHist = aluno.notas.historia
        let nCie = aluno.notas.ciencias

        addNotas(nMat, nPort, nGeo, nHist, nCie)
    })
}


function addNotas(nMat, nPort, nGeo, nHist, nCie) {

    let mat1 = document.getElementById('e1MatNota')
    let mat2 = document.getElementById('e2MatNota')
    let mat3 = document.getElementById('e3MatNota')
    let matM = document.getElementById('matMedia')
    mat1.innerHTML = nMat.nota1
    mat2.innerHTML = nMat.nota2
    mat3.innerHTML = nMat.nota3
    matM.innerHTML = ((parseInt(nMat.nota1) + parseInt(nMat.nota2) + parseInt(nMat.nota3)) / 3).toFixed(1)

    let port1 = document.getElementById('e1PortNota')
    let port2 = document.getElementById('e2PortNota')
    let port3 = document.getElementById('e3PortNota')
    let portM = document.getElementById('portMedia')
    port1.innerHTML = nPort.nota1
    port2.innerHTML = nPort.nota2
    port3.innerHTML = nPort.nota3
    portM.innerHTML = ((parseInt(nPort.nota1) + parseInt(nPort.nota2) + parseInt(nPort.nota3)) / 3).toFixed(1)

    let cie1 = document.getElementById('e1CienNota')
    let cie2 = document.getElementById('e2CienNota')
    let cie3 = document.getElementById('e3CienNota')
    let cienM = document.getElementById('cienMedia')
    cie1.innerHTML = nCie.nota1
    cie2.innerHTML = nCie.nota2
    cie3.innerHTML = nCie.nota3
    cienM.innerHTML = ((parseInt(nCie.nota1) + parseInt(nCie.nota2) + parseInt(nCie.nota3)) / 3).toFixed(1)

    let geo1 = document.getElementById('e1GeoNota')
    let geo2 = document.getElementById('e2GeoNota')
    let geo3 = document.getElementById('e3GeoNota')
    let geoM = document.getElementById('geoMedia')
    geo1.innerHTML = nGeo.nota1
    geo2.innerHTML = nGeo.nota2
    geo3.innerHTML = nGeo.nota3
    geoM.innerHTML = ((parseInt(nGeo.nota1) + parseInt(nGeo.nota2) + parseInt(nGeo.nota3)) / 3).toFixed(1)

    let hist1 = document.getElementById('e1HistNota')
    let hist2 = document.getElementById('e2HistNota')
    let hist3 = document.getElementById('e3HistNota')
    let histM = document.getElementById('histMedia')
    hist1.innerHTML = nHist.nota1
    hist2.innerHTML = nHist.nota2
    hist3.innerHTML = nHist.nota3
    histM.innerHTML = ((parseInt(nHist.nota1) + parseInt(nHist.nota2) +parseInt(nHist.nota3)) / 3).toFixed(1)


}


function getAdv(idAluno) {
    let ref = db.collection('turmaA').doc(idAluno)
    ref.get().then((doc) => {
        let aluno = doc.data()
        let adv = aluno.advertencias
        addAdv(adv)
    })
}


function addAdv(adv) {
    let campo1 = document.getElementById('campo1')

    let i = 0
    for (i of adv) {
        let list = document.getElementById('ul')
        var li = document.createElement('li');
        var newText = document.createTextNode(i);
        li.appendChild(newText);

        list.appendChild(li)
    }
    console.log(campo1)
}


function getFaltas(idAluno){
    let ref = db.collection('turmaA').doc(idAluno)
    ref.get().then((doc) => {
        let aluno = doc.data()
        let fMat = aluno.faltas.matematica
        let fPort = aluno.faltas.portugues
        let fGeo = aluno.faltas.geografia
        let fHist = aluno.faltas.historia
        let fCie = aluno.faltas.ciencias

        console.log(fMat)

        addFaltas(fMat, fPort, fGeo, fHist, fCie)
    })
}

function addFaltas(fMat, fPort, fGeo, fHist, fCie) {

    let mat1 = document.getElementById('fe1MatNota')
    let mat2 = document.getElementById('fe2MatNota')
    let mat3 = document.getElementById('fe3MatNota')
    let matM = document.getElementById('fmatMedia')
    mat1.innerHTML = fMat.faltas1
    mat2.innerHTML = fMat.faltas2
    mat3.innerHTML = fMat.faltas3
    matM.innerHTML = (Number(fMat.faltas1 + fMat.faltas2 + fMat.faltas3) )



    let port1 = document.getElementById('fe1PortNota')
    let port2 = document.getElementById('fe2PortNota')
    let port3 = document.getElementById('fe3PortNota')
    let portM = document.getElementById('fportMedia')
    port1.innerHTML = fPort.faltas1
    port2.innerHTML = fPort.faltas2
    port3.innerHTML = fPort.faltas3
    portM.innerHTML = (Number(fPort.faltas1 + fPort.faltas2 + fPort.faltas3))

    let cie1 = document.getElementById('fe1CienNota')
    let cie2 = document.getElementById('fe2CienNota')
    let cie3 = document.getElementById('fe3CienNota')
    let cienM = document.getElementById('fcienMedia')
    cie1.innerHTML = fCie.faltas1
    cie2.innerHTML = fCie.faltas2
    cie3.innerHTML = fCie.faltas3
    cienM.innerHTML = (Number(fCie.faltas1 + fCie.faltas2 + fCie.faltas3) )

    let geo1 = document.getElementById('fe1GeoNota')
    let geo2 = document.getElementById('fe2GeoNota')
    let geo3 = document.getElementById('fe3GeoNota')
    let geoM = document.getElementById('fgeoMedia')
    geo1.innerHTML = fGeo.faltas1
    geo2.innerHTML = fGeo.faltas2
    geo3.innerHTML = fGeo.faltas3
    geoM.innerHTML = (Number(fGeo.faltas1 + fGeo.faltas2 + fGeo.faltas3) )

    let hist1 = document.getElementById('fe1HistNota')
    let hist2 = document.getElementById('fe2HistNota')
    let hist3 = document.getElementById('fe3HistNota')
    let histM = document.getElementById('fhistMedia')
    hist1.innerHTML = fHist.faltas1
    hist2.innerHTML = fHist.faltas2
    hist3.innerHTML = fHist.faltas3
    histM.innerHTML = (Number(fHist.faltas1 + fHist.faltas2 + fHist.faltas3))


}


function sair(){
    window.location.href = "../index.html"
}



getAdv()

getNotas()




