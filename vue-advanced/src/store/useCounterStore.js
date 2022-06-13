//every store name starts with "use+StoreName"

import { defineStore } from "pinia";

//create store
export const useCounterStore = defineStore('counter', {
    //state
    state: () => {
        //return inital state
        return {
            count: 10,
        }
    },
    //actions
    actions: {
        increment() {
            this.count++
        },
        //async increment
        async incrementAsync() {
            let res = new Promise((resolve, reject) => {
                setTimeout(resolve, 1000, this.count)
            })

            this.count = await res + 1
        }
    },
    //getters (computed Properties)
    getters: {
        doubleIt: state => state.count * 2
    }
})