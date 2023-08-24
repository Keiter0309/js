let data = {
    "list": [
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
    },

    {
        ten: "Nick",
        tuoi: 20,
        mssv: 506,
    },

    {
        ten: "Cap",
        tuoi: 21,
        mssv: 507,
    },

    {
        ten: "Buck",
        tuoi: 25,
        mssv: 508,
    },

    {
        ten: "Dick",
        tuoi: 29,
        mssv: 509,
    },

    {
        ten: "Alean",
        tuoi: 28,
        mssv: 510,
    },
    ]
}
document.write(`<table border=1>
    <tr>
        <th>Ten</th>
        <th>Tuoi</th>
        <th>MSSV</th>
    </tr>

    <tr>
        <td>${data.list[0].ten}</td>
        <td>${data.list[0].tuoi}</td>
        <td>${data.list[0].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[1].ten}</td>
        <td>${data.list[1].tuoi}</td>
        <td>${data.list[1].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[2].ten}</td>
        <td>${data.list[2].tuoi}</td>
        <td>${data.list[2].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[3].ten}</td>
        <td>${data.list[3].tuoi}</td>
        <td>${data.list[3].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[4].ten}</td>
        <td>${data.list[4].tuoi}</td>
        <td>${data.list[4].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[5].ten}</td>
        <td>${data.list[5].tuoi}</td>
        <td>${data.list[5].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[6].ten}</td>
        <td>${data.list[6].tuoi}</td>
        <td>${data.list[6].mssv}</td>
   </tr>

    <tr>
        <td>${data.list[7].ten}</td>
        <td>${data.list[7].tuoi}</td>
        <td>${data.list[8].mssv}</td>
    </tr>

    <tr>
        <td>${data.list[9].ten}</td>
        <td>${data.list[9].tuoi}</td>
        <td>${data.list[9].mssv}</td>
    </tr>
</table>`)