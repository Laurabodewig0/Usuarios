function adicionarUsuarios(usuario) {
    usuario.id = usuario.length + 1;
    
    let jaExiste = usuario.find(cont => cont.email === usuario.email);
    if (jaExiste) {
    throw new Error('Já existe um usuario com esse email');
    } else {
    usuario.push(usuario);
    }
    }

module.exports = adicionarUsuarios