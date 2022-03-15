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
    init: function () { },
    tick: function (time, timeDelta) {
        console.log(time);
    }
});
