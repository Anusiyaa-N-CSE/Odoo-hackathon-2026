/* ===== Dashboard JS ===== */


document.addEventListener("DOMContentLoaded", function () {


    // Check dashboard page

    const dashboardPage = document.querySelector(".dashboard-container");


    if (dashboardPage) {


        console.log("TransitOps Dashboard Loaded");


        /*
            Sample dashboard data.
            Later this data will come from Odoo Controller/API.
        */

        const totalVehicles = document.getElementById("totalVehicles");
        const activeTrips = document.getElementById("activeTrips");
        const totalDrivers = document.getElementById("totalDrivers");


        if (totalVehicles) {
            totalVehicles.innerHTML = "25";
        }


        if (activeTrips) {
            activeTrips.innerHTML = "12";
        }


        if (totalDrivers) {
            totalDrivers.innerHTML = "18";
        }


    }


});



/*
    Dashboard refresh function
*/

function refreshDashboard() {

    console.log("Dashboard refreshed");


    /*
        Future:
        Fetch data from Odoo controller

        fetch('/dashboard/data')
        .then(response => response.json())
        .then(data => {
            update dashboard
        });

    */

}