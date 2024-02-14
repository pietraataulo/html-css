function finish() {
    let rad1 = document.getElementsByName('rad1')
    let rad2 = document.getElementsByName('rad2')
    let rad3 = document.getElementsByName('rad3')
    let rad4 = document.getElementsByName('rad4')
    let rad5 = document.getElementsByName('rad5')

    let res = document.getElementById('res')
    let res2 = document.getElementById('res2')

    let count = 0
    
    if (rad1[1].checked) {
        count++
    }
    if (rad2[0].checked) {
        count++
    }
    if (rad3[2].checked) {
        count++
    }
    if (rad4[1].checked) {
        count++
    }
    if (rad5[2].checked) {
        count++
    }
    
    res.innerHTML = `<p>You scored <strong>${count}</strong>/5! </p>`

    if (count == 0) {
        res2.innerHTML = `<p>GRRRRRRRRRR you not a lob >:(</p>`
    } 
    if (count == 1) {
        res2.innerHTML = `You should know MUCH more.`
    } 
    if (count == 2) {
        res2.innerHTML = `Are you really a Lobster?`
    }
    if (count == 3) {
        res2.innerHTML = `Not bad.`
    }
    if (count == 4) {
        res2.innerHTML = `You REALLY know about Lobs :D`
    }
    if (count == 5) {
        res2.innerHTML = `YOU THE MADDEST LOB!!!!`
    }
}