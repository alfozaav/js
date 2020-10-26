const somethingWillHappen = () => {
    return new Promise ((resolve, reject) => {
        if (true) {
            resolve('Hey!')
        } else {
            reject('Whoops!') //Mo te da a detalle el error
        }
    })
}

somethingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

    const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
            if (true) {
                setTimeout(()=> {
                    resolve('True')
                }, 2000)
            } else {
                const err = new Error ('Whooop!')//Te da a detalle el error
                reject(err)
            } 
        })
    }

    somethingWillHappen2()
        .then(response => console.log(response))
        .catch(error => console.error(error))

        //Ejecutar promesas encadenadas
        Promise.all([somethingWillHappen(), somethingWillHappen2()])
            .then(response => {
                console.log('Array of results', response)
            })
            .catch(err => {
                console.error(err)
            })