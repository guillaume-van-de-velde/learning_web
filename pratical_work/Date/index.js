let date = new Date().toISOString().split('T')[0]

start_date.value = date;
start_date.min = start_date.value;

function setMinForEndDay() {
    if (Date.parse(end_date.value) <= Date.parse(start_date.value))
        end_date.value = "";
    let timestampMin = Date.parse(start_date.value);
    timestampMin += (1000 * 60 * 60 * 24);
    let nextDay = new Date(timestampMin).toISOString();
    end_date.min = nextDay.split('T')[0];
}

setMinForEndDay();
start_date.addEventListener("input", setMinForEndDay);

function calculDays() {
    let endTimeStamp = Date.parse(end_date.value);
    let startTimeStamp = Date.parse(start_date.value);
    let milliseconds = endTimeStamp - startTimeStamp;
    let days = milliseconds / (1000 * 60 * 60 * 24);
    total.textContent = nightPrice.textContent * days;
};

end_date.addEventListener("input", calculDays);