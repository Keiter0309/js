document.addEventListener("DOMContentLoaded", ()=>{
    const form = document.getElementById("signupForm");
    form.addEventListener("submit", (event)=>{
        event.preventDefault();
        validateForm();
    })
});

const showError = (inputId, errorMessage) => {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + "Error");

    errorElement.textContent = errorMessage;
    inputElement.classList.add("is-invalid");
}

const clearError = (inputId) => {
    const inputElement = document.getElementById(inputId);
    const errorElement = document.getElementById(inputId + "Error");

    errorElement.textContent = "";
    inputElement.classList.remove("is-invalid");
}

const validateForm = () => {
    const fieldsToValidate = [
        {id: "firstname", pattern:/^[A-Za-z]/, message: "Please enter your first name"},
        {id: "lastname", pattern:/^[A-Za-z]/, message: "Please enter your last name"},
        {id: "day", message: "Please enter your birthday"},
        {id: "month", message: "Please enter your birthday"},
        {id: "year", message: "Please enter your birthday"},
        {id: "male", message: "Please enter your gender"},
        {id: "female", message: ""},
        {id: "phonenumber", pattern: /^\d{10,11}$/, message: "Please enter your phone number"},
        {id: "reading", message: "Please select at leaste one hobby"},
        {id: "listen", message: ""},
        {id: "football", message: ""},
        {id: "sewing", message: ""},
        {id: "movie", message: ""},
        {id: "hobbiesOther", message: ""},
    ];

    let isValid = true;
    fieldsToValidate.forEach((field => {
        const inputElements = document.getElementById(field.id);
        if(field.pattern) {
            if(!field.pattern.test(inputElements.value.trim())) {
                isValid = false;
                showError(field.id, field.message);
            }else {
                clearError(field.id);
            }
        }else if(inputElements.type === "radio" || inputElements.type === "checkbox") {
            if(!document.querySelector(`input[name=${inputElements.name}]:checked`)) {
                isValid = false;
                showError(field.id, field.message);
            }else {
                clearError(field.id);
            }
        }else {
            if(inputElements.value.trim() === "") {
                isValid = false;
                showError(field.id, field.message);
            }else {
                clearError(field.id);
            }
        }
    }));

    document.getElementById("submitBtn").addEventListener("click", function (event) {
        if(isValid) {
            alert("Successful");
            document.getElementById("signupForm").reset();
            window.location.reload();
        }
    })

    const arr_hobby = document.querySelectorAll(`input[name="hobbies"]:checked`);
    if(arr_hobby.length === 0) {
        isValid = false;
    }else {
        clearError("hobbies");
    }

    const check = () => {
        const other = document.getElementById("hobbiesOther").checked;
        if(other) {
            document.getElementById("other").style.display = "block";
        }else {
            document.getElementById("other").style.display = "none";
        }
    }

    const inputElements = document.querySelectorAll(`input[name="hobbies"]`);
        inputElements.forEach(inputElement=>{
            inputElement.addEventListener("click", ()=>{
                check();
            })
        })
    
    const dayInput = document.getElementById("day");
    const monthInput = document.getElementById("month");
    const yearInput = document.getElementById("year");
    const dayError = document.getElementById("dayError");
    const monthError = document.getElementById("monthError");
    const yearError = document.getElementById("yearError");
    if (!dayInput.value || !monthInput.value || !yearInput.value) {
        isValid = false;
    } else {
        const day = parseInt(dayInput.value, 10);
        const month = parseInt(monthInput.value, 10);
        const year = parseInt(yearInput.value, 10);

        if (isNaN(day) || isNaN(month) || isNaN(year)) {
            isValid = false;
        } else if (month < 1 || month > 12) {
            isValid = false;
            monthError.textContent = "Month must be between 1 and 12";
            monthInput.classList.add("is-invalid");
        } else if (day < 1 || day > 31) {
            isValid = false;
            dayError.textContent = "Day must be between 1 and 31";
            dayInput.classList.add("is-invalid");
        } else if (month === 2 && day > 28) {
            isValid = false;
            monthError.textContent = "February can have a maximum of 28 days";
            monthInput.classList.add("is-invalid");
        } else {
            clearError("day");
            clearError("month")
            clearError("year")
        }

        if (year < 1950 || year > 2023) {
            isValid = false;
            yearError.textContent = "Year must be between 1950 and 2023";
            yearInput.classList.add("is-invalid");
        }
    }
}