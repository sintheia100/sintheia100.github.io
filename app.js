

function cards (title ,replit, github){
    var card = `<div class="assign-card">
    <div style="display: flex; align-items: center;justify-content: center; width: 5rem;">
    <img style="width: 7rem; margin-right: 10px;" src="assets/images/fcc.png" alt="Github Logo">

    </div>
    <span>${title}</span>
    <div class="assign-links">
        
        <a href= ${github} class="github" target="_blank">
            <img style="width: 1rem; margin-right: 10px;" src="assets/images//github.png" alt="Github Logo">
            <span>Github</span>
        </a>
        <a href=${replit} class="replit" target="_blank">
            <div style="width: 1rem; margin-right: 10px;">
                <svg style="fill: #fff;" viewBox="0 0 100 100" class="jsx-4131126525"><path d="M98.849 45.191zM26.042 44.932S12.394 95.218 67.097 95.656c17.163-6.39 29.81-22.054 31.727-40.939.132-1.306.171-2.639.2-3.973.006-.352.053-.693.053-1.046 0-1.521-.093-3.02-.227-4.507-14.452 56.894-78.388 34.61-72.808-.259z" class="jsx-4131126525"></path><path d="M54.326 26.267S3.395 12.044 4.178 67.58a49.217 49.217 0 0011.87 17.742c.218.207.444.403.665.606a49.233 49.233 0 004.654 3.793c.253.18.49.38.744.556a48.884 48.884 0 005.373 3.19c.54.278 1.094.532 1.641.791a48.592 48.592 0 004.907 1.991c.41.14.802.315 1.218.446a48.66 48.66 0 006.108 1.444c.624.11 1.256.201 1.888.288 2.142.31 4.302.478 6.467.503.083 0 .163.013.246.013 1.632 0 3.244-.088 4.833-.244-57.146-13.628-35.425-77.529-.466-72.43z" class="jsx-4131126525"></path><path d="M74.178 52.604s12.05-50.8-42.19-48.532C13.8 11.257.924 28.954.924 49.694c.017 2.233.185 4.463.504 6.673 11.415-57.474 76.448-38.86 72.75-3.763z" class="jsx-4131126525"></path><path d="M48.135 74.465s51.02 6.66 47.827-41.848c-6.944-18.672-24.873-32-45.961-32a49.258 49.258 0 00-8.9.846c56.85 6.979 42.074 73.498 7.034 73.002z" class="jsx-4131126525"></path><path d="M64.163 49.7a13.746 13.746 0 11-27.493-.001 13.746 13.746 0 0127.493 0z" class="jsx-4131126525"></path></svg>
            </div>
            <span>Replit</span>
        </a>
    </div>
</div>`


    var assignments = document.querySelector('.assignments')
    assignments.innerHTML += card
}

const params = [
    {
    title: "Exercise Tracker",
    replit: "https://replit.com/@sintheia100/exercisetracker?v=1",
    github: "https://github.com/sintheia100/exercise_tracker"
    },
    {
        title: "File Metadata Microservice",
        replit: "https://replit.com/@sintheia100/filemetadata?v=1",
        github:  "https://github.com/sintheia100/file_metadata"
    },
    {
        title: "URL Shortner Microservice",
        replit: "https://replit.com/@sintheia100/urlshortner?v=1",
        github:  "https://github.com/sintheia100/url_shortner"
    },
    {
        title: "Request Header Parser",
        replit: "https://replit.com/@sintheia100/requestheaderparser?v=1",
        github:  "https://github.com/sintheia100/request_header_parser"
    },
    {
        title: "Timestamp Microservice",
        replit: "https://replit.com/@sintheia100/timestamp-microservice?v=1",
        github:  "https://github.com/sintheia100/timestamp-microservice"
    },
    {
        title: "Mongoose Practice",
        replit: "https://github.com/sintheia100/sintheia100.github.io/blob/main/mongoose/routes/users.js",
        github:   "https://github.com/sintheia100/sintheia100.github.io/tree/main/mongoose"
    },
    {
        title: "Weather App",
        replit: "https://sintheia100.github.io/weather_app/",
        github:   "https://github.com/sintheia100/weather_app"
    },
]

params.map(assignment => {
    return cards(assignment.title, assignment.replit, assignment.github)
})
