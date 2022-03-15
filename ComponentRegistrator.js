"use strict";
AFRAME.registerComponent('look-at', {
    schema: { type: 'selector' },
    init: function () { },
    tick: function () {
        this.el.object3D.lookAt(this.data.object3D.position);
    }
});
AFRAME.registerComponent('direct-towards-latlng', {
    schema: {
        type: 'selector'
    },
    init: function () { },
    tick: function () {
        let direction = this.data.object3D.position.sub(this.el.object3D.position);
    }
});
AFRAME.registerComponent('disable-GPS-afterawhile', {
    schema: { TimeOutTime: { type: 'int', default: 10 } },
    init: function () {
        console.log("Inits");
        var date = new Date();
        var targetTime = new Date(date.getTime() + this.data.TimeOutTime * 1000);
        var totalTimeRemaining;
        console.log(this.el.getAttribute('date'));
    },
    tick: function (time, timeDelta) {
    },
    TimeLeft: function () {
        let currentDate = new Date();
        var currentTime = currentDate.getTime();
        //let timeRemaining = parseInt(targetTime.getTime());
        //this.totalTimeRemaining = timeRemaining * 1000;
    },
});
