const root = ReactDOM.createRoot(document.getElementById('root')); //Root of the html
const header = React.createElement("h1",{}, "Namaste Everyone!!");


const div1=React.createElement("div", {class :"div"}, "Div1");
const div2 = React.createElement("div", {class:'div'}, "Div2");

const conatiner = React.createElement("div", {class:'conatainer'}, [header, div1, div2]); //appending all the elements to one container/div


root.render(conatiner); //appending the container to the global React.