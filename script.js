function main() {
    console.log("Running...");

    let b=document.createElement("button")
    b.innerText="COPY LIST"
    document.body.appendChild(b)
    b.setAttribute("style", `position:fixed;
    				top:calc(100% - 300px);
    				left:20%;
    				right:20%;
    				width:60%;
    				height:50px;
    				border-radius: 30px;
    				background: rgb(0,134,198);
    				text-align:center;
    				line-height: 50px;
    				font-family 'My Font';
    				font-size: 21px;
    				color: white;`)
    b.addEventListener("click",()=>{
        let failed=[]
        let passed=[]
        for (let k in window.a) {
            let links = window.a[k][1].getElementsByTagName("a")
            let ts = []
            for (let l of links) { ts.push(l.innerText.trim()) }
            
            if (!ts.includes(k.replace("/", "@"))) {
                console.log(k.replace("/", "@"))
                console.log(ts)
                console.log(ts.includes(k.replace("/", "@")))
                failed.push(k)
            } else {
                passed.push(k)
            }

        }
        alert(failed.length + " usernames did not pass the vibe check: \n\n" + failed.join("\n") + "\n\n" + passed.length + " usernames seem valid and will be copied")
        navigator.clipboard.writeText(passed.join("\n")) })

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
            try {
                let links = e.getElementsByTagName('a')
                refs=[]
                for (let l of links) {
                    refs.push(l.href)
                }
                let path=(new URL(refs[0])).pathname
                a[path]=[path, e, refs]
            } catch(e) {}
            
        }
        return a
    }

    window["keys_len"] = 0
    function checkIfNewList() {
        let res = scrape()
	window["a"]=res
        let keys = Object.keys(res)
        if (window["keys_len"] != keys.length) {
            window["keys_len"] = keys.length
	    let s = keys.join("\n")
            console.log("Total ("+keys.length+") - New List - "+(new Date())+"\n\n"+s)
            console.log(keys)
	    document.title=Object.keys(window.a).length 
	    b.innerText="COPY LIST ("+keys.length+")"
        }
    }
    setInterval(checkIfNewList, 100);

}
console.clear()
main()
