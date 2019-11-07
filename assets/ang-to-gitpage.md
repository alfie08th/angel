##How to load your Angular app to GitHub Page
##### Requirements
\* &nbsp; install `npm`<br>
\* &nbsp; install `@angular-cli`

| CAUTION: Make sure your ``git repo`` and ``angular app`` name matches |
| --- |

### Step 1
* In your terminal, create your new Angular App, `ng new <your-app-name>`
* Then run it, `ng s`

### Step 2
Enter ```ng build```<br>
<br>
&nbsp;&nbsp;&nbsp;This will create a folder named ```/dist``` inside your angular app folder, that basically contains ```js``` version of all your code. Remember that angular app is mainly written in ```typescript``` but the browser doesn't understand it, therefore ```/dist``` 
<br>
<br>
&nbsp;&nbsp;&nbsp;However that can still be simplified, enter 
``` console
$ ng build '<your-app-name>' --prod --vendor-chunk=true
```
### Step 3
Now that's done, we want to load the content generated via ```Angular```
(whatever version you're using at the time of reading this guide) to the ``github page.``



In your angular app main folder(`<your-app-name>`)
let's proceed to the git related task,
```console
$ git init
$ git add README.md
$ git remote add origin https://github.com/<your-github-user-name>/<your-repo-name>.git
$ git push -f origin master
```


&nbsp;&nbsp;&nbsp;After which, you have to install ghpages: ``$ sudo npm i -g angular-cli-ghpages`` 
### Step 4
&nbsp;&nbsp;&nbsp;Followed by actually pushing your work to github, under `gh-pages` branch
```
$ ng build --prod --base-href https://github.com/<your-github-user-name>.github.io/<your-repo-name>/
$ ng build --prod --base-href=/<your-app-name>/
$ sudo ngh --dir=dist/<your-app-name>
```

&nbsp;&nbsp;&nbsp; And once it's launched to ``github page``, and you make any changes in your angular app, and want to update it on the ``github page``, repeat `Step 4`

And That's it\!

[![IMAGE ALT TEXT HERE](https://i.giphy.com/media/13CBCnF6TVApkQ/source.gif)](https://www.youtube.com/watch?v=LIYOCaQHUg4)

### And If All Else Fail

In your app folder, in terminal, enter 
```
ng build '<your-app-name>' --prod --vendor-chunk=true
```
This will generate a ``dist`` folder, all you have to do is push all the content within this folder to your repo, under different branch, any branch works, but make sure to adjust your branch accordingly in your setting as well.

