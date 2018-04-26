
const app = {
    sendToServer(id){
        let baseURL = 'http://localhost:3000';
        axios.post(`${baseURL}/vote`, {id})
        .then( response => console.log('Successful'));
    },
    
    start(){
        devices = document.querySelectorAll('.poll-device');
        devices.forEach((item, index) => {
            item.addEventListener('click', (e) => {
                this.sendToServer(e.target.id);
            });
        });
    }
};

window.addEventListener('load', () => app.start());

let dataPoints = [
    {label: 'Infinix', y:0},
    {label: 'Nokia', y:0},
    {label: 'Samsung', y:0},
    {label: 'Techno', y:0}
]

const chartContainer = document.querySelector('#vote-chart-container');

if (chartContainer) {
    const chart = new CanvasJS.Chart('vote-chart-container', {
        animationEnabled: true,
        theme: 'theme1',
        title: {
            text: 'Favorite device'
        },
        data: [
            {
                type: 'column',
                dataPoints: dataPoints
            }
        ]
    });
    
    chart.render();
    
    // Pusher
    var pusher = new Pusher('YOUR_API_KEY', {
        cluster: 'CLUSTER',
        encrypted: true
    });
    
    var channel = pusher.subscribe('poll');
    channel.bind('vote', (data) => {
        dataPoints = dataPoints.map(x => {
            if (x.label == data.phone.id) {
                x.y += data.points;
                return x;
            } else {
                return x;
            }
        });
        chart.render()
    });
}