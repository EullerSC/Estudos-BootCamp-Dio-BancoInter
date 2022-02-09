function getAdmins (map){
    let admin = [];
    for([key, value] of map){
        if(value === 'Admin'){
            admin.push(key);
        }
    }

    return admin;
}

const usuarios = new Map();

usuarios.set('Sara' , 'Admin');
usuarios.set('Barbara', 'Admin');
usuarios.set('Caio', 'Admin');

console.log(getAdmins(usuarios));