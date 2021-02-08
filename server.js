const express = require('express') 
const database = require('./mysqlDatabase')


const app = express();
// app.use(express.json())


// let meals = [
//   {
//     id: 1,
//     content: "Lunch",
//     completed: 2,
//     date: "03/01/2021"
//   },
//   {
//     id: 2,
//     content: "Breakfast",
//     completed: 3,
//     date: "03/01/2021"
//   },
//   {
//     id: 3,
//     content: "Dinner",
//     completed: 4,
//     date: "03/01/2021"
//   }
// ]
  

app.get('/api/meals', (req, res) => {
  database.allMeals((error, meals) => {
    // 2
    if (error) {
      res.send({error})
      return
    }
    // 3
    res.send({meals})
  })
})


app.listen(8080, () => {
  console.log("The server is listening on port 8080")
})


app.post('/api/meals', (req, res) => {
  const meal = req.body
  
  // 1
  database.createMeal(meal, (error, result) => {
    
    // 2
    if (error) {
      res.send({error})
      return
    }

    // 4
    res.send({result})
  })
})



app.delete('/api/meals/:id', (req, res) => {
  const id = req.params.id;

  database.deleteMeal(id, (error, result) => {
    // 2
    if (error) {
      res.send({error})
      return
    }

    //4
    res.send({result})
  })
})

app.use(express.json())
app.patch('/api/meals/:id', (req, res) => {
    const id = req.params.id
    const mealData = req.body

  database.updateMeal(id, mealData, (error, result) => {
    // 2
    if (error) {
      res.send({error})
      return
    }
    //4
    res.send({result})
  })
  })
  