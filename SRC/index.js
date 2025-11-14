import GeraCPF from './assets/modules/geraCPF.JS';
import './assets/modelo.css';

(function(){
    const cpfGerado = document.querySelector('.resultado');
    const gera = new GeraCPF();
    cpfGerado.innerHTML = gera.geraNovoCpf();
})(); 