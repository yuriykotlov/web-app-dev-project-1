function book(button){
    console.log(button.id);

    var date = document.getElementById("input-date").value;
    var time = document.getElementById("input-time").value;

    // dont let the person book if there is no date or time
    if(date === ""){
        alert("Your date inputted is incomplete!")
        return
    } else if(time === ""){
        alert("Your time inputted is incomplete!")
        return
    }

    console.log(date, "|", time)

    // book with date and time provided
    if(button.id == "book"){
        finishBooking(date, time)
    }
}

function finishBooking(date, time){
    const thanks = window.open('/thanks');
    thanks.addEventListener("DOMContentLoaded", () => {
        thanks.document.getElementById("date").innerHTML = date
        thanks.document.getElementById("time").innerHTML = time
    })
}