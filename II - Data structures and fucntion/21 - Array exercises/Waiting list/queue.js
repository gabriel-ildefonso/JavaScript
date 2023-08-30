let fila = []
let opção = ""

do{
    let pacientes = ""
    for(let i = 0; i < fila.length; i++){
        pacientes += (i+1) + " - " + fila[i] + "\n"
    }

opção = prompt(
    "Pacientes: \n" + pacientes + 
    "\nEscolhan uma ação:\n1. Novo paciente\n2.Consultar paciente\n3. Sair"
)

switch (opção){
    case "1":
        const novoPaciente = prompt("Qual o nome do paciente?")
        fila.push(novoPaciente)
        break
    case "2":
        const pacienteConsultado = fila.shift()
        if(pacienteConsultado){
            alert(pacienteConsultado + " foi removido da fila.")
        }else{
            alert("Não há pacientes na fila")
        }
        break
    case "3":
        alert('Encerrando...')
        break
    default:
        alert("Opção inválida")
}
} while(opção !== "3")
