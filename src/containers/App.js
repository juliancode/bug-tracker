import React from 'react';
import { List, BugTrackerForm } from '../components';
import ajax from 'superagent';
import styled from 'styled-components';
import './App.css';

const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 65% 35%;
    background: #f0f3f8;
`

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bugs: [],
            form: {
                url: '',
                description: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.workingOnBug = this.workingOnBug.bind(this);
        this.completeBug = this.completeBug.bind(this);
        this.deleteBug = this.deleteBug.bind(this);
        this.filterBugs = this.filterBugs.bind(this);
    }

    componentWillMount() {
        ajax.get('http://localhost:3001/bugs')
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert('Error getting bugs', res);
                } else {
                    this.setState({ bugs: res.body.reverse() });
                }
            });
    }

    handleChange(event) {
        // form input change 'controlled component'
        this.setState({
            form: {
                ...this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit(event) {
        // post the form information to the bugs api
        ajax.post('http://localhost:3001/bugs')
            .set('Content-Type', 'application/json')
            .send({
                url: this.state.form.url,
                description: this.state.form.description,
                status: 0
            })
            .end((err, res) => {
                if (err || !res.ok) {
                    alert(`Error: ${err}`);
                } else {
                    this.setState(prevState => {
                        prevState.bugs = [res.body, ...prevState.bugs];
                        return prevState;
                    });
                }
            });
        event.preventDefault();
    }

    filterBugs(filter) {
        this.setState(prevState => {
            prevState.bugs.filter(bug => {
                return bug.status === filter;
            });
        });
    }

    workingOnBug(index, bugId) {
        ajax.put(`http://localhost:3001/bugs/${bugId}`)
            .set('Content-Type', 'application/json')
            .send({ status: 1 })
            .end((err, res) => {
                if (err || !res.ok) {
                    alert(`Error: ${err}`);
                } else {
                    this.setState(prevState => {
                        prevState.bugs[index].status = 1;
                        return prevState;
                    });
                }
            });
    }

    completeBug(index, bugId) {
        ajax.put(`http://localhost:3001/bugs/${bugId}`)
            .set('Content-Type', 'application/json')
            .send({ status: 2 })
            .end((err, res) => {
                if (err || !res.ok) {
                    alert(`Error: ${err}`);
                } else {
                    this.setState(prevState => {
                        prevState.bugs[index].status = 2;
                        return prevState;
                    });
                }
            });
    }

    deleteBug(index, bugId) {
        ajax.delete(`http://localhost:3001/bugs/${bugId}`)
            .set('Content-Type', 'application/json')
            .end((err, res) => {
                if (err || !res.ok) {
                    alert(`Error: ${err}`);
                } else {
                    this.setState(prevState => {
                        return {
                            bugs: [...prevState.bugs.slice(0, index), ...prevState.bugs.slice(index + 1)]
                        }
                    });
                }
            });
    }

    render() {
        const { bugs, form } = this.state;
        return (
            <AppContainer>
                <List bugs={bugs} completeBug={this.completeBug} workingOnBug={this.workingOnBug} deleteBug={this.deleteBug} />
                <BugTrackerForm url={form.url} description={form.description} changeEvent={this.handleChange} submitEvent={this.handleSubmit} />
            </AppContainer>
        );
    }
}

export default App;
