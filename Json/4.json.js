let list = [
    {
        ten: "Keith",
        tuoi: 19,
        mssv: 500
    },

    {
        ten: "John",
        tuoi: 19,
        mssv: 501,
    },

    {
        ten: "Nina",
        tuoi: 19,
        mssv: 502,
    },

    {
        ten: "Robert",
        tuoi: 19,
        mssv: 503,
    },

    {
        ten: "Lisa",
        tuoi: 19,
        mssv: 504,
    },

    {
        ten: "Johan",
        tuoi: 19,
        mssv: 505,
    }
]

const array = [list];

document.write(`<table border=1>
    <tr>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>MSSV</th>
    </tr>

    <tr>
        <td>${list[0].ten}</td>
        <td>${list[0].tuoi}</td>
        <td>${list[0].mssv}</td>
    </tr>

    <tr>
        <td>${list[1].ten}</td>
        <td>${list[1].tuoi}</td>
        <td>${list[1].mssv}</td>
    </tr>

    <tr>
        <td>${list[2].ten}</td>
        <td>${list[2].tuoi}</td>
        <td>${list[2].mssv}</td>
    </tr>

    <tr>
        <td>${list[3].ten}</td>
        <td>${list[3].tuoi}</td>
        <td>${list[3].mssv}</td>
    </tr>

    <tr>
        <td>${list[4].ten}</td>
        <td>${list[4].tuoi}</td>
        <td>${list[4].mssv}</td>
    </tr>
</table>`)