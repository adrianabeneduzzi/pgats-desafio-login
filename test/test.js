import assert from 'assert';
import { fazerLogin } from '../services/login.js';

describe('Suíte de Testes de Login', () => {
    
    it('Deve logar com sucesso', () => {
        const resultado = fazerLogin('adriana@teste.com', '123');
        assert.equal(resultado, 'Login realizado com sucesso');
    });

    it('Deve barrar credencial expirada', () => {
        const resultado = fazerLogin('joao@teste.com', '456');
        assert.equal(resultado, 'Renove suas credenciais');
    });

    it('Deve retornar erro para usuário inexistente', () => {
        const resultado = fazerLogin('naoexiste@teste.com', '000');
        assert.equal(resultado, 'Usuário não encontrado');
    });

    it('Deve retornar erro para senha incorreta', () => {
        const resultado = fazerLogin('gabriela@teste.com', 'senha_errada');
        assert.equal(resultado, 'Credenciais incorretas');
    });
});