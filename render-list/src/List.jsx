
function List(props){

    // const fruits = [{id: 1, name: "apple", calories: 95}, 
    //     {id: 2,name: "orange", calories: 45}, 
    //     {id: 3,name: "banana", calories: 105}, 
    //     {id: 4,name: "coconut",calories: 159}, 
    //     {id: 5,name: "pineapple", calories: 37}]
                 
    //ignore
    // fruits.sort((a, b) => a.name.localeCompare(b.name))   // ALPHABETICAL  
    // fruits.sort((b, a) => a.name.localeCompare(b.name))   // RE-ALPHABETICAL
    // fruits.sort((a, b) => a.calories - b.calories); // numeric
    // fruits.sort((a, b) => b.calories - a.calories); // RE-numeric
    
    // const lowcalFruits = fruits.filter(fruit => fruit.calories  < 100)
    //const highcalFruits = fruits.filter(fruit => fruit.calories  >= 100)
    //ignore

    const category = props.category;
    const itemList = props.items;


const listItems = itemList.map(item => <li key={item.id}>
                                      {item.name}: &nbsp;
                                      <b>{item.calories}</b></li> )

    return(<>
        <h3 className="list-category">{category}</h3>
        <ol className="list-iteams">{listItems}</ol>
        </>
    )
}
List.defaultProps = {
    category: "category",
    items: []
}

export default List