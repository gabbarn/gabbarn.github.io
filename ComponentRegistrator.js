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
AFRAME.registerComponent('disable-gps-afterawhile', {
    schema: { TimeOutTime: { type: 'int', default: 10 } },
    init: function () {
        var date = new Date();
        var targetTime = new Date(date.getTime() + this.data.TimeOutTime * 1000);
        this.el.setAttribute('targetTime', targetTime.getTime());
        console.log(this.el.getAttribute('targetTime'));
    },
    tick: function (time, timeDelta) {
        console.log(this.TimeLeft());
        if (this.TimeLeft() < 0) {
            this.el.removeAttribute('gps-camera');
            this.el.removeAttribute('disable-gps-afterawhile');
        }
    },
    TimeLeft: function () {
        let currentDate = new Date();
        var currentTime = currentDate.getTime();
        let timeRemaining = (parseInt(this.el.getAttribute('targetTime')) - currentDate.getTime()) / 1000;
        let totalTimeRemaining = timeRemaining * 1000;
        return totalTimeRemaining;
    },
});
