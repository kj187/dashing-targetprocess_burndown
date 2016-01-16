
module.exports = {

    eventName: 'targetprocess_burndown',
    cronInterval: '1 * * * * *',

    client: {
        protocol: 'https',
        host: 'www.host.com/',
        pathToBurnDown: 'RestUI/Board.aspx?acid=12345#page=dashboard/12345&appConfig=12345==',
        username:'targetProcessUsername',
        password: 'targetProcessPasswordUnfortunatelyInPlaintext'
    },

    publicLocalImagePath: 'images/burndown/iteration_burndown.png',

    options: {
        quality: 100,
        renderDelay: 7000,
        screenSize: {
            width: 1600,
            height: 768
        },
        phantomPath: '/usr/local/bin/phantomjs',
        captureSelector: '#dashboard-column-0 svg',
        customCSS: '.burnDownReport svg{background:#999!important}.burnDownReport svg text{font-size:14px!important;fill:#000!important}.burnDownReport .xLabel{fill:#000!important}.burnDownReport line.xLine,line.xAxis,line.yAxis,line.yLine{stroke:#B9B9B9!important;stroke-width:1!important}.burnDownReport line.idealLine{stroke:green!important;stroke-width:5px!important;stroke-dasharray:15,5!important}.burnDownReport line.lineChart{stroke:#000!important;stroke-linecap:round!important;stroke-width:6px!important}.burnDownReport circle.lineChartPoint{stroke:#000!important;fill:#000!important;stroke-width:4px!important}'
    }
}