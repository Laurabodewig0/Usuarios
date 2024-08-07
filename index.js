const prompt = require('prompt-sync') ()
 
const listarUsuarios = require('./listarUsuarios');
const adicionarUsuarios = require('./adicionarUsuarios');
const atualizarUsuarios = require('./atualizarUsuarios');
const removerUsuarios = require('./removerUsuarios');


 function mainMenu() {
    console.log(`
    1. Listar usuarios
    2. Adicionar usuarios
    3. Atualizar usuarios 
    4. Remover usuarios
    5. Sair
    `);
 }

 const opcao = prompt('Escolha uma opção: ');
 let index;

 switch (opcao) {
   case '1':
       listarUsuarios();
       mainMenu();
       break;
   case '2':
       const id = prompt('ID: ');
       const nome = prompt('Nome: ');
       const numero = prompt('Numero: ');
       const email = prompt ('Email: ');
       adicionarUsuarios({ id, nome, numero, email });
       console.log('Usuarios adicionado com sucesso!');
       mainMenu();
       break;
   case '3':
       listarUsuarios();
       index = parseInt(prompt('Número de usuarios atualizado: '))
       const novoID = prompt('Novo : id');
       const novoNome = prompt('Novo nome: ');
       const novoNumero = prompt('Novo numero: ');
       const novoEmail = prompt('Novo email: ');
       atualizarUsuarios(index, { id: novoID, nome: novoNome, numero: novoNumero, email: novoEmail });
       console.log('Usuarios atualizada com sucesso!');
       mainMenu();
       break;
   case '4':
       listarUsuarios();
       index = parseInt(prompt('Número do usuario a remover: '))
       removerUsuarios(index);
       console.log('Usuario removido com sucesso!');
       mainMenu();
       break;
   case '5':
       break;
   default:
       console.log('Opção inválida!');
       mainMenu();
   }


mainMenu();