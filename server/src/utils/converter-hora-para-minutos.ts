export function convertHoursStringToMinutes(hour: String){
    const [horas, minutos] = hour.split(':').map(Number)
    return ((horas*60) + minutos)
}