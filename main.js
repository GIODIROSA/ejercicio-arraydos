
document.write('<p>Estadisticas centro medico ñuñoa</p>');

let radiologia = [
    {hora: '11:00', especialista: 'IGNACIO SCHULZ', paciente: 'FRANCISCA ROJAS', rut: '9878782-1', prevision: 'FONASA'},
    {hora: '11:30', especialista: 'FEDERICO SUBERCASEAUX', paciente: 'PAMELA ESTRADA', rut: '15345241-3', prevision: 'ISAPRE'},
    {hora: '15:00', especialista: 'FERNANDO WURTHZ', paciente: 'ARMANDO LUNA', rut: '16445345-9', prevision: 'ISAPRE'},
    {hora: '15:30', especialista: 'ANA MARIA GODOY', paciente: 'MANUEL GODOY', rut: '17666419-0', prevision: 'FONASA'},
    {hora: '16:00', especialista: 'PATRICIA SUAZO', paciente: 'RAMON ULLOA', rut: '14989389-K', prevision: 'FONASA'},
];

let traumatologia = [
    {hora: '8:00',  especialista: 'MARIA PAZ ALTUZARRA', paciente: 'PAULA SANCHEZ',     rut: '15554774-5', prevision: 'FONASA'},
    {hora: '10:00', especialista: 'RAUL ARAYA',          paciente: 'ANGÉLICA NAVAS',    rut: '15444147-9', prevision: 'ISAPRE'},
    {hora: '10:30', especialista: 'MARIA ARRIAGADA',     paciente: 'ANA KLAPP',         rut: '17879423-9', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'ALEJANDRO BADILLA',   paciente: 'FELIPE MARDONES',   rut: '1547423-6', prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'CECILIA BUDNIK',      paciente: 'DIEGO MARRE',       rut: '16554741-K', prevision: 'FONASA'},
    {hora: '12:00', especialista: 'ARTURO CAVAGNARO',    paciente: 'CECILIA MENDEZ',    rut: '9747535-8', prevision: 'ISAPRE'},
    {hora: '12:30', especialista: 'ANDRES KANACRI',      paciente: 'MARCIAL SUAZO',     rut: '11254785-5', prevision: 'ISAPRE'},
];

let dental = [
    {hora: '8:30',  especialista: 'ANDREA ZUÑIGA',          paciente: 'MARCELA RETAMAL',rut: '11123425-6', prevision: 'ISAPRE'},
    {hora: '11:00', especialista: 'MARIA PIA ZAÑARTU',      paciente: 'ANGEL MUÑOZ',    rut: '9878789-2',  prevision: 'ISAPRE'},
    {hora: '11:30', especialista: 'SCARLETT WITTING',       paciente: 'MARIO KAST',     rut: '7998789-5',  prevision: 'FONASA'},
    {hora: '13:00', especialista: 'FRANCISCO VON TEUBER',   paciente: 'KARIN FERNANDEZ',rut: '18887662-K', prevision: 'FONASA'},
    {hora: '13:30', especialista: 'EDUARDO VIÑUELA',        paciente: 'HUGO SANCHEZ',   rut: '17665461-4', prevision: 'FONASA'},
    {hora: '14:00', especialista: 'RAQUEL VILLASECA',       paciente: 'ANA SEPULVEDA',  rut: '14441281-0', prevision: 'ISAPRE'},
];

// Instrucciones del desafio
// 1. agregar las siguientes horas al arreglo de traumatologia
/*se agrego un method push para empujar el contenido al arreglo y posterior se decidio organizarlo para que haya secuencia en las horas ingresadas con las establecidas*/
traumatologia.push(
    {hora: '09:00', especialista: 'RENÉ POBLETE', paciente: 'ANA GELLONA', rut: '13.123.329-7', prevision: 'ISAPRE'},
    {hora: '09:30', especialista: 'MARÍA SOLAR', paciente: 'RAMIRO ANDRADE', rut: '12.221.451-K', prevision: 'ISAPRE'},
    {hora: '10:00', especialista: 'RAUL LOYOLA', paciente: 'CARMEN ISLA', rut: '10.112.348-3', prevision: 'FONASA'},
    {hora: '10:30', especialista: 'ANTONIO LARENAS', paciente: 'PABLO LOAYZA', rut: '13.453.234-1', prevision: 'ISAPRE'},
    {hora: '12:00', especialista: 'MATIAS AREVENA', paciente: 'SUSANA POBLETE', rut: '14.345.656-6', prevision: 'FONASA'},
);
// ordenarlo por el orden secuencia de la hora de atención
traumatologia.sort(function(a,b){
    if(a.hora > b.hora){
        return 1;
    }
    if(a.hora < b.hora){
        return -1;
    }
    return 0;
});
console.log(traumatologia);

// 2. Eliminar el primer y último elemento del arreglo de Radiología
// quitar el primero de array de radiologia
radiologia.shift();

// quitar el ultimo objeto del array en radiologia
radiologia.pop();
console.log(radiologia);

/*3. Imprimir en la página HTML, mediante document.write y/o la funciones que estime
conveniente, la lista de consultas médicas de Dental. Sin embargo, debe hacerlo separando por
un guión cada dato desplegado y cada fila de información debe estar separada por un párrafo.*/ 

dental.forEach(function(paci){
    let consultaDental= `<p>${paci.hora}-${paci.paciente}-${paci.rut}-${paci.prevision}</p>`;
    document.write(`<p>${consultaDental}</p>`);

});

// let infoPaciente = dental.reduce(function(acumulador,paci){
//     return `${acumulador}${paci.hora}-${paci.paciente}-${paci.rut}-${paci.prevision}</br>`;
// },"");

// document.write(infoPaciente);

/*4. Imprimir un listado total de todos los pacientes que se atendieron en el centro médico. Para ésto,
deberá unir todos los nombres de pacientes e imprimir uno por cada párrafo.
*/


radiologia.forEach(function(pacienteRadio){
    let listadoPacienteRadio= pacienteRadio.paciente;
    document.write(`<p>${listadoPacienteRadio}</p>`);

});

traumatologia.forEach(function (pacienteTrauma) {
    let listadoPacienteTrauma = pacienteTrauma.paciente;
        document.write(`<p>${listadoPacienteTrauma}</p>`);
    });
    
    dental.forEach(function (pacienteDental) {
        let listadoPacienteDental = pacienteDental.paciente;
        document.write(`<p>${listadoPacienteDental}</p>`);
    });


/*5. Modificar mediante funciones las previsiones de Dental: aquellas que indican ser FONASA
cambiarlas por ISAPRE y viceversa. Luego, imprimir este resultado junto con el rut asociado a
dicha consulta, separados por punto y coma */

dental=dental.map(function(previ){
    if(previ.prevision === "FONASA"){
        previ.prevision= (` ISAPRE; ${previ.paciente} `);
    } else if(previ.prevision === "ISAPRE"){
previ.prevision= (` FONASA; ${previ.paciente} `);
    }
    return previ.prevision;
});
document.write(dental);



    // extras que vino añadido en el archivo.


document.write(`<p>Cantidad de atenciones para Radiología: ${radiologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Traumatología: ${traumatologia.length}</p>`);
document.write(`<p>Cantidad de atenciones para Dental: ${dental.length}</p>`);


document.write(`<p>Primera atencion: ${radiologia[0].paciente} - ${radiologia[0].prevision} | Última atención: ${radiologia[radiologia.length -1].paciente} - ${radiologia[radiologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${traumatologia[0].paciente} - ${traumatologia[0].prevision} | Última atención: ${traumatologia[traumatologia.length -1].paciente} - ${traumatologia[traumatologia.length -1].prevision}.</p>`);
document.write(`<p>Primera atencion: ${dental[0].paciente} - ${dental[0].prevision} | Última atención: ${dental[dental.length -1].paciente} - ${dental[dental.length -1].prevision}.</p>`);





    
    
    