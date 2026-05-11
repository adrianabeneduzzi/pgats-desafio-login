import { usuarios } from '../src/database.js';

export function fazerLogin(emailInformado, senhaInformada) {
    const usuarioEncontrado = usuarios.find(u => u.email === emailInformado);

    if (!usuarioEncontrado) {
        return 'Usuário não encontrado';
    }

    if (usuarioEncontrado.senha !== senhaInformada) {
        return 'Credenciais incorretas';
    }

    if (usuarioEncontrado.expirado) {
        return 'Renove suas credenciais';
    }

    return 'Login realizado com sucesso';
}