/**
 * File: Home.jsx
 * Type: Page
 * Author: Jaison Schmidt
 * Description: Main page of website.
 * Data: 17/09/2019
 */

import React from 'react';
import SwapiService from '../../service/SwapiService';

import Header from '../../features/Header/Header';
import PersonList from '../../features/PersonList/PersonList';
import Loading from '../../features/Loading/Loading';

import './Home.scss';

class Home extends React.Component {
  constructor() {
    super();

    // define local state
    this.state = {
      people: {
        count: 0,
        nextPage: 'https://swapi.co/api/people/?page=1',
        results: [],
        isLoadingList: false,
      },
    };

    // bindings
    this.doPagination = this.doPagination.bind(this);

    // local variables
    this.SwapiService = new SwapiService();
  }

  componentDidMount() {
    const {
      people: { nextPage },
    } = this.state;

    // do the first load of people
    this.doPagination(nextPage);
  }

  doPagination(nextPage) {
    const {
      people: { results },
    } = this.state;

    this.setState({ isLoadingList: true });

    this.SwapiService.getPeople(nextPage).then(people => {
      this.setState({
        isLoadingList: false,
        people: {
          count: people.count,
          nextPage: people.next,
          results: [...results, ...people.results],
        },
      });
    });
  }

  render() {
    const { people, isLoadingList } = this.state;

    return people.count === 0 ? (
      <Loading />
    ) : (
      <>
        <Header />
        <PersonList
          people={people}
          doPagination={this.doPagination}
          isLoadingList={isLoadingList}
        />
      </>
    );
  }
}

export default Home;
