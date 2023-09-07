# export-tweeters

## Install

1. copy the contents of bookmark_link.txt:
```
javascript:(function()%7B(function()%7Bfunction%20main()%20%7B%0A%20%20%20%20console.log(%22Running...%22)%3B%0A%0A%20%20%20%20let%20b%3Ddocument.createElement(%22button%22)%0A%20%20%20%20b.innerText%3D%22COPY%20LIST%22%0A%20%20%20%20document.body.appendChild(b)%0A%20%20%20%20b.setAttribute(%22style%22%2C%20%60position%3Afixed%3B%0A%20%20%20%20%09%09%09%09top%3Acalc(100%25%20-%20300px)%3B%0A%20%20%20%20%09%09%09%09left%3A20%25%3B%0A%20%20%20%20%09%09%09%09right%3A20%25%3B%0A%20%20%20%20%09%09%09%09width%3A60%25%3B%0A%20%20%20%20%09%09%09%09height%3A50px%3B%0A%20%20%20%20%09%09%09%09border-radius%3A%2030px%3B%0A%20%20%20%20%09%09%09%09background%3A%20rgb(0%2C134%2C198)%3B%0A%20%20%20%20%09%09%09%09text-align%3Acenter%3B%0A%20%20%20%20%09%09%09%09line-height%3A%2050px%3B%0A%20%20%20%20%09%09%09%09font-family%20'My%20Font'%3B%0A%20%20%20%20%09%09%09%09font-size%3A%2021px%3B%0A%20%20%20%20%09%09%09%09color%3A%20white%3B%60)%0A%20%20%20%20b.addEventListener(%22click%22%2C()%3D%3E%7B%0A%20%20%20%20%20%20%20%20let%20failed%3D%5B%5D%0A%20%20%20%20%20%20%20%20let%20passed%3D%5B%5D%0A%20%20%20%20%20%20%20%20for%20(let%20k%20in%20window.a)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20links%20%3D%20window.a%5Bk%5D%5B1%5D.getElementsByTagName(%22a%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20let%20ts%20%3D%20%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20l%20of%20links)%20%7B%20ts.push(l.innerText.trim())%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%20%20%20%20if%20(!ts.includes(k.replace(%22%2F%22%2C%20%22%40%22)))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(k.replace(%22%2F%22%2C%20%22%40%22))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(ts)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(ts.includes(k.replace(%22%2F%22%2C%20%22%40%22)))%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20failed.push(k)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20else%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20passed.push(k)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20navigator.clipboard.writeText(passed.join(%22%5Cn%22)).then(()%3D%3E%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20alert(failed.length%20%2B%20%22%20usernames%20did%20not%20pass%20the%20vibe%20check%3A%20%5Cn%5Cn%22%20%2B%20failed.join(%22%5Cn%22)%20%2B%20%22%5Cn%5Cn%22%20%2B%20passed.length%20%2B%20%22%20usernames%20seem%20valid%20and%20were%20be%20copied%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D)%0A%20%20%20%20%20%20%20%20%7D)%0A%0A%20%20%20%20let%20a%3D%7B%7D%0A%20%20%20%20function%20clearAllInterval()%20%7B%0A%20%20%20%20%20%20%20%20const%20interval_id%20%3D%20window.setInterval(function()%7B%7D%2C%20Number.MAX_SAFE_INTEGER)%3B%0A%0A%20%20%20%20%20%20%20%20for%20(let%20i%20%3D%201%3B%20i%20%3C%20interval_id%3B%20i%2B%2B)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20window.clearInterval(i)%3B%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20clearAllInterval()%0A%20%20%20%20function%20scrape()%20%7B%0A%20%20%20%20%20%20%20%20let%20selector%3D'section%20%3E%20div%20%3E%20div%20%3E%20div'%0A%20%20%20%20%20%20%20%20for%20(let%20e%20of%20document.querySelectorAll(selector))%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20try%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20links%20%3D%20e.getElementsByTagName('a')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20refs%3D%5B%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20for%20(let%20l%20of%20links)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20refs.push(l.href)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20let%20path%3D(new%20URL(refs%5B0%5D)).pathname%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20a%5Bpath%5D%3D%5Bpath%2C%20e%2C%20refs%5D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%20catch(e)%20%7B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20return%20a%0A%20%20%20%20%7D%0A%0A%20%20%20%20window%5B%22keys_len%22%5D%20%3D%200%0A%20%20%20%20function%20checkIfNewList()%20%7B%0A%20%20%20%20%20%20%20%20let%20res%20%3D%20scrape()%0A%09window%5B%22a%22%5D%3Dres%0A%20%20%20%20%20%20%20%20let%20keys%20%3D%20Object.keys(res)%0A%20%20%20%20%20%20%20%20if%20(window%5B%22keys_len%22%5D%20!%3D%20keys.length)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20window%5B%22keys_len%22%5D%20%3D%20keys.length%0A%09%20%20%20%20let%20s%20%3D%20keys.join(%22%5Cn%22)%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(%22Total%20(%22%2Bkeys.length%2B%22)%20-%20New%20List%20-%20%22%2B(new%20Date())%2B%22%5Cn%5Cn%22%2Bs)%0A%20%20%20%20%20%20%20%20%20%20%20%20console.log(keys)%0A%09%20%20%20%20document.title%3DObject.keys(window.a).length%20%0A%09%20%20%20%20b.innerText%3D%22COPY%20LIST%20(%22%2Bkeys.length%2B%22)%22%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%20%20%20%20setInterval(checkIfNewList%2C%20100)%3B%0A%0A%7D%0Aconsole.clear()%0Amain()%0A%7D)()%3B%7D)()%3B
```

2. create a new bookmark (aka add a website to your favorites) in Google Chrome/Safari called 'export-tweeters'
3. paste the copied text into the URL field

## Use

- Go to a user's following/follower list on twitter and then click the bookmark
- Scroll through the entire list, the script will collect all the usernames it sees
- hit the blue copy button once you've got the entire list


> twitter is cringe so you might have trouble with the follower/following page not showing the full list
> - nothing we can do about this at the moment. seems like elon decided on 50 as the current rate limit after consulting his magic 8 ball


## *Demo*



https://github.com/An-GG/export-tweeters/assets/20458990/0275cfa2-40ea-4c03-993d-98df501c469e




https://github.com/An-GG/export-tweeters/assets/20458990/29289346-af79-485c-8ea6-1cccbbf2cc7e

> - also all the potential matches are tested against a robust vibe check to ensure they're actually a valid username, **so sometimes you'll need the counter to actually be 1 or 2 greater than the # of followers/following** if you want to make sure you got everything
<image src="vibecheck.png"/>


## Modifying and Testing `./script.js`

 `./run.sh` is my run command for mac. <br>
just run this after making changes to script.js<br>

then edit the bookmark in your browser and paste the new link. 

```
an@ans-MacBook-Air export-tweeters % ./run.sh
Link text saved to bookmark_link.txt & copied to clipboard.
Ready to paste.
```

