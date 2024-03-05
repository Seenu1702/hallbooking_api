/*
ReactJs:

Project setup:
Windows -> command promp
Linux -> terminal

cmd ->
precheck: check the below three in cmd whether it's installed or not
node -v or node --version
npm -v or npm --version
git -v or git --version

cd desktop -> npm create vite@latest project name (single name without space)
npm create vite@latest portfolio_website  --> React --> Javascript -->

then we have to run the dependencies
cd project folder(cd portfolio_website) -->
code .
then run the below codes in the vs code terminal
npm install 
once we run the code node_modules folder having all the dependencies installed
npm run dev  --> it will the run/start our react application 
it will provide local host url

Why React?
js library created by fb/Meta
for creating the user interface faster
its worked as component based architechture for reusable, managable and scalable application
react has virtual DOM --> only the component which we update will be re-render/refresh instead of
entire page refresh (only the minimal request be sent)  

creating a branch:--->

git status
git init
git add .
git commit -m "initial react app setup"
git branch ---> it'll be in the master branch


now we can create a another branch to track our updates by copying master branch
git checkout -b branch-name
git checkout -b day1


first step: 
code simplification --> 

in main.jsx
update to  --> ReactDOM.createRoot(document.getElementById('root')).render(<App />);
instead of

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
delete the app.css and index.css
<App /> --> root main component

component is nothing but js function it may be anything button/side navbar / image /paragraph/form 
jsx ==> combination of both HTML and javascript

App.jsx -->
delete all the codes

const App = () =>{

    returns a html and can also execute or contain js
    above html

    console.log('hello world')

    return(
        <div>

        </div>
    )

}

export default App;
jsx -> javascript xml

jsx --> the compilation will be taken care of Babel (createElement/ append/ getElementById)

rfce --> react function export component --> to create a default code snippet for that component

functional components: efficient, faster, syntax concise than class components



*/