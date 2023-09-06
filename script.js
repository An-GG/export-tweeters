function main() {
    console.log("Running...");
    let a={}
    function clearAllInterval() {
        const interval_id = window.setInterval(function(){}, Number.MAX_SAFE_INTEGER);

        for (let i = 1; i < interval_id; i++) {
            window.clearInterval(i);
        }
    }
    clearAllInterval()
    function scrape() {
        let selector='section > div > div > div'
        for (let e of document.querySelectorAll(selector)) {
            let links = e.getElementsByTagName('a')
            refs=[]
            for (let l of links) {
                refs.push(l.href)
            }
            let path=(new URL(refs[0])).pathname
            a[path]=[path, e, refs]
           // console.log(a)
            
        }
        return a
    }

    window["keys_len"] = 0
    function checkIfNewList() {
        let res = scrape()
        let keys = Object.keys(res)
        console.log(keys)
        console.log(keys.length)
        if (window["keys_len"] != keys.length) {
            window["keys_len"] = keys.length
            console.log("Total ("+keys.length+") - New List - "+(new Date()))
            console.log(keys)
        }
    }
    setInterval(checkIfNewList, 500);

}

main()
