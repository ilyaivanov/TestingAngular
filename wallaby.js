module.exports = function () {
    return {
        files:[
            "app/*.js",
            "!app/*spec.js"
        ],

        tests:[
            "app/*spec.js"
        ]
    }
};