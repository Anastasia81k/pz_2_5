function getDate() {
    let days =['неділя', 'понеділок', 'вівторок', 'середа', 'четвер','п’ятниця', 'субота'];
    let months = ['Січень', 'Лютий', 'Березень', 'Квітень', 'Травень', 'Червень', 'Липень', 'Серпень', 'Вересень', 'Жовтень', 'Листопад', 'Грудень' ];

    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let dayOfWeek = days[now.getDay()];
    let day = now.getDay();
    let month = months[now.getDay()]
    let year = now.getFullYear();
    let data = `${hour}:${minutes}:${seconds}, ${dayOfWeek}, ${day} ${month} ${year} року`;
    return data;
}

console.log(getDate());






