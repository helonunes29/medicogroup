function logar() {
    var usuarios = [
        {
            email: '123@gmail.com',
            cpf: 'cpf1',
            senha: '123',
            typeUser: 'paciente'
        },
        {
            email: '123@gmail.com',
            cpf: 'cpf2',
            senha: '123',
            typeUser: 'medico'
        },
    ];

    var email = document.getElementById('email').value;
    var cpf = document.getElementById('cpf').value;
    var senha = document.getElementById('senha').value;

    for (var i = 0; i < usuarios.length; i++) {
        if (usuarios[i].email === email && usuarios[i].cpf === cpf && usuarios[i].senha === senha) {
            if (usuarios[i].typeUser === 'paciente') {
                window.location.href = '../agenda/agenda.html';
            } else if (usuarios[i].typeUser === 'medico') {
                window.location.href = '../consultas/consultas.html';
            }
            return;
        }
    }

    alert('Usuário não encontrado ou senha incorreta.');
}