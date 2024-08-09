import './App.css';
import Customer from './components/Customer';

const customers =[
  {
  'id': 1,
  'image' :'https://picsum.photos/id/593/128/128',
  'name':'坪井_はるか',
  'birthday': '990827',
  'gender': '女性',
  'job': '社会人'
},
{
  'id': 2,
  'image' :'https://picsum.photos/id/237/128/128',
  'name':'ロク',
  'birthday': '800512',
  'gender': '男性',
  'job': '警備員'
},
{
  'id': 3,
  'image' :'https://picsum.photos/id/669/128/128',
  'name':'えみ',
  'birthday': '001117',
  'gender': '女性',
  'job': '大学生'
}
]

function App() {
  return (
<div>
{
  customers.map(c => {
    return(
      <Customer
      key={c.id} id={c.id} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} job={c.job}
      />

    )
  })
}
</div>

  );
}

export default App;
