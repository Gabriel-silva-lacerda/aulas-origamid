export default function initFuncionamento() {
     const funciomanto = document.querySelector('[data-semana]');
    const diasSemana = funciomanto.dataset.semana.split(',').map(Number);
    const horarioSemana =  funciomanto.dataset.horario.split(',').map(Number);
    
    const dataAgora = new Date();
    const diaAgora = dataAgora.getDay();
    const horarioAgora = dataAgora.getHours();
    
    const semanaAberta = diasSemana.indexOf(diaAgora) !== -1;
     
    const horarioAberto = (horarioAgora >= horarioSemana[0] && horarioAgora < horarioSemana[1]);
       
    if(semanaAberta && horarioAberto) {
        funciomanto.classList.add('aberto');
    }
}


