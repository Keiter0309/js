let sinhvien = {
    ten: "Keith",
    tuoi: 19,
    email: "example@gmail.com",
};

document.write(`<table border="1">
    <tr>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>Email</th>
    </tr>

    <tr>
        <th>${sinhvien.ten}</th>
        <th>${sinhvien.tuoi}</th>
        <th>${sinhvien.email}</th>
    </tr>
</table>`)