function finish() {
    let rad1 = document.getElementsByName('rad1')
    let rad2 = document.getElementsByName('rad2')
    let rad3 = document.getElementsByName('rad3')
    let rad4 = document.getElementsByName('rad4')
    let rad5 = document.getElementsByName('rad5')

    let res = document.getElementById('res')

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
}