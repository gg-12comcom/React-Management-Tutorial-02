import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';


class App extends Component {

  state = {
    customers: ""
  }

  componentDidMount(){
    this.callApi()
    .then(res => this.setState({customers: res}))
    .catch(err => console.log(err));
  }

  callApi = async () => {
    const reponse = await fetch('/api/customers');
    const body = await reponse.json();
    return body;
  }


  render() {
    return (
      <Paper sx={{ width: '100%', marginTop: 3, overflowX: "auto" }}>
        <Table sx={{ minWidth: 1080 }}>
          <TableHead>
            <TableRow>
              <TableCell>番号</TableCell>
              <TableCell>写真</TableCell>
              <TableCell>名前</TableCell>
              <TableCell>生年月日</TableCell>
              <TableCell>性別</TableCell>
              <TableCell>職業</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {this.state.customers ? this.state.customers.map(c => {
              return ( <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />);
  }) : ""}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
