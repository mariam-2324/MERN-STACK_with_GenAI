const myFun = (data) => {
    if (count < 9) {
        if (count % 2 == 0) {
            document.getElementById(data.id).innerHTML="0"

        } else {
            document.getElementById(data.id).innerHTML="X"

        }
    }
    document.getElementById(data.id).innerHTML="X"
}
count++

