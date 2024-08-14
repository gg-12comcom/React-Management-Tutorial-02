test
1
![image](https://github.com/user-attachments/assets/6f181eef-2f35-4858-b2db-eb7163709c99)




【　Add Customer API Loding View　】


  componentDidMount() {
    this.timer = setInterval(this.progress, 10); 
    // Progress bar アップデート　タイマー

    
    this.callApi() 
    .then(res => this.setState({ customers: res }))
    .catch(err => console.log(err));
    // call apiを削除したら　Progressの　lodingをテスト確認可能。
  }

  componentWillUnmount() {
    clearInterval(this.timer); 
    // コンポーネントがアンマウントしタイマーの処理
  }

  callApi = async () => {
    const response = await fetch('/api/customers');
    const body = await response.json();
    return body;
  }

  progress = () => {
    const { completed } = this.state;
    this.setState({ completed: completed >= 100 ? 0 : completed + 2 });
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
            {this.state.customers ? this.state.customers.map(c => (
            
              <Customer
              
                key={c.id}
                id={c.id}
              
                
                image={c.image}
                name={c.name}
                
                birthday={c.birthday}
                gender={c.gender}
                
                job={c.job}
              />
              
            )) : 
            <TableRow>
            
              <TableCell colSpan="6" align="center">
                <CircularProgress sx={{ margin: 2 }} variant="determinate" value={this.state.completed} />
                {/* {/* variant="indeterminate" を　設定すれば valuと　関係なく　くるくる　回る/} */}
                
              </TableCell>
            </TableRow>}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default App;






![image](https://github.com/user-attachments/assets/1a859bf0-8490-4bda-a611-4db8441551fe)

