import { Paper, Table, TableHead, TableBody, TableRow, TableCell } from '@mui/material';
import { Component } from 'react';
import './App.css';
import Customer from './components/Customer';

const customers = [
  {
    'id': 1,
    'image': 'https://picsum.photos/id/593/128/128',
    'name': '坪井_はるか',
    'birthday': '990827',
    'gender': '女性',
    'job': '社会人'
  },
  {
    'id': 2,
    'image': 'https://picsum.photos/id/237/128/128',
    'name': 'ロク',
    'birthday': '800512',
    'gender': '男性',
    'job': '警備員'
  },
  {
    'id': 3,
    'image': 'https://picsum.photos/id/669/128/128',
    'name': 'えみ',
    'birthday': '001117',
    'gender': '女性',
    'job': '大学生'
  }
];

class App extends Component {
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
            {customers.map(c => (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;
