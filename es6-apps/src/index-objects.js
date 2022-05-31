//literal object

let config = {
    name: 'myapp',
    template: `<h1>Hello</h1>`,
    // data: function () {
    //     return {
    //         a: 10
    //     }
    // }
    //es 6 syntax 
    data() {
        return {
            a: 10
        }
    },
    methods: {
        hello() {
            return 'hello'
        }
    }
}
console.log(config.name)
console.log(config.template)
console.log(config.data().a)
console.log(config.methods.hello())
/////////////////////////////////////////////////////////////////////////////////////

function createApp(config) {
    return config
}

const app = createApp({
    name: 'myapp',
    template: `<h1>Hello</h1>`,
    data() {
        return {
            a: 10
        }
    },
    methods: {
        hello() {
            return 'hello'
        }
    }
})

console.log(app)













