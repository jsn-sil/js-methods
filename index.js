let alunos = ['Hodeki', 'Frank', 'Camila', 'Joel', 'Daniel'];

document.write(`<h1>Alunos: ${alunos}</h1>`)
document.write(`<h1>Qnt de alunos: ${alunos.length}</h1>`);

function bemVindo(nome){
    document.write(`<h1>Bem vindo(a): ${nome}</h1>`)
}
alunos.map(bemVindo);

document.write(`<h1>Letras de cada nome: ${alunos.map (aluno => aluno.length)}</h1>`)

document.write(`<h1> Em que volta aparece a Camila: <br> ${
    alunos.map((aluno, posicao)=> {
        if(aluno == 'Camila'){
            return `${aluno} esta na posição: ${posicao}<br>
            `}
            return `${aluno}<br>`;
    })
}</h1> `);

document.write(`<h1>Posição dos alunos:<br>${
    alunos.map((aluno,posicao, array) => {
        return `${aluno} está na posiçâo: ${posicao}/${array.length}<br>`
    })
}</h1>`);


let numeros = [1,2,3,4,5,6];

document.write(`<h1>A soma dos valores do Array Numeros é: ${
    numeros.reduce((total, numero) => total + numero, 0)
}</h1>`);