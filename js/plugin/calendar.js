document.addEventListener("DOMContentLoaded", function() {
    const calendarEl = document.querySelector(".calendar")
    const calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: "dayGridMonth",
        headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,timeGridWeek,timeGridDay",
        },
        buttonText: {
        today: "Today",
        month: "Month",
        week: "Week",
        day: "Day",
        },
        events: [
        {
            title: "All Day Event",
            start: "2024-05-19",
        },
        {
            title: "Time Event",
            start: "2024-05-20 12:00:00",
        },
        ],
        eventClick: function (info) {
        info.event.remove()
        },
        eventRemove: function (info) {
        console.log("removed", info)
        Swal.fire({
        icon: info.event.allDay ? "success" : "info",
        title: info.event.title,
        text: `Removed: ${info.event.startStr}`,
        confirmButtonText: "OK",
        })
        }
    })
    calendar.render()
    })