import React, { Component } from "react";

import "./app.css";

import Header from "../Header";
import Content from "../Content";
import SearchPerson from "../SearchPerson";

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userName: "Saqhan",
      darkTheme: false,
      term: '',  
      people: [
        {
          id: 1,
          name: "дональд трамп",
          avatar: "trump.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "trump1@mail.ru",
          deleted: false
        },
        {
          id: 2,
          name: "макка межиева",
          avatar: "makka.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "makka@mail.ru",
          deleted: false
        },
        {
          id: 3,
          name: "путин",
          avatar: "putin.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "putin@mail.ru",
          deleted: false
        },
        {
          id: 4,
          name: "халк",
          avatar: "halk.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "halk@mail.ru",
          deleted: false
        },
        {
          id: 5,
          name: "майк вазовски",
          avatar: "adam.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "mike@mail.ru",
          deleted: false
        },
        {
          id: 6,
          name: "билл гейтс",
          avatar: "bill.jpg",
          number: "+ 7 (965) 954 00 34",
          email: "bill@mail.ru",
          deleted: false
        }
      ],
    };
    this.deletePeople = this.deletePeople.bind(this);
    this.editName = this.editName.bind(this);
    this.editNumber = this.editNumber.bind(this);
    this.editEmail = this.editEmail.bind(this);
    this.onUpdateSearch = this.onUpdateSearch.bind(this);
    
  }
  
  editName(idPerson, valueName) {
    this.setState({
      people: this.state.people.map(el => {
        if(el.id === idPerson) {
          return {...el, name: valueName}
        }
        return el;
      })
    });
  };
  
  editNumber(idPerson, valueNumber) {
    this.setState({
      people: this.state.people.map(el => {
        if(el.id === idPerson) {
          return {...el, number: valueNumber}
        }
        return el;
      })
    });
  };
  editEmail(idPerson, valueEmail) {
    this.setState({
      people: this.state.people.map(el => {
        if(el.id === idPerson) {
          return {...el, email: valueEmail}
        }
        return el;
      })
    });
  };
  

  switchStyle = () => {
    this.setState(({darkTheme}) => ({
      darkTheme: !darkTheme
    })) 
  }

  deletePeople(id) {
    this.setState(({people}) => {
      const index = people.findIndex(elem => elem.id === id);

      const newArr = [...people.slice(0, index), ...people.slice(index + 1)];

      return {
        people: newArr
      }

    });
  };

  searchPerson(items, term) {
    if(term.length === 0) {
      return items
    }

    return items.filter( (item) => {
      return item.name.indexOf(term) > -1
    });
    
  }

  onUpdateSearch(term) {
    this.setState({term})
  }

  render() {  

    const {people, darkTheme, term} = this.state;

    const visiblePerson = this.searchPerson(people, term);
    
    const switchStyleCss = document.body;
    switchStyleCss.className = darkTheme ? "darkTheme" : "light";

      return (
        <div className="chat-app">
          <Header  
            switchStyle={this.switchStyle} 
            darkTheme={this.state.darkTheme} 
            userName={this.state.userName} 
            />
          <SearchPerson onUpdateSearch={this.onUpdateSearch} />
          <Content  
            people={visiblePerson} 
            deletePeople={this.deletePeople}
            editName={this.editName}  
            editNumber={this.editNumber} 
            editEmail={this.editEmail}
            
          />
        </div>
    )}
};
