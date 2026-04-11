const date1 = new Date(2024, 6, 18, 10, 24);
const date2 = new Date(2024, 6, 18, 10, 24);

const balance = {
    amount: 100.0,
    owner: "Имя_пользователя",
    available: true,
    image: '',
    lastReplenishment: date1.getTime(),
    firstReplenishment: date2.toLocaleString()
}

export default balance;